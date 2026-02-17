import React, { useEffect, useState } from "react";

const images = ["/images/Hero.jpg---", "/images/spa2.jpg", "/images/spa3.jpg"];

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
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Fixed Heading (Not Congested) */}
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-wide">
          Relax & Go Massage
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed">
          Professional, results-focused massage therapy in a calm and private
          setting.
        </p>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition duration-300">
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
