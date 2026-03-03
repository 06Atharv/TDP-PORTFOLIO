import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full text-white px-2 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    Trimurti Die & Pattern
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-semibold text-lg">
                    <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                    <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
                    <li><Link to="/products" className="hover:text-orange-400">Products</Link></li>
                    <li><Link to="/machinery" className="hover:text-orange-400">Machinery</Link></li>
                    <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
                </ul>

                {/* Mobile Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>

            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[#0b1a2e]/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${open ? "max-h-60 py-4" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-6 font-semibold text-lg">
                    <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setOpen(false)}>Service</a></li>
                    <li><a href="#" onClick={() => setOpen(false)} />Products</li>
                    <li><a href="#" onClick={() => setOpen(false)}>Machinery</a></li>
                    <li><a href="#" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;