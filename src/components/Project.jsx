import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../utils/getWindowDimensions';

const Project = ({ name, titleHeight }) => {
  const { height: heightMobile } = useWindowDimensions();

  useEffect(() => {
    console.log('height is:', heightMobile);
  }, [heightMobile]);

  return (
    <Container
      className="proj-container"
      height={titleHeight}
      customHeight={heightMobile}
    >
      <ProjectName>{name}</ProjectName>
      <DetailsContainer></DetailsContainer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  display: flex;
  min-width: 80%;
  height: ${(props) => (props.height ? `calc(100vh - ${props.height}px - 10px)` : '65vh')};
  background: rgb(135, 135, 135);
  background: linear-gradient(218deg, rgba(135, 135, 135, 0.2) 0%, rgba(226, 226, 226, 0.2) 100%);
  border-radius: 25px;

  box-shadow: 0 8px 16px 2px rgba(27, 27, 27, 0.8);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const ProjectName = styled.h1`
  text-align: center;
  color: white;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    flex: 0;
    align-self: flex-start;
  }
`;

const DetailsContainer = styled.div`
  flex: 2;
`;

export default Project;
