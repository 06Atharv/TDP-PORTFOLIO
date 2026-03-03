import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#081426] text-gray-300 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= COMPANY INFO ================= */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Trimurti <span className="text-orange-500">Die & Pattern</span>
          </h2>

          <p className="text-sm leading-relaxed">
            Precision machining, CNC turning, VMC operations, plating,
            and quality-assured industrial components delivering
            micron-level accuracy and reliability.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
            <li><Link to="/machinery" className="hover:text-orange-500 transition">Machinery</Link></li>
            <li><Link to="/products" className="hover:text-orange-500 transition">Products</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 transition">CNC Turning</li>
            <li className="hover:text-orange-500 transition">VMC Machining</li>
            <li className="hover:text-orange-500 transition">Surface Grinding</li>
            <li className="hover:text-orange-500 transition">Electroplating</li>
            <li className="hover:text-orange-500 transition">Quality Assurance</li>
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Chinchwad, Pune, Maharashtra</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+91 XXXXX XXXXX</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>info@trimurtidie.com</span>
            </li>

          </ul>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Trimurti Die & Pattern. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;