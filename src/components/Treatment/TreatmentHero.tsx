import { motion } from "framer-motion";
import Hero from "../../assets/treatments/hero.jpg";

export default function TreatmentHero() {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Our Treatments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto"
        >
          Discover the perfect massage therapy tailored to your needs.
        </motion.p>
      </div>
    </section>
  );
}
