import React from 'react';
import CustomizeHeader from './CustomizeHeader';

const Contact = () => {
  return (
    <>
      <CustomizeHeader/>
        <div className=' w-full'>
          <div className="relative text-center mb-10 h-[200px] w-full bg-black">
            {/* Background Image */}
            <img 
              src="https://plus.unsplash.com/premium_photo-1663091178039-58d1a7bd3667?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
  
          
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-4xl font-bold">Contact Us</h2>
                <p className="mt-3 text-lg">
                   Discover our journey and what makes us special.
                </p>
            </div>
          </div>

            <div className=' w-[80%] mx-auto h-[53vh] lg:h-[60vh]  grid grid-cols-2 grid-rows-1  xs:grid-cols-1 xs:grid-rows-2 xs:h-[120vh] sm:grid-cols-1 sm:grid-rows-2 sm:h-[115vh] md:h-[60vh]   '>
              <div className=' mt-20  w-[70%] md:w-full lg:w-full mx-auto'>
                <h1 className=' text-2xl font-[600] text-gray-800'>Restaurant</h1>
                <p className=' mt-10 text-gray-400 text-justify'>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <div className=' w-full  grid grid-cols-3 grid-rows-1 h-24 gap-2 mt-10  '>
                  <div className=' '>
                    <h1 className='font-bold text-gray-800'>Address</h1>
                    <p className='text-sm mt-2 text-gray-400 xs:text-xs'>Mirpur1, Mirpur Road</p>
                    <p className=' text-sm text-gray-400 xs:text-xs'>Bangladesh</p>
                  </div>
                  <div className=' '>
                    <h1 className='font-bold text-gray-800'>Phone</h1>
                    <p className='text-gray-400 mt-2 text-sm xs:text-xs'>01857165115</p>
                  </div>
                  <div className=' '>
                    <h1 className='font-bold text-gray-800'>E-mail</h1>
                    <p className='text-gray-400 mt-2 text-sm xs:text-xs'>miniMart@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className=' mt-20 w-full h-full md:ml-10 lg:w-full  lg:ml-10'>
                <div className=' w-[75%] h-full md:w-full lg:w-full  mx-auto '>
                  <div className=' w-[88%] mx-auto'>
                    <h1 className=' font-[600] text-gray-800'>Have a question?</h1>
                  </div>

                  <div className=' mt-4 w-[88%] mx-auto'>
                    <form>
                      <input className=' border-[1px] border-black w-[100%] h-10 px-8 rounded-full outline-none' type='text' placeholder='Name' />
                      <input className=' border-[1px] border-black w-[100%] h-10 px-8 rounded-full outline-none mt-2' type='email' placeholder='Email' />
                      <input className=' border-[1px] border-black w-[100%] h-10 px-8 rounded-full outline-none mt-2' type='text' placeholder='Subject' />
                      <input className=' border-[1px] border-black w-[100%] h-20 px-8 rounded-2xl outline-none mt-2' type='text' placeholder='Message' />
                      <button className=' mt-3 w-20 h-9 bg-red-500 text-white rounded-full text-sm hover:border-[1px] hover:border-red-500  hover:bg-white hover:text-red-500'>SEND</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className=' w-full mt-14'>
              {/* Embed Google Map */}
              <p>
                <iframe
                  className=' w-full'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.8673848033247!2d88.74838432425746!3d23.964748332066712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f953a30ac3e4d9%3A0xc2409f56803dcf4b!2smini%20mart!5e0!3m2!1sen!2sbd!4v1724837564485!5m2!1sen!2sbd"
                  width="800"
                  height="600"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                ></iframe>
              </p>
            </div>
          </div>
        
      
    </>
  );
};

export default Contact;

