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

function SliderSectionTwo() {
    var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        prevArrow: <IoIosArrowDropleft/>,
        nextArrow: <IoIosArrowDropright/>,
        autoplay: true,         // Autoplay চালু করার জন্য
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
        top:400px;
        left: 55%;
    }

    svg.slick-arrow.slick-prev{
        top:400px;
        left: 40%;
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
    <div className=' w-[100%] bg-[#FBF7F2] h-[90vh]   xs:mt-[87vh] sm:mt-[80vh] xs:h-[100vh] sm:h-[90vh] md:h-90vh]  '>
        <div className=' w-[76%] bg-[#FBF7F2] h-[50vh] mx-auto '>
            <div className=' h-[180px]  w-full flex items-center'>
                 <div className='  w-[100%] h-20'>
                    <div className=' flex items-center gap-2'>
                        <RiCheckboxBlankFill className='text-[#BD1F17] text-xs'/>
                        <p className=' text-sm font-semibold text-[#BD1F17]'>Crispy,Every Bite Taste </p>
                    </div>
                    <h1 className=' font-bold text-[40px] tracking-tighter text-[#181818] xs:text-4xl'>POPULAR FOOD ITEMS</h1>
                 </div>
            </div>
            <div className=' w-full  h-full  '>
            <Slider {...settings}>
                {Product.map((cur)=>{
                    return(
                        
                        <div className=' w-[400px]  xs:ml-[11%] sm:ml-[24%]  space-x-6 h-[400px] cursor-pointer '>
                            <div className=' w-[240px] shadow-md h-[260px] bg-[#FFFFFF] mt-10 ml-5 grid place-items-center'>
                                <img src={cur.image} className=' h-[130px] w-[140px]  mt-5 bg-white pt-5'/>
                                <div className='  mb-10 '>
                                <div className=' h-[3px] w-[30%] mx-auto bg-[#BD1F17]'></div>
                                <h1 className=' font-bold text-[#181818] text-center uppercase mt-2'>{cur.name}</h1>
                                <p className='  text-sm font-[500] text-[#181818]  text-center'>{cur.description}</p>
                                </div>
                            </div>
                          
                        </div>
                     
                    )
                })}
             </Slider>
               


            </div>
            
        </div>
        <img src='./images/tometo.png' className='relative top-[-250px] h-[230px] xs:hidden sm:hidden'/>
    </div>
    </Wraper>
  )
}

export default SliderSectionTwo