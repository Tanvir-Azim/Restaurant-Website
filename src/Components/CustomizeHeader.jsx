import React from 'react'
import { CgMenu } from "react-icons/cg";
import NavBar from './NavBar';
import { useHeroContax } from './HeroContax';
import MenuSection from './MenuSection';
import { Link,NavLink } from 'react-router-dom';

function CustomizeHeader() {

  const{MenuToggle,Menu}=useHeroContax()
  return (
    <div className=' w-[110%] ml-[-2px] xl:w-[96%] lg:w-[96%]  h-[100px] bg-red-500 mx-auto'>
        <img src='./images/Capture (2).PNG' className=' w-[100%] h-[100px] absolute '/>
        <div className=' relative h-[100px] w-full '>
          <div className='  w-[86%]    mx-auto absolute z-0      left-[12%] bg-red-20 flex items-center justify-between   h-[108px]   '>                 
                      <div className='   lg:ml-[-100px]   bg flex items-center justify-between lg:w-[95%] w-[73%] z-50'>
                      
                       <div className='flex  items-center w-[350px] xs:ml-[-65px] sm:ml-[-65px] md:ml-[-80px] '> 
                            <img src='./images/logos/sitelogo.svg' className='h-[37px] xs:ml-[30px] mr-1'/>
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
                      <CgMenu onClick={()=>{MenuToggle()}} className='md:mr-36 sm:mr-28 xs:mr-16 text-white text-3xl cursor-pointer  lg:hidden xl:hidden 2xl:hidden'/>
                    </div>
                </div>
        </div>

        <div className=' w-[300px]  relative  mt-[-24vh]  h-[100vh] z-50 '>
                 {Menu&&<MenuSection/>} 
            </div>
          
    </div>
  )
}

export default CustomizeHeader