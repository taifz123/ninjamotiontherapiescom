(function() {
    // Prevent double initialization
    if (window.bookingModalInitialized) return;
    window.bookingModalInitialized = true;

    // Create Modal HTML
    const modalHtml = `
    <div id="cliniko-booking-modal" style="display:none; position:fixed; inset:0; z-index:10000; align-items:center; justify-content:center; padding:1rem;">
        <div id="cliniko-modal-overlay" style="position:absolute; inset:0; background:rgba(11, 17, 32, 0.85); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);"></div>
        <div style="position:relative; w-full; max-width:1000px; width:100%; background:white; border-radius:1.5rem; shadow:0 25px 50px -12px rgba(0,0,0,0.5); overflow:hidden; display:flex; flex-direction:column; max-height:90vh;">
            <div style="display:flex; align-items:center; justify-content:between; padding:1rem; border-bottom:1px solid #f1f5f9; background:#f8fafc;">
                <h3 style="margin:0; font-family:Poppins, sans-serif; font-weight:700; color:#0f172a; display:flex; align-items:center; gap:0.5rem; flex:1;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    Book Your Appointment
                </h3>
                <button id="close-cliniko-modal" style="background:none; border:none; cursor:pointer; padding:0.5rem; border-radius:9999px; transition:background 0.2s; color:#64748b; display:flex; align-items:center; justify-content:center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div style="flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch;">
                <iframe id='cliniko-36399637' src='https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true' frameborder='0' scrolling='auto' width='100%' height='1000' style='pointer-events: auto; display: block; border:none;'></iframe>
            </div>
        </div>
    </div>
    <style>
        #cliniko-booking-modal.active { display: flex !important; }
        body.modal-open { overflow: hidden !important; }
        #close-cliniko-modal:hover { background: #e2e8f0; color: #1e293b; }
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
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        // Ensure iframe is loaded
        if (!iframe.src) {
            iframe.src = 'https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true';
        }
    }

    function closeModal() {
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
            iframe.style.height = height + 'px';
        }
        e.data.search('cliniko-bookings-page') > -1 && iframe.scrollIntoView();
    });

    // Attach to all booking buttons
    function attachToButtons() {
        const elements = document.querySelectorAll('a, button');
        elements.forEach(el => {
            // Skip if already attached
            if (el.dataset.bookingAttached) return;

            const text = (el.innerText || el.textContent || "").toLowerCase();
            const href = (el.getAttribute('href') || "").toLowerCase();
            
            if (
                text.includes('book') || 
                href.includes('contact') || 
                href.includes('acuity') ||
                el.classList.contains('btn-premium')
            ) {
                el.addEventListener('click', openModal);
                el.dataset.bookingAttached = "true";
                // If it's a link to /contact, we override it
                if (href.includes('contact')) {
                    el.href = "javascript:void(0)";
                }
            }
        });
    }

    // Initial attachment
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachToButtons);
    } else {
        attachToButtons();
    }
    
    // Periodically check for new buttons (for dynamic content)
    setInterval(attachToButtons, 2000);
    
    // Global access
    window.openBookingModal = openModal;
})();
