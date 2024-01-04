import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/organisms/Navbar/Navbar'
import Hero from './components/organisms/Hero/Hero'
import Course from './components/organisms/Course/Course'
import AboutUs from './components/organisms/About-us/About-us'
import Article from './components/organisms/Article/Article'
import Footer from './components/organisms/Footer/Footer'

import { Greet } from './components/organisms/Greet'
import Card from './components/molecoles/Course-cards'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Product from './components/pages/Product'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      {/* Routing */}
      <div className="container mx-auto m-10">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </div>

      <Hero />
      <Course />
      <AboutUs />
      <Article />

      {/* <Greet name="Oneil" usia="10" />
      <Greet name="Yimmi" usia="10" /> */}

      {/* <Card title="CARD 1">
        <h2>INI ICON</h2>
        <p>Lorem Ipsum dolor sir amet</p>
      </Card> */}

      <Footer />
    </>  
  )
}


