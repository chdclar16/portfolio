"use client"
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from "framer-motion";
import { Element } from 'react-scroll';

const projectsData = [
    {
        id: 1,
        title: "Pass Pro",
        image: "./images/projects/PassPro.png",
        description: "Pass Pro's is an ecommerce platform that offers a simple and efficient website for individuals to buy tickets and empower event hosts to easily create and sell tickets for their own events.",
        gitUrl: 'https://github.com/chdclar16/pass-pro'
    },
    {
        id:2,
        title: "Conference Companion",
        image: "./images/projects/ConferenceCompanion.png",
        description: "Conference Companion is an all-in-one tool for managing conferences and events. It's a user-friendly web app that helps you create, schedule, and keep tabs on all your conference-related stuff like workshops and meetings. Conference Companion utilizes pexels api to populate it's images.",
        gitUrl: 'https://github.com/chdclar16/ConferenceCompanion'
    },
    {
        id:3,
        title: "Car Car",
        image: "./images/projects/CarCar.png",
        description: "CarCar is an app for managing  car dealership smoothly. It's a handy tool that helps keep track of your car inventory, sales, and maintenance schedules, all in one place. ",
        gitUrl: 'https://github.com/chdclar16/CarCar'
    },
    {
        id:4,
        title: "Personal Portfolio",
        image: "./images/projects/Portfolio.png",
        description:"The personal portfolio project was created using Next.js and Tailwind CSS, spiced up with additional functionalities from React libraries such as react-icons, react-scroll and many more. To enhance the presentation, framer motion was employed for creating engaging animations.",
        gitUrl: 'https://github.com/chdclar16/portfolionext'
    },
    {
        id: 5,
        title: "Omega Strikers Build Discord Bot",
        image: "./images/OmegaStrikerBot.webp",
        description:"The Omega Strikers Bot is a Discord bot designed to provide information and builds for the game Omega Strikers.",
        gitUrl:"https://github.com/chdclar16/omega-striker-build-bot",
    }
]

const cardVariants = {
    initial: { y:50, opacity: 0 },
    animate: { y: 0, opacity: 1}
}

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

  return (
    <Element name="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <ul className='grid md:grid-cols-3 gap-8 md:gap-12' ref={ref}>
            {projectsData.map((project, index) => (
                <motion.li 
                    variants={cardVariants}
                    key={index}
                    initial="initial"
                    animate={isInView ? "animate": "initial"}
                    transition={{ duration:0.3, delay: index * 0.4 }}
                    >
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 

                    gitUrl={project.gitUrl}
                />
                </motion.li>
            ))}
        </ul>
    </Element>
  )
}

export default ProjectSection