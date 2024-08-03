import React from 'react'
import Heading from '../../Help/Heading'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary='Explore My Project' headingSub='Project'/>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                {/**Image */}
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p1.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p2.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p3.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p4.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p5.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/p4.jpg" alt='Portfolio' width={300} height={300} className='object-contain w-[100%] h-[100%]'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Project