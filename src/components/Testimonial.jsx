import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
    name: "Mike Johnson",
  },
  {
    quote:
      "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
    name: "David Martinez",
  },
  {
    quote:
      "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
    name: "Chris Taylor",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1 text-yellow-500 text-sm">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6">
      <div className="text-center mb-14">
        <p className="text-yellow-500 font-semibold">Testimonials</p>
        <h2 className="text-4xl font-bold mt-2">
          What Our Clients <span className="underline decoration-yellow-500">Say</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] border border-gray-700 shadow-yellow-400 shadow-lg rounded-xl flex flex-col justify-between p-6 min-h-[300px]"
          >
            <div>
              <p className="text-yellow-500 text-xl leading-snug mb-2">“</p>
              <p className="text-sm italic text-gray-300">{t.quote}</p>
              <p className="text-yellow-500 text-xl text-right mt-2">”</p>
            </div>

            <div className="border-t border-gray-600 pt-4 mt-4 flex items-center gap-2">
              <StarRating />
              <span className="text-yellow-500">|</span>
              <span className="font-semibold text-white">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
