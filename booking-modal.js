(function() {
    // Prevent double initialization
    if (window.bookingModalInitialized) return;
    window.bookingModalInitialized = true;

    console.log("Cliniko Booking: Initializing bulletproof version...");

    // Create Modal HTML with high z-index and explicit visibility
    const modalHtml = `
    <div id="cliniko-booking-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; z-index:2147483647; align-items:center; justify-content:center; padding:10px; box-sizing:border-box;">
        <div id="cliniko-modal-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px); cursor:pointer;"></div>
        <div id="cliniko-modal-container" style="position:relative; width:100%; max-width:1000px; height:90%; max-height:900px; background:white; border-radius:15px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 0 50px rgba(0,0,0,0.5); transform:scale(0.9); opacity:0; transition:all 0.3s ease;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:15px; border-bottom:1px solid #eee; background:#f9f9f9;">
                <h3 style="margin:0; font-family:sans-serif; font-size:18px; color:#333; display:flex; align-items:center; gap:8px;">
                    <span style="color:#ff6b35;">●</span> Book Your Appointment
                </h3>
                <button id="close-cliniko-modal" style="background:#eee; border:none; cursor:pointer; width:36px; height:36px; border-radius:50%; font-size:20px; color:#666; display:flex; align-items:center; justify-content:center; padding:0;">×</button>
            </div>
            <div id="cliniko-iframe-wrapper" style="flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; background:#fff; position:relative;">
                <div id="cliniko-loader" style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:white; z-index:1;">
                    <div style="width:40px; height:40px; border:4px solid #f3f3f3; border-top:4px solid #ff6b35; border-radius:50%; animation:cliniko-spin 1s linear infinite;"></div>
                </div>
                <iframe id='cliniko-iframe' src='about:blank' frameborder='0' scrolling='auto' width='100%' height='100%' style='width:100%; height:100%; border:none; display:block;'></iframe>
            </div>
        </div>
    </div>
    <style>
        #cliniko-booking-modal.active { display: flex !important; }
        #cliniko-booking-modal.active #cliniko-modal-container { transform: scale(1); opacity: 1; }
        body.modal-open { overflow: hidden !important; position: fixed !important; width: 100% !important; height: 100% !important; }
        @keyframes cliniko-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('cliniko-booking-modal');
    const container = document.getElementById('cliniko-modal-container');
    const overlay = document.getElementById('cliniko-modal-overlay');
    const closeBtn = document.getElementById('close-cliniko-modal');
    const iframe = document.getElementById('cliniko-iframe');
    const loader = document.getElementById('cliniko-loader');

    const CLINIKO_URL = 'https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true';

    function openModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        console.log("Cliniko: Opening Modal");
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Load iframe if not loaded
        if (iframe.src === 'about:blank' || !iframe.src) {
            iframe.src = CLINIKO_URL;
            iframe.onload = function() {
                loader.style.display = 'none';
            };
        } else {
            loader.style.display = 'none';
        }
    }

    function closeModal() {
        console.log("Cliniko: Closing Modal");
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Event Listeners
    closeBtn.onclick = closeModal;
    overlay.onclick = closeModal;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Cliniko Resize Support
    window.addEventListener('message', function(e) {
        if (typeof e.data !== 'string') return;
        if (e.data.search('cliniko-bookings-resize') > -1) {
            const height = Number(e.data.split(':')[1]);
            if (height > 0) {
                // We don't force height on the modal iframe as it's in a flex container
                // but we could adjust the container if needed.
            }
        }
    });

    // Function to scan and attach to anything that looks like a booking button
    function scanAndAttach() {
        const links = document.getElementsByTagName('a');
        const buttons = document.getElementsByTagName('button');
        const all = [...links, ...buttons];

        for (let i = 0; i < all.length; i++) {
            const el = all[i];
            if (el.getAttribute('data-cliniko-ready')) continue;

            const text = (el.innerText || el.textContent || "").toLowerCase();
            const href = (el.getAttribute('href') || "").toLowerCase();
            const cls = (el.className || "").toLowerCase();

            if (text.includes('book') || href.includes('contact') || cls.includes('btn-premium')) {
                // High priority click listener
                el.addEventListener('click', openModal, true);
                el.setAttribute('data-cliniko-ready', 'true');
                el.style.cursor = 'pointer';
                
                // If it's a link to contact, we don't want it navigating away
                if (href.includes('contact')) {
                    // We keep the href for SEO but our listener stops it
                }
            }
        }
    }

    // Run scan multiple times to catch dynamic content
    scanAndAttach();
    setInterval(scanAndAttach, 1000);

    // Expose globally
    window.showBooking = openModal;
    
    console.log("Cliniko: Ready.");
})();
