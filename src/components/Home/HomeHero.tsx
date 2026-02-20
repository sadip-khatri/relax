import React, { useEffect, useState } from "react";
import homehero1 from "../../assets/home/homehero1.png";
import homehero2 from "../../assets/home/Homehero2.png";
import homehero3 from "../../assets/home/homehero3.png";

const images = [homehero1, homehero2, homehero3];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundAttachment: "fixed", // Parallax Effect
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight lg:leading-tight tracking-wide">
          Where Stress Ends and Healing Begins
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl md:max-w-2xl text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
          Professional massage treatments tailored to relieve tension and renew
          your energy.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/07848930217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 sm:mt-8 bg-[#D4AF37] hover:bg-[#C19A2B] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium shadow-lg transition duration-300">
            Chat on WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
