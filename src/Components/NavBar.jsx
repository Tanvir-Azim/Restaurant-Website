import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHeroContax } from './HeroContax'


function NavBar() {

  const{HandelCross,ToggoleHome,ToggoleAbout,ToggoleBlog,ToggoleClients,ToggoleContact,ToggolePortfolio,home,about,contact,portfolio,blog,clients}=useHeroContax()
  console.log(home,about,contact,portfolio,blog,clients)
  return (
    <>
        <div className='h-[37px] ml-14 w-[745px] lg:w-[650px] md:hidden sm:hidden xs:hidden grid grid-cols-1 grid-rows-1 md:bg-black   '>
            <ul className='flex w-[70%]  justify-around items-center h-9 text-white text-[14px] '>
                <li onClick={ToggoleHome} className={home?' border-b-2 border-white':''}><NavLink to='/'>Home</NavLink></li>
                <li onClick={ToggoleAbout} className={about?' border-b-2 border-white':''}><NavLink to='/about'>About</NavLink></li>
                <li onClick={ToggolePortfolio} className={portfolio?' border-b-2 border-white':''}><NavLink to='/porttfolio'>Portfolio</NavLink></li>
                <li onClick={ToggoleClients} className={clients?' border-b-2 border-white':''}><NavLink to='/clients'>Clients</NavLink></li>
                <li onClick={ToggoleBlog} className={blog?' border-b-2 border-white':''}><NavLink to='/blog'>Blog</NavLink></li>
                <li onClick={ToggoleContact} className={contact?' border-b-2 border-white':''}><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        
        </div>
    </>
  )
}

export default NavBar