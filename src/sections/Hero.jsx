import { useEffect, useState } from "react";
import HeroBgImg from "../assets/images/herobg.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function handleGetQuote() {
    navigate("/contact");
  }

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${HeroBgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e]/95 via-[#0b1a2e]/85 to-transparent"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 text-left text-white">

        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ease-out
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          Precision <span className="text-orange-500">CNC & VMC</span><br />
          Manufacturing Solutions
        </h1>

        {/* Paragraph */}
        <p
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mb-8 transition-all duration-1000 delay-200 ease-out
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          We specialize in high-precision CNC machining, VMC work,
          dies & pattern manufacturing, and industrial fasteners
          for modern engineering industries.
        </p>

        {/* Buttons */}
        <div
          className={`flex gap-4 transition-all duration-1000 delay-400 ease-out
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <button
            className="bg-orange-500 px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-lg"
            onClick={handleGetQuote}>
            Get Quote
          </button>

          <button onClick={()=>{navigate("/services")}} className="border border-white/40 px-7 py-3 rounded-lg backdrop-blur-md hover:bg-white/10 transition">
            Our Services
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;