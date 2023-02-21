import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillsTitle from './components/SkillsTitle';

const Skills = () => {
  return (
    <Container>
      <SkillsTitle baseVelocity={-5}>My skills</SkillsTitle>
      <SkillsTitle baseVelocity={5}>& Expertise</SkillsTitle>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  margin-top: 20vh;
`;

export default Skills;
