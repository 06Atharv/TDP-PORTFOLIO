import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#0b1f3a] to-[#0f172a] text-white py-20 px-6">

                {/* Header */}
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-orange-500">Trimurti Die & Pattern</span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                        Delivering precision-engineered CNC components with unmatched
                        quality, reliability, and industrial expertise.
                    </p>
                </div>

                {/* Company Overview */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-orange-500">
                            Who We Are
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-4">
                            Trimurti Die & Pattern is a precision manufacturing company
                            specializing in CNC machining, VMC operations, and industrial
                            component production. With modern infrastructure and skilled
                            technicians, we ensure micron-level accuracy and consistent
                            production standards.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Our commitment to quality, timely delivery, and engineering
                            excellence has made us a trusted partner across multiple
                            industrial sectors.
                        </p>
                    </div>

                    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-orange-500">
                            Our Expertise
                        </h2>

                        <ul className="space-y-4 text-gray-300">
                            <li>✔ CNC Turning & Milling</li>
                            <li>✔ Vertical Machining Center (VMC)</li>
                            <li>✔ Surface Grinding</li>
                            <li>✔ Industrial Fasteners Manufacturing</li>
                            <li>✔ Custom Precision Components</li>
                        </ul>
                    </div>

                </div>

                {/* Vision / Mission Section */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16">

                    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-orange-500">
                            Our Mission
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            To deliver high-precision engineered solutions through advanced
                            machining technologies while maintaining the highest standards
                            of quality and customer satisfaction.
                        </p>
                    </div>

                    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-orange-500">
                            Our Vision
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            To become a leading name in the precision manufacturing industry
                            by continuously upgrading technology, enhancing operational
                            efficiency, and building long-term client partnerships.
                        </p>
                    </div>

                </div>
                {/* Horizontal Alternating Timeline */}
                <div className="max-w-7xl mx-auto mt-24">

                    <h2 className="text-3xl font-bold text-center mb-20">
                        Our <span className="text-orange-500">Journey</span>
                    </h2>

                    <div className="relative overflow-x-auto">

                        {/* Center Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 transform -translate-y-1/2"></div>

                        <div className="flex justify-between items-center min-w-[1000px] relative py-20">

                            {/* ITEM 1 (UP) */}
                            <div className="flex flex-col items-center w-64 relative">

                                {/* Card (Top) */}
                                <div className="mb-16 bg-[#1e293b] border border-slate-700 rounded-xl p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3">Company Founded</h3>
                                    <p className="text-gray-400 text-sm">
                                        Established with a vision to deliver precision CNC machining.
                                    </p>
                                </div>

                                {/* Node */}
                                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0f172a] z-10"></div>

                                <span className="mt-4 bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                                    2015
                                </span>
                            </div>


                            {/* ITEM 2 (DOWN) */}
                            <div className="flex flex-col items-center w-64 relative">

                                <span className="mb-4 bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                                    2018
                                </span>

                                {/* Node */}
                                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0f172a] z-10"></div>

                                {/* Card (Bottom) */}
                                <div className="mt-16 bg-[#1e293b] border border-slate-700 rounded-xl p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3">
                                        CNC & VMC Expansion
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Added advanced VMC machines to enhance production accuracy.
                                    </p>
                                </div>
                            </div>


                            {/* ITEM 3 (UP) */}
                            <div className="flex flex-col items-center w-64 relative">

                                <div className="mb-16 bg-[#1e293b] border border-slate-700 rounded-xl p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3">
                                        Surface Grinding Added
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Expanded capabilities with precision surface finishing.
                                    </p>
                                </div>

                                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0f172a] z-10"></div>

                                <span className="mt-4 bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                                    2022
                                </span>
                            </div>


                            {/* ITEM 4 (DOWN) */}
                            <div className="flex flex-col items-center w-64 relative">

                                <span className="mb-4 bg-orange-500 text-white text-sm px-4 py-1 rounded-full">
                                    Present
                                </span>

                                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0f172a] z-10"></div>

                                <div className="mt-16 bg-[#1e293b] border border-slate-700 rounded-xl p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3">
                                        Trusted Industry Partner
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Serving industries with precision engineering excellence.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;