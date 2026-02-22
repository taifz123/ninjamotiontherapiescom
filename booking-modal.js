(function() {
    // Prevent double initialization
    if (window.bookingModalInitialized) return;
    window.bookingModalInitialized = true;

    console.log("Cliniko Booking: Initializing version 5.0...");

    // 1. Safety fix for page visibility (fade-in-on-scroll issues)
    const styleFix = document.createElement('style');
    styleFix.innerHTML = `
        .fade-in-on-scroll { opacity: 1 !important; transform: none !important; transition: none !important; }
        #cliniko-booking-modal.active { display: flex !important; }
        #cliniko-booking-modal.active #cliniko-modal-container { transform: scale(1) !important; opacity: 1 !important; }
        body.modal-open { overflow: hidden !important; position: fixed !important; width: 100% !important; height: 100% !important; }
        @keyframes cliniko-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(styleFix);

    // 2. Create Modal HTML
    const modalHtml = `
    <div id="cliniko-booking-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; z-index:2147483647; align-items:center; justify-content:center; padding:10px; box-sizing:border-box;">
        <div id="cliniko-modal-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px); cursor:pointer;"></div>
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
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('cliniko-booking-modal');
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
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    closeBtn.onclick = closeModal;
    overlay.onclick = closeModal;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // 3. Robust button detection with header exclusion
    function scanAndAttach() {
        const allElements = document.querySelectorAll('a, button, [role="button"]');

        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            if (el.getAttribute('data-cliniko-ready')) continue;

            // EXCLUDE TOP-RIGHT NAVIGATION BUTTON
            // Typically inside a <nav> or has specific header classes
            if (el.closest('nav') || el.closest('header') || el.id === 'navbar' || el.id === 'nav-container') {
                // If it's the "Book Now" in the header, we skip the modal and ensure it points to contact
                const text = (el.innerText || el.textContent || "").toLowerCase();
                if (text.includes('book')) {
                    el.href = "/contact";
                    el.setAttribute('data-cliniko-ready', 'skipped-header');
                    continue;
                }
            }

            const text = (el.innerText || el.textContent || "").toLowerCase();
            const href = (el.getAttribute('href') || "").toLowerCase();
            const id = (el.id || "").toLowerCase();
            const cls = (el.className || "").toLowerCase();

            // Broad matching for anything booking-related
            if (
                text.includes('book') || 
                text.includes('appointment') || 
                text.includes('schedule') ||
                href.includes('acuity') || 
                href.includes('cliniko') ||
                cls.includes('btn-premium') ||
                id.includes('book')
            ) {
                el.addEventListener('click', openModal, true);
                el.onclick = openModal; 
                el.setAttribute('data-cliniko-ready', 'true');
                el.style.cursor = 'pointer';
            }
        }
    }

    // Initial scan and frequent re-scans
    scanAndAttach();
    setInterval(scanAndAttach, 500);

    // 4. Force visibility for Services and Conditions pages
    function forceVisibility() {
        document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
            el.classList.add('visible');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
    forceVisibility();
    setTimeout(forceVisibility, 1000);

    window.showBooking = openModal;
    console.log("Cliniko: Ready with header exclusion and visibility fixes.");
})();
