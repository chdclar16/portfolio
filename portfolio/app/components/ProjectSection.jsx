"use client"
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from "framer-motion";
import { Element } from 'react-scroll';

const projectsData = [
    {
        id: 1,
        title: "Pass Pro",
        image: "/images/projects/PassPro.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        gitUrl: 'https://github.com/chdclar16/pass-pro'
    },
    {
        id:2,
        title: "Conference Companion",
        image: "/images/projects/ConferenceCompanion.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        gitUrl: 'https://github.com/chdclar16/ConferenceCompanion'
    },
    {
        id:3,
        title: "Car Car",
        image: "/images/projects/CarCar.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        gitUrl: 'https://github.com/chdclar16/CarCar'
    },
    {
        id:4,
        title: "Personal Portfolio",
        image: "/images/projects/Portfolio.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        gitUrl: 'https://github.com/chdclar16/portfolionext'
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