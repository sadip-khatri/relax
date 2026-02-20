import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "11:00 AM - 7:00 PM" },
  { day: "Tuesday", time: "11:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "11:00 AM - 7:00 PM" },
  { day: "Thursday", time: "11:00 AM - 7:00 PM" },
  { day: "Friday", time: "11:00 AM - 7:00 PM" },
  { day: "Saturday", time: "11:00 AM - 7:00 PM" },
  { day: "Sunday", time: "11:00 AM - 7:00 PM" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BusinessHours: React.FC = () => {
  return (
    <section className="w-full py-12 bg-[#F3F4F6] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-lg mx-auto border-2 rounded-xl p-6 text-center bg-white shadow-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[#7BA05B] text-5xl font-bold mb-8"
        >
          Business Hours
        </motion.h2>

        <div className="space-y-2 text-gray-700">
          {hours.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-between text-xl mb-6"
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-6">
          <button className="bg-[#7BA05B] text-white px-6 py-6 rounded-full text-lg font-bold hover:bg-green-700 transition">
            Appointments available by booking only
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BusinessHours;
