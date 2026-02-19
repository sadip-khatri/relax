import { motion } from "framer-motion";
import treatment1 from "../../assets/home/treatment1.png";
import treatment2 from "../../assets/home/treatment2.png";
// import treatment3 from "../../assets/home/treatment3.png"; // replace / import your other images
import treatment4 from "../../assets/home/treatment4.png";
import treatment5 from "../../assets/home/treatment5.png";
import treatment6 from "../../assets/home/treatment6.png";

const treatments = [
  {
    id: 1,
    title: "Relaxation Massage & Hot Stones",
    description:
      "A soothing full-body therapy combining traditional massage techniques with warm basalt stones. The gentle heat melts away muscle tension while calming your nervous system.",
    bullets: [
      "Reduces stress and anxiety",
      "Improves blood circulation",
      "Promotes muscle relaxation",
      "Enhances sleep quality",
    ],
    duration: "60 Minutes",
    progress: "75%",
    image: treatment1,
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description:
      "Designed to target deeper muscle layers, this therapy relieves chronic tightness and restores flexibility. Perfect for athletes or those with persistent discomfort.",
    bullets: [
      "Targets deep muscle layers",
      "Reduces chronic pain",
      "Improves flexibility",
      "Enhances posture",
    ],
    duration: "75 Minutes",
    progress: "85%",
    image: treatment2,
  },
  {
    id: 3,
    title: "Thai Massage – Signature Focus",
    description:
      "A dynamic blend of assisted stretching and rhythmic pressure techniques that stimulates energy flow and improves mobility.",
    bullets: [
      "Boosts energy levels",
      "Improves joint mobility",
      "Enhances circulation",
      "Relieves stiffness",
    ],
    duration: "60 Minutes",
    progress: "70%",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1200",
  },
  {
    id: 4,
    title: "Aromatherapy Massage",
    description:
      "Essential oils are blended with relaxing massage techniques to create a deeply calming sensory experience.",
    bullets: [
      "Enhances emotional wellbeing",
      "Relieves stress",
      "Improves mood",
      "Promotes relaxation",
    ],
    duration: "60 Minutes",
    progress: "65%",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200",
  },
  {
    id: 5,
    title: "Reflexology Therapy",
    description:
      "Focused pressure applied to reflex points on the feet to stimulate natural healing processes throughout the body.",
    bullets: [
      "Improves nerve function",
      "Boosts energy",
      "Enhances circulation",
      "Relieves tension",
    ],
    duration: "45 Minutes",
    progress: "60%",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200",
  },
  {
    id: 6,
    title: "Office Massage – Mini Escape",
    description:
      "A quick and refreshing massage designed for office workers to relieve tension and recharge during a busy day.",
    bullets: [
      "Neck & shoulder focus",
      "Perfect for busy schedule",
      "Reduces work stress",
      "Boosts energy & productivity",
    ],
    duration: "30 Minutes",
    progress: "60%",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200",
  },
];
/* ================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const ExploreOurTreatments = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-1xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#7BA05B] mb-14"
        >
          Explore Our Treatments
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-16"
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              variants={cardVariants}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 sm:p-8"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image with zoom animation */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 overflow-hidden rounded-2xl"
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#7BA05B] mb-4">
                    {treatment.title}
                  </h3>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                    {treatment.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {treatment.bullets.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: false }}
                        className="flex text-gray-700 text-sm sm:text-base"
                      >
                        <span className="text-yellow-600 mr-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Duration Bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: treatment.progress }}
                      transition={{ duration: 1 }}
                      viewport={{ once: false }}
                      className="bg-[#7BA05B] h-2 rounded-full"
                    />
                  </div>

                  <span className="text-sm sm:text-base text-gray-500">
                    Duration: {treatment.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreOurTreatments;
