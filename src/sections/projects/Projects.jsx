import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/Projects.styles.scss';
import { useRefContext } from '../../utils/context';
import projectsData from '../../utils/projectsData';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const navigate = useNavigate();

  const { projectsRef } = useRefContext();

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
  const handlePressSelectedProject = (project) => {
    console.log('PROJECT IN FUNCTION:', project);
    navigate(`/${project.name}`, {
      state: { project },
    });
  };

  return (
    <div
      className="projects-container"
      ref={projectsRef}
    >
      {projectsData.map((project) => (
        <ProjectCard
          onClick={() => handlePressSelectedProject(project)}
          title={project.name}
          headerImage={project.startImage}
          key={project.key}
          id={project.id}
          skills={project.skills}
          intro={project.intro}
        />
      ))}
    </div>
  );
};

export default Projects;
