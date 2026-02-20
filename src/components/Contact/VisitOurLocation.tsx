import { MapPin, Building2, Flag } from "lucide-react";
import { motion } from "framer-motion";

const VisitOurLocation: React.FC = () => {
  // const latitude = 51.40210024806476;
  // const longitude = -0.34687075050120747;

  const googleMapsUrl = `https://www.google.com/maps/place/29+Creek+Rd,+Molesey,+East+Molesey+KT8+9BE,+UK/@51.4021002,-0.3468708,18z/data=!3m1!4b1!4m10!1m2!2m1!1s29+Creek+Road,+East+Molesey+KT8BE!3m6!1s0x48760b112285ea69:0x402ca50f7dccf42b!8m2!3d51.4020986!4d-0.3444353!15sCiEyOSBDcmVlayBSb2FkLCBFYXN0IE1vbGVzZXkgS1Q4QkWSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11b8v4qn7x?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D`;

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1244.5259721139214!2d-0.34687075050120747!3d51.40210024806476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b112285ea69%3A0x402ca50f7dccf42b!2s29%20Creek%20Rd%2C%20Molesey%2C%20East%20Molesey%20KT8%209BE%2C%20UK!5e0!3m2!1sen!2snp!4v1771567105160!5m2!1sen!2snp"
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
              <span>29 Creek Road, East Molesey KT8BE</span>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="text-[#7BA05B] w-5 h-5" />
              <span>East Molesey</span>
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
