import React from 'react'
import CustomizeHeader from './Components/CustomizeHeader';

function Blog() {
  return (
    <>
      <CustomizeHeader/>
   
    <section className="max-w-[1120px] mx-auto px-6 py-12">
      {/* Featured Blog Post */}
      <div className="relative mb-12">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjE2OTc3MDgz&ixlib=rb-1.2.1&q=80&w=1600"
          alt="Featured Restaurant Dish"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-4xl font-bold">The Art of Fine Dining</h2>
          <p className="mt-3 text-lg">
            Discover what makes a dining experience unforgettable, straight from our expert chefs and sommeliers.
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1651440204227-a9a5b9d19712?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gourmet Appetizer"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800">Gourmet Appetizers</h3>
            <p className="mt-3 text-gray-600">
              Savor the taste of our exquisite appetizers, perfect for starting your fine dining experience.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="relative bg-blue-50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1522906456132-bac22adad34e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dining Experience"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800">Exclusive Dining Experience</h3>
            <p className="mt-3 text-gray-600">
              Enjoy a once-in-a-lifetime meal at our renowned restaurant, where taste meets sophistication.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Steak Dinner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Classic Steak Dinner</span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600">
              Perfect your steak cooking skills with tips and tricks straight from our expert chefs.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Blog