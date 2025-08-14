import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Gambar Placeholder */}
      <div className="h-60 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 mb-4"></div>

      <div className="flex items-center gap-3 mb-3">
        {/* Avatar Author Placeholder */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-grow space-y-2">
          {/* Nama Author Placeholder */}
          <div className="h-2 w-1/4 rounded bg-gray-300 dark:bg-gray-700"></div>
          {/* Tanggal Placeholder */}
          <div className="h-2 w-1/3 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>

      {/* Judul Placeholder */}
      <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700 mb-2"></div>

      {/* Kutipan/Excerpt Placeholder */}
      <div className="space-y-2">
        <div className="h-2 w-full rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-2 w-full rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-2 w-5/6 rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
