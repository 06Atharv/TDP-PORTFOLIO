import { FaCogs, FaIndustry, FaUsers, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function WhytoChoose() {
  const features = [
    {
      icon: <FaIndustry size={40} />,
      title: "Advanced Machinery",
      desc: "Equipped with modern CNC & VMC machines ensuring high precision manufacturing."
    },
    {
      icon: <FaCogs size={40} />,
      title: "Precision Engineering",
      desc: "We deliver accurate and consistent machining with strict quality control."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Expert Team",
      desc: "Highly skilled engineers with years of industrial experience."
    },
    {
      icon: <FaClock size={40} />,
      title: "On-Time Delivery",
      desc: "Efficient workflow ensures timely project completion."
    }
  ];

  return (
    <section className="py-24 bg-[#0b1a2e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose Us
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          We combine advanced technology, skilled professionals, and
          quality-driven processes to deliver reliable manufacturing solutions.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, x: index < 2 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true, amount: 0.3 }}

              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}

              className="group bg-[#132742] p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-orange-500 mb-6 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhytoChoose;