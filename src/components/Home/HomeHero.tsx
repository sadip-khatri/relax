import React, { useEffect, useState } from "react";
import homehero1 from "../../assets/home/homehero1.png";
import homehero2 from "../../assets/home/Homehero2.png";

const images = [
  { src: homehero1, alt: "Relax & Go Massage treatment room London" },
  {
    src: homehero2,
    alt: "Professional spa therapy massage at Relax & Go Massage London",
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Hero section – Relax & Go Massage in London"
      className="relative w-full h-screen overflow-hidden"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-wide">
          Relax & Go Massage – Calm Body, Clear Mind
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-gray-200 text-lg md:text-xl">
          Expert massage treatments tailored for relaxation, stress relief, and
          total wellness in the heart of London.
        </p>
        <a
          href="https://wa.me/447848930217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 bg-[#D4AF37] hover:bg-[#C19A2B] text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300">
            Chat on WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
