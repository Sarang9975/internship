import React from "react";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4" id="contact">
      <div className="text-center mb-12">
        <p className="text-yellow-400 font-semibold">Book Your Appointment</p>
        <h1 className="text-4xl font-bold mt-2">Contact Us</h1>
        <p className="mt-2 text-gray-400">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-gray-900 rounded-lg p-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="text-yellow-400 text-xl">📍</div>
            <div>
              <h2 className="font-semibold">Address</h2>
              <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-yellow-400 text-xl">📞</div>
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>+1 940-808-1569</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-yellow-400 text-xl">⏰</div>
            <div>
              <h2 className="font-semibold">Business Hours</h2>
              <p>Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-900 rounded-lg p-8 space-y-4">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1">Service Interested In</label>
            <select className="w-full px-4 py-2 bg-black border border-gray-600 rounded">
              <option>Select an option</option>
              <option>Haircut</option>
              <option>Shave</option>
              <option>Coloring</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Preferred Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your style preferences or any questions you have"
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
