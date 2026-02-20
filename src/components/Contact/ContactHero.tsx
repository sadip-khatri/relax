import { motion } from "framer-motion";
import ContactHeroImg from "../../assets/Contact/Hero.jpg";

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white overflow-hidden md:bg-fixed"
      style={{
        backgroundImage: `url(${ContactHeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
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
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto opacity-90"
        >
          We're here to answer your questions and help you book your perfect
          treatment
        </motion.p>
      </div>
    </section>
  );
}
