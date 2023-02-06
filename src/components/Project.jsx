import React from 'react';
import styled from 'styled-components';

const Project = ({ name, titleHeight }) => {
  return (
    <Container
      className="proj-container"
      height={titleHeight}
    >
      <ProjectName>{name}</ProjectName>
      <DetailsContainer></DetailsContainer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  display: flex;
  min-width: 100%;
  border: 2px solid white;
  height: ${(props) => (props.height ? `calc(95vh - ${props.height}px - 70px)` : '65vh')};
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
  background-color: yellow;
`;

export default Project;
