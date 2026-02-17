import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-[#7BA05B] text-white py-20 px-6 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto"
      >
        We're here to answer your questions and help you book your perfect
        treatment
      </motion.p>
    </section>
  );
}
