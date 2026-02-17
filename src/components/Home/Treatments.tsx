import React from "react";
import { motion } from "framer-motion";

const treatments = [
  {
    title: "Relaxation Massage & Hot Stones",
    image: "/images/t1.jpg",
    features: ["60/90 Minutes", "Hot Stone Therapy", "Deep relaxation"],
  },
  {
    title: "Deep Tissue Massage",
    image: "/images/t2.jpg",
    features: ["60/90 Minutes", "Muscle tension relief", "Pain management"],
  },
  {
    title: "Thai Massage",
    image: "/images/t3.jpg",
    features: [
      "Stretching techniques",
      "Energy flow balance",
      "Flexibility improvement",
    ],
  },
  {
    title: "Head Massage",
    image: "/images/t4.jpg",
    features: ["Stress relief", "Improves circulation", "Mental clarity"],
  },
  {
    title: "Foot Massage",
    image: "/images/t5.jpg",
    features: [
      "Reflexology techniques",
      "Pressure point therapy",
      "Full body relaxation",
    ],
  },
  {
    title: "Office Massage - Mini Escape",
    image: "/images/t6.jpg",
    features: [
      "30 Minutes",
      "Neck & shoulder focus",
      "Perfect for busy schedule",
    ],
  },
];

export default function Treatments() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 overflow-hidden">
      <div className="max-w-1xl mx-auto">
        {/* Responsive Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] text-center mb-10 sm:mb-12"
        >
          Our Treatments
        </motion.h2>

        {/* Responsive Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-8
          "
        >
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="
                bg-white 
                rounded-2xl 
                shadow-md 
                overflow-hidden 
                hover:shadow-xl 
                hover:-translate-y-2 
                transition-all 
                duration-300
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover"
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-[#7BA05B] text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
