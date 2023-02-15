import React, { useEffect } from 'react';
import '../styles/ProjectCard.styles.scss';

const ProjectCard = ({ selectedProject, onClick, title, headerImage, id }) => {
  const containerClassName =
    'pc-container' +
    (selectedProject !== null && selectedProject.id === id ? ' big-container' : '');

  const titleClassName =
    'pc-title' + (selectedProject !== null && selectedProject.id === id ? ' big-title' : '');

  useEffect(() => {
    if (selectedProject !== null && selectedProject.id === id) {
      console.log('IS');
    } else {
      console.log('IS NOT');
      console.log(selectedProject !== null);
      console.log(selectedProject);
      console.log(id);
    }
  }, [id, selectedProject]);

  return (
    <div
      className={containerClassName}
      onClick={onClick}
    >
      <h1 className={titleClassName}>{title.toUpperCase()}</h1>
      <div className="pc-cover">
        <h3 className="pc-details">Details</h3>
      </div>
      <img
        src={require(`../assets/${headerImage}`)}
        alt="maxiparty-1"
        className="pc-header-image"
      />
    </div>
  );
};

export default ProjectCard;
