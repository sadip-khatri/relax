import { motion } from "framer-motion";
import peaceful from "../../assets/About/peaceful.png";
import clean from "../../assets/About/clean.png";
import product from "../../assets/About/product.png";
const spaces = [
  {
    title: "Peaceful Environment",
    image: peaceful,
    description:
      "Designed to provide calmness and serenity from the moment you walk in.",
  },
  {
    title: "Spotlessly Clean",
    image: clean,
    description:
      "Strict hygiene protocols ensure a safe and comfortable experience.",
  },
  {
    title: "Premium Products",
    image: product,
    description: "We use only high-quality oils and therapeutic products.",
  },
];

export default function PrivateTreatmentSpace() {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-5xl font-bold text-[#7BA05B] mb-12"
        >
          Our Private Treatment Space
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {spaces.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 text-[#7BA05B]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xl">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
