import { motion } from "framer-motion";
import { Leaf, UserCheck, Droplet, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
  {
    icon: <UserCheck size={40} />,
    title: "Private Treatment Room",
    desc: "Enjoy a calm and private massage treatment room in London designed for complete relaxation and comfort.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Professional Therapists",
    desc: "Our certified massage therapists in London provide expert care tailored to your needs.",
  },
  {
    icon: <Leaf size={40} />,
    title: "Tailored Treatments",
    desc: "Every massage session is customised to relieve stress, muscle tension and promote overall wellbeing.",
  },
  {
    icon: <Droplet size={40} />,
    title: "Warm Oils & Hot Stones",
    desc: "Experience deep muscle relaxation with warm oils and hot stone therapy.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Care & Hygiene",
    desc: "We maintain a clean, safe and hygienic spa environment for your peace of mind.",
  },
];

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden" id="why-choose-relax-and-go-massage">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 text-center">
        {/* Responsive Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BA05B] mb-10 sm:mb-12">
          Why Choose Relax & Go Massage in London
        </h2>
<p className="sr-only">
  Relax & Go Massage is a professional spa in London offering private
  treatment rooms, certified therapists, and personalised massage therapy
  designed for stress relief and muscle recovery.
</p>
        {/* Infinite Scroll Wrapper */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25, // slower animation
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[250px] 
                  sm:min-w-[280px] 
                  md:min-w-[300px]
                  flex flex-col items-center 
                  bg-gray-50 
                  rounded-2xl 
                  shadow-md 
                  p-6 
                  hover:shadow-xl 
                  transition
                "
              >
                <div className="text-[#7BA05B] mb-3">{item.icon}</div>

                <h3 className="font-semibold text-[#7BA05B] text-lg sm:text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
