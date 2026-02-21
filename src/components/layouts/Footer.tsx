import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#7BA05B] text-white pt-14 pb-6 px-6">
      <div className="max-w-[80vw] mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Relax And Go Massage</h2>
          <p className="text-green-100 text-lg leading-relaxed">
            Experience deep relaxation and rejuvenation in our peaceful, private
            treatment rooms designed to refresh your body and mind.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-100 text-lg">
            <Link to="/">
              <li className="hover:text-white cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-white cursor-pointer">About Us</li>
            </Link>
            <Link to="/treatments">
              <li className="hover:text-white cursor-pointer">
                Our Treatments
              </li>
            </Link>
            <Link to="/pricing">
              <li className="hover:text-white cursor-pointer">Pricing</li>
            </Link>
            <Link to="/whychooseus">
              <li className="hover:text-white cursor-pointer">Why Choose Us</li>
            </Link>
            <Link to="/contactus">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-green-100 text-lg">
            <li>Relaxation Massage</li>
            <li>Deep Tissue Massage</li>
            <li>Thai Massage</li>
            <li>Hot Stone Therapy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-green-100 text-lg">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +44 07848930217
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> relaxandgo@icloud.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> London, UK
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-gray-300" />
            <Instagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-200">
        © {new Date().getFullYear()} Relax And Go Massage. All rights reserved.
      </div>
    </footer>
  );
}
