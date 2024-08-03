import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Props {
    image: string
    role: string
    name: string
}
const ClientReview = ({ image, role, name }: Props) => {
    return (
        <div className='flex flex-col text-center justify-center'>
            <Image src={image} width={200} height={200} alt={name} objectFit='contain' className='mx-auto mb-[2rem] rounded-full' />
            <div className='flex items-center mx-auto'>
                <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
            </div>
            <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
            <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
            <p className='text-[16px] text-white opacity-50 w-[90%] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati consectetur, 
                molestias culpa eligendi at dicta vel quis dignissimos veniam, accusantium illum autem numquam quos id reiciendis porro tenetur itaque.</p>
        </div>
    )
}

export default ClientReview