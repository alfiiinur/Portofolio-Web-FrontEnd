import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Designers",
    description: "Buat desain yang mencuri perhatian dan sesuai brand.",
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131c5a9?q=80&w=820",
  },
  {
    title: "Marketers",
    description: "Alat visual untuk konten promosi dan presentasi produk.",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
  },
  {
    title: "VFX Filmmakers",
    description: "Render cepat, animasi sinematik, dan efek visual AI.",
    imageUrl:
      "https://images.unsplash.com/photo-1593369457935-199233a54b38?q=80&w=870",
  },
  {
    title: "Content creators",
    description:
      "Buat video animasi dengan voiceover dan intro otomatis untuk TikTok, YouTube, Reels.",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=774",
  },
  {
    title: "Content creators",
    description:
      "Buat video animasi dengan voiceover dan intro otomatis untuk TikTok, YouTube, Reels.",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=774",
  },
  {
    title: "Content creators",
    description:
      "Buat video animasi dengan voiceover dan intro otomatis untuk TikTok, YouTube, Reels.",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=774",
  },
];

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="bg-light-background dark:bg-dark-background py-16 transition-colors duration-300">
      {/* Heading & Arrows */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-light-text dark:text-dark-text">
          Boost your professional workflow and productivity
        </h2>
        <div className="space-x-2 hidden md:flex">
          <button
            onClick={handlePrev}
            className="bg-light-border dark:bg-dark-border hover:bg-light-border/70 dark:hover:bg-dark-border/70 text-light-text dark:text-dark-text p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-light-border dark:bg-dark-border hover:bg-light-border/70 dark:hover:bg-dark-border/70 text-light-text dark:text-dark-text p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Card Slider */}
      <div className="relative flex items-center gap-6 overflow-x-auto no-scrollbar">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              className={`flex-shrink-0 rounded-xl cursor-pointer transition-all duration-300 ${
                isActive
                  ? "w-[600px] bg-light-card dark:bg-dark-card"
                  : "w-32 bg-light-border/20 dark:bg-dark-border/20"
              } overflow-hidden h-[400px] text-light-text dark:text-dark-text relative`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                  isActive ? "opacity-40" : "opacity-100"
                }`}
              />
              {isActive ? (
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                  <button className="bg-light-primary dark:bg-dark-primary text-white dark:text-black rounded-full px-4 py-1 mt-4 self-start text-sm font-medium shadow">
                    Sign up
                  </button>
                </div>
              ) : (
                <div className="relative z-10 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/40">
                  <span className="text-lg font-medium rotate-90 whitespace-nowrap text-white">
                    {card.title}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselSlider;
