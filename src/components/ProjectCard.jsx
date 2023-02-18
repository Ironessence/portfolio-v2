import React from 'react';
import '../styles/ProjectCard.styles.scss';

const ProjectCard = ({ onClick, title, headerImage, isSelected, skills, id, intro }) => {
  return (
    <div
      className={!isSelected ? 'pc-container' : 'selected-container'}
      onClick={onClick}
    >
      {/* ID */}
      {id && <h4 className="pc-number">{`0${id}  /  03`}</h4>}
      {/* TITLE */}
      {title && <h1 className={'pc-title'}>{title.toUpperCase()}</h1>}
      {/* SKILLS */}
      {skills && (
        <div className="skills-container">
          {skills.map((skill) => (
            <div>
              <h3 className="skill">{`<${skill}>`}</h3>
            </div>
          ))}
        </div>
      )}
      {/* HEADER IMAGE */}
      <div className="divider" />
      {headerImage && (
        <img
          src={require(`../assets/${headerImage}`)}
          alt="maxiparty-1"
          className="pc-header-image"
        />
      )}
      {/* INTRO */}
      {intro && <h3 className="pc-intro">{intro}</h3>}
    </div>
  );
};

export default ProjectCard;
