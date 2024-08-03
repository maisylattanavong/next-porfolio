import React from 'react'
import Heading from '../../Help/Heading'
import AboutInfoBox from './AboutInfoBox'
import AboutImage from '@/public/images/about.svg'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'>\
    {/**Heading */}
        <Heading headingPrimary="I Can Build Your Dream Website" headingSub="About Us" />

        <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center
        gap-[4rem]'>
            {/**Personal Info */}
            <div>
                <h1 className='mb-[1.4rem] text-[27px] font-semibold text-orange-500'>Personal Infos:</h1>
                {/**AboutInfoBox */}
                <AboutInfoBox text1="First Name: Maisy" text2="Last Name: Lattanavong" />
                <AboutInfoBox text1="Address: Nongphaya" text2="Phone: 20 9936 1995" />
                <AboutInfoBox text1=": Maisy" text2="Last Name: Lattanavong" />
                <AboutInfoBox text1="Age: 38" text2="Email: maisylattanavong@gmail.com" />
                <AboutInfoBox text1="Freelance: Available" text2="Language: Lao,Thai,English,Vietnamese" />
                <AboutInfoBox text1="Country: Laos" text2="Role: Developer" />
            </div>

            {/**Image */}
            <Image src={AboutImage} alt="About" className="mx-auto"/>
        </div>
    </div>
  )
}

export default AboutMe