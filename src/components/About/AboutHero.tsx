import { motion } from "framer-motion";
import aboutBg from "../../assets/About/abouthero.png";

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl opacity-90 mx-auto text-white"
        >
          Your wellness journey begins with understanding and care.
        </motion.p>
      </div>
    </section>
  );
}
