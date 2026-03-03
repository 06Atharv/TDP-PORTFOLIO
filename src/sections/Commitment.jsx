import commitmentBg from "../assets/images/commitBg.png";

function Commitment() {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${commitmentBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-white">
        
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Our Commitment
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            We are driven by a set of core values that guide everything we do.
            Integrity, innovation, and customer-centricity are at the heart of
            our operations.
          </p>
        </div>

        <div>
          <p className="text-lg text-gray-200 leading-relaxed">
            We believe in building long-term partnerships with our clients,
            providing tailored solutions that meet their specific needs and
            contribute to their success.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Commitment;