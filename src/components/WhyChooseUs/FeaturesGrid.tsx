import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8 bg-[#7BA05B] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7.03 2 3 6.03 3 11v7a3 3 0 003 3h12a3 3 0 003-3v-7c0-4.97-4.03-9-9-9z"></path>
        <path d="M12 11v4"></path>
        <circle cx="12" cy="16" r="1"></circle>
      </svg>
    ),
    title: "Private Treatment Room",
    description:
      "Experience complete privacy and comfort in our dedicated treatment space",
    points: [
      "Soundproof and peaceful environment",
      "Temperature controlled for comfort",
      "Calming ambiance with soft lighting",
    ],
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8 bg-[#7BA05B] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 14v7m0 0a5 5 0 005-5h-10a5 5 0 005 5z"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Professional Therapist",
    description:
      "Certified massage therapist with years of experience and training",
    points: [
      "Fully certified and insured",
      "10+ years of experience",
      "Continuous professional development",
    ],
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8 text-yellow-500 mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3 7H9l3-7zM9 9h6v12H9V9z"></path>
      </svg>
    ),
    title: "Tailored Treatments",
    description:
      "Every session is customized to your specific needs and preferences",
    points: [
      "Consultation before each session",
      "Adjustable pressure levels",
      "Focus on your problem areas",
    ],
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-8 h-8 bg-[#7BA05B] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 3a9 9 0 110 18 9 9 0 010-18z"></path>
        <path d="M9 12h6"></path>
      </svg>
    ),
    title: "Premium Products",
    description: "High-quality massage oils, hot stones, and fresh linens",
    points: [
      "Natural, skin-friendly oils",
      "Heated volcanic stones",
      "Fresh linens every session",
    ],
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-8 h-8 bg-[#7BA05B] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2"></path>
        <path d="M17 9l-5 5-5-5"></path>
      </svg>
    ),
    title: "Hygienic Environment",
    description: "Spotlessly clean facility with strict hygiene protocols",
    points: [
      "Sanitized between each client",
      "Hospital-grade cleaning products",
      "Fresh air circulation system",
    ],
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-8 h-8 text-yellow-500 mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
        <path d="M16 2v4M8 2v4M3 10h18"></path>
      </svg>
    ),
    title: "Flexible Scheduling",
    description: "Convenient booking options that fit your busy lifestyle",
    points: [
      "Same-day appointments available",
      "Evening and weekend slots",
      "Easy WhatsApp booking",
    ],
  },
];

const FeaturesGrid: React.FC = () => {
  const [visibleIds, setVisibleIds] = useState<number[]>([]);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting) {
            setVisibleIds((prev) => {
              if (!prev.includes(id)) return [...prev, id];
              return prev;
            });
          } else {
            setVisibleIds((prev) => prev.filter((vid) => vid !== id));
          }
        });
      },
      { threshold: 0.3 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-[#7BA05B] font-bold text-3xl sm:text-5xl text-center mb-10">
        What Makes Us Different
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {features.map(({ id, icon, title, description, points }, index) => {
          const isVisible = visibleIds.includes(id);

          return (
            <div
              key={id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-id={id}
              className={`
                bg-white rounded-xl p-6 flex flex-col items-start text-gray-800
                transform transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:scale-105 hover:shadow-xl
              `}
            >
              {icon}
              <h3 className="font-bold text-2xl mb-3 text-[#7BA05B]">
                {title}
              </h3>
              <p className="text-xl mb-3">{description}</p>
              <ul className="list-disc list-inside text-xl space-y-1 text-gray-600">
                {points.map((point, i) => (
                  <li key={i} className="text-[#7BA05B]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesGrid;
