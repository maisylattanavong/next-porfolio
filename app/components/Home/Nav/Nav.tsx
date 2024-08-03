import Link from 'next/link'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface Props {
    openNav:()=>void
}
const Nav = ({openNav}:Props) => {
    return (
        <div className='h-[13vh] bg-[#181a1d]'>
            <div className='flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto'>
                {/**Logo */}
                <div className='text-[35px] font-semibold text-white'>
                    Sa<span className='text-red-500'>j</span>al
                </div>
                {/**Nav Links */}
                <ul className='lg:flex hidden text-white items-center space-x-6 xl:space-x-10'>
                    <li className='navlink'>
                        <Link href={`#`}>Home</Link>
                    </li>
                    <li className='navlink'>
                        <Link href={`#`}>About</Link>
                    </li>
                    <li className='navlink'>
                        <Link href={`#`}>Services</Link>
                    </li>
                    <li className='navlink'>
                        <Link href={`#`}>Porfolio</Link>
                    </li>
                    <li className='navlink'>
                        <Link href={`#`}>Blog</Link>
                    </li>
                    <li className='navlink'>
                        <Link href={`#`}>Contact</Link>
                    </li>
                </ul>
                {/**Download and menu */}
                <div className='flex items-center space-x-6'>
                    {/**Download CV button */}
                    <Link href={`/images/newcv.pdf`} download={`CV`} target='_blank'>
                        <button className='group relative h-12 w-48 overflow-hidden rounded-full bg-red-500 text-lg shadow'>
                            <span className='absolute inset-0 w-3 bg-amber-400 transition-all duration-300 eas-out group-hover:w-full block'>
                            </span>
                            <span className='relative flex items-center justify-center space-x-3 text-white'>
                                <FaDownload />
                                <span>Download CV</span>
                            </span>
                        </button>
                    </Link>

                    {/**Burger menu */}
                    <HiBars3BottomRight className='w-[2rem] text-white h-[2rem] lg:hidden'
                    onClick={openNav}/>
                </div>
            </div>
        </div>
    )
}

export default Nav