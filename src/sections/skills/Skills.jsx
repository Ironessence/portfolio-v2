import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import SkillsTitle from './components/SkillsTitle';
import { skillsList } from '../../utils/skillsList';
import { useRefContext } from '../../utils/context';
import BallCanvas from './components/BallCanvas';

const Skills = () => {
  const { skillsRef } = useRefContext();

  useEffect(() => {
    console.log('Skills ref:', skillsRef.current.offsetTop);
  }, [skillsRef]);

  const container = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
    },
  };

  const animatedSkill = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <Container>
        <SkillsTitle baseVelocity={-5}>My skills</SkillsTitle>
        <SkillsTitle baseVelocity={5}>& Expertise</SkillsTitle>
        <SkillsContainer ref={skillsRef}>
          <ExtraSkills
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillsList.map((skill) => (
              <SkillWrap key={skill.skill}>
                <BallCanvas
                  icon={skill.icon}
                  animation={animatedSkill}
                />
                <SkillText>{skill.skill}</SkillText>
              </SkillWrap>
            ))}
          </ExtraSkills>
        </SkillsContainer>
      </Container>
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  margin-top: 30vh;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px;
  margin-top: 10vh;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    padding: 0px;
  }
`;

const ExtraSkills = styled(motion.div)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  flex: 2;
  justify-content: center;
`;

const SkillWrap = styled(motion.div)`
  aspect-ratio: 1;
  width: 150px;
  height: 150px;
  flex-direction: column;
  display: flex;
`;

const SkillText = styled(motion.h2)`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
`;

export default Skills;
