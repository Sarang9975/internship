import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServiceSection';
import WhyChooseSection from '../components/WhyChooseSection';
import Testimonials from '../components/Testimonial';
import Barber from '../components/Barber';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseSection/>
      <Testimonials/>
      <Barber/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;