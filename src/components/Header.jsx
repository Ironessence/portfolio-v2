import React from 'react';
import styled from 'styled-components';
import arrowDown from '../assets/arrow-down.png';

import ParticlesComponent from './ParticlesComponent';

const Header = () => {
  return (
    <Wrapper className="home-header">
      <Title>Software Engineering</Title>
      <Subtitle>
        with a passion for <Bold>Front-End</Bold>
      </Subtitle>
      <ScrollDownContainer>
        <ScrollDownText>Scroll to begin</ScrollDownText>
        <ArrowDown
          src={arrowDown}
          alt="arrow-down"
        />
      </ScrollDownContainer>
      <ParticlesComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5em;
  color: white;
  z-index: 1;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin-top: 30vh;
  text-shadow: 3px 3px 6px rgb(38, 38, 38);
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 3em;
  color: white;
  z-index: 1;
  font-weight: 200;
  letter-spacing: 1.5px;
  text-shadow: 3px 3px 6px rgb(38, 38, 38);
  text-align: center;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const ScrollDownContainer = styled.div`
  background-color: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScrollDownText = styled.h3`
  color: white;
  font-size: 0.6rem;
`;

const ArrowDown = styled.img`
  width: 30px;
  height: 30px;
`;

export default Header;
