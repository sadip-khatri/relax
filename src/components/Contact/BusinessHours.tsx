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
  hidden: { opacity: 0, scale: 0.95 },
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
    <section className="w-full py-10 sm:py-14 bg-[#F3F4F6] overflow-hidden px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-2xl mx-auto border rounded-xl p-5 sm:p-8 text-center bg-white shadow-lg"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#7BA05B]"
        >
          Business Hours
        </motion.h2>

        {/* Hours List */}
        <div className="space-y-4 text-gray-700">
          {hours.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-base sm:text-lg md:text-xl gap-1 sm:gap-0 border-b pb-3"
            >
              <span className="font-medium">{item.day}</span>
              <span>{item.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <button className="w-full sm:w-auto bg-[#7BA05B] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition duration-300">
            Appointments available by booking only
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BusinessHours;
