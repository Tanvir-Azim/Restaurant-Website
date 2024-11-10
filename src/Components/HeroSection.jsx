import React, { useReducer } from 'react'
import { useHeroContax } from './HeroContax'
import HeroAbout from './HeroAbout'
import HeroSectionContact from './HeroSectionContact'
import HeroSectionExprience from './HeroSectionExprience'

function HeroSection() {
    const{names,HeroToggleAbout,HeroToggleExperience,HeroToggleContact,stateExperience,stateContact,stateAbout}=useHeroContax()

    console.log(stateExperience,stateContact,stateAbout)
  return (
    <div className=' w-[100%] h-[650px] mt-20 '>
        <div className='w-[75%] h-full mx-auto  sm:h-[170vh] xs:h-[150vh]  '>
            <div className='w-full h-[80%] flex items-center justify-center   '>
                <div className=' w-[100%] h-[80%] grid grid-cols-[1fr,1.2fr] grid-rows-1 gap-16 xs:grid-cols-1 xs:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 '>
                    <div className=' h-full w-full    '>
                        <img src='./images/Frame.png' className=' h-full w-full' />
                    </div>
                    <div className='  w-full h-full '>
                        <div className=' w-[100%] h-9  border-b-[1px] border-red-700'>
                            <div className=' flex w-[300px] md:w-[300px] lg:w-[300px]  h-full items-center justify-between '>
                                <button onClick={()=>{HeroToggleAbout()}} className={stateAbout?' w-[80px] h-8  bg-red-700 text-white':'w-[80px] h-8 '}>About</button>
                                <button onClick={()=>{HeroToggleExperience()}} className={stateExperience?' w-[100px] h-8  bg-red-700 text-white':'w-[80px] h-8 '}>Experience</button>
                                <button onClick={()=>{HeroToggleContact()}} className={stateContact?' w-[80px] h-8  bg-red-700  text-white':'w-[80px] h-8 '}>Contact</button>
                            </div>

                        </div>
                            <div className='  mt-7'>
                                    {stateAbout && <HeroAbout/>}
                                    {stateContact && <HeroSectionContact/>}
                                    {stateExperience && <HeroSectionExprience/>}
                                   
                                  
                            </div>
                      
                    </div>

                    <img src='./images/Market Place.png' className='absolute h-40 xs:h-24 xl:h-28 p-2 md:h-20 lg:h-28 sm:h-32'/>
                </div>
            </div>

            <div className='  xs:mt-[200px]   h-[100px] w-[100%] grid grid-cols-3 grid-rows-1 mt-[-20px]  sm:mt-[-100px] sm:grid-cols-1  sm:grid-rows-3 sm:h-52 xs:h-52 xs:grid-cols-1  xs:grid-rows-3'>
                <div className=' flex items-center gap-5'>
                    <div className=' w-14 bg-white h-14 rounded-full grid items-center justify-center shadow-xl'>
                        <img src='./images/box.png' className=' h-7'/>
                    </div>
                    <div>
                        <h1 className='text-[20px] font-bold md:text-[13px] sm:text-[18px] xs:text-[18px]'>FAST DELIVERY</h1>
                        <p>Within 30 minute</p>
                    </div>
                </div>

                <div className='  flex items-center gap-5'>
                    <div className=' w-14 bg-white h-14 rounded-full grid items-center justify-center shadow-xl'>
                        <img src='./images/madel.png' className=' h-7'/>
                    </div>
                    <div>
                        <h1 className='text-[20px] font-bold md:text-[13px] sm:text-[18px] xs:text-[18px]'>ABSOLUTE DINING</h1>
                        <p> best buffet restaurant</p>
                    </div>
                </div>

                <div className='  flex items-center gap-5'>
                    <div className=' w-14 bg-white h-14 rounded-full grid items-center justify-center shadow-xl'>
                        <img src='./images/bag.png' className=' h-7'/>
                    </div>
                    <div>
                        <h1 className='text-[20px] font-bold md:text-[13px] sm:text-[18px] xs:text-[18px]'>PICKUP DELIVERY</h1>
                        <p>grap your food order</p>
                    </div>
                </div>
            </div>
        </div>
        <img src='./images/pizza.png' className=' absolute top-[290px] h-60 left-[93%] xs:hidden sm:hidden'/>
    </div>
  )
}

export default HeroSection