import React from 'react';
import CustomizeHeader from './Components/CustomizeHeader';


const About = () => {
  return (
    <>
    <CustomizeHeader/>
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="relative text-center mb-10 h-[200px] w-full bg-black">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE2MTY5NzU3MTg&ixlib=rb-1.2.1&q=80&w=500" 
          alt="Restaurant" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
  
        {/* Text Content */}
     <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-4xl font-bold">About Us</h2>
      <p className="mt-3 text-lg">
       Discover our journey and what makes us special.
     </p>
   </div>
 </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE2MTY5NzU3MTg&ixlib=rb-1.2.1&q=80&w=500"
            alt="Restaurant Interior"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
          <p className="text-gray-600 leading-relaxed">
            Since opening our doors, we have been dedicated to providing high-quality, delicious meals with a warm, inviting atmosphere. Our passion for fresh ingredients and authentic flavors makes every meal unforgettable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From our signature dishes to our friendly staff, we are here to bring you a dining experience that feels like home.
          </p>
        </div>
      </div>

      {/* Signature Dishes Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Signature Dishes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dish 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHN0ZWFrfGVufDB8fHx8MTYxNjk3NTgxMQ&ixlib=rb-1.2.1&q=80&w=500"
              alt="Classic Steak"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800">Classic Steak</h4>
              <p className="mt-2 text-gray-600">A mouth-watering steak cooked to perfection with our special seasoning.</p>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJicXxlbnwwfHx8fDE2MTY5NzYzMjY&ixlib=rb-1.2.1&q=80&w=500"
              alt="BBQ Pizza"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800">Spicy BBQ Pizza</h4>
              <p className="mt-2 text-gray-600">Our famous BBQ pizza topped with fresh ingredients and a smoky flavor.</p>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGJ1cmdlcnxlbnwwfHx8fDE2MTY5NzYzNTg&ixlib=rb-1.2.1&q=80&w=500"
              alt="Homemade Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800">Homemade Burger</h4>
              <p className="mt-2 text-gray-600">A juicy burger with fresh toppings and a side of crispy fries.</p>
            </div>
          </div>
        </div>
      </div>


    </section>
    
    </>
  );
};

export default About;
