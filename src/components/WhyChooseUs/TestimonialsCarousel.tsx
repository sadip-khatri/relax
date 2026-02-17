import React, { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "Best massage I've ever had! The therapist really listened to my needs and focused on my problem areas. The private room was so peaceful and relaxing.",
    name: "Aarohi Lamichhane",
    role: "Regular Client",
  },
  {
    id: 2,
    text: "Professional service from start to finish. The deep tissue massage helped tremendously with my back pain. Highly recommend!",
    name: "Aanjila Subedi",
    role: "Monthly Package Client",
  },
  {
    id: 3,
    text: "The hot stone massage was absolutely divine. I left feeling completely relaxed and rejuvenated. The facility is spotless and the therapist is wonderful.",
    name: "Muskan Khadka",
    role: "First-time Client",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  useEffect(() => {
    resetAutoScroll();
  }, [activeIndex]);

  return (
    <section className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-[#7BA05B] font-bold text-3xl sm:text-5xl text-center mb-10">
        What Our Clients Say
      </h2>

      <div className="relative bg-white rounded-xl p-8 text-gray-800 min-h-[220px] flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out">
        {/* Testimonial Text */}
        <p className="text-sm sm:text-2xl italic mb-6 text-center max-w-3xl">
          “{testimonials[activeIndex].text}”
        </p>

        {/* Client Info Centered */}
        <div className="flex flex-col items-center space-y-1">
          <p className="font-bold text-[#7BA05B] text-center text-xl">
            {testimonials[activeIndex].name}
          </p>
          <p className="text-lg text-gray-500 text-center">
            {/* {testimonials[activeIndex].role} */}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            onClick={() => {
              prevTestimonial();
              resetAutoScroll();
            }}
            aria-label="Previous Testimonial"
            className="bg-green-700 hover:bg-green-800 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button
            onClick={() => {
              nextTestimonial();
              resetAutoScroll();
            }}
            aria-label="Next Testimonial"
            className="bg-green-700 hover:bg-green-800 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
