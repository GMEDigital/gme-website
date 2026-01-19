// Navigasi Mobile Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        // Ubah icon
        const icon = mobileMenuBtn.querySelector('span');
        if (mobileMenu.classList.contains('hidden')) {
            icon.textContent = 'menu';
        } else {
            icon.textContent = 'close';
        }
    });

    // Tutup menu saat link diklik
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            mobileMenuBtn.querySelector('span').textContent = 'menu';
        });
    });
}

// Smooth Scroll untuk Link Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset untuk navbar fixed
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulasi pengiriman
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Mengirim...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim. Tim GME akan segera menghubungi Anda.');
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// Navbar Scroll Effect (Opsi tambahan untuk transparansi)
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-navy/90', 'bg-navy');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-navy', 'bg-navy/90');
    }
});