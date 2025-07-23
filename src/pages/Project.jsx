// src/pages/Project.jsx

import React, { useState, useMemo } from "react";
import { ExternalLink, Github, Figma } from "lucide-react"; // 👈 pakai ikon dari lucide
import ProjectCard from "../components/common/PorjectCard";
import KoalaERS from "../assets/images/web1.png";
// Data ini bisa datang dari CMS, API, atau file JSON lokal di masa depan.
// Saya tambahkan lebih banyak data untuk menunjukkan fungsionalitas filter.
const allProjects = [
  {
    category: "Web Development",
    title: "Media Pembelajaran KoalaERS",
    count: "React, Flask-API",
    imageUrl: KoalaERS,
  },
  {
    category: "UI/UX Design",
    title: "Desain Aplikasi Mobile Banking",
    count: "Figma, Prototyping",
    imageUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=870",
  },
  {
    category: "Web Development",
    title: "Landing Page Perusahaan SaaS",
    count: "Next.js, Tailwind CSS",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=870",
  },
  {
    category: "Branding",
    title: "Identitas Visual untuk Startup Kopi",
    count: "Logo, Packaging",
    imageUrl:
      "https://images.unsplash.com/photo-1559028006-44a36b17c769?q=80&w=774",
  },
  {
    category: "UI/UX Design",
    title: "Redesain Dashboard Admin",
    count: "Analisis UX, Wireframing",
    imageUrl:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=870",
  },
  {
    category: "Photography",
    title: "Sesi Foto Produk Fashion",
    count: "Studio, Editing",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=870",
  },
  {
    category: "Web Development",
    title: "Blog Pribadi dengan CMS",
    count: "Gatsby, Contentful",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870",
  },
  {
    category: "Branding",
    title: "Rebranding Restoran Lokal",
    count: "Menu, Logo, Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=774",
  },
];

// Mendapatkan kategori unik dari semua proyek
const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
          Galeri Proyek <span className="inline-block animate-wave">🦩</span>
        </h1>
        <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
          Jelajahi kumpulan karya yang telah saya buat. Gunakan filter untuk
          melihat proyek berdasarkan kategori.
        </p>
      </div>

      {/* Tombol Filter */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300
              ${
                activeFilter === category
                  ? "bg-light-primary text-white dark:bg-dark-primary"
                  : "bg-light-card/80 dark:bg-dark-card/80 text-light-text dark:text-dark-text hover:bg-light-primary/20 dark:hover:bg-dark-primary/20"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            category={project.category}
            title={project.title}
            count={project.count} // Di sini 'count' kita gunakan untuk menampilkan teknologi/deskripsi singkat
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-light-text/70 dark:text-dark-text/70">
            Tidak ada proyek dalam kategori ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default Project;
