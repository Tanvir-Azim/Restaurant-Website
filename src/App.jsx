import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Components/Contact';
import Porttfolio from './Components/Porttfolio';
import Clients from './Components/Clients';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/blog" element={<Blog/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        <Route path= "/porttfolio" element={<Porttfolio/>}/>
        <Route path= "/clients" element={<Clients/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App