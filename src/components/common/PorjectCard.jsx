// src/components/common/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ category, title, count, imageUrl, wide = false }) => {
  // Gunakan placeholder jika imageUrl tidak disediakan
  const imageSource =
    imageUrl || `https://placehold.co/600x400/e2e8f0/e2e8f0?text=`;

  // Menentukan kelas untuk kartu biasa atau lebar
  const cardClassName = `
    group relative rounded-2xl overflow-hidden
    bg-light-card/80 dark:bg-dark-card/80 
    border border-light-border dark:border-dark-border
    backdrop-blur-xl shadow-lg
    transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
    ${wide ? "lg:col-span-2" : ""}
  `;

  return (
    <div className={cardClassName}>
      <div className="relative">
        <img
          src={imageSource}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/e2e8f0/333?text=Error";
          }}
        />
        {/* Overlay gelap untuk kontras teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-sm text-light-text/70 dark:text-dark-text/70">
          {count} items
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
