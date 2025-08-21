"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    const path = usePathname()
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isDropdownUserOpen, setIsDropdownUserOpen] = useState<boolean>(false)

    const toggleUserDropdown = () => { setIsDropdownUserOpen(!isDropdownUserOpen) }
    const toggleWineDropdown = () => { setIsDropdownOpen(!isDropdownOpen) }



    return (
        <nav className='flex justify-between items-center py-2 z-0 px-32 bg-white/60 '>
            <Image src={''} alt='Logo' width={50} height={50} />
            <ul className="flex gap-12 items-center">
                <li className={`cursor-pointer px-1 ${path === '/' ? 'border-b-2 border-primary' : ''}`}>Home</li>
                <li className={`cursor-pointer px-1 relative${path === '/wines' ? 'border-b-2 border-primary' : ''}`}>
                    <button onClick={toggleWineDropdown}>Vinhos</button>

                    {isDropdownOpen && (
                        <ul className='py-2 px-8 absolute left-0 top-full bg-white z-20 w-40 rounded-md'>
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
                <li className='relative'>
                    <button onClick={toggleUserDropdown} className='cursor-pointer'>
                        <FaUser />
                    </button>
                    {isDropdownUserOpen && (
                        <ul className='absolute left-0 top-full bg-white z-20 w-40 rounded-md text-sm'>
                            <Link href={'/auth/register-client'}  className='py-3 px-8 rounded-md cursor-pointer hover:bg-gray-100 duration-300 w-full'>
                                Cadastro
                            </Link>

                            <li className='py-3 px-8 rounded-md cursor-pointer hover:bg-gray-100 duration-300'>
                                Login
                            </li>
                        </ul>
                    )}
                </li>

                <button className='cursor-pointer'>
                    <FaShoppingCart />
                </button>
            </ul>

        </nav>
    )
}

export default Navbar
