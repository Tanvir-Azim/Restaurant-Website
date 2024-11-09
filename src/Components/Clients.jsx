import React from 'react'
import CustomizeHeader from './CustomizeHeader';

function Clients() {
  return (
    <>
    <CustomizeHeader/>
    <div className="bg-gray-100">

      {/* Header Section with Restaurant Background Image */}
      <header className="relative bg-cover bg-center text-white py-24 text-center"
        style={{
          backgroundImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-5xl font-bold mb-4">What Our Guests Are Saying</h1>
        <p className="relative text-xl">Join the many satisfied customers who are raving about their experience at our restaurant!</p>
      </header>

      {/* Client Testimonials Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <img className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Client 1"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Sophia Johnson</h3>
                <p className="text-gray-500 mt-2">"Absolutely loved the ambiance and the food! From appetizers to desserts, everything was top-notch. I’ll definitely be coming back."</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <img className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Client 2"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Mark Williams</h3>
                <p className="text-gray-500 mt-2">"The service was exceptional! The staff made us feel so welcome. Plus, the dishes were prepared with great attention to detail."</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <img className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Client 3"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Isabella Davis</h3>
                <p className="text-gray-500 mt-2">"The food exceeded my expectations! From the perfectly cooked steak to the refreshing cocktails, it was an unforgettable dining experience."</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Taste the Best?</h2>
        <p className="text-lg mb-6">Book a table now and indulge in the finest cuisine in town!</p>
        <a href="#reservation" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition duration-300">Reserve Now</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2024 Gourmet Restaurant. All rights reserved.</p>
        </div>
      </footer>

    </div>
    </>
  );
}

export default Clients