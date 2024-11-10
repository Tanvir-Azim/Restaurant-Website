import React from 'react'
import CustomizeHeader from './CustomizeHeader'

function Porttfolio() {
  return (
   <>
  <CustomizeHeader/>
    <section className="max-w-[1120px] mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Portfolio</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Take a look at our delicious dishes and inviting atmosphere.
        </p>
      </div>

      {/* Upper Grid (3 Images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Image 1 */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHN0ZWFrfGVufDB8fHx8MTYxNjk3NTgxMQ&ixlib=rb-1.2.1&q=80&w=500"
            alt="Classic Steak"
            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Classic Steak</span>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJicXxlbnwwfHx8fDE2MTY5NzYzMjY&ixlib=rb-1.2.1&q=80&w=500"
            alt="BBQ Pizza"
            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-white text-lg font-semibold">BBQ Pizza</span>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGJ1cmdlcnxlbnwwfHx8fDE2MTY5NzYzNTg&ixlib=rb-1.2.1&q=80&w=500"
            alt="Homemade Burger"
            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Homemade Burger</span>
          </div>
        </div>
      </div>

      {/* Lower Grid (2 Images) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image 4 */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE2MTY5NzU3MTg&ixlib=rb-1.2.1&q=80&w=500"
            alt="Restaurant Interior"
            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Our Interior</span>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MHx8fHwxNjE2OTc2NTYy&ixlib=rb-1.2.1&q=80&w=500"
            alt="Dining Area"
            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Dining Area</span>
          </div>
        </div>
      </div>
    </section>
 
   </>
  )
}

export default Porttfolio