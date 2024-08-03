import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Service from './Services/Service'
import Skill from './Skill/Skill'
import Project from './Projects/Project'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutMe />
      <Service />
      <Skill />
      <Project />
    </div>
  )
}

export default Home