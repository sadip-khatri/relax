import { motion } from "framer-motion";
import HeroImg from "../../assets/Hero.jpg"; // ✅ FIXED

const PrivateTreatment = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="order-1"
        >
          <img
            src={HeroImg}
            alt="Private Treatment Room"
            className="
              rounded-2xl shadow-lg w-full object-cover
              h-[240px]
              sm:h-[300px]
              md:h-[380px]
              lg:h-[460px]
              xl:h-[520px]
              transition duration-700 hover:scale-[1.02]
            "
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="order-2"
        >
          {/* Heading */}
          <h2
            className="
            font-bold text-[#7BA05B]
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
          >
            Private Treatment Room
          </h2>

          {/* Description */}
          <p
            className="
            mt-4 sm:mt-5 md:mt-6
            text-gray-600 leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
          "
          >
            Relax in a private and fully equipped treatment room designed for
            comfort, professionalism, and complete relaxation.
          </p>

          {/* List */}
          <ul
            className="
            mt-5 sm:mt-6 md:mt-7
            space-y-2 sm:space-y-3 md:space-y-4
            text-gray-700
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
          "
          >
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Professional certified therapist
            </li>

            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Relaxed and safe environment
            </li>

            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Fresh towels and soft blankets
            </li>

            <li className="flex items-center">
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
