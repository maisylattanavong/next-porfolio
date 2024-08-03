import React from 'react'
import Heading from '../../Help/Heading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <Heading headingPrimary='Best Pricing For Your Project' headingSub='Price'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 gap-[2rem] lg:gap-0 sm:grid-cols-2 lg:grid-cols-3 items-center pt-[4rem] md:pt-[7rem]'>
            <div data-aos="fade-right" data-aos-anchor-placement='top-center'>
                <PriceCard plan="Basic" price="10$" num="1" save="25%" bg="bg-orange-700" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement='top-center' data-aos-delay="200">
                <PriceCard plan="Popular" price="20$" num="2" save="35%" bg="bg-pink-900" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement='top-center' data-aos-delay="400">
                <PriceCard plan="Premium" price="40$" num="3" save="55%" bg="bg-blue-900" />
            </div>
        </div>
    </div>
  )
}

export default Price