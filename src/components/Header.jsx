import React from 'react';
import styled from 'styled-components';
import headerBG from '../assets/header-bg.jpg';
import ParticlesComponent from './ParticlesComponent';

const Header = () => {
  return (
    <Wrapper className="home-header">
      <Title>
        <Bold>Passionate</Bold> Front-End Developer
      </Title>
      <ImageBG
        src={headerBG}
        alt="bg-header"
      />
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

const ImageBG = styled.img`
  height: 300vh;
  margin-right: 50vw;
  z-index: 0;
  position: absolute;
  opacity: 0.5;
`;

const Title = styled.h1`
  font-size: 4em;
  color: white;
  z-index: 1;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin-top: 20vh;
  text-shadow: 3px 3px 6px rgb(38, 38, 38);
`;

const Bold = styled.span`
  font-weight: 500;
`;

export default Header;
