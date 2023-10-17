import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Pass Pro",
        image: "/images/projects/PassPro.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/chdclar16/pass-pro'
    },
    {
        id:2,
        title: "Conference Companion",
        image: "/images/projects/ConferenceCompanion.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/chdclar16/ConferenceCompanion'
    },
    {
        id:3,
        title: "Car Car",
        image: "/images/projects/CarCar.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/chdclar16/CarCar'
    },
]


const ProjectSection = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                tags={project}
                gitUrl={project.gitUrl}
            />))}
        </div>
    </div>
  )
}

export default ProjectSection