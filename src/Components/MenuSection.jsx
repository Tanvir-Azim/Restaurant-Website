import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useHeroContax } from './HeroContax';
import { NavLink } from 'react-router-dom';

function MenuSection() {

  const{HandelCross,ToggoleHome,ToggoleAbout,ToggoleBlog,ToggoleClients,ToggoleContact,ToggolePortfolio,home,about,contact,portfolio,blog,clients}=useHeroContax()
  console.log(home,about,contact,portfolio,blog,clients)
  return (
    <div className='w-full h-full bg-white -z-40'>
      <div className=' h-20 w-full  '>
        <img src='./images/Capture (2).PNG' className=' h-20 w-full absolute '/>
          
        
        <div className='flex relative h-20 items-center w-full justify-between  '>
              <div className='flex items-center ml-1'>
                <img src='./images/logos/sitelogo.svg' className='h-[30px] mr-1'/>
                <span className='font-bold text-white text-[25px]'>Restu</span><span className='text-white text-[29px]'>rant</span>
              </div>

              <div>
                <RxCross2 onClick={()=>HandelCross()} className=' text-2xl mr-2 text-white hover:text-yellow-400 cursor-pointer'/>
              </div>
                       
          </div>

         
          
        
      </div>
      <div>
      <ul className='  w-[100%] h-[30vh] bg-white text-black text-[14px] '>
              
                <li onClick={()=>{ToggoleHome()}} className={home?' w-[20%] ml-4 mt-3    text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/'>Home</NavLink></li>
                <li onClick={()=>{ToggoleAbout()}} className={about?' w-[20%] ml-4 mt-3     text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/about'>About</NavLink></li>
                <li onClick={()=>{ToggolePortfolio()}} className={portfolio?' w-[28%] ml-4 mt-3    text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/porttfolio'> Portfolio</NavLink></li>
                <li onClick={()=>{ToggoleClients()}} className={clients?' w-[22%] ml-4 mt-3    text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/clients'>Clients</NavLink></li>
                <li onClick={()=>{ToggoleBlog()}} className={blog?' w-[15%] pb-[2px] ml-4 mt-3    text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/blog'>Blog</NavLink></li>
                <li onClick={()=>{ToggoleContact()}} className={contact?' w-[25%] ml-4 mt-3    text-lg font-semibold hover:text-red-600 border-b-2 border-red-500':' w-full ml-4 mt-3 text-lg font-semibold hover:text-red-600'}><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
      </div>

    </div>
  )
}

export default MenuSection