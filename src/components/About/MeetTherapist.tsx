import { motion } from "framer-motion";

const therapist = {
  name: "Anna Smith",
  title: "Professional Certified Therapist",
  image: "/images/therapist.jpg",
  description:
    "With over 10 years of experience, Anna specializes in holistic therapies designed to restore balance, reduce stress, and improve overall wellbeing.",
  specialties: [
    "Stress & anxiety reduction",
    "Deep tissue therapy",
    "Holistic wellness approach",
    "Pain relief management",
  ],
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
            Meet Your Therapist
          </h2>

          <h3 className="text-xl font-semibold mb-1">{therapist.name}</h3>
          <p className="text-[#7BA05B] mb-4 text-xl font-bold">
            {therapist.title}
          </p>

          <p className="text-gray-600 mb-4 text-xl">{therapist.description}</p>

          <ul className="text-gray-600 space-y-1 text-xl">
            {therapist.specialties.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
