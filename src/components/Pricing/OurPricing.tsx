import React from "react";
import { motion } from "framer-motion";

const pricingOptions = [
  {
    id: 1,
    title: "45 Minutes",
    price: "£65",
    description: "Perfect introduction to massage therapy",
    features: [
      "Full body massage",
      "Warm massage oils",
      "Private treatment room",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
  {
    id: 2,
    title: "60 Minutes",
    price: "£80",
    description: "Most popular choice for full relaxation",
    features: [
      "Extended full body massage",
      "Hot stone option available",
      "Aromatherapy oils",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
  {
    id: 3,
    title: "90 Minutes",
    price: "£120",
    description: "Ultimate relaxation experience",
    features: [
      "Deep tissue or relaxation",
      "Hot stones included",
      "Extended focus areas",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
  {
    id: 4,
    title: "Mini Escape",
    price: "£50",
    description: "30-minute express treatment",
    features: [
      "Neck, shoulders & back",
      "Perfect for busy schedules",
      "Quick stress relief",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
  {
    id: 5,
    title: "4 Hour Package",
    price: "£280",
    description: "Save £40 with our package deal",
    features: [
      "Four 60-minute sessions",
      "Mix and match treatments",
      "Valid for 6 months",
      "Priority booking",
    ],
    buttonText: "Book Package",
    highlight: true,
    badgeText: "BEST VALUE",
  },
];

const OurPricing: React.FC = () => {
  return (
    <section className="bg-[#f4f4f2] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#7BA05B] mb-12 sm:mb-16">
          Our Pricing
        </h2>

        {/* Top 3 Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pricingOptions
            .slice(0, 3)
            .map(({ id, title, price, description, features, buttonText }) => (
              <motion.div
                key={id}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-[#7BA05B] font-semibold mb-2 text-lg sm:text-xl">
                  {title}
                </h3>
                <p className="text-4xl sm:text-5xl font-bold text-[#7BA05B] mb-4">
                  {price}
                </p>
                <p className="text-gray-500 text-lg sm:text-xl mb-6">
                  {description}
                </p>
                <ul className="space-y-2 text-gray-600 text-base sm:text-lg mb-6">
                  {features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="bg-[#7BA05B] text-white px-6 py-2 sm:py-3 cursor-pointer rounded-full hover:bg-green-800 transition-all duration-300">
                  {buttonText}
                </button>
              </motion.div>
            ))}
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {pricingOptions
            .slice(3)
            .map(
              ({
                id,
                title,
                price,
                description,
                features,
                buttonText,
                highlight,
                badgeText,
              }) => (
                <motion.div
                  key={id}
                  className={`rounded-2xl shadow-lg p-6 sm:p-8 text-center relative ${
                    highlight
                      ? "bg-orange-500 text-white shadow-xl"
                      : "bg-white text-gray-800"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {highlight && badgeText && (
                    <span className="absolute top-4 right-4 bg-white text-orange-500 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                      {badgeText}
                    </span>
                  )}
                  <h3
                    className={`font-semibold mb-2 text-lg sm:text-xl ${
                      highlight ? "" : "text-[#7BA05B]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-4xl sm:text-5xl font-bold mb-4 ${
                      highlight ? "" : "text-[#7BA05B]"
                    }`}
                  >
                    {price}
                  </p>
                  <p className="text-lg sm:text-xl mb-6">{description}</p>
                  <ul className="space-y-2 text-base sm:text-lg mb-6">
                    {features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <button
                    className={`px-6 py-2 sm:py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 ${
                      highlight
                        ? "bg-white text-orange-500 hover:bg-gray-100"
                        : "bg-[#7BA05B] text-white hover:bg-green-800"
                    }`}
                  >
                    {buttonText}
                  </button>
                </motion.div>
              ),
            )}
        </div>
      </div>
    </section>
  );
};

export default OurPricing;
