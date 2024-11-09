import React from 'react'

function HeroAbout() {
  return (
    <>
      <div>
        <h1 className='text-[36px] lg:text-[28px] md:text-[28px] font-bold xs:text-[28px]'>EXCEPTIONAL CULINARY</h1><br/>
        <h1 className='text-[36px] lg:text-[28px] md:text-[28px] font-bold mt-[-30px] xs:text-[28px]'>EXPERIENCE AND DELICIOUS FOOD</h1>
        <p className=' mt-4 text-justify md:text-[13px] xs:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

        <div className='  flex items-center gap-5 justify-between w-[58%] h-14 mt-4 '>
          <div className='h-full w-full flex items-center'>
            <button className='w-[157px] h-[40px] md:w-[140px] md:h-[35px]  bg-[#FEBF00] font-semibold '>ABOUT MORE</button>
           </div>
           <div className=' flex items-center h-full w-full'>
              <img src='./images/call-alt.png'/>
              <p>+883426739485</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroAbout