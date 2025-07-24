// src/pages/Design.jsx

import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"; // Ikon untuk tombol
import designWorks from "../components/common/dataDesign"; // Impor data desain

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

const Design = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Jumlah item per halaman

  const totalPages = Math.ceil(designWorks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = designWorks.slice(indexOfFirstItem, indexOfLastItem);

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
        {currentItems.map((design, index) => (
          <DesignCard
            key={index}
            category={design.category}
            title={design.title}
            imageUrl={design.imageUrl}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-accent"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === index + 1
                ? "bg-green-400 text-white"
                : "bg-white dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-accent"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-accent"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Design;
