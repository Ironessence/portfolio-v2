import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Skill = ({ skill, icon, animation }) => {
  return (
    <Container variants={animation}>
      <Icon src={require(`../../../assets/${icon}`)} />
      <Title>{skill}</Title>
    </Container>
  );
};

const Container = styled(motion.div)`
  background-color: rgba(60, 60, 60, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  padding-bottom: 0px;
`;

const Icon = styled.img`
  width: 90px;
`;

const Title = styled.h2`
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  margin: 20px 0px;
`;

export default Skill;
