import gsap from 'gsap';
import React, { useCallback, useEffect, useState } from 'react';

import '../../styles/Projects.styles.scss';
import { useRefContext } from '../../utils/context';
import projectsData from '../../utils/projectsData';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const { projectsRef } = useRefContext();

  useEffect(() => {
    console.log('Proj ref:', projectsRef.current.offsetTop);
  }, [projectsRef]);

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
    <div
      className="projects-container"
      ref={projectsRef}
    >
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
