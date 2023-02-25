import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillsTitle from './components/SkillsTitle';
import { skillsList } from '../../utils/skillsList';
import Skill from './components/Skill';

const Skills = () => {
  return (
    <Container>
      <SkillsTitle baseVelocity={-5}>My skills</SkillsTitle>
      <SkillsTitle baseVelocity={5}>& Expertise</SkillsTitle>
      <SkillsContainer>
        <MainSkill>
          <Icon
            src={require('../../assets/react.png')}
            alt="react-native"
          />
          <SkillTitle>React Native</SkillTitle>
        </MainSkill>
        <ExtraSkills>
          {skillsList.map((skill) => (
            <Skill
              skill={skill.skill}
              icon={skill.icon}
            />
          ))}
        </ExtraSkills>
      </SkillsContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  margin-top: 20vh;
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

const MainSkill = styled.div`
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

const ExtraSkills = styled.div`
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
