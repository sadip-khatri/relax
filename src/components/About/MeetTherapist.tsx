import { motion } from "framer-motion";
import aboutmeet from "../../assets/home/aboutmeet.png";
const therapist = {
  name: "Anna Smith",
  title: "Professional Certified Therapist",
  image: aboutmeet,
  description:
    "Our therapists bring together extensive professional training, practical experience, and a genuine passion for wellness to deliver exceptional care. Each session begins with understanding your individual needs and concerns, allowing treatments to be carefully tailored for the best possible results. Whether you are seeking relief from stress, easing muscle tension, or simply a moment of relaxation, every detail is thoughtfully considered to enhance your comfort and well-being.",
  description2:
    "With a calm and attentive approach, our therapists create a peaceful environment where you can fully unwind and feel confident in the care you receive. Their dedication to ongoing education and skill development ensures that they stay up to date with the latest techniques and industry standards. This commitment to excellence allows us to provide consistentlyhigh-quality treatments, helping you leave each visit feeling refreshed, renewed, and completely at ease.",
};

export default function MeetTherapist() {
  return (
    <section className="py-16 px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={therapist.image}
          alt={therapist.name}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="rounded-2xl shadow-md w-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#7BA05B] mb-2">
            Experience You Can Trust.
          </h2>
          {/* <h3 className="text-xl font-semibold mb-1">{therapist.name}</h3> */}
          <p className="text-[#7BA05B] mb-4 text-xl font-bold">
            {/* {therapist.title} */}
          </p>
          <p className="text-gray-600 mb-4 text-xl">{therapist.description}</p>
          <p className="text-gray-600 mb-4 text-xl">{therapist.description2}</p>
          -
        </motion.div>
      </div>
    </section>
  );
}
