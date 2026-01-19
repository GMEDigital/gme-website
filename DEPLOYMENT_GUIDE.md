# Panduan Deployment: GitHub ke Vercel

Panduan langkah demi langkah untuk menayangkan (online) website Giat Muda Entrepreneur menggunakan GitHub dan Vercel.

## Prasyarat
1.  Akun [GitHub](https://github.com).
2.  Akun [Vercel](https://vercel.com) (bisa login dengan GitHub).
3.  [Git](https://git-scm.com/downloads) terinstal di komputer.

## Langkah 1: Persiapan Repository Lokal

Buka terminal (Command Prompt/PowerShell) di folder proyek ini (`d:\GME\gme-website`), lalu jalankan perintah berikut satu per satu:

```bash
# 1. Inisialisasi Git (jika belum pernah)
git init

# 2. Tambahkan semua file ke staging
git add .

# 3. Simpan perubahan (Commit)
git commit -m "Versi pertama website GME"
```

## Langkah 2: Buat Repository di GitHub

1.  Login ke GitHub.
2.  Klik tombol **New** atau ikon **+** di pojok kanan atas -> **New repository**.
3.  Nama Repository: `gme-website` (atau nama lain yang Anda suka).
4.  Visibility: **Public** (agar gratis dan mudah diakses).
5.  Klik **Create repository**.

## Langkah 3: Hubungkan dan Upload Kode

Setelah repository dibuat, GitHub akan menampilkan halaman panduan. Cari bagian **"...or push an existing repository from the command line"**. Copy dan paste perintah yang mirip seperti ini ke terminal Anda:

```bash
# Ganti URL_REPOSITORY_ANDA dengan link dari GitHub
# Contoh: git remote add origin https://github.com/username/gme-website.git
git remote add origin URL_REPOSITORY_ANDA

# Upload kode ke GitHub
git push -u origin main
```
*(Jika diminta login, masukkan username dan password/token GitHub Anda).*

## Langkah 4: Deployment Otomatis di Vercel

1.  Buka dashboard [Vercel](https://vercel.com/dashboard).
2.  Klik **Add New...** -> **Project**.
3.  Di bagian **Import Git Repository**, Anda akan melihat `gme-website` yang baru saja di-upload. Klik **Import**.
4.  **Framework Preset**: Biarkan "Other" atau "Vital" (Vercel biasanya otomatis tahu ini static HTML).
5.  Klik **Deploy**.

## Selesai!

Tunggu beberapa detik. Vercel akan memberikan link website Anda (contoh: `gme-website.vercel.app`).

---

### Tips
Setiap kali Anda mengubah kode di komputer:
1.  `git add .`
2.  `git commit -m "PESAN PERUBAHAN"`
3.  `git push`

Vercel akan **otomatis update** website Anda seketika!
