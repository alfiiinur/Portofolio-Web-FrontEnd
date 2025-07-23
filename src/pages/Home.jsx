// src/pages/Home.jsx
import React from "react";
import ProjectCard from "../components/common/PorjectCard";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  BookOpen,
} from "lucide-react";
import CarouselSlider from "../components/common/CarouselSlider";
import Footer from "../components/layout/Footer";
import profileUIUX from "../assets/images/profile_uiux.jpg";
import profileMobile from "../assets/images/profile_mobile.jpg";
import profileDesign from "../assets/images/profile_desain.jpg";
import profileAll from "../assets/images/profile_all.jpg";

// Anda bisa mengganti data ini dengan data dari API atau data Anda sendiri
const portfolioData = [
  {
    category: "UI/UX Design",
    title: "UI/UX Design Mobile and Web Apps",
    count: "10",
    imageUrl: profileUIUX,
  },
  {
    category: "Web Development",
    title: "Landing Page and Profile Website",
    count: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=872",
  },
  {
    category: "Mobile Development",
    title: "Mobile Apps UI with Kotlin",
    count: "5",
    imageUrl: profileMobile,
  },
  {
    category: "Design Graphic",
    title: "Design Grafis & Ilustrasi",
    count: "34",
    imageUrl: profileDesign,
  },
  {
    category: "All Projects",
    title: "Lihat Semua Karya Saya",
    count: "250+",
    imageUrl: profileAll,
    wide: true, // Kartu ini akan lebih lebar
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="min-h-96 flex flex-col justify-center items-center  text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
          Hello <span className="inline-block animate-wave">👋</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
          I'm Alfinur – a curious designer and developer
          <br /> based in Indonesia.
        </h2>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-light-text dark:text-dark-text mt-6">
          <a
            href="https://github.com/alfiiinur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center gap-2 bg-pink-300 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-sm dark:bg-pink-200 dark:text-gray-900">
              <Github size={16} /> Github
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/alfinur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center gap-2 bg-blue-300 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-sm dark:bg-blue-200 dark:text-gray-900">
              <Linkedin size={16} /> LinkedIn
            </span>
          </a>
          <a href="/blog">
            <span className="inline-flex items-center gap-2 bg-purple-300 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-sm dark:bg-purple-200 dark:text-gray-900">
              <FileText size={16} /> Blog
            </span>
          </a>
          <a href="mailto:alfinurdanialin900@gmail.com">
            <span className="inline-flex items-center gap-2 bg-yellow-300 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-sm dark:bg-yellow-400 dark:text-gray-900">
              <Mail size={16} /> Email
            </span>
          </a>
          <a href="https://dribbble.com/alfiii2">
            <span className="inline-flex items-center gap-2 bg-green-300 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-sm dark:bg-green-400 dark:text-gray-900">
              <BookOpen size={16} /> Dribble
            </span>
          </a>
        </div>
      </section>
      <section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Karya & Proyek
          </h1>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek pilihan yang menunjukkan keahlian
            saya di berbagai bidang desain dan pengembangan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <ProjectCard
              key={index}
              category={project.category}
              title={project.title}
              count={project.count}
              imageUrl={project.imageUrl}
              wide={project.wide}
            />
          ))}
        </div>
      </section>
      <CarouselSlider />
      <Footer />
    </div>
  );
};

export default Home;
