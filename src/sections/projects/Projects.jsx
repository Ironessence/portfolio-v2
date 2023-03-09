import gsap from 'gsap';
import React, { useEffect } from 'react';

import '../../styles/Projects.styles.scss';
import { useRefContext } from '../../utils/context';
import projectsData from '../../utils/projectsData';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
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

  //Open project in a new tab and pass project in localStorage
  const navigateExternal = (target, options) => {
    if (options.state) {
      localStorage.setItem('state', JSON.stringify(options.state));
    }
    window.open(target, '_blank', 'noreferrer');
  };

  return (
    <div
      className="projects-container"
      ref={projectsRef}
    >
      {projectsData.map((project) => (
        <ProjectCard
          onClick={() => navigateExternal(`/${project.name}`, { state: { project } })}
          title={project.name}
          headerImage={project.startImage}
          key={project.key}
          id={project.id}
          skills={project.skills}
        />
      ))}
    </div>
  );
};

export default Projects;
