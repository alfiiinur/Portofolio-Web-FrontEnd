import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import myPortfolio from "../../assets/certificates/Portofolio.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PortofolioReader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1000);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage() {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  }

  // Update ukuran berdasarkan lebar jendela
  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(1000, window.innerWidth - 40);
      setWidth(newWidth);
    };
    handleResize(); // Inisialisasi
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-light-bg dark:bg-dark-bg p-4">
      <div className="bg-white dark:bg-dark-card shadow-lg rounded-lg overflow-hidden">
        <Document file={myPortfolio} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            width={Math.min(900, window.innerWidth - 40)}
          />
        </Document>
      </div>

      {/* Glass Navigation Controls */}
      <div className="mt-6 bg-light-card/80 dark:bg-dark-card/80 rounded-xl px-6 py-3 shadow-md flex items-center gap-6 justify-center text-base font-medium text-gray-800 dark:text-white">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className={`px-4 py-2 rounded transition font-medium ${
            pageNumber <= 1
              ? "bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-800 dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          👈 Sebelumnya
        </button>

        <span>
          Halaman <strong>{pageNumber}</strong> dari <strong>{numPages}</strong>
        </span>

        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className={`px-4 py-2 rounded transition font-medium ${
            pageNumber >= numPages
              ? "bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-800 dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          Selanjutnya 👉
        </button>
      </div>
    </div>
  );
};

export default PortofolioReader;
