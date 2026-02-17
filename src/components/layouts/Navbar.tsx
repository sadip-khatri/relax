import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-100 border-b border-gray-200 z-50">
        <div className="max-[90vw] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Relax & Go Massage Logo"
                  className="h-14 sm:h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-10 text-lg lg:text-xl font-medium">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                Home
              </Link>
              <Link
                to="about"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                About
              </Link>
              <Link
                to="treatments"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                Treatments
              </Link>
              <Link
                to="pricing"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                Pricing
              </Link>
              <Link
                to="whychooseus"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                Why Choose Us
              </Link>
              <Link
                to="contactus"
                className="text-gray-700 hover:text-[#7BA05B] transition"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 border-t border-gray-200 px-6 py-4 space-y-4 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              About
            </Link>
            <Link
              to="/treatments"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              Treatments
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              Pricing
            </Link>
            <Link
              to="/whychooseus"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              Why Choose Us
            </Link>
            <Link
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#7BA05B]"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
