import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Twitter,
  FileText,
  BookOpen,
  CalendarDays,
  ArrowUpRight,
  X,
} from "lucide-react";
import { useState } from "react";
// import img from asset
import imgProfile from "../assets/images/PROFILE.jpg";
import pdfBNSP from "../assets/certificates/bnsp.pdf";
import sertifikatFluter from "../assets/certificates/ALFINURDANIALIN-SERTIFIKAT.pdf";
import seritifkatAndroid from "../assets/certificates/dicoding andorid.pdf";
import sertfikatPemateri from "../assets/certificates/Pemateri.jpg";
import serfikatCenim from "../assets/certificates/SERTIFIKAT CENIM.png";
import sertifikatHKI from "../assets/certificates/SuratCiptaan_EC002025077829_HKI.pdf";
import sertifikatML from "../assets/certificates/dicoding ml.pdf";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({
    title: "",
    src: "",
  });
  return (
    <section className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen py-16 px-6 md:px-10 lg:px-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-4">
          <img
            src={imgProfile}
            alt="profile"
            className="w-40 h-70 rounded-sm"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Hello, I'm Alfi Nur Danialin
            </h1>
            <p className="text-base sm:text-lg text-light-text/80 dark:text-dark-text/80 mt-2">
              Creative and innovative UI/UX enthusiast & aspiring mobile
              developer with a passion for building engaging digital experiences
              using React, Tailwind, and Kotlin.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 text-sm sm:justify-center">
          <a
            href="mailto:alfinurdanialin30@gmail.com"
            className="hover:underline flex items-center gap-1"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/alfinur/"
            className="hover:underline flex items-center gap-1"
            target="_blank"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/alfiiinur"
            className="hover:underline flex items-center gap-1"
            target="_blank"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://dribbble.com/alfiii2"
            className="hover:underline flex items-center gap-1"
            target="_blank"
          >
            <BookOpen size={16} /> Dribbble
          </a>
          <a
            href="https://s.id/CV_Portofolio_AlfINur"
            className="hover:underline flex items-center gap-1"
            target="_blank"
          >
            <FileText size={16} /> Portfolio CV
          </a>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Summary.
          </h3>
          <p className="text-sm text-light-text/80 dark:text-dark-text/80">
            I'm active in creating Instagram content and creative works such as
            posters. I love UI/UX design and have a strong desire to become a
            mobile developer. I aim to merge my creativity with technical
            knowledge to deliver impactful digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Skills.
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Creative & Innovative</li>
              <li>Leadership</li>
              <li>Critical Thinking</li>
              <li>Teamwork</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Figma, Canva, Adobe Photoshop & Illustrator</li>
              <li>HTML, CSS, JS, Kotlin, React</li>
              <li>UI/UX Design, Mobile App Design</li>
              <li>Marketing & Advertising</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Experience.
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <strong>
                Web Developer Intern – Research Assistant (2024 - Now)
              </strong>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Improved usability, create a recommendation system learning
                media using React JS and Fast API
              </p>
            </div>
            <div>
              <strong>
                Web Developer Intern – Dinas Komunikasi & Informatika Sidoarjo
                (2024 - 2025)
              </strong>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Improved usability, maintained database migrations, and
                optimized website performance.
              </p>
            </div>
            <div>
              <strong>Core Team – GDSC Media & Creative (2023 - 2024)</strong>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Designed content, merchandise, and promotional materials for
                GDSC Trunojoyo.
              </p>
            </div>
            <div>
              <strong>
                Practicum Assistant – Trunojoyo University (2022 - 2023)
              </strong>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Created educational materials to support informatics laboratory
                sessions.
              </p>
            </div>
            <div>
              <strong>Secretary – IKAMASDA Sidoarjo (2021 - 2023)</strong>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Produced social media content, event posters, and merchandise
                for organizational branding.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Projects.
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              UI mobile banking, login/signup designs using Kotlin Compose
            </li>
            <li>Firebase Auth login for MEDITATE app</li>
            <li>Homepage for OPD Sidoarjo with PHP, Bootstrap, JS, and SQL</li>
            <li>Database migration tool using PHP, Bootstrap, JS, SQL</li>
            <li>UI design for hotel search and food ordering apps</li>
            <li>
              Logos and branding (e.g. FASTPAY Partner logo, event merchandise)
            </li>
            <li>
              Documentation team for collaboration research with Telkom Corp &
              Smart Village
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Certifications.
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm relative">
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "BNSP – Young Computer Network Technician",
                    src: pdfBNSP,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                BNSP – Young Computer Network Technician
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Flutter Developer – Dicoding",
                    src: sertifikatFluter,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Flutter Developer – Dicoding
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Android Developer – Dicoding",
                    src: seritifkatAndroid,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Android Developer – Dicoding
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Machine Learning – Dicoding",
                    src: sertifikatML,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Machine Learning – Dicoding
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Sertifikat Pemateri",
                    src: sertfikatPemateri,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Sertifikat Pemateri
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Sertifikat CENIM",
                    src: serfikatCenim,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Sertifikat CENIM
                <ArrowUpRight size={16} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: "Surat Ciptaan – HKI",
                    src: sertifikatHKI,
                  }) || setIsModalOpen(true)
                }
                className="text-left w-full flex justify-between items-center hover:underline"
              >
                Surat Ciptaan – HKI
                <ArrowUpRight size={16} />
              </button>
            </li>
          </ul>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-dark-background p-4 rounded-lg max-w-3xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-700 dark:text-white hover:text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
              <h2 className="text-lg font-semibold mb-4">
                {selectedCertificate.title}
              </h2>
              {selectedCertificate.src.endsWith(".jpg") ||
              selectedCertificate.src.endsWith(".png") ? (
                <img
                  src={selectedCertificate.src}
                  alt={selectedCertificate.title}
                  className="w-full h-auto border"
                />
              ) : (
                <iframe
                  src={selectedCertificate.src}
                  title={selectedCertificate.title}
                  className="w-full h-[500px] border"
                />
              )}
            </div>
          </div>
        )}

        {/* Education */}
        <div>
          <h3 className="font-semibold text-sm mb-4 text-light-text/70 dark:text-dark-text/70">
            Education.
          </h3>
          <p className="text-sm">
            Informatics Engineering – Trunojoyo Madura University (2021 - 2025)
            | IPK (3.67)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
