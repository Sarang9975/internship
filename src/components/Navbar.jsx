


import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-white dark:bg-black text-black dark:text-white shadow-md">
      <div className="text-2xl font-bold text-yellow-500">PMC</div>
      <ul className="flex gap-6 font-semibold">
        <li className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('services')}>Services</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('team')}>Team</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-yellow-500 px-3 py-1 rounded text-sm"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded text-sm">
          Book an Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
