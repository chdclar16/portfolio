import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Pass Pro",
        image: "/images/projects/PassPro.png",
        description: "",
        tag: ["All", "Web"]
    },
    {
        id:2,
        title: "Conference Companion",
        image: "/images/projects/ConferenceCompanion.png",
        description: "",
        tag: ["All", "Web"]
    },
    {
        id:3,
        title: "Car Car",
        image: "/images/projects/CarCar.png",
        description: "",
        tag: ["All", "Web"]
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
            />))}
        </div>
    </div>
  )
}

export default ProjectSection