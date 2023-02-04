import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import projectsData from '../utils/projectsData';

const Projects = () => {
  return (
    <Container>
      <TitleWrapper>
        <Circle>
          <Number>01</Number>
        </Circle>
        <Title>Projects</Title>
      </TitleWrapper>
      <ProjectsWrapper>
        {projectsData.map((info) => (
          <Project
            projectData={info}
            key={info.key}
          />
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: '100%';
  margin-top: 500px;
  opacity: 1;
`;

const TitleWrapper = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(141, 52, 173, 0.6);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: white;
  opacity: 1;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 1;
  margin-left: -50px;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
`;

export default Projects;
