import React from "react";
import BarbershopImage from "../assets/team-barbers.webp";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="about">
      <div className="text-center mb-12">
        <p className="text-yellow-500 text-lg font-semibold">Our Story</p>
        <h2 className="text-4xl font-bold mt-2">
          About <span className="text-white">PMC Barbershop</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Established in 2018, PMC Barbershop has been providing premium
          grooming services to the men of Denton, TX. Our mission is to deliver
          exceptional haircuts and grooming services in a welcoming, classic
          barbershop environment.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="relative">
          <img
            src={BarbershopImage}
            alt="Barbershop"
            className="rounded-xl shadow-lg w-full max-w-xl"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-md">
            5+ years
          </div>
        </div>

        <div className="flex-1">
          <p className="text-gray-400 border-l-4 border-yellow-500 pl-4 text-lg mb-6">
            Established in 2018, PMC Barbershop has been providing premium
            grooming services to the men of Denton, TX. Our mission is to
            deliver exceptional haircuts and grooming services in a welcoming,
            classic barbershop environment.
          </p>

          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md">
            <p className="text-yellow-500 text-2xl font-serif leading-tight mb-2">
              &#10077;
            </p>
            <p className="text-gray-400 text-base">
              We take pride in our attention to detail and personalized service,
              ensuring each client leaves looking and feeling their best. Our
              skilled barbers combine traditional techniques with modern trends
              to create custom styles that suit each individual's personality
              and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
