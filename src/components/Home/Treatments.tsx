import { motion } from "framer-motion";
import treatment1 from "../../assets/home/treatment1.png";
import treatment2 from "../../assets/home/treatment2.png";
// import treatment3 from "../../assets/home/treatment3.png"; // replace / import your other images
import treatment4 from "../../assets/home/treatment4.png";
import treatment5 from "../../assets/home/treatment5.png";
import treatment6 from "../../assets/home/treatment6.png";

const treatments = [
  {
    title: "Relaxation Massage & Hot Stones",
    image: treatment1,
    features: ["60/90 Minutes", "Hot Stone Therapy", "Deep relaxation"],
  },
  {
    title: "Deep Tissue Massage",
    image: treatment2,
    features: ["60/90 Minutes", "Muscle tension relief", "Pain management"],
  },
  {
    title: "Thai Massage",
    // image: treatment3,
    features: [
      "Stretching techniques",
      "Energy flow balance",
      "Flexibility improvement",
    ],
  },
  {
    title: "Head Massage",
    image: treatment4,
    features: ["Stress relief", "Improves circulation", "Mental clarity"],
  },
  {
    title: "Foot Massage",
    image: treatment5,
    features: [
      "Reflexology techniques",
      "Pressure point therapy",
      "Full body relaxation",
    ],
  },
  {
    title: "Office Massage - Mini Escape",
    image: treatment6,
    features: [
      "30 Minutes",
      "Neck & shoulder focus",
      "Perfect for busy schedule",
    ],
  },
];

export default function Treatments() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        {/* Responsive Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] text-center mb-10 sm:mb-12"
        >
          Our Treatments
        </motion.h2>

        {/* Responsive Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-[#7BA05B] text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
