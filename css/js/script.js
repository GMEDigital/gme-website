// --- 1. Navigasi Mobile Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        // Ubah icon menu/close
        const icon = mobileMenuBtn.querySelector('span');
        if (mobileMenu.classList.contains('hidden')) {
            icon.textContent = 'menu';
        } else {
            icon.textContent = 'close';
        }
    });

    // Tutup menu otomatis saat salah satu link diklik
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            mobileMenuBtn.querySelector('span').textContent = 'menu';
        });
    });
}

// --- 2. Smooth Scroll untuk Link Navigasi ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset agar tidak tertutup navbar fixed
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// --- 3. Form WhatsApp (Fix & Enhanced) ---
const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah reload halaman

        // A. Efek Visual (UX) - Ubah tombol jadi "Membuka WhatsApp..."
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Membuka WhatsApp...';
        btn.disabled = true;
        btn.classList.add('opacity-75', 'cursor-not-allowed'); // Visual feedback tambahan

        // B. Ambil data dari input
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // C. Nomor WhatsApp Admin (Sudah disesuaikan)
        const adminNumber = "6282242996854";

        // D. Susun pesan teks
        const text = `Halo Admin Giat Muda Entrepreneur,%0A%0A` +
            `Saya ingin berkonsultasi mengenai bisnis.%0A%0A` +
            `*Data Pengirim:*%0A` +
            `- Nama: ${name}%0A` +
            `- Email: ${email}%0A%0A` +
            `*Pesan:*%0A${message}`;

        // E. Buka URL WhatsApp setelah jeda singkat (agar user lihat efek loading)
        const waUrl = `https://wa.me/${adminNumber}?text=${text}`;

        setTimeout(() => {
            window.open(waUrl, '_blank');

            // Reset tombol dan form kembali seperti semula
            btn.textContent = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
            whatsappForm.reset();
        }, 1000);
    });
}

// --- 4. Navbar Scroll Effect ---
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