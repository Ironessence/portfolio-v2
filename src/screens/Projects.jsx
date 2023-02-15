import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Homepage.styles.scss';
import projectsData from '../utils/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePressSelectedProject = useCallback((id) => {
    setSelectedProject(projectsData.filter((proj) => proj.id === id));
  }, []);

  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <ProjectCard
          selectedProject={selectedProject}
          onClick={() => handlePressSelectedProject(project.id)}
          title={project.name}
          headerImage={project.startImage}
          key={project.key}
          id={project.id}
        />
      ))}
    </div>
  );
};

export default Projects;
