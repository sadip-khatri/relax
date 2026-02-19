import { motion } from "framer-motion";
import homehero1 from "../../assets/home/homehero1.png";
const story = {
  title: "Our Story",
  image: homehero1,
  description:
    "We believe wellness should be accessible, personal, and transformative. Our experienced therapists combine traditional techniques with modern approaches to create treatments tailored specifically to your needs. Whether you're seeking relaxation or therapeutic care, we are here to support your journey.",
};

export default function OurStory() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <motion.img
          src={story.image}
          alt={story.title}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="rounded-2xl shadow-md w-full h-64 sm:h-80 md:h-96 object-cover"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Title — SAME SCALE AS Treatments */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] mb-4">
            {story.title}
          </h2>

          {/* Body — SAME SCALE AS Treatments */}
          <p className="text-lg sm:text-xl text-base text-gray-600 leading-relaxed">
            {story.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
