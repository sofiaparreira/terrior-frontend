"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    const path = usePathname()
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)



  return (
    <nav className='flex justify-between items-center py-2 z-0 px-32 bg-white/60 '>
        <Image src={''} alt='Logo' width={50} height={50} />
        <ul className="flex gap-12 items-center">
            <li className={`cursor-pointer px-1 ${path === '/' ? 'border-b-2 border-primary' : ''}`}>Home</li>
            <li className={`cursor-pointer px-1 relative${path === '/wines' ? 'border-b-2 border-primary' : ''}`}>
                <button>Vinhos</button>

                {isDropdownOpen && (
                <ul className='py-2 px-8 absolute left-0 top-full bg-white z-20 w-40 '>
                    <li>Tinto</li>
                    <li>Branco</li>
                    <li>Rosé</li>
                    
                </ul>
            )}

            </li>
            
            
            <li className={`cursor-pointer px-1 ${path === '/blog' ? 'border-b-2 border-primary' : ''}`}>Blog</li>
            <li className={`cursor-pointer px-1 ${path === '/contact' ? 'border-b-2 border-primary' : ''}`}>Contato</li>
        </ul>

        <ul className='text-xl gap-12 flex items-center'>
            <button className='cursor-pointer'>
                <FaUser />

            </button>
            <button className='cursor-pointer'>
                <FaShoppingCart />
            </button>
        </ul>
      
    </nav>
  )
}

export default Navbar
