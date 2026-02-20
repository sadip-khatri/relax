import { motion } from "framer-motion";
import aboutmeet from "../../assets/home/aboutmeet.png";

const therapist = {
  image: aboutmeet,
  description:
    "Our therapists bring together extensive professional training, practical experience, and a genuine passion for wellness to deliver exceptional care. Each session begins with understanding your individual needs and concerns, allowing treatments to be carefully tailored for the best possible results.",
  description2:
    "With a calm and attentive approach, our therapists create a peaceful environment where you can fully unwind and feel confident in the care you receive. Their dedication ensures consistently high-quality treatments.",
};

export default function MeetTherapist() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="order-1"
        >
          <img
            src={therapist.image}
            // alt={therapist.name}
            className="
              rounded-2xl shadow-lg w-full object-cover
              h-[260px]
              sm:h-[320px]
              md:h-[400px]
              lg:h-[480px]
              xl:h-[520px]
              transition duration-700 hover:scale-[1.02]
            "
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="order-2 space-y-4 sm:space-y-5 md:space-y-6"
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
            Experience You Can Trust.
          </h2>

          {/* Therapist name */}
          <h3
            className="
            font-semibold text-gray-800
            text-lg
            sm:text-xl
            md:text-2xl
          "
          >
            {/* {therapist.name} */}
          </h3>

          {/* Title */}
          <p
            className="
            text-[#7BA05B] font-semibold
            text-base
            sm:text-lg
            md:text-xl
          "
          >
            {/* {therapist.title} */}
          </p>

          {/* Description */}
          <p
            className="
            text-gray-600 leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
          "
          >
            {therapist.description}
          </p>

          <p
            className="
            text-gray-600 leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
          "
          >
            {therapist.description2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
