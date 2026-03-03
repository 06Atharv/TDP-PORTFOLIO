import { motion } from "framer-motion";

import client1 from "../assets/images/Clients/fc.png";
import client2 from "../assets/images/Clients/imperial.png";
import client3 from "../assets/images/Clients/trial.png";
import client4 from "../assets/images/Clients/trial.png";
import client5 from "../assets/images/Clients/trial.png";
import client6 from "../assets/images/Clients/trial.png";

function Clients() {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Our <span className="text-orange-500">Clients</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We are proud to work with trusted industrial partners and
          manufacturing companies across multiple sectors.
        </motion.p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={logo}
                alt="client"
                className="h-24 object-contain hover:scale-110 transition duration-300"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Clients;