(function() {
    // Prevent double initialization
    if (window.bookingModalInitialized) return;
    window.bookingModalInitialized = true;

    console.log("Cliniko Booking: Final Version 6.0 Active");

    // 1. Force all hidden sections to be visible across the site
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        .fade-in-on-scroll { opacity: 1 !important; transform: none !important; transition: none !important; }
        .visible { opacity: 1 !important; transform: none !important; }
        #cliniko-booking-modal.active { display: flex !important; }
        #cliniko-booking-modal.active #cliniko-modal-container { transform: scale(1) !important; opacity: 1 !important; }
        body.modal-open { overflow: hidden !important; position: fixed !important; width: 100% !important; height: 100% !important; }
        @keyframes cliniko-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(globalStyle);

    // 2. Create Modal HTML
    const modalHtml = `
    <div id="cliniko-booking-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; z-index:2147483647; align-items:center; justify-content:center; padding:10px; box-sizing:border-box; font-family: sans-serif;">
        <div id="cliniko-modal-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); cursor:pointer;"></div>
        <div id="cliniko-modal-container" style="position:relative; width:100%; max-width:1000px; height:90%; max-height:900px; background:white; border-radius:15px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 0 50px rgba(0,0,0,0.5); transform:scale(0.9); opacity:0; transition:all 0.3s ease;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:15px; border-bottom:1px solid #eee; background:#f9f9f9;">
                <h3 style="margin:0; font-size:18px; color:#333; font-weight: bold;">Book Your Appointment</h3>
                <button id="close-cliniko-modal" style="background:#eee; border:none; cursor:pointer; width:36px; height:36px; border-radius:50%; font-size:24px; color:#666; line-height: 1;">&times;</button>
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
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        if (iframe.src === 'about:blank' || !iframe.src) {
            iframe.src = CLINIKO_URL;
            iframe.onload = () => loader.style.display = 'none';
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
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // 3. Global Trigger System - Catch ALL buttons and links
    function attachTriggers() {
        const all = document.querySelectorAll('a, button, [role="button"]');
        all.forEach(el => {
            if (el.getAttribute('data-cliniko-init')) return;

            const text = (el.innerText || el.textContent || "").toLowerCase();
            const href = (el.getAttribute('href') || "").toLowerCase();
            const cls = (el.className || "").toLowerCase();

            // HEADER EXCEPTION: Top-right "Book Now" link
            if (el.closest('nav') || el.closest('header')) {
                if (text.includes('book')) {
                    el.href = "contact.html";
                    el.setAttribute('data-cliniko-init', 'header-link');
                    return;
                }
            }

            // MODAL TRIGGER: Any other button with "book", "appointment", or "contact"
            if (text.includes('book') || text.includes('appointment') || href.includes('contact') || cls.includes('btn-premium')) {
                el.addEventListener('click', openModal, true);
                el.style.cursor = 'pointer';
                el.setAttribute('data-cliniko-init', 'modal-trigger');
            }
        });
    }

    // Run trigger attachment frequently
    attachTriggers();
    setInterval(attachTriggers, 500);

    // 4. Force visibility again just in case
    function forceAllVisible() {
        document.querySelectorAll('.fade-in-on-scroll, .visible').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('visible');
        });
    }
    forceAllVisible();
    window.addEventListener('load', forceAllVisible);
    setInterval(forceAllVisible, 1000);

    window.openBooking = openModal;
})();
