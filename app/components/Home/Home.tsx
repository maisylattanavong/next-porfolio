import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Service from './Services/Service'
import Skill from './Skill/Skill'
import Project from './Projects/Project'
import Price from './Price/Price'
import Review from './Review/Review'
import Contact from './Contact/Contact'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutMe />
      <Service />
      <Skill />
      <Project />
      <Price/>
      <Review/>
      <Contact/>
    </div>
  )
}

export default Home