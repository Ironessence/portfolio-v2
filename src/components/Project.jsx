import React from 'react';
import styled from 'styled-components';

const Project = ({ projectData }) => {
  console.log(projectData);
  return (
    <Container>
      <Name>{projectData.name}</Name>
      <Intro>{projectData.intro}</Intro>
      <StartCard
        src={require(`../assets/${projectData.startImage}`)}
        alt="start-image"
      />
      <Image1
        src={projectData.image1}
        alt="image1"
      />
      <Image2
        src={projectData.image2}
        alt="image2"
      />
      <MiddleText>{projectData.middleText}</MiddleText>
      <Image3
        src={projectData.image3}
        alt="image3"
      />
      <Image4
        src={projectData.image4}
        alt="image4"
      />
      <EndText>{projectData.endText}</EndText>
      <Action href={projectData.link}>View Details</Action>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Name = styled.h1``;

const Intro = styled.h2``;

const StartCard = styled.img`
  width: 400px;
  height: 250px;
`;

const Image1 = styled.img``;

const Image2 = styled.img``;

const MiddleText = styled.h3``;

const Image3 = styled.img``;

const Image4 = styled.img``;

const EndText = styled.h3``;

const Action = styled.a``;

export default Project;
