import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import SkillsTitle from './components/SkillsTitle';
import { skillsList } from '../../utils/skillsList';
import Skill from './components/Skill';

const Skills = () => {
  const container = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
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
        <SkillsContainer>
          <MainSkill
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
          >
            <Icon
              src={require('../../assets/react.png')}
              alt="react-native"
            />
            <SkillTitle>React Native</SkillTitle>
          </MainSkill>
          <ExtraSkills
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillsList.map((skill) => (
              <Skill
                skill={skill.skill}
                icon={skill.icon}
                animation={animatedSkill}
              />
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

const MainSkill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(60, 60, 60, 0.6);
  width: 300px;
  border-radius: 10px;
  flex: 1;
  padding: 20px;
`;

const Icon = styled.img`
  width: 200px;
`;

const SkillTitle = styled.h1`
  color: white;
  text-align: center;
`;

const ExtraSkills = styled(motion.div)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 2;
  justify-content: center;
`;

export default Skills;
