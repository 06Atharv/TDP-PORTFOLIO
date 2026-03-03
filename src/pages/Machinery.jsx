import { motion } from "framer-motion";
import { FaCogs, FaIndustry, FaTools, FaLayerGroup, FaCheckCircle, FaHammer } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Machinery() {

  const machines = [
    {
      icon: <FaIndustry size={40} />,
      title: "CNC Turning Center",
      desc: "High-speed CNC turning machines delivering micron-level precision for complex components.",
      specs: "Max Diameter: 300mm | Accuracy: ±0.01mm"
    },
    {
      icon: <FaCogs size={40} />,
      title: "Vertical Machining Center (VMC)",
      desc: "Advanced VMC systems for multi-axis machining with high repeatability.",
      specs: "Travel: 1000x500x500mm | Spindle: 8000 RPM"
    },
    {
      icon: <FaTools size={40} />,
      title: "Surface Grinding Machine",
      desc: "Precision surface finishing equipment ensuring smooth and accurate surfaces.",
      specs: "Table Size: 600x300mm | Accuracy: ±0.005mm"
    },
    {
      icon: <FaLayerGroup size={40} />,
      title: "Electroplating & Surface Coating",
      desc: "Advanced plating solutions including zinc, nickel, and chrome coating to enhance corrosion resistance and durability.",
      specs: "Finish: Zinc / Nickel / Chrome | High Adhesion & Corrosion Protection"
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: "Advanced Quality Assurance",
      desc: "Equipped with precision measuring instruments including micrometers, vernier calipers, bore gauges, and height gauges to maintain consistent dimensional accuracy.",
      specs: "Micron-Level Inspection | Process Control | Surface & Dimensional Verification"
    },
    {
      icon: <FaHammer size={40} />,
      title: "Assembly & Finishing",
      desc: "Secondary operations including deburring, tapping, polishing, and component assembly for ready-to-use industrial parts.",
      specs: "Deburring | Tapping | Surface Finishing"
    }
  ];

  return (
    <div className="bg-[#0b1a2e] text-white">
      <Navbar />
      {/* ================= HERO ================= */}
      <section className="py-24 text-center relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full -bottom-20 -right-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Machinery</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Equipped with modern CNC and VMC machines to ensure high precision,
            reliability, and consistent production quality.
          </p>
        </div>
      </section>

      {/* ================= MACHINE GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {machines.map((machine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#132742] p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition duration-300 hover:-translate-y-3"
              >

                <div className="text-orange-500 mb-6">
                  {machine.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {machine.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {machine.desc}
                </p>

                <p className="text-orange-400 text-sm font-semibold">
                  {machine.specs}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CAPABILITY SECTION ================= */}
      <section className="py-20 bg-[#132742] text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Precision <span className="text-orange-500">Capabilities</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our facility supports high-accuracy machining with strict tolerance control,
            advanced tooling systems, and experienced operators ensuring consistent
            production output for industrial applications.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Need Custom <span className="text-orange-500">Machining?</span>
        </h2>

        <p className="text-gray-300 mb-10">
          Get in touch with Trimurti Die & Pattern for reliable, high-precision machining solutions.
        </p>

        <Link
          to="/contact"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
        >
          Contact Us
        </Link>
      </section>
      <Footer/>
    </div>
  );
}

export default Machinery;