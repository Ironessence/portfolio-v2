import React from 'react';
import '../styles/ProjectCard.styles.scss';

const ProjectCard = ({ onClick, title, headerImage, isSelected }) => {
  return (
    <div
      className={isSelected ? 'big-container' : 'pc-container'}
      onClick={onClick}
    >
      <h1 className={'pc-title'}>{title.toUpperCase()}</h1>
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
