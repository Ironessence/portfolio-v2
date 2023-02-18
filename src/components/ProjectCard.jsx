import React from 'react';
import '../styles/ProjectCard.styles.scss';

const ProjectCard = ({
  onClick,
  title,
  headerImage,
  isSelected,
  skills,
  id,
  image1,
  image1width,
  image2,
  intro,
  image3,
  image3width,
  image4,
  endText,
  link,
}) => {
  return (
    <div
      className={isSelected ? 'big-container' : 'pc-container'}
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
            <div className="skill-chip">
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
      {intro && isSelected && <h3 className="pc-intro">{intro}</h3>}
      {/* MORE IMAGES */}
      {isSelected &&
        (image1width && image3width ? (
          <div className="pc-phone-img-container">
            {image1 && (
              <img
                src={require(`../assets/${image1}`)}
                alt="maxiparty-1"
                className="pc-image-phone"
              />
            )}
            {image3 && (
              <img
                src={require(`../assets/${image3}`)}
                alt="maxiparty-3"
                className="pc-image-phone"
              />
            )}
          </div>
        ) : (
          <div className="pc-images-container">
            {image1 && (
              <img
                src={require(`../assets/${image1}`)}
                alt="maxiparty-1"
                className="pc-image"
              />
            )}
            {image2 && (
              <img
                src={require(`../assets/${image2}`)}
                alt="maxiparty-2"
                className="pc-image"
              />
            )}
          </div>
        ))}
      {/* MIDDLE TEXT */}
      {endText && isSelected && <h3 className="pc-end-text">{endText}</h3>}
    </div>
  );
};

export default ProjectCard;
