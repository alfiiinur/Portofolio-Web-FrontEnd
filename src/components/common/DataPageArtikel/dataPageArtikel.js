export const allProjects = [
    {
      id: 'ecommerce-modern',
      category: 'Web Development',
      title: 'Situs E-commerce Modern',
      imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200',
      client: 'FashionForward Co.',
      year: '2023',
      tools: 'React, Node.js, Tailwind CSS, Stripe',
      description: 'Sebuah platform e-commerce yang dirancang untuk memberikan pengalaman belanja yang cepat, intuitif, dan modern. Fokus utama adalah pada antarmuka yang bersih dan proses checkout yang mulus.',
      content: `
        <p>Proyek ini dimulai dengan riset mendalam terhadap target pasar FashionForward Co. Kami menemukan bahwa pengguna mereka menginginkan situs yang tidak hanya fungsional tetapi juga estetis dan mudah dinavigasi di perangkat mobile.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">Tantangan Utama</h3>
        <p>Tantangan terbesar adalah mengintegrasikan sistem pembayaran yang aman dan andal (Stripe) sambil menjaga performa situs tetap optimal. Kami juga harus membangun sistem manajemen inventaris kustom dari awal.</p>
        <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870" class="rounded-lg my-6" alt="Checkout Process"/>
        <h3 class="text-2xl font-bold mt-8 mb-4">Solusi & Hasil</h3>
        <p>Dengan menggunakan arsitektur headless (React untuk frontend dan Node.js untuk backend), kami berhasil menciptakan situs yang sangat cepat. Waktu muat halaman berkurang hingga 60%, dan tingkat konversi penjualan meningkat sebesar 25% dalam tiga bulan pertama setelah peluncuran.</p>
      `
    },
    {
      id: 'mobile-banking-app',
      category: 'UI/UX Design',
      title: 'Desain Aplikasi Mobile Banking',
      imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200',
      imgClient: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870',
      client: 'FinSecure Bank',
      year: '2024',
      tools: 'Figma, Protopie, Maze',
      description: 'Merancang ulang aplikasi mobile banking dengan fokus pada kemudahan penggunaan, keamanan, dan aksesibilitas untuk semua kalangan pengguna.',
      content: '<p>Konten detail untuk proyek mobile banking akan ditampilkan di sini.</p>'
    },
    {
      id:'media-pembelajaran-koalaers',
      category: 'Web Development',
      title: 'Media Pembelajaran KoalaERS',
      imageUrl: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1200',
      imgClient: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870',
      client: 'Trunojoyo University',
      year: '2025',
      tools: 'React, Fast-API, Tailwind CSS',
      description: 'Sebuah platform pembelajaran daring yang dirancang untuk meningkatkan pengalaman belajar mahasiswa dengan fitur interaktif dan akses ke materi pembelajaran yang luas.',
      content: 
      `
        <p>Proyek ini bertujuan untuk menciptakan platform pembelajaran yang mudah diakses oleh mahasiswa Trunojoyo University. Dengan menggunakan React untuk frontend dan Fast-API untuk backend, kami membangun sistem yang responsif dan cepat.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">Tantangan Utama</h3>
        <p>Tantangan terbesar adalah mengintegrasikan berbagai sumber materi pembelajaran dan memastikan bahwa platform dapat diakses dengan mudah oleh semua mahasiswa, termasuk mereka yang memiliki keterbatasan akses internet.</p>
        <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870" class="rounded-lg my-6" alt="Learning Platform"/>
        <h3 class="text-2xl font-bold mt-8 mb-4">Solusi & Hasil</h3>
        <p>Kami mengimplementasikan desain responsif yang memastikan aksesibilitas di berbagai perangkat. Dengan fitur interaktif seperti kuis dan forum diskusi, platform ini meningkatkan keterlibatan mahasiswa. Hasilnya, tingkat partisipasi dalam pembelajaran daring meningkat sebesar 40% dalam enam bulan pertama.</p>

      `
    }
  ];




  // Data ini bisa datang dari CMS, API, atau file JSON lokal di masa depan.
// Saya tambahkan lebih banyak data untuk menunjukkan fungsionalitas filter.
// const allProjects = [
//   {
//     category: "Web Development",
//     title: "Media Pembelajaran KoalaERS",
//     count: "React, Flask-API",
//     imageUrl: KoalaERS,
//   },
//   {
//     category: "UI/UX Design",
//     title: "Desain Aplikasi Mobile Banking",
//     count: "Figma, Prototyping",
//     imageUrl:
//       "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=870",
//   },
//   {
//     category: "Web Development",
//     title: "Landing Page Perusahaan SaaS",
//     count: "Next.js, Tailwind CSS",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=870",
//   },
//   {
//     category: "Branding",
//     title: "Identitas Visual untuk Startup Kopi",
//     count: "Logo, Packaging",
//     imageUrl:
//       "https://images.unsplash.com/photo-1559028006-44a36b17c769?q=80&w=774",
//   },
//   {
//     category: "UI/UX Design",
//     title: "Redesain Dashboard Admin",
//     count: "Analisis UX, Wireframing",
//     imageUrl:
//       "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=870",
//   },
//   {
//     category: "Photography",
//     title: "Sesi Foto Produk Fashion",
//     count: "Studio, Editing",
//     imageUrl:
//       "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=870",
//   },
//   {
//     category: "Web Development",
//     title: "Blog Pribadi dengan CMS",
//     count: "Gatsby, Contentful",
//     imageUrl:
//       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870",
//   },
//   {
//     category: "Branding",
//     title: "Rebranding Restoran Lokal",
//     count: "Menu, Logo, Interior",
//     imageUrl:
//       "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=774",
//   },
// ];