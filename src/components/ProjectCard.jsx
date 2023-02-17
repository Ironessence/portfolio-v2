import React from 'react';
import '../styles/ProjectCard.styles.scss';

const ProjectCard = ({ onClick, title, headerImage, isSelected, skills, id }) => {
  return (
    <div
      className={isSelected ? 'big-container' : 'pc-container'}
      onClick={onClick}
    >
      <h4 className="pc-number">{`0${id}  /  03`}</h4>

      <h1 className={'pc-title'}>{title.toUpperCase()}</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-chip">
            <h3 className="skill">{`<${skill}>`}</h3>
          </div>
        ))}
      </div>

      <div className="divider" />
      <img
        src={require(`../assets/${headerImage}`)}
        alt="maxiparty-1"
        className="pc-header-image"
      />
    </div>
  );
};

export default ProjectCard;
