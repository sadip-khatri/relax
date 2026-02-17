import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  SparkleIcon,
  CalendarIcon,
  LeafIcon,
} from "lucide-react";

// Card data
const cards = [
  {
    title: "Professional Care",
    description:
      "Certified therapists with years of experience in all treatments.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Premium Products",
    description:
      "High-quality oils, hot stones, and clean linens for every session.",
    icon: SparkleIcon,
  },
  {
    title: "Flexible Booking",
    description: "Easy scheduling with same-day appointments available.",
    icon: CalendarIcon,
  },
  {
    title: "Personalized Treatment",
    description:
      "Every session tailored to your specific needs and preferences.",
    icon: LeafIcon,
  },
];

const WhatsIncluded = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-1xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl font-bold text-center text-[#7BA05B] mb-14"
        >
          What's Included
        </motion.h2>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }} // smooth scroll
            transition={{
              repeat: Infinity,
              duration: 15, // faster scroll than before
              ease: "linear",
            }}
          >
            {[...cards, ...cards].map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="min-w-[300px] flex-shrink-0 flex flex-col items-center bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  {/* Floating Icon */}
                  <motion.div
                    className="mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-14 h-14 text-[#7BA05B]" />
                  </motion.div>

                  <h3 className="font-bold text-2xl text-[#7BA05B] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-lg text-center">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile/Tablet stacked layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <motion.div
                  className="flex justify-center items-center mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-14 h-14 text-[#7BA05B]" />
                </motion.div>
                <h3 className="font-bold text-2xl text-[#7BA05B] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-lg">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
