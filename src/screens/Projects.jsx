import gsap from 'gsap';
import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Homepage.styles.scss';
import projectsData from '../utils/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to('.projects-container', {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects-container',
          start: '100 top',
          end: '+=1200',
          scrub: true,
        },
      });
    }, '.homepage');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  //Function to open/close a project card
  const handlePressSelectedProject = useCallback(
    (projectId) => {
      if (selectedProject !== null && selectedProject === projectId) {
        setSelectedProject(null);
      } else {
        setSelectedProject(projectId);
      }
    },
    [selectedProject],
  );

  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <ProjectCard
          onClick={() => handlePressSelectedProject(project.id)}
          title={project.name}
          headerImage={project.startImage}
          key={project.key}
          id={project.id}
          isSelected={project.id === selectedProject}
          skills={project.skills}
          intro={project.intro}
        />
      ))}
    </div>
  );
};

export default Projects;
