import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import { CgMenu } from "react-icons/cg";
import MenuSection from '../Components/MenuSection';
import { useHeroContax } from '../Components/HeroContax';
import { NavLink } from 'react-router-dom';


function Header() {


 const{MenuToggle,Menu}=useHeroContax()


  return (
    <>
          <div className='w-[100%]  '>
            <div className='w-[100%]'>
                <div className=' w-[80%] mx-auto absolute z-0     left-[13%] bg-red-20 flex items-center justify-between   h-[108px]   '>
                       
                      <div className='   flex items-center justify-between w-[73%] z-50'>
                        <div className='flex items-center w-[350px]  '>
                            <img src='./images/logos/sitelogo.svg' className='h-[37px] xs:ml-[-6px] mr-1'/>
                            <span className='font-bold text-white text-[29px]'>Restu</span><span className='text-white text-[29px]'>rant</span> 
                        </div>

                        <div className=''>
                          <NavBar/>
                         </div>

                      </div>
                      
                    
                    <div>
                      <button className='w-[157px] h-[40px]  font-semibold bg-[#FEBF00] md:hidden sm:hidden xs:hidden'>BOOK A TABLE</button>
                    </div>
                    <div>
                      <CgMenu onClick={()=>{MenuToggle()}} className=' text-white text-3xl cursor-pointer  lg:hidden xl:hidden 2xl:hidden xs:mr-4'/>
                    </div>
                </div>
                <div className=' absolute top-[180px]  w-[75%]  h-[500px]  left-[13%] xl:h-[80vh] grid grid-cols-[1fr,1fr] grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 xs:grid-cols-1 xs:grid-rows-2 '>
                    <div className='  text-nowrap '>
              
                      <div className=' absolute w-[20%] opacity-40 left-[50%] top-[20%] h-[180px] bg-red-600 xs:hidden sm:hidden md:hidden'>
                     
                      </div>
                      <p className=' text-[65px] md:text-[45px]  xs:text-[24px] sm:text-[30px] lg:text-[50px] xs:top-[-60px] left-[1%] sm:top-[-60px] font-bold text-white absolute sm:left-[8%] xs:left-[0%] top-32 tracking-[2px] xs:tracking-normal'>TASTE   THE  AUTHENTIC</p><br/>
                      <p className=' text-[65px] md:text-[45px]  lg:text-[50px] xs:text-[24px] sm:text-[30px] xs:top-[-18px] left-[1%] sm:top-[-18px] font-bold text-white absolute sm:left-[8%] xs:left-[0%] top-[200px] md:top-[180px] tracking-[2px] xs:tracking-normal'>SAUDI CUISINE</p>
                      <p className=' text-white absolute sm:left-[8%] xs:left-[0%] xs:top-[40px] sm:top-[30px] top-[295px] left-[1%] xs:text-sm xs:tracking-normal '>Among the best saudi chefs in the worle,</p><br/>
                      <p className=' text-white absolute sm:left-[8%] xs:left-[0%] xs:top-[60px] sm:top-[55px] top-[320px] left-[1%] xs:text-sm'>serving you something beyond flavor.</p>
                      <div>
                        <button className='absolute  w-[157px] h-[40px] sm:left-[8%] xs:left-[0%] sm::left-[8%] left-[1%]  top-[75%] bg-[#FEBF00] font-semibold sm:top-24 xs:top-24 '>EXPLORE MENU</button>
                      </div>
                    </div>
                    <div className=' grid place-items-center w-full xs:w-[310px]    h-full items-start justify-center sm:w-[420px] sm:h-[60vh] sm:mt-[-120px] xs:mt-[-60px] mx-auto  '>
                      <img src='./images/featured/featured1.svg' className='h-full w-full xs:w-[500px]  xs:h-[400px]  xs:ml-0 sm:ml-0  ml-[10%]  '/>
              
                    </div>
                </div>
                <img src='./images/Capture.PNG' className=' h-[110vh] w-full  sm:h-[110vh] xs:h-[130vh] bg-red-600 '/>

     
            </div>

            <div className=' w-[300px]   relative sm:mt-[-110vh] xs:mt-[-110vh]  mt-[-100vh]  h-[100vh] '>
                 {Menu&&<MenuSection/>} 
            </div>
        </div>
  
    </>
  )
}

export default Header