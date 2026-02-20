import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VisionStoryImg from "../../assets/About/VisionStory.png";

export default function VisionStory() {
  return (
    <section className="bg-gradient-to-b from-[#f8f6f2] to-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative group order-1 lg:order-1"
        >
          <img
            src={VisionStoryImg}
            alt="Relaxing massage"
            className="
              rounded-2xl shadow-xl w-full object-cover
              h-65
              sm:h-80
              md:h-100
              lg:h-120
              xl:h-130
            "
          />

          {/* Decorative element */}
          <div
            className="
            absolute 
            -bottom-4 -right-4
            sm:-bottom-6 sm:-right-6
            w-20 h-20
            sm:w-28 sm:h-28
            lg:w-32 lg:h-32
            bg-[#7BA05B]/20 rounded-full blur-2xl
            group-hover:scale-125 transition duration-500
          "
          ></div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-2"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-bold text-[#7BA05B]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
          >
            Our Vision & Story
          </motion.h2>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-[#7BA05B] rounded"
          />

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="
              text-gray-600 leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              space-y-3 sm:space-y-4
            "
          >
            <p>
              At{" "}
              <span className="font-semibold text-[#7BA05B]">
                Relax&Go Massage
              </span>
              , our vision is to create a peaceful sanctuary where you can
              escape stress and reconnect with your well-being.
            </p>

            <p>
              Inspired by traditional Thai massage techniques, our treatments
              help relieve tension, improve flexibility, and restore energy.
            </p>

            <p>
              Every massage is personalized to ease stress, reduce discomfort,
              and restore balance to your body and mind.
            </p>

            <p>
              Our mission is to ensure every visit leaves you refreshed,
              renewed, and completely relaxed.
            </p>
          </motion.div>

          {/* Button */}
          <Link to="/treatments">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mt-4
                px-6 py-2.5
                sm:px-7 sm:py-3
                md:px-8 md:py-3.5
                text-sm sm:text-base md:text-lg
                bg-[#7BA05B] text-white
                rounded-full shadow-lg
                hover:bg-[#6a8f4d]
                hover:scale-105
                transition duration-300
                w-full sm:w-auto
              "
            >
              Discover Our Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
