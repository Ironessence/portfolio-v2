import React, { useCallback, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Homepage.styles.scss';
import projectsData from '../utils/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePressSelectedProject = useCallback((projectId) => {
    setSelectedProject(projectId);
  }, []);

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
        />
      ))}
    </div>
  );
};

export default Projects;
