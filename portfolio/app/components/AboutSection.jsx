"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const Tab_data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
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
            <ul>
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
            <ul>
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

    return (
        <section className='text-white'>
            <div className='md:grid md:grind-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/codingComputer.jpeg' alt='About Section' width={500} height={500} />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg '>
                        I&apos;m an enthusiastic Full Stack Developer based in the San Francisco Bay Area, California. 
                        My journey into software engineering began after a background in tech operations, where I gained valuable insights into the industry. 
                        However, it was during my time in the autonomous vehicle industry that my passion for technology was reignited.
                        This experience inspired me to make the leap into the dynamic world of software development. 
                        I&apos;m currently on the lookout for exciting opportunities in software development and am open to roles as a Full Stack Developer, Front-End Developer, or Back-End Developer. 
                        My goal is to join a forward-thinking and innovative team where I can contribute my skills, dedication, and passion to craft outstanding software solutions.
                    </p>
                    <div className='flex flex-row mt-8'>
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
                        {Tab_data.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;