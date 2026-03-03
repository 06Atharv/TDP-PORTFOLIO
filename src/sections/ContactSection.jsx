import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function ContactSection() {
    const navigate = useNavigate();

    const redirectToContactPage = () => {
        navigate("/contact")
    };

    return (
        <section className="relative py-24 bg-[#0b1a2e] overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[140px] -top-20 -left-20"></div>
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] -bottom-20 -right-20"></div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Start Your <span className="text-orange-500">Project</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                    Discover how Trimurti Die & Pattern delivers world-class CNC machining,
                    VMC work, and industrial fastener manufacturing with unmatched precision,
                    reliability, and timely project delivery.
                </p>

                {/* Button */}
                <button
                    onClick={redirectToContactPage}
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg hover:scale-105"
                >
                    Contact Us
                    <FaArrowRight />
                </button>

            </div>
        </section>
    );
}

export default ContactSection;