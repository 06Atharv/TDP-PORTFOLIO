import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setPopup({
          show: true,
          type: "success",
          message: "Message Sent Successfully!"
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch(() => {
        setPopup({
          show: true,
          type: "error",
          message: "Failed to send message. Please try again."
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <section
        id="contactSection"
        className="relative py-24 pt-13 bg-[#0b1a2e] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                Get In <span className="text-orange-500">Touch</span>
              </h2>
              <h3 className="text-3xl font-bold leading-snug">
                Let's Build Your{" "}
                <span className="text-orange-500">
                  Next Precision Project
                </span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                From CNC machining to VMC operations and custom dies & pattern
                manufacturing, our team is ready to deliver high-quality industrial solutions.
              </p>

              <div className="space-y-3 text-gray-300">
                <p>📍 Chinchwad MIDC, Pune</p>
                <p>📞 +91 XXXXX XXXXX</p>
                <p>✉️ sales@trimurtidies.com</p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl space-y-6"
            >
              <div className="relative">
                <FaUser className="absolute left-4 top-5 text-gray-300" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-12 p-4 rounded-lg bg-white/20 text-white"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-5 text-gray-300" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 p-4 rounded-lg bg-white/20 text-white"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-4 top-5 text-gray-300" />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-12 p-4 rounded-lg bg-white/20 text-white"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Requirement / Message"
                required
                className="w-full p-4 rounded-lg bg-white/20 text-white"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-lg font-semibold transition duration-300 ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 hover:scale-105"
                  }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        opacity="0.25"
                      />
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Full Screen Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/50">
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl w-[90%] max-w-md animate-[scaleIn_.3s_ease-out]">
            <div
              className={`text-5xl mb-4 ${popup.type === "success"
                ? "text-green-600"
                : "text-red-600"
                }`}
            >
              {popup.type === "success" ? "✔" : "✖"}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {popup.type === "success" ? "Success" : "Error"}
            </h3>

            <p className="text-gray-600 mb-6">{popup.message}</p>

            <button
              onClick={() =>
                setPopup({ show: false, type: "", message: "" })
              }
              className={`px-6 py-3 rounded-lg font-semibold ${popup.type === "success"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
                }`}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Contact;