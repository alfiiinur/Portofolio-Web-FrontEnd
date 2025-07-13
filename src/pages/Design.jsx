// src/pages/Design.jsx

import React from "react";
import { ArrowUpRight } from "lucide-react"; // Ikon untuk tombol

// --- Komponen Kartu Baru untuk Halaman Desain ---
// Untuk struktur proyek yang lebih baik, Anda bisa memindahkan komponen ini ke filenya sendiri,
// misalnya `src/components/common/DesignCard.jsx`
const DesignCard = ({ title, category, imageUrl }) => {
  return (
    // 'group' memungkinkan kita untuk memicu style pada elemen anak saat parent di-hover
    <div className="group relative block h-80 w-full overflow-hidden rounded-2xl shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400/e2e8f0/333?text=Error";
        }}
      />
      {/* Gradient overlay untuk keterbacaan teks yang lebih baik saat hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Konten yang muncul di bagian bawah saat hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-sm font-medium text-white/80">{category}</p>
          <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        </div>
      </div>

      {/* Tombol "Open" yang muncul di kanan atas saat hover */}
      <div className="absolute top-4 right-4 transform scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <a
          href="#"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label={`Lihat detail untuk ${title}`}
        >
          <ArrowUpRight size={20} className="text-white" />
        </a>
      </div>
    </div>
  );
};

// Contoh data untuk galeri desain. Anda bisa menggantinya dengan karya Anda.
const designWorks = [
  {
    category: "UI/UX Design",
    title: "UI Kit untuk Aplikasi Finansial",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=870",
  },
  {
    category: "Branding",
    title: 'Logo & Brand Guideline untuk "Kopi Senja"',
    imageUrl:
      "https://images.unsplash.com/photo-1611140191382-597b61807438?q=80&w=774",
  },
  {
    category: "Illustration",
    title: "Set Ikon Kustom untuk Website",
    imageUrl:
      "https://images.unsplash.com/photo-1609279769222-c51a8383e63a?q=80&w=870",
  },
  {
    category: "UI/UX Design",
    title: "Wireframe & Prototyping Aplikasi Travel",
    imageUrl:
      "https://images.unsplash.com/photo-1516542949625-5a2394a8a425?q=80&w=774",
  },
  {
    category: "Graphic Design",
    title: "Desain Kemasan Produk Skincare",
    imageUrl:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=735",
  },
  {
    category: "Illustration",
    title: "Karakter Maskot untuk Brand Edukasi",
    imageUrl:
      "https://images.unsplash.com/photo-1629812456636-a8a43f1ce173?q=80&w=870",
  },
];

const Design = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
          Galeri Desain <span className="inline-block animate-wave">✍️</span>
        </h1>
        <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
          Arahkan kursor ke gambar untuk melihat detail. Koleksi visual dari
          proses kreatif saya.
        </p>
      </div>

      {/* Grid Desain menggunakan komponen kartu yang baru */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {designWorks.map((design, index) => (
          <DesignCard
            key={index}
            category={design.category}
            title={design.title}
            imageUrl={design.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Design;
