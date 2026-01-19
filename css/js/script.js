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
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // 1. Ambil data dari input
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // 2. Tentukan nomor WhatsApp Admin (Gunakan format internasional tanpa '+')
    // Contoh: 628123456789
    const adminNumber = "6282242996854";

    // 3. Susun pesan teks (Gunakan %0A untuk baris baru)
    const text = `Halo Admin Giat Muda Entrepreneur,%0A%0A` +
        `Saya ingin berkonsultasi mengenai bisnis.%0A%0A` +
        `*Data Pengirim:*%0A` +
        `- Nama: ${name}%0A` +
        `- Email: ${email}%0A%0A` +
        `*Pesan:*%0A${message}`;

    // 4. Buka URL WhatsApp
    const waUrl = `https://wa.me/${adminNumber}?text=${text}`;

    // Membuka di tab baru
    window.open(waUrl, '_blank');
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