import { MapPin, Building2, Flag } from "lucide-react";
import { motion } from "framer-motion";

const VisitOurLocation: React.FC = () => {
  // const latitude = 51.40210024806476;
  // const longitude = -0.34687075050120747;

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=KC+Pharmacy+%26+Travel+Clinic+Teddington";

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.743520892138!2d-0.34367281063032423!3d51.426137899070376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b7c915192c9%3A0xe3deef29c1ecfca7!2sKC%20Pharmacy%20%26%20Travel%20Clinic!5e0!3m2!1sen!2snp!4v1778073986201!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
              <span>23 Broad St, teddington TW11 8QZ</span>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="text-[#7BA05B] w-5 h-5" />
              <span>Teddington</span>
            </div>

            <div className="flex items-center gap-3">
              <Flag className="text-[#7BA05B] w-5 h-5" />
              <span>United Kingdom</span>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-[#7BA05B] text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitOurLocation;
