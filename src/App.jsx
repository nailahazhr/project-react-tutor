import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/organisms/Navbar/Navbar'
import Hero from './components/organisms/Hero/Hero'
import Course from './components/organisms/Course/Course'
import AboutUs from './components/organisms/About-us/About-us'
import Article from './components/organisms/Article/Article'
import Footer from './components/organisms/Footer/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Course />
      <AboutUs />
      <Article />
      <Footer />
      {/* <Switch>
        <Route path="/" exact component={HeroSection} />
        <HeroSection />
      </Switch> */}
    </>
  )
}


