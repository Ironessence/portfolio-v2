import gsap from 'gsap';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../components/Modal';
import ProjectCard from '../components/ProjectCard';
import '../styles/Homepage.styles.scss';
import projectsData from '../utils/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handlePressSelectedProject = useCallback((projectId) => {
    setSelectedProject(projectId);
    setModalOpen(true);
  }, []);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="projects-container">
      {modalOpen && <Modal onClose={closeModal} />}
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
          image1={project.image1}
          image1width={project.image1width}
          image2={project.image2}
          image3={project.image3}
          image3width={project.image3width}
          image4={project.image4}
          endText={project.endText}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
