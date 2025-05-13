import React from "react";
import { User, Scissors, Home } from "lucide-react";

const features = [
  {
    title: "Expert Barbers",
    icon: <User className="w-5 h-5 text-yellow-400" />,
    tag: "User",
    description:
      "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
  },
  {
    title: "Premium Tools & Products",
    icon: <Scissors className="w-5 h-5 text-yellow-400" />,
    tag: "Scissors",
    description:
      "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
  },
  {
    title: "Classic Barbershop Experience",
    icon: <Home className="w-5 h-5 text-yellow-400" />,
    tag: "Home",
    description:
      "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-yellow-500 font-semibold">Our Commitment</p>
        <h2 className="text-4xl font-bold mt-2">
          Why Choose <span className="underline decoration-yellow-500">PMC Barbershop?</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden border border-gray-700 rounded-xl p-6 bg-[#1a1a1a] transition-transform transform hover:scale-105"
          >
            {/* Background animation overlay */}
            <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-yellow-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:z-0 group-hover:before:scale-x-100"></div>

            {/* Content with z-10 to stay on top */}
            <div className="relative z-10 transition-colors duration-500 group-hover:text-black">
              <div className="mb-4">
                <div className="absolute -top-5 -left-6 h-[300px] w-1 bg-yellow-500 rounded-l-xl"></div>
                <div className="bg-[#2b2b2b] group-hover:bg-black w-fit px-4 py-2 rounded-md text-yellow-400 group-hover:text-white text-sm font-medium transition-colors duration-500">
                  {feature.tag}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-black text-sm transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;


