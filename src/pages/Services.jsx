import { motion } from "framer-motion";
import { FaCogs, FaIndustry, FaDraftingCompass, FaTools } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      icon: <FaIndustry size={40} />,
      title: "CNC Machining",
      desc: "High-precision CNC machining for complex components with superior accuracy and consistency."
    },
    {
      icon: <FaCogs size={40} />,
      title: "VMC Operations",
      desc: "Advanced Vertical Machining Center operations ensuring high-speed and efficient production."
    },
    {
      icon: <FaDraftingCompass size={40} />,
      title: "Die & Pattern Manufacturing",
      desc: "Custom die and pattern solutions designed to meet industrial-grade standards."
    },
    {
      icon: <FaTools size={40} />,
      title: "Industrial Fasteners",
      desc: "Manufacturing durable and reliable fasteners tailored for industrial applications."
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
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Delivering precision-engineered solutions through advanced CNC technology,
            skilled craftsmanship, and reliable manufacturing processes.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#132742] p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition duration-300 hover:-translate-y-3"
              >
                <div className="text-orange-500 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 bg-[#132742]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Our <span className="text-orange-500">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-gray-300">

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">01. Consultation</h3>
              <p>Understanding client requirements and technical specifications.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">02. Design & Planning</h3>
              <p>Precision planning and machining strategy development.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">03. Production</h3>
              <p>Advanced CNC and VMC execution with quality checks.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">04. Delivery</h3>
              <p>Timely dispatch with strict quality assurance.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your <span className="text-orange-500">Project?</span>
        </h2>

        <p className="text-gray-300 mb-10">
          Contact Trimurti Die & Pattern today for reliable and precision-driven manufacturing solutions.
        </p>

        <a
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
        >
          Contact Us
        </a>
      </section>
      <Footer/>
    </div>
  );
}

export default Services;