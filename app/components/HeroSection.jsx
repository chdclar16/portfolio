"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink, Element } from 'react-scroll';
import Link from 'next/link';



const HeroSection = () => {

  return (
    <Element name='hero'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className='col-span-7 place-self-center text-center sm:text-left'
            >
                <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-neutral-500'>
                        Hello, I&apos;m{" "}
                    </span>
                    <br />
                    <div className='max-w-300 h-2em'>
                        <TypeAnimation
                            sequence={[
                                'Chad',
                                3000,
                                'A Front End Developer',
                                1000,
                                'A Back End Developer',
                                1000,
                                'A Full Stack Engineer',
                                1000,
                                'A Software Engineer',
                                1000
                            ]}
                            wrapper='div'
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                I&apos;m currently on the lookout for exciting opportunities in software development and am open to roles as a Full Stack Developer, Front-End Developer, or Back-End Developer. 
                My goal is to join a forward-thinking and innovative team where I can contribute my skills, dedication, and passion to craft outstanding software solutions.
                </p>
                <ScrollLink 
                    to='contact'
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-500 to-neutral-300 hover:scale-75 ease-in-out duration-150 text-white'>
                        Let&apos;s Connect
                    </button>
                </ScrollLink>
                <Link
                    href="https://drive.google.com/file/d/1YeSCsyVTohxzJUgIfa37nqedqM7ExrAc/view"
                    target='_blank'
                    >
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-500 to-neutral-300 hover:scale-75 ease-in-out duration-150 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span>
                    </button>
                </Link>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                    src='./images/HeadShot.png'
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    sizing="intrinsic"
                    />
                </div>
            </motion.div>
        </div>
    </Element>
  )
}

export default HeroSection