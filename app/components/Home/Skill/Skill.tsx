import React from 'react'
import Heading from '../../Help/Heading'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary='Explore My Skills' headingSub='My Skills'/>
        <div className='grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
            <div>
                <SkillCard image="/images/react.svg" percent="90" title="React"/>
            </div>
            <div>
                <SkillCard image="/images/css.svg" percent="95" title="CSS"/>
            </div>
            <div>
                <SkillCard image="/images/js.svg" percent="80" title="JavaScript"/>
            </div>
            <div>
                <SkillCard image="/images/ts.svg" percent="70" title="TypeScript"/>
            </div>
            <div>
                <SkillCard image="/images/html.svg" percent="98" title="HTML"/>
            </div>
            <div>
                <SkillCard image="/images/node.svg" percent="67" title="NodeJs"/>
            </div>
            <div>
                <SkillCard image="/images/mongo.svg" percent="60" title="MongoDB"/>
            </div>
            <div>
                <SkillCard image="/images/python.svg" percent="50" title="Python"/>
            </div>
        </div>
    </div>
  )
}

export default Skill