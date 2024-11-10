import React from 'react'
import { CgMenu } from "react-icons/cg";
import NavBar from './NavBar';
import { useHeroContax } from './HeroContax';
import MenuSection from './MenuSection';
import { NavLink } from 'react-router-dom';

function CustomizeHeader() {

  const{MenuToggle,Menu}=useHeroContax()
  return (
    <div className=' w-[100%] xl:w-[96%] lg:w-[96%]  h-[100px] bg-red-500 mx-auto'>
        <img src='./images/Capture (2).PNG' className=' w-[100%] h-[100px] absolute '/>
        <div className=' relative h-[100px] w-full'>
        <div className=' w-[100%] ml-[-110px] mx-auto absolute z-0     left-[13%] bg-red-20 flex items-center justify-between   h-[108px]   '>                 
                      <div className=' flex items-center justify-between w-[73%] z-50'>
                        <div className='flex items-center w-[350px] xs:ml-20 sm:ml-10 md:ml-5 '> 
                          <img src='./images/logos/sitelogo.svg' className='h-[37px] mr-1 '/>
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
                      <CgMenu onClick={()=>{MenuToggle()}} className='md:mr-10 text-white text-3xl cursor-pointer  lg:hidden xl:hidden 2xl:hidden'/>
                    </div>
                </div>
        </div>

        <div className=' w-[300px]  relative  mt-[-15vh]  h-[100vh] z-50 '>
                 {Menu&&<MenuSection/>} 
            </div>
    </div>
  )
}

export default CustomizeHeader