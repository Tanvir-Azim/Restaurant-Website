import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className=' h-[70vh] bg-zinc-700   md:h-[105vh] w-full   '>
            <img src='./images/Footer.png' className='h-[80vh] w-full xs:h-[180vh] sm:h-[105vh] md:h-[105vh] absolute'/>
            <div className=' h-[50vh] w-[76%]  relative mx-auto xs:top-[10%] sm:top-[10%] top-[20%] md:top-20'>
                <h1 className=' text-5xl tracking-tighter  font-bold text-center text-white xs:text-4xl'>WE READY TO HAVE YOU THE BEST DINING EXPERIENCES</h1>
                <div className='w-full h-full grid grid-cols-4 grid-rows-1 xs:grid-cols-1 xs:grid-rows-4 xs:h-[100vh] sm:h-[50vh] sm:grid-cols-2 sm:grid-rows-2 md:h-[50vh] md:grid-cols-2 md:grid-rows-2 md:mt-10'>

                    <div className=' w-full h-[60%] xs:h-full sm:h-full   grid place-items-center'>
                      <div className=' grid place-items-center'>
                        <img src='./images/Vector.png' className=' w-8 h-8'/>
                        <h1 className=' font-bold mt-3 text-white'>OPENING HOURS</h1> 
                        <p className=' mt-3 text-white'>Monday-Sunday</p>
                        <p className=' text-white'>9:00 AM to 11:00 PM</p>
                      </div>
                    </div>


                    <div className=' w-full h-[60%] xs:h-full sm:h-full   grid place-items-center'>
                      <div className=' grid place-items-center'>
                        <img src='./images/call-alt (1).png'/>
                        <h1 className=' font-bold mt-3 text-white'>LET'S TALK</h1> 
                        <p className=' mt-3 text-white'>Phone:1-800-222-4545</p>
                        <p className=' text-white'>Fax:1-800-222-4545</p>
                      </div>
                    </div>

                     <div className=' w-full h-[60%] xs:h-full sm:h-full   grid place-items-center'>
                      <div className=' grid place-items-center'>
                        <img src='./images/mail.png'/>
                        <h1 className=' font-bold mt-3 text-white'>BOOK A TABLE</h1> 
                        <p className=' mt-3 text-white'>Email:demo@website.com</p>
                        <p className=' text-white'>Support:support@website.com</p>
                      </div>
                    </div>

                    <div className=' w-full h-[60%] xs:h-full sm:h-full   grid place-items-center'>
                      <div className=' grid place-items-center'>
                        <img src='../images/map-pin.png'/>
                        <h1 className=' font-bold mt-3 text-white'>OUR ADDRESS</h1> 
                        <p className=' mt-3 ml-5 text-white text-[15px]'>United States of America.</p>
                        <p className=' text-white'>State Of America</p>
                      </div>
                    </div>
                </div>
            </div>

            <div  className=' h-[20vh]  w-[76%]  relative mx-auto top-[10%] xs:mt-[52vh] sm:mt-[-50px] md:mt-[5vh] mt-[-30px] '>
                <div className=' h-full w-full flex items-center justify-center'>
                    <div className=' h-20 w-[400px]  flex items-center justify-center space-x-4  xs:mt-[300px] sm:mt-[310px] md:mt-[170px]'>
                      <img src='./images/facebook.png ' className=' h-14 w-14 '/>
                      <img src='./images/twtter.png' className=' h-14 w-14 '/>
                      <img src='./images/instagram.png ' className=' h-14 w-14 '/>
                      <img src='./images/linkdin.png' className=' h-14 w-14 '/>
                    </div>
                  </div>
                    
                    <div className='flex items-center gap-1 text-lg w-full h-10 mt-[-20px] justify-center '>
                      <FaRegCopyright className='text-white text-lg xs:mt-[300px] sm:mt-[300px] md:mt-[170px]' />
          
                        <h1 className=' text-white xs:mt-[300px] text-lg sm:mt-[300px] md:mt-[170px]'>2023 All Rights Reserved</h1>
                    </div>
            </div>

    </div>
  )
}

export default Footer