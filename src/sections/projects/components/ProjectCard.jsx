import { motion } from 'framer-motion';
import React from 'react';
import '../../../styles/ProjectCard.styles.scss';

const ProjectCard = ({ title, headerImage, skills, id, onClick }) => {
  return (
    <motion.div
      className="pc-container"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
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
          src={require(`../../../assets/${headerImage}`)}
          alt="maxiparty-1"
          className="pc-header-image"
        />
      )}
      {/* INTRO */}
    </motion.div>
  );
};

export default ProjectCard;
