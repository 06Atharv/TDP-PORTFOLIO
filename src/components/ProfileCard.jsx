import TDPLogo from "../assets/images/TDPLOGO.png";
import Counter from "./Counter";

function ProfileCard() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gray-100">

      {/* Background Glow */}
      <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-500/20 rounded-full blur-[120px] top-10 left-0"></div>
      <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/20 rounded-full blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={TDPLogo}
              alt="company"
              className="w-60 md:w-80 lg:w-[350px] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-5 text-center md:text-left">

            <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
              <span className="text-orange-500">
                Innovation Driven CNC Machinery for Superior Performance
              </span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Trimurti Die & Pattern is a leading CNC machine manufacturer dedicated
              to delivering cutting-edge technology and innovative solutions for
              precision manufacturing.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our focus is quality, innovation, and long-term client relationships.
              We combine modern CNC machinery with skilled craftsmanship to ensure
              reliable production results.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

              <div className="bg-white shadow-lg p-5 rounded-xl text-center border">
                <h3 className="text-3xl font-bold text-orange-500">
                  <Counter target={16} />+
                </h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div className="bg-white shadow-lg p-5 rounded-xl text-center border">
                <h3 className="text-3xl font-bold text-orange-500">
                  <Counter target={501} />+
                </h3>
                <p className="text-sm text-gray-600">Projects Done</p>
              </div>

              <div className="bg-white shadow-lg p-5 rounded-xl text-center border">
                <h3 className="text-3xl font-bold text-orange-500">
                  <Counter target={101} />%
                </h3>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;