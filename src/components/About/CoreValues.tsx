import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Lock, BadgeCheck } from "lucide-react";

const values = [
  {
    title: "Professionalism",
    description:
      "Certified therapists with years of experience and strong industry knowledge.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Care",
    description:
      "Every treatment is customized to your unique needs and wellness goals.",
    icon: Heart,
  },
  {
    title: "Privacy & Comfort",
    description:
      "Your comfort and confidentiality are always our top priority.",
    icon: Lock,
  },
  {
    title: "Quality Standards",
    description:
      "We maintain strict hygiene standards and use premium products.",
    icon: BadgeCheck,
  },
];

export default function CoreValues() {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] mb-12"
        >
          Our Core Values
        </motion.h2>

        {/* Stagger Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="
                  bg-white
                  p-6
                  rounded-2xl
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  group
                "
              >
                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center mb-4"
                >
                  <Icon className="w-12 h-12 text-[#7BA05B] group-hover:scale-110 transition-transform duration-300" />
                </motion.div>

                <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-[#7BA05B]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
