import React from 'react'
import Header from './assets/Header'
import HeroSection from './Components/HeroSection'
import SliderSection from './Components/SliderSection'
import BookSection from './Components/BookSection'
import Blog from './Blog'
import SliderSectionTwo from './Components/SliderSection2'
import Footer from './Components/Footer'

function Home() {
  return (
    <>
        <Header/>
        <HeroSection/>
        <SliderSection/>
        <BookSection/>
        <SliderSectionTwo/>
       

    </>
  )
}

export default Home