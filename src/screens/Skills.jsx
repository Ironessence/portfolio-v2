import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Container>
      <Title>Skills & Expertise</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
`;

const Title = styled.h1`
  font-size: 8em;
  letter-spacing: 1px;
  color: white;
  font-weight: 800;
`;

export default Skills;
