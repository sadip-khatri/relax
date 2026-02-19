import { motion } from "framer-motion";
import aboutBg from "../../assets/About/abouthero.png"; // replace with your actual image path

export default function AboutHero() {
  return (
    <section
      className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Text content */}
      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto text-white"
        >
          Your wellness journey begins with understanding and care.
        </motion.p>
      </div>
    </section>
  );
}
