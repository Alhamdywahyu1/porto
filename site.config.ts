// ============================================================================
// KONFIGURASI WEBSITE PORTFOLIO
// ============================================================================
// 
// File ini berisi semua informasi yang dapat dikustomisasi untuk website Anda.
// Cukup ganti nilai-nilai di bawah ini dengan informasi pribadi Anda.
// 
// PANDUAN KUSTOMISASI MUDAH:
// 1. Ganti semua nilai dalam objek siteConfig di bawah ini
// 2. Simpan file
// 3. Jalankan `npm run dev` untuk melihat perubahan
// 
// Untuk kustomisasi lebih lanjut (100% editing), Anda dapat langsung
// mengedit file `app/page.tsx` dan file lainnya di folder `app/`.
// ============================================================================

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
}

export interface Skill {
  icon: string;
  title: string;
  items: string[];
}

export interface Certification {
  icon: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  borderColor: string;
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  tagColor: string;
  gradientFrom: string;
  gradientTo: string;
  githubUrl?: string;
  demoUrl?: string;
  internalUrl?: string;
  internalLabel?: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
  url: string;
}

export interface AboutStats {
  title: string;
  value: string;
}

export interface SiteConfig {
  // ==================== INFORMASI DASAR ====================
  siteName: string;
  siteDescription: string;
  language: string;
  
  // ==================== INFORMASI PRIBADI ====================
  personal: {
    name: string;
    initials: string;
    title: string;
    subtitle: string;
    email: string;
    location: {
      city: string;
      country: string;
    };
    resumeUrl: string;
    availableForWork: boolean;
    remoteAvailable: boolean;
  };
  
  // ==================== TAUTAN SOSIAL ====================
  social: SocialLinks;
  
  // ==================== BAGIAN TENTANG ====================
  about: {
    paragraphs: string[];
    stats: AboutStats[];
  };
  
  // ==================== KEAHLIAN ====================
  skills: Skill[];
  
  // ==================== SERTIFIKASI & PENCAPAIAN ====================
  certifications: Certification[];
  
  // ==================== PROYEK ====================
  projects: Project[];
  
  // ==================== TESTIMONI ====================
  testimonials: Testimonial[];
  
  // ==================== BLOG ====================
  blogPosts: BlogPost[];
  
  // ==================== NAVIGASI ====================
  navigation: {
    items: Array<{
      label: string;
      href: string;
    }>;
  };
  
  // ==================== FOOTER ====================
  footer: {
    copyright: string;
    builtWith: string;
  };
}

// ============================================================================
// KONFIGURASI UTAMA - EDIT BAGIAN INI
// ============================================================================

const siteConfig: SiteConfig = {
  // ==================== INFORMASI DASAR ====================
  siteName: "Portfolio",
  siteDescription: "Portfolio yang menampilkan proyek, keahlian. Spesialisasi dalam React, Next.js, TypeScript, dan teknologi web modern.",
  language: "id",
  
  // ==================== INFORMASI PRIBADI ====================
  personal: {
    name: "Alhamdy Wahyu Alfiansyah",                    // Ganti dengan nama Anda
    initials: "hamdy",                        // Ganti dengan inisial Anda
    title: "mahasiswa semester 6 IT Universitas Trunojoyo Madura",  // Ganti dengan jabatan Anda
    subtitle: "mempelajari dan mendalai sekaligus menerapkan sistem automasi di kehidupan sehari hari",
    email: "hamdialfian1@gmail.com",      // Ganti dengan email Anda
    location: {
      city: "Bangkalan",                    // Ganti dengan kota Anda
      country: "Indonesia",               // Ganti dengan negara Anda
    },
    resumeUrl: "/resume.pdf",             // Path ke file CV Anda
    availableForWork: true,
    remoteAvailable: true,
  },
  
  // ==================== TAUTAN SOSIAL ====================
  social: {
    github: "https://github.com/Alhamdywahyu1",        // Ganti dengan GitHub Anda
    linkedin: "https://linkedin.com/in/yourprofile",  // Ganti dengan LinkedIn Anda
    twitter: "https://twitter.com/yourusername",      // Ganti dengan Twitter Anda
    // instagram: "https://instagram.com/yourusername",  // Uncomment jika ingin menambahkan
    // youtube: "https://youtube.com/@yourusername",     // Uncomment jika ingin menambahkan
    // website: "https://yourwebsite.com",               // Uncomment jika ingin menambahkan
  },
  
  // ==================== BAGIAN TENTANG ====================
  about: {
    paragraphs: [
      "Saya adalah mahasiswa yang bersemangat dengan keahlian dalam membangun aplikasi. Saya senang menciptakan antarmuka pengguna yang intuitif dan sistem backend yang tangguh.",
      "Dengan pengalaman dalam beberapa proyek matakuliah dan proyek magang, saya mengkhususkan diri dalam React, Next.js, Node.js, dan berbagai teknologi modern lainnya.",
      "saat memiliki waktu luang saya cenderung belajar tentang sesuatu yang saya sukai, meskipun sesekali bermain game atau melihat film untuk menghilangkan jenuh",
    ],
    stats: [
      { title: "Pengalaman", value: "2+ Tahun belajar Pengembangan Web" },
      { title: "Proyek", value: "8+ Proyek Selesai" },
      // { title: "Klien", value: "30+ Klien Puas" },
    ],
  },
  
  // ==================== KEAHLIAN ====================
  skills: [
    {
      icon: "💻",
      title: "Frontend",
      items: ["React & Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      items: ["Node.js & Express", "Python & Django", "RESTful API", "Desain Database"],
    },
    {
      icon: "🛠️",
      title: "Alat & Tools",
      items: ["Git & GitHub", "word", "VS Code", "Figma"],
    },
  ],
  
  // ==================== SERTIFIKASI & PENCAPAIAN ====================
  // certifications: [
  //   {
  //     icon: "🏆",
  //     title: "AWS Certified Developer",
  //     issuer: "Amazon Web Services",
  //     year: "2023",
  //     description: "Mendemonstrasikan kemahiran dalam mengembangkan dan memelihara aplikasi di platform AWS",
  //     borderColor: "blue",
  //   },
  //   {
  //     icon: "🎓",
  //     title: "Google Cloud Professional",
  //     issuer: "Google Cloud Platform",
  //     year: "2023",
  //     description: "Tersertifikasi dalam merancang, membangun, dan mengelola solusi di GCP",
  //     borderColor: "green",
  //   },
  //   {
  //     icon: "⭐",
  //     title: "React Advanced Certification",
  //     issuer: "Meta",
  //     year: "2023",
  //     description: "Konsep lanjutan dalam React termasuk hooks, context, dan optimisasi performa",
  //     borderColor: "purple",
  //   },
  //   {
  //     icon: "🥇",
  //     title: "Juara Hackathon 2023",
  //     issuer: "Tech Innovation Challenge - Juara 1",
  //     year: "",
  //     description: "Membangun solusi berbasis AI untuk pembangunan berkelanjutan",
  //     borderColor: "orange",
  //   },
  // ],
  
  // ==================== PROYEK ====================
  projects: [
    // {
    //   icon: "📱",
    //   title: "Desain Aplikasi Mobile",
    //   description: "Desain UI/UX modern untuk aplikasi media sosial dengan fitur real-time",
    //   tags: ["Figma", "React Native", "Firebase"],
    //   tagColor: "green",
    //   gradientFrom: "green-500",
    //   gradientTo: "teal-600",
    //   githubUrl: "https://github.com/yourusername/project",
    //   demoUrl: "https://project-demo.com",
    // },
    // {
    //   icon: "🎨",
    //   title: "Website Portfolio",
    //   description: "Situs portfolio indah yang dibangun dengan Next.js menampilkan mode gelap dan animasi",
    //   tags: ["Next.js", "Tailwind", "TypeScript"],
    //   tagColor: "orange",
    //   gradientFrom: "orange-500",
    //   gradientTo: "red-600",
    //   githubUrl: "https://github.com/yourusername/project",
    //   demoUrl: "https://project-demo.com",
    // },
    {
      icon: "🎲",
      title: "Permainan Ular Tangga 3D",
      description: "Permainan Ular Tangga interaktif dengan 3 mode: Klasik 2D, Papan 3D Dapat Diputar, dan Tampilan Orang Pertama menggunakan WebGL/Three.js",
      tags: ["Three.js", "WebGL", "React"],
      tagColor: "yellow",
      gradientFrom: "yellow-500",
      gradientTo: "amber-600",
      internalUrl: "/snake-ladder",
      internalLabel: "Main Sekarang",
    },
    {
      icon: "🎒",
      title: "Solver Knapsack PSO",
      description: "Pemecah masalah Knapsack 0/1 interaktif menggunakan algoritma Particle Swarm Optimization dengan visualisasi real-time",
      tags: ["PSO", "TypeScript", "Next.js"],
      tagColor: "indigo",
      gradientFrom: "indigo-500",
      gradientTo: "purple-600",
      internalUrl: "/knapsack-pso",
      internalLabel: "Coba Sekarang",
    },
    {
      icon: "🧾",
      title: "Kalkulator Pajak Indonesia",
      description: "Web interaktif untuk menghitung pajak Indonesia (PPh 21, PPN, PPh Final UMKM) dengan informasi lengkap tentang perpajakan",
      tags: ["Pajak", "TypeScript", "Next.js"],
      tagColor: "emerald",
      gradientFrom: "emerald-500",
      gradientTo: "teal-600",
      internalUrl: "/pajak",
      internalLabel: "Hitung Pajak",
    },
    {
      icon: "💰",
      title: "Manajemen Keuangan",
      description: "Aplikasi manajemen keuangan pribadi untuk mencatat pemasukan, pengeluaran, anggaran bulanan, dan melihat laporan statistik keuangan",
      tags: ["Keuangan", "TypeScript", "Next.js"],
      tagColor: "cyan",
      gradientFrom: "cyan-500",
      gradientTo: "blue-600",
      internalUrl: "/keuangan",
      internalLabel: "Kelola Keuangan",
    },
    {
      icon: "📄",
      title: "Penganalisis Paper arXiv",
      description: "Analisis paper akademis dari arXiv dengan ekstraksi kata kunci, klasifikasi topik, estimasi kompleksitas bacaan, dan ringkasan otomatis",
      tags: ["Riset", "NLP", "Next.js"],
      tagColor: "rose",
      gradientFrom: "rose-500",
      gradientTo: "pink-600",
      internalUrl: "/arxiv-analyzer",
      internalLabel: "Analisis Paper",
    },
    {
      icon: "✅",
      title: "Manajer Tugas",
      description: "Aplikasi manajemen tugas dengan fitur prioritas, tenggat waktu, tag, filter, dan statistik produktivitas",
      tags: ["Produktivitas", "TypeScript", "Next.js"],
      tagColor: "violet",
      gradientFrom: "violet-500",
      gradientTo: "fuchsia-600",
      internalUrl: "/task-manager",
      internalLabel: "Kelola Tugas",
    },
  ],
  
  // ==================== TESTIMONI ====================
  // testimonials: [
  //   {
  //     initials: "BD",
  //     name: "Budi Dharma",
  //     role: "CEO",
  //     company: "TechCorp",
  //     rating: 5,
  //     text: "Pekerjaan luar biasa! Proyek selesai tepat waktu dan melebihi ekspektasi kami. Komunikasi dan kemampuan teknis yang sangat baik.",
  //     gradientFrom: "blue-500",
  //     gradientTo: "purple-600",
  //   },
  //   {
  //     initials: "SR",
  //     name: "Sari Rahmawati",
  //     role: "Product Manager",
  //     company: "",
  //     rating: 5,
  //     text: "Sangat menyenangkan bekerja sama! Sangat profesional dan berorientasi pada detail. Hasil akhir persis seperti yang kami butuhkan.",
  //     gradientFrom: "green-500",
  //     gradientTo: "teal-600",
  //   },
  //   {
  //     initials: "AW",
  //     name: "Andi Wijaya",
  //     role: "Founder",
  //     company: "Startup",
  //     rating: 5,
  //     text: "Developer yang luar biasa! Membangun MVP kami dalam waktu singkat dengan kode yang bersih dan mudah dipelihara. Sangat direkomendasikan!",
  //     gradientFrom: "orange-500",
  //     gradientTo: "red-600",
  //   },
  // ],
  
  // ==================== BLOG ====================
  // blogPosts: [
  //   {
  //     title: "Membangun Aplikasi Web yang Skalabel",
  //     excerpt: "Pelajari praktik terbaik untuk membangun aplikasi web yang dapat menskalakan jutaan pengguna...",
  //     date: "15 Des, 2024",
  //     readTime: "5 menit baca",
  //     gradientFrom: "blue-500",
  //     gradientTo: "purple-600",
  //     url: "#",
  //   },
  //   {
  //     title: "Optimisasi Performa React",
  //     excerpt: "Temukan teknik lanjutan untuk mengoptimalkan aplikasi React Anda agar performa lebih baik...",
  //     date: "10 Des, 2024",
  //     readTime: "8 menit baca",
  //     gradientFrom: "green-500",
  //     gradientTo: "teal-600",
  //     url: "#",
  //   },
  //   {
  //     title: "Memulai dengan TypeScript",
  //     excerpt: "Panduan lengkap TypeScript untuk developer JavaScript yang ingin meningkatkan kemampuan...",
  //     date: "5 Des, 2024",
  //     readTime: "6 menit baca",
  //     gradientFrom: "orange-500",
  //     gradientTo: "red-600",
  //     url: "#",
  //   },
  // ],
  
  // ==================== NAVIGASI ====================
  navigation: {
    items: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#about" },
      { label: "Keahlian", href: "#skills" },
      { label: "Proyek", href: "#projects" },
      { label: "Testimoni", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  
  // ==================== FOOTER ====================
  footer: {
    copyright: "© 2026 Portfolio by Alhamdy Wahyu Alfianysah.",
    builtWith: "Dibangun dengan Next.js dan Tailwind CSS.",
  },
};

export default siteConfig;
