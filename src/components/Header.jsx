import React from 'react';
import styled from 'styled-components';
import arrowDown from '../assets/arrow-down.png';

import ParticlesComponent from './ParticlesComponent';

const Header = () => {
  return (
    <Wrapper className="home-header">
      <Title>SOFTWARE ENGINEERING</Title>
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
  font-size: 8em;

  z-index: 1;
  font-weight: 700;
  letter-spacing: -3px;
  margin-top: 30vh;
  text-align: center;
  text-shadow: 2px 2px 2px white;
  background: -webkit-linear-gradient(#9979a3, #66344f, #463469);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // color: white;
  // text-shadow: 3px 3px 3px rgb(27, 27, 27);
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
