import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const contactItems = [
    { icon: <Phone size={40} />, title: "Phone", info: "+44 20 1234 5678" },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp",
      info: "+44 20 1234 5678",
    },
    {
      icon: <Mail size={40} />,
      title: "Email",
      info: "info@relaxinghands.com",
    },
    {
      icon: <Clock size={40} />,
      title: "Opening Hours",
      info: "Mon–Sun | 9AM – 8PM",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] mb-10 sm:mb-12"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* 🔥 Continuous Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#7BA05B] mb-3"
              >
                {item.icon}
              </motion.div>

              <p className="font-semibold text-lg sm:text-xl text-[#7BA05B]">
                {item.title}
              </p>

              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {item.info}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
