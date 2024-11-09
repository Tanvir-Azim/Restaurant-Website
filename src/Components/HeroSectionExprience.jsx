import React from 'react'

function HeroSectionExprience() {
  return (
    <div className="">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Dish 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHN0ZWFrfGVufDB8fHx8MTYxNjk3NTgxMQ&ixlib=rb-1.2.1&q=80&w=500"
          alt="Classic Steak"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-800">Taste the Best, Savor the Difference</h4>
          <p className="mt-2 text-gray-600">Fresh ingredients, delicious flavors, and unforgettable moments – come experience a world of taste at our restaurant!</p>
        </div>
      </div>



      
    </div>
  </div>
  )
}

export default HeroSectionExprience