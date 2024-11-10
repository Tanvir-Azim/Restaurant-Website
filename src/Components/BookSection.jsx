import React from 'react'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";

function BookSection() {
  return (
    <div className='  w-[100%] h-[93vh] mx-auto '>
        <div className='w-[100%] h-[93vh] xs:h-[115vh]  sm:h-[93vh] md:h-[93vh] lg:h-[93vh] mx-auto absolute'>
            <img src='./images/contact.PNG' className=' h-full w-full '/>
        </div>
       
        <div className=' w-[40%]  h-[420px]  relative top-[15%] xs:left-[13%] xs:w-[72%] sm:left-[10%] md:left-6 md:w-[53%] lg:left-[13%] lg:w-[45%] xl:left-[15%] xl:w-[50%] sm:w-[78%]   left-[16%]'>
            <div className=' w-full h-full '>
                    <div className=' flex items-center gap-2'>
                        <RiCheckboxBlankFill className='text-[#BD1F17] text-xs'/>
                        <p className=' text-xs text-[#BD1F17]'>Book Now </p>
                    </div>
                    <div className=' w-[71%] xs:w-full  '>
                        <h1 className=' font-bold text-[40px] text-white xs:text-4xl'>BOOK YOUR TABLE </h1>
                        <p className=' text-white text-justify mt-2 xs:text-sm sm:text-sm'>Enim tempor eget pharentra facilisis sed maecenas adipscing. Eu leo molestie vel,ornare non id blandit netus</p>
                        
                    </div>
                    <div className=' w-full  h-[30%] grid grid-cols-2 grid-rows-2 mx-auto xs:grid-cols-1 xs:grid-rows-4 xs:gap-14'>
                        <div className=' mt-6'>
                            <input type='text' placeholder='Your Name*' className=' outline-none bg-transparent border-[1px] text-white border-white pl-2 h-9 w-[90%] xs:w-full  placeholder:text-white '/>
                        </div>

                        <div className=' mt-6'>
                            <input type='email' placeholder='Your Email' className=' outline-none bg-transparent border-[1px] text-white border-white pl-2 h-9 w-[90%] xs:w-full  placeholder:text-white '/>
                        </div>

                        <div className=' mt-6 w-[90%]   flex justify-between'>
                            <div>
                                <input type='text' placeholder='Reservation Date' className=' outline-none bg-transparent border-[1px] text-white border-white pl-2 h-9 w-[45%] absolute xs:w-full  placeholder:text-white placeholder-transparent '/>
                            </div>
                            <div>
                                <MdOutlineDateRange className=' mt-2 text-xl mr-1 text-white cursor-pointer xs:ml-[80%]'/>
                            </div>
                        </div>

                        <div className=' mt-6 flex'>
                            <input type='number' placeholder='Total People' className=' outline-none bg-transparent text-white border-[1px] border-white pl-2 h-9 w-[90%] xs:w-full  placeholder:text-white '/>
                         
                        </div>

                    </div>

                    
                    <div className=' mt-6 xs:mt-[125px]'>
                            <textarea rows="4" cols="50" placeholder="Message" className=' outline-none bg-transparent text-white border-[1px] border-white pl-2 h-[140px] w-[95%] xs:w-full  placeholder:text-white   '></textarea>

                    </div>

                    <div className=' mt-5'>
                        <button className='  w-[157px] h-[40px] sm:left-[8%] xs:left-[2%] sm::left-[8%] left-[1%]  top-[75%] bg-[#FEBF00] font-semibold sm:top-24 xs:top-24 '>EXPLORE MENU</button>
                    </div>
 
            </div>

        </div>
    </div>
  )
}

export default BookSection