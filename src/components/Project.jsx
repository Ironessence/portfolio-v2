import React from 'react';
import styled from 'styled-components';

const Project = ({ projectData }) => {
  console.log(projectData);
  return (
    <Container>
      <Name>{projectData.name}</Name>
      <IntroContainer>
        <Intro>{projectData.intro}</Intro>
      </IntroContainer>
      <StartCard
        src={require(`../assets/${projectData.startImage}`)}
        alt="start-image"
      />
      <Image1
        src={require(`../assets/${projectData.image1}`)}
        alt="image1"
      />
      <MiddleText>{projectData.middleText}</MiddleText>
      <Image2
        src={require(`../assets/${projectData.image2}`)}
        alt="image2"
      />

      <Image3
        src={require(`../assets/${projectData.image3}`)}
        alt="image3"
      />
      <EndContainer>
        <EndText>{projectData.endText}</EndText>
        <ActionWrapper>
          <Action href={projectData.link}>View Details</Action>
        </ActionWrapper>
      </EndContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Name = styled.h1`
  color: white;
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1px;
  align-self: flex-start;
  padding-top: 4vh;
  padding-left: 10%;
  font-size: 3rem;
`;

const IntroContainer = styled.div`
  min-width: 500px;
  max-width: 550px;
  align-self: center;
  margin-left: -20%;
  z-index: 1;
  margin-top: -4vh;
`;

const Intro = styled.h2`
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1px;
  width: 100%;
`;

const StartCard = styled.img`
  width: 700px;
  margin-left: -70px;
  border-radius: 35px;
  box-shadow: 3px 2px 3px 2px rgb(64, 64, 64);
  margin-right: 30px;
`;

const Image1 = styled.img`
  width: 300px;
  border-radius: 25px;
  margin-right: -20px;
  box-shadow: 2px 3px 3px 2px rgb(64, 64, 64);
`;

const Image2 = styled.img`
  width: 800px;
  margin-top: 15vh;
  box-shadow: 2px 3px 3px 2px rgb(64, 64, 64);
  margin-left: -50px;
`;

const MiddleText = styled.h3`
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1px;
  min-width: 500px;
  margin-left: -20px;
  z-index: 1;
`;

const Image3 = styled.img`
  width: 300px;
  border-radius: 25px;
  margin-left: -100px;
  box-shadow: 2px 3px 3px 2px rgb(64, 64, 64);
`;

const Image4 = styled.img`
  width: 700px;
  align-self: flex-end;
  margin-bottom: 50px;
  margin-left: -20px;
  box-shadow: 2px 3px 3px 2px rgb(64, 64, 64);
`;

const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EndText = styled.h3`
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1px;
  min-width: 500px;
  margin-left: -50px;
  z-index: 1;
`;

const ActionWrapper = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const Action = styled.a`
  text-align: center;
  text-decoration: none;
  color: white;
`;

export default Project;
