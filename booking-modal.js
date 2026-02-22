(function() {
    // Prevent double initialization
    if (window.bookingModalInitialized) return;
    window.bookingModalInitialized = true;

    console.log("Cliniko Booking Modal: Initializing...");

    // Create Modal HTML with maximum possible Z-index and clear visibility
    const modalHtml = `
    <div id="cliniko-booking-modal" style="display:none; position:fixed; inset:0; z-index:2147483647; align-items:center; justify-content:center; padding:1rem; font-family: sans-serif;">
        <div id="cliniko-modal-overlay" style="position:absolute; inset:0; background:rgba(0, 0, 0, 0.85); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); cursor: pointer; z-index: 2147483646;"></div>
        <div id="cliniko-modal-content" style="position:relative; width:100%; max-width:1000px; background:white; border-radius:1.5rem; box-shadow:0 25px 50px -12px rgba(0,0,0,0.8); overflow:hidden; display:flex; flex-direction:column; max-height:90vh; z-index: 2147483647; transform: scale(0.95); transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); opacity: 0;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:1.25rem; border-bottom:1px solid #f1f5f9; background:#f8fafc;">
                <h3 style="margin:0; font-family: 'Poppins', sans-serif; font-weight:700; color:#0f172a; display:flex; align-items:center; gap:0.5rem; font-size: 1.25rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    Book Your Appointment
                </h3>
                <button id="close-cliniko-modal" style="background:#f1f5f9; border:none; cursor:pointer; width: 40px; height: 40px; border-radius:9999px; transition:all 0.2s; color:#64748b; display:flex; align-items:center; justify-content:center; padding: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div style="flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; background: #fff; min-height: 400px;">
                <iframe id='cliniko-36399637' src='https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true' frameborder='0' scrolling='auto' width='100%' height='1000' style='pointer-events: auto; display: block; border:none; width: 100%; min-height: 600px;'></iframe>
            </div>
        </div>
    </div>
    <style>
        #cliniko-booking-modal.active { display: flex !important; }
        #cliniko-booking-modal.active #cliniko-modal-content { transform: scale(1); opacity: 1; }
        body.modal-open { overflow: hidden !important; height: 100vh !important; position: fixed !important; width: 100% !important; }
        #close-cliniko-modal:hover { background: #e2e8f0; color: #1e293b; transform: rotate(90deg); }
    </style>
    `;

    // Inject Modal into Body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('cliniko-booking-modal');
    const overlay = document.getElementById('cliniko-modal-overlay');
    const closeBtn = document.getElementById('close-cliniko-modal');
    const iframe = document.getElementById('cliniko-36399637');

    function openModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        console.log("Cliniko Booking Modal: Opening...");
        
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Ensure iframe has the correct source
        if (!iframe.src || iframe.src === 'about:blank') {
            iframe.src = 'https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true';
        }
    }

    function closeModal() {
        console.log("Cliniko Booking Modal: Closing...");
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Cliniko Resize Listener
    window.addEventListener('message', function handleIFrameMessage (e) {
        if (typeof e.data !== 'string') return;
        if (e.data.search('cliniko-bookings-resize') > -1) {
            var height = Number(e.data.split(':')[1]);
            if (height > 0) {
                iframe.style.height = height + 'px';
            }
        }
    });

    // Attach to all booking buttons
    function attachToButtons() {
        const elements = document.querySelectorAll('a, button, [role="button"]');
        
        elements.forEach(el => {
            // Skip if already attached
            if (el.dataset.bookingAttached) return;

            const text = (el.innerText || el.textContent || "").trim().toLowerCase();
            const href = (el.getAttribute('href') || "").toLowerCase();
            const className = (el.className || "").toLowerCase();
            
            if (
                text.includes('book') || 
                href.includes('contact') || 
                href.includes('acuity') ||
                className.includes('btn-premium') ||
                className.includes('fire-500')
            ) {
                console.log("Cliniko Booking Modal: Attaching to button:", text);
                
                // Use capture phase to ensure we intercept the click before other scripts
                el.addEventListener('click', openModal, true);
                el.dataset.bookingAttached = "true";
                el.style.cursor = 'pointer';
            }
        });
    }

    // Initial attachment
    attachToButtons();
    
    // Check for new buttons frequently
    setInterval(attachToButtons, 1000);
    
    // Global access
    window.openBookingModal = openModal;
    
    console.log("Cliniko Booking Modal: Script fully loaded.");
})();
