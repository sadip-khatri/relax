import { motion } from "framer-motion";
import Hero from "../../assets/treatments/hero.jpg";

export default function TreatmentHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Our Treatments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl opacity-90 mx-auto"
        >
          Discover the perfect massage therapy tailored to your needs.
        </motion.p>
      </div>
    </section>
  );
}
