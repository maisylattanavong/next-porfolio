import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Service from './Services/Service'


const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <AboutMe/>
        <Service/>
    </div>
  )
}

export default Home