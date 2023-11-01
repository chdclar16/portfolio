"use client";
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
    {
        title: "About",
        path: "about",
    },
    {
        title: "Projects",
        path: "projects",
    },
    {
        title: "Contact",
        path: "contact",
    }
]

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    
    return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-75'>
        <div className='flex flex-wrap items-center justify-between mx-auto pt-4 py-2 pb-0'>
            <Link 
                to='hero'
                smooth={true}
                duration={500}
                offset={-250}
                className='cursor-pointer'
            >
                <Image 
                    src="./images/logo.png"
                    width={0}
                    height={0}z
                    alt="Logo"
                    sizes='20vw'
                    style={{ width: '100%', height: 'auto' }} 
                    className='bg-opacity-75'
                />
            </Link>
            <div className='mobile-menu block md:hidden'>
            {
                !navBarOpen? (
                    <button 
                        onClick={() => setNavBarOpen(!navBarOpen)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                    >
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                ) : (
                    <button 
                        onClick={() => setNavBarOpen(!navBarOpen)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                        <XMarkIcon className='h-5 w-5' />
                    </button>
                )
            }
            </div>
            <div className='menu hidden md:block md:w-auto bg-opacity-75' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index} style={index === navLinks.length - 1 ? { marginRight: '20px' } : {}}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar