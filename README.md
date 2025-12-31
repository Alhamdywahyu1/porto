# Website Portfolio

Website portfolio modern dan kaya fitur yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS.

## Fitur

- 🎨 Desain modern dan bersih dengan animasi halus
- 📱 Tata letak responsif penuh dengan navigasi mobile
- 🌙 Dukungan mode gelap (otomatis berdasarkan preferensi sistem)
- ⚡ Cepat dan optimal dengan Next.js
- 💅 Styling dengan Tailwind CSS 4
- 🔤 TypeScript untuk keamanan tipe
- 📧 Formulir kontak interaktif
- 💬 Bagian testimoni
- 📝 Showcase blog/artikel
- 🏆 Bagian sertifikasi dan pencapaian
- 🔗 Integrasi media sosial
- 📄 Tombol unduh resume/CV

## Bagian

- **Beranda/Hero** - Bagian selamat datang dengan perkenalan dan tautan sosial
- **Tentang** - Informasi tentang pengalaman dan latar belakang
- **Keahlian** - Keterampilan teknis dan keahlian yang diorganisir berdasarkan kategori
- **Sertifikasi** - Sertifikasi dan pencapaian profesional
- **Proyek** - Portfolio proyek unggulan dengan tautan GitHub dan demo langsung
- **Testimoni** - Ulasan dan rekomendasi klien
- **Blog** - Artikel terbaru dan thought leadership
- **Kontak** - Formulir kontak interaktif dan informasi kontak

## Proyek yang Disertakan

- 🎲 **Ular Tangga 3D** - Permainan ular tangga interaktif dengan 3 mode tampilan
- 🎒 **Solver Knapsack PSO** - Pemecah masalah Knapsack menggunakan Particle Swarm Optimization
- 🧾 **Kalkulator Pajak Indonesia** - Kalkulator PPh 21, PPN, dan PPh Final UMKM
- 💰 **Manajemen Keuangan** - Aplikasi manajemen keuangan pribadi
- 📄 **Penganalisis Paper arXiv** - Analisis paper akademis dari arXiv
- ✅ **Manajer Tugas** - Aplikasi manajemen tugas dengan fitur drag-and-drop

## Memulai

Pertama, install dependensi:

```bash
npm install
```

Kemudian, jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

## Kustomisasi

Website ini memiliki **2 mode kustomisasi**:

### 🟢 Mode 1: Kustomisasi Mudah (Disarankan untuk Pemula)

Cukup edit file `site.config.ts` di folder root untuk mengubah semua informasi website:

```typescript
// site.config.ts
const siteConfig = {
  personal: {
    name: "Nama Anda",
    title: "Full Stack Developer",
    email: "email@anda.com",
    // ... dan lainnya
  },
  // ...
};
```

**Yang dapat dikustomisasi:**
- ✅ Informasi pribadi (nama, email, lokasi)
- ✅ Media sosial (GitHub, LinkedIn, Twitter, Instagram, YouTube)
- ✅ Tentang saya (paragraf, statistik)
- ✅ Keahlian & kompetensi
- ✅ Sertifikasi & pencapaian
- ✅ Proyek portfolio
- ✅ Testimoni klien
- ✅ Artikel blog
- ✅ Navigasi menu
- ✅ Footer

### 🔵 Mode 2: Kustomisasi Lanjutan (100% Editing)

Untuk developer yang ingin kontrol penuh, edit langsung file-file berikut:

- `app/page.tsx` - Konten utama dan bagian
- `app/layout.tsx` - Metadata dan tata letak situs
- `app/globals.css` - Style global dan warna tema
- `site.config.ts` - Data konfigurasi

📖 **Baca panduan lengkap di [CUSTOMIZATION.md](./CUSTOMIZATION.md)**

### Area Utama untuk Dipersonalisasi:

1. **Informasi Pribadi** - Perbarui nama, bio, dan gelar profesional Anda
2. **Keahlian** - Tambahkan keterampilan teknis dan alat Anda
3. **Proyek** - Tambahkan proyek Anda dengan deskripsi, tech stack, dan tautan
4. **Sertifikasi** - Daftarkan sertifikasi dan pencapaian Anda
5. **Testimoni** - Tambahkan testimoni dan ulasan klien
6. **Artikel Blog** - Tambahkan artikel atau posting blog terbaru Anda
7. **Informasi Kontak** - Perbarui email, lokasi, dan tautan media sosial
8. **Resume** - Tambahkan PDF resume Anda ke folder `/public`

## Build untuk Produksi

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Font sistem (dioptimalkan untuk performa)

## Deploy di Vercel

Cara termudah untuk deploy aplikasi Next.js Anda adalah menggunakan [Platform Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.
