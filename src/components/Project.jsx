import React from 'react';
import styled from 'styled-components';

const Project = ({
  name,
  intro,
  startImage,
  image1,
  image1width,
  middleText,
  image2,
  image3,
  image3width,
  endText,
  link,
}) => {
  return (
    <Container className="proj-container">
      <Name>{name}</Name>
      <IntroContainer>
        <Intro>{intro}</Intro>
      </IntroContainer>
      {startImage && (
        <StartCard
          src={require(`../assets/${startImage}`)}
          alt="start-image"
        />
      )}
      {image1 && (
        <Image1
          src={require(`../assets/${image1}`)}
          alt="image1"
          width={image1width}
        />
      )}
      {middleText && <MiddleText>{middleText}</MiddleText>}
      {image2 && (
        <Image2
          src={require(`../assets/${image2}`)}
          alt="image2"
        />
      )}
      {image3 && (
        <Image3
          src={require(`../assets/${image3}`)}
          alt="image3"
          width={image3width}
        />
      )}

      <EndContainer>
        <EndText>{endText}</EndText>
        {link && (
          <ActionWrapper>
            <Action href={link}>View Details</Action>
          </ActionWrapper>
        )}
      </EndContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Name = styled.h1`
  color: white;
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1.5px;
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
  font-weight: 400;
`;

const StartCard = styled.img`
  width: 700px;
  margin-left: -70px;
  border-radius: 35px;
  box-shadow: 3px 2px 3px 2px rgb(64, 64, 64);
  margin-right: 30px;
`;

const Image1 = styled.img`
  width: ${(props) => (props.width ? props.width : '700px')};
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
  font-weight: 400;
`;

const Image3 = styled.img`
  width: ${(props) => (props.width ? props.width : '700px')};
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
  font-weight: 400;
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
