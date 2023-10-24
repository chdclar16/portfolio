"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>FastAPI</li>
                <li>React</li>
                <li>React Redux</li>
                <li>Next.js</li>
                <li>Django</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>PostgresSQL</li>
                <li>TailWind</li>
                <li>Bootstrap</li>
            </ul>
        )
    },
    {
        title: "Projects",
        id: "projects",
        content: (
            <ul className='list-disc pl-2'>
                <li>CarCar</li>
                <li>PassPro</li>
                <li>Conference Companion</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>First one</li>
                <li>Second one</li>
                <li>Third one</li>
            </ul>
        )
    }

]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
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
                        src='/images/codingComputer.jpeg' 
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
                            I&apos;m an enthusiastic Full Stack Developer based in the San Francisco Bay Area, California. 
                            My journey into software engineering began after a background in tech operations, where I gained valuable insights into the industry. 
                            However, it was during my time in the autonomous vehicle industry that my passion for technology was reignited.
                            This experience inspired me to make the leap into the dynamic world of software development. 
                        </motion.p>
                        <div className='flex flex-row justify-start mt-8'>
                            <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                            >
                                {" "}
                                Skills {" "}
                            </TabButton>
                            <TabButton 
                            selectTab={() => handleTabChange("projects")} 
                            active={tab === "projects"}
                            >
                                {" "}
                                Projects {" "}
                            </TabButton>
                            <TabButton 
                            selectTab={() => handleTabChange("experience")} 
                            active={tab === "experience"}
                            >
                                {" "}
                                Experience {" "}
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