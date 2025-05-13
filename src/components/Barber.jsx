import React from 'react';
import barber1 from '../assets/barber1.jpg'
import barber2 from '../assets/barber2.jpeg'
import barber3 from '../assets/barber3.jpg'


const barbers = [
  {
    name: 'Jason Rodriguez',
    title: 'Owner & Master Barber',
    img: barber1,
    description:
      "With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming to Denton.",
    socials: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  },
  {
    name: 'Marcus Williams',
    title: 'Senior Barber',
    img: barber2,
    description:
      'Marcus brings 8 years of experience. He specializes in fades, beard sculpting, and precision lineup work.',
    socials: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  },
  {
    name: 'Terrence Jackson',
    title: 'Barber & Stylist',
    img:barber3,
    description:
      "Terrence excels in modern men's styling, textured cuts, and hair designs with creative precision.",
    socials: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  },
];

const Barber = () => {
  return (
    <section className=" text-white py-16 px-6 max-w-7xl mx-auto" id='team'>
      <div className="text-center mb-12">
        <p className="text-yellow-400 font-semibold uppercase">Expert Stylists</p>
        <h2 className="text-4xl font-bold mt-2">Meet Our Barbers</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {barbers.map((barber, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img src={barber.img} alt={barber.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{barber.name}</h3>
              <p className="text-yellow-400 font-semibold mt-1">{barber.title}</p>
              <p className="text-gray-400 mt-3 text-sm">{barber.description}</p>
              <div className="flex justify-center mt-4 space-x-4 text-yellow-400">
                {barber.socials.map((social, i) => (
                  <a key={i} href={social.href}>{social.name}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Barber;
