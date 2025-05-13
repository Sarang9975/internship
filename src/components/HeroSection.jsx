
import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Background image
import BarberChair from './BarberChair'; // Your 3D model (e.g., Three.js in canvas)

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    id='home'>
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20 gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <p className="text-yellow-400 font-semibold text-lg">
            Premium Barber Services in Denton
          </p>
          <h1 className="text-5xl font-bold">Classic Cuts, Modern Style</h1>
          <h2 className="text-yellow-500 text-3xl font-extrabold">Premium Barber Shop</h2>
          <p className="text-gray-300">
            At PMC Barbershop, we blend traditional techniques with modern trends to deliver precision cuts, beard grooming,
            and classic hot towel shaves in a timeless atmosphere.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-400">
            <span className="text-xl">★★★★☆</span>
            <span className="text-sm text-white">(4.8/5 based on 320+ reviews)</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-black text-white border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
              Our Services
            </button>
            <button className="bg-yellow-500 text-black px-5 py-2 rounded hover:bg-yellow-400 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Right: 3D Model (Invisible Canvas Holder) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Make canvas fill the container but not visible (glass-like) */}
            <div className="w-full h-full bg-transparent rounded-lg shadow-2xl overflow-hidden">
              <BarberChair />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

