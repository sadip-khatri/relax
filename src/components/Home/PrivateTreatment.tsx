import { motion } from "framer-motion";

const PrivateTreatment = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src="/src/assets/Hero.jpg"
            alt="Private Treatment Room"
            className="
              rounded-2xl 
              shadow-lg 
              w-full 
              h-64 sm:h-80 md:h-96 lg:h-[500px] 
              object-cover
            "
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7BA05B]">
            Private Treatment Room
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
            Relax in a private and fully equipped treatment room designed for
            comfort and professionalism.
          </p>

          <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg md:text-xl">
            <li>
              <span className="text-yellow-500 mr-2">✔</span>
              Professional certified therapist
            </li>
            <li>
              <span className="text-yellow-500 mr-2">✔</span>
              Relaxed and safe environment
            </li>
            <li>
              <span className="text-yellow-500 mr-2">✔</span>
              Fresh towels and soft blankets
            </li>
            <li>
              <span className="text-yellow-500 mr-2">✔</span>
              Hygienic and calming atmosphere
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateTreatment;
