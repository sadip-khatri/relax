import { MapPin, Building2, Flag, Train, ParkingCircle } from "lucide-react";
import { motion } from "framer-motion";

const VisitOurLocation: React.FC = () => {
  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="max-w-[90vw] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Map */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#7BA05B] text-5xl font-bold mb-3">
            Visit Our Location
          </h2>
          <img
            src="https://images.unsplash.com/photo-1582582494700-8c9c8d6b63b0"
            alt="World Map"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>

        {/* Right - Info Card */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <h3 className="text-[#7BA05B] text-2xl font-bold">Find Us Here</h3>

          <div className="space-y-3 text-lg text-gray-600">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#7BA05B] w-5 h-5" />
              <span>123 Wellness Street</span>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="text-[#7BA05B] w-5 h-5" />
              <span>London, SW1A 1AA</span>
            </div>

            <div className="flex items-center gap-3">
              <Flag className="text-[#7BA05B] w-5 h-5" />
              <span>United Kingdom</span>
            </div>
          </div>

          <button className="w-full bg-[#7BA05B] text-white py-2 rounded-lg hover:bg-green-700 transition">
            Get Directions
          </button>

          <div className="pt-3 space-y-3 text-lg text-gray-600">
            <div className="flex items-center gap-3">
              <Train className="text-[#7BA05B] w-5 h-5" />
              <span>Nearest Station: Oxford Circus</span>
            </div>

            <div className="flex items-center gap-3">
              <ParkingCircle className="text-[#7BA05B] w-5 h-5" />
              <span>Free parking available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitOurLocation;
