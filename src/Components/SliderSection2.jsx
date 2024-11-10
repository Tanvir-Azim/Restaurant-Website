import React from 'react'
import { RiCheckboxBlankFill } from "react-icons/ri";
import Product from '../Product.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from './ProductSlider';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import styled from 'styled-components';

function SliderSection2() {

  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <IoIosArrowDropleft/>,
    nextArrow: <IoIosArrowDropright/>,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Wraper = styled.section`
  
  svg.slick-arrow.slick-prev {
color:black;
position: relative;
top:-77px;
left: 94%;
width: 40px;
height: 40px;
background:white;
border-radius: 50%;


}

svg.slick-arrow.slick-next {
color:black;
top:-77px;
width: 40px;
height: 40px;
background:white;
border-radius: 50%;


}



svg.slick-arrow.slick-next:hover{
color: red;
}

svg.slick-arrow.slick-prev:hover{
color: red;
}

@media (max-width: 600px){
svg.slick-arrow.slick-next {
    top:580px;
    left: 52%;
}

svg.slick-arrow.slick-prev{
    top:580px;
    left: 38%;
}
}

@media (min-width: 601px) and (max-width: 800px){
svg.slick-arrow.slick-prev {
    left: 91%;
}

svg.slick-arrow.slick-next {
    left: 100%;
}
}



@media (min-width: 801px) and (max-width: 1024px) {
svg.slick-arrow.slick-prev {
    left: 90%;
}



}

@media (min-width: 1023px) and (max-width: 1424px) {
svg.slick-arrow.slick-prev {
    left: 93%;
   
}



}

.slick-dots li {
visibility: hidden;
}
  `
  return (
    <Wraper>
    <div className=' w-[100%] mt-10 xl:mt-0 bg-[#FBF7F2] h-[112vh] xs:h-[110vh] sm:h-[140vh] md:h-[80vh]  xs:mt-[16vh] sm:mt-[10vh] '>
        <div className=' w-[76%] bg-[#FBF7F2] h-[60vh] mx-auto  '>
            <div className=' h-[180px]  w-full flex items-center'>
                 <div className='  w-[100%] h-20'>
                    <div className=' flex items-center gap-2'>
                        <RiCheckboxBlankFill className='text-[#BD1F17] text-xs'/>
                        <p className=' text-sm font-semibold text-[#BD1F17]'>Crispy,Every Bite Taste </p>
                    </div>
                    <h1 className=' font-bold text-[40px] md:text-[33px] tracking-tighter text-[#181818] xs:text-[33px]'>WHAT SOME OF MY CUSTOMERS SAY</h1>
                 </div>
            </div>

            <Slider {...settings}>
            <div className=' w-[100%]   h-full   '>
              <div className=' w-full h-[500px]  grid grid-cols-[1fr,1.5fr] grid-rows-1 xs:grid-cols-1 xs:h-[60vh] xs:grid-rows-2 sm:grid-cols-1 sm:h-[100vh] sm:grid-rows-2'>
                    <div className='0'>
                      <img src='./images/Quote (1).png' className=' h-full w-full'/>
                    </div>
                    <div className=' h-full w-full'>
                      <img src='./images/Quote (2).png' className=' h-full w-full'/>
                    </div>
                  
                </div>              
            </div>

            <div className=' w-[100%]   h-full   '>
              <div className=' w-full h-[500px]  grid grid-cols-[1fr,1.5fr] grid-rows-1 xs:grid-cols-1 xs:h-[60vh] xs:grid-rows-2 sm:grid-cols-1 sm:h-[100vh] sm:grid-rows-2'>
                    <div className='0'>
                      <img src='./images/Quote (1).png' className=' h-full w-full'/>
                    </div>
                    <div className=' h-full w-full'>
                      <img src='./images/Quote (2).png' className=' h-full w-full'/>
                    </div>
                  
                </div>              
            </div>


            <div className=' w-[100%]   h-full   '>
              <div className=' w-full h-[500px]  grid grid-cols-[1fr,1.5fr] grid-rows-1 xs:grid-cols-1 xs:h-[60vh] xs:grid-rows-2 sm:grid-cols-1 sm:h-[100vh] sm:grid-rows-2'>
                    <div className='0'>
                      <img src='./images/Quote (1).png' className=' h-full w-full'/>
                    </div>
                    <div className=' h-full w-full'>
                      <img src='./images/Quote (2).png' className=' h-full w-full'/>
                    </div>
                  
                </div>              
            </div>


            </Slider>
      
            
          
            
        </div>
        <img src='./images/221.png' className='relative top-[-250px] h-[180px] xs:hidden sm:hidden'/>
        <img src='./images/12.png' className='relative top-[-250px] left-[89%] h-[250px] xs:hidden sm:hidden '/>
    </div>
    </Wraper>
  )
}

export default SliderSection2
