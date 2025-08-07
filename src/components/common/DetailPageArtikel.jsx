import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { allProjects } from "./DataPageArtikel/dataPageArtikel";

const DetailPageArtikel = () => {
  const { id } = useParams(); // Mengambil 'id' dari URL
  const project = allProjects.find((p) => p.id === id);

  // Menemukan proyek berikutnya untuk tombol navigasi
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl">Proyek tidak ditemukan.</h1>
        <Link
          to="/project"
          className="text-light-primary dark:text-dark-primary mt-4 inline-block"
        >
          Kembali ke Galeri Proyek
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tombol Kembali */}
      <Link
        to="/project"
        className="inline-flex items-center gap-2 text-light-text/80 dark:text-dark-text/80 hover:text-light-primary dark:hover:text-dark-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span>Semua Proyek</span>
      </Link>

      {/* Header Artikel */}
      <header className="text-center mb-12">
        <p className="text-light-primary dark:text-dark-primary font-semibold mb-2">
          {project.category}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text">
          {project.title}
        </h1>
      </header>

      {/* Gambar Utama */}
      <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten & Info Proyek */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Proyek (Sidebar) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 p-6 rounded-2xl border bg-light-card/80 dark:bg-dark-card/80 border-light-border dark:border-dark-border backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-4">Detail Proyek</h3>
            <ul className="space-y-3 text-light-text/90 dark:text-dark-text/90">
              <li>
                <strong>Klien:</strong> {project.client}
              </li>
              <li>
                <strong>Tahun:</strong> {project.year}
              </li>
              <li>
                <strong>Tools:</strong> {project.tools}
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 w-full inline-block text-center px-6 py-3 rounded-lg font-semibold text-white bg-light-primary hover:bg-opacity-90 dark:bg-dark-primary dark:hover:bg-opacity-90 transition-all duration-300"
            >
              Lihat Situs Live
            </a>
          </div>
        </aside>

        {/* Isi Artikel */}
        <main className="lg:col-span-8">
          <div className="prose prose-lg dark:prose-invert max-w-none text-light-text/90 dark:text-dark-text/90">
            <p className="lead text-xl !mb-8">{project.description}</p>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </main>
      </div>

      {/* Navigasi Proyek Berikutnya */}
      <footer className="mt-20 pt-12 border-t border-light-border dark:border-dark-border">
        <Link
          to={`/project/${nextProject.id}`}
          className="group block text-center"
        >
          <p className="text-sm text-light-text/70 dark:text-dark-text/70">
            Proyek Selanjutnya
          </p>
          <h4 className="text-2xl md:text-4xl font-bold mt-2 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
            {nextProject.title}
          </h4>
        </Link>
      </footer>
    </div>
  );
};

export default DetailPageArtikel;
