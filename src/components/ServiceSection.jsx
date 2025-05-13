import React from "react";
import Premium from "../assets/images.jpeg";
import mensHair from "../assets/mens-haircuts-1.jpg"
import Beard from "../assets/beard.jpeg"

const services = [
  {
    title: "Haircuts",
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    points: ["Classic Cuts", "Modern Styles"],
    icon: mensHair,
  },
  {
    title: "Beard Services",
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    points: ["Beard Trims", "Beard Shaping"],
    icon: Beard,
  },
  {
    title: "Premium Services",
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    points: ["Hair Coloring", "Scalp Treatments"],
    icon: Premium,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <p className="text-yellow-500 font-semibold text-lg">Premium Grooming</p>
        <h2 className="text-4xl font-bold mt-2">
          Our Barber <span className="text-white underline decoration-yellow-500">Services</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl border border-gray-700 p-6 shadow hover:shadow-lg transition-shadow hover:border-yellow-600"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
              <img src={service.icon} alt={service.title} className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
