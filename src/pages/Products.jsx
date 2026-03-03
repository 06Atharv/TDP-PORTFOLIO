import React from "react";
import elbow from "../assets/images/Products/elbow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
    {
        id: 1,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 2,
        name: "Ferrules",
        description:
            "Premium stainless steel ferrules engineered for secure and leak-proof connections.",
        specs: "Size Range: 6mm–50mm | Finish: Mirror",
        image: elbow
    },
    {
        id: 3,
        name: "Industrial Valves",
        description:
            "High-performance valves built for durability and operational reliability.",
        specs: "Pressure Rating: 300 PSI | CNC Machined",
        image: elbow
    },
    {
        id: 4,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 5,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 6,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 7,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 8,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
    {
        id: 9,
        name: "Industrial Nuts",
        description:
            "High precision industrial-grade nuts manufactured for heavy-duty applications.",
        specs: "Material: SS304 | Tolerance: ±0.01mm",
        image: elbow
    },
];

const Products = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#0b1f3a] to-[#0f172a] text-white py-20 px-6">

                {/* Header */}
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our <span className="text-orange-500">Products</span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                        Precision engineered industrial components crafted with advanced CNC
                        machining technology.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 hover:border-orange-500 transition duration-300"
                        >
                            {/* Image */}
                            <div className="h-48 flex items-center justify-center mb-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-4">
                                {product.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Specs */}
                            <p className="text-orange-500 font-medium text-sm">
                                {product.specs}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Products;