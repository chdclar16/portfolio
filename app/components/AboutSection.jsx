"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsFillBootstrapFill, BsFiletypeSql } from 'react-icons/bs';
import { 
    SiExpress, 
    SiFastapi, 
    SiDjango, 
    SiNodedotjs, 
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiPython,
    SiJavascript,
    SiRedux,
    SiDocker
} from 'react-icons/si';

const tabData = [
    {
        title: "Front-End Skills",
        id: "FEskills",
        content: (
        <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex items-center">
                {<FaReact />}
                <div className="flex-shrink-0 ml-2 text-lg">
                    React
                </div>
            </li>
            <li className="flex items-center">
                {<SiRedux />} 
                <div className="flex-shrink-0 ml-2 text-lg">
                    Redux & RTK
                </div>
            </li>
            <li className="flex items-center">                
                {<TbBrandNextjs />}
                <div className="flex-shrink-0 ml-2 text-lg">
                    Next.js 
                </div>
            </li>
            <li className="flex items-center">
                {<BiLogoTailwindCss />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    TailWind
                </div>
            </li>
            <li className="flex items-center">
                {<BsFillBootstrapFill />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    Bootstrap
                </div>
            </li>
        </ul>
        )
    },
    {
        title: "Back-End Skills",
        id: "BEskills",
        content: (
            <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex items-center">
                {<SiExpress />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    Express
                </div>
            </li>
            <li className="flex items-center">
                {<SiFastapi />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    FastAPI
                </div>
            </li>
            <li className="flex items-center">
                {<SiDjango />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    Django 
                </div>
            </li>
            <li className="flex items-center">
                Restful APIs
            </li>
            <li className="flex items-center">
                {<SiNodedotjs />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    Node.js
                </div> 
            </li>
            <li className="flex items-center">
                {<SiMongodb />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    MongoDB
                </div> 
            </li>
            <li className="flex items-center">
                {<SiPostgresql />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    PostgresSQL 
                </div>
            </li>
            
        </ul>
        )
    },
    {
        title: "Other Technical Skills",
        id: "OSkills",
        content: (
            <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex items-center">
                {<SiTypescript />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    TypeScript
                </div> 
            </li>
            <li className="flex items-center">
                {<SiPython />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    Python
                </div> 
            </li>
            <li className="flex items-center">
                {<SiJavascript />}
                <div className='flex-shrink-0 ml-2 text-lg'>
                    JavaScript ES6
                </div> 
            </li>
            <li className="flex items-center">
                {<BsFiletypeSql />}
                <div className="flex-shrink-0 ml-2 text-lg">
                    SQL
                </div> 
            </li>
            <li className="flex items-center">
                {<SiDocker />}
                <div className="flex-shrink-0 ml-2 text-lg">
                    Docker
                </div> 
            </li>
        </ul>
        )
    }   

]


const AboutSection = () => {
    const [tab, setTab] = useState("FEskills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };
    
    const childVariants = {
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Element name="about">
            <section className='text-white'>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
                >
                    <Image 
                        src='./images/codingComputer.jpeg' 
                        alt='About Section' 
                        width={500} 
                        height={500}
                        sizing="intrinsic" 
                    />
                    <motion.div 
                        className='mt-4 md:mt-0 text-left flex flex-col h-full'
                        variants={childVariants}
                        >
                        <motion.h2 
                            className='text-4xl font-bold text-white mb-4'
                            variants={childVariants}
                        >
                            About Me
                        </motion.h2>
                        <motion.p 
                            className='text-base md:text-lg'
                            variants={childVariants}
                        >
                            I&apos;m a Full Stack Developer from San Francisco Bay Area, California. I&apos;ve transitioned from tech operations and jumped headfirst into the exhilarating world of software development. 
                            I&apos;m all about crafting digital solutions and making things happen in the tech universe. Let&apos;s code some awesome stuff! 🚀
                        </motion.p>
                        <div className='flex flex-row justify-start mt-8'>
                            <TabButton 
                            selectTab={() => handleTabChange("FEskills")}
                            active={tab === "FEskills"}
                            >
                                {" "}
                                Front-End Skills {" "}
                            </TabButton>
                            <TabButton 
                            selectTab={() => handleTabChange("BEskills")}
                            active={tab === "BEskills"} 
                            >
                                {" "}
                                Back-End Skills {" "}
                            </TabButton>
                            <TabButton 
                            selectTab={() => handleTabChange("OSkills")}
                            active={tab === "OSkills"} 
                            >
                                {" "}
                                Other Technical Skills {" "}
                            </TabButton>
                        </div>
                        <div className='mt-8'>
                            {tabData.find((t) => t.id === tab).content}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </Element>
    )
}

export default AboutSection;