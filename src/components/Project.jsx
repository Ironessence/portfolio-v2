import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../utils/getWindowDimensions';

const Project = ({
  name,
  intro,
  startImage,
  image1,
  image1Width,
  image2,
  skills,
  image3,
  image3width,
  image4,
  endText,
  link,
  titleHeight,
}) => {
  const { height: heightMobile } = useWindowDimensions();

  return (
    <Container
      className="proj-container"
      height={titleHeight}
      customHeight={heightMobile}
    >
      <DetailsContainer>
        <ProjectName>{name}</ProjectName>
        <Divider />
        <SkillsContainer>
          {skills.map((skill) => (
            <Chip>
              <Skill>{skill}</Skill>
            </Chip>
          ))}
        </SkillsContainer>
        <Intro>{intro}</Intro>
      </DetailsContainer>

      <ImageContainer>
        <Circle>
          <CircleText>View details</CircleText>
        </Circle>
        <Image src={require(`../assets/${startImage}`)} />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  display: flex;
  min-width: 80%;
  height: ${(props) => (props.height ? `calc(100vh - ${props.height}px - 10px)` : '65vh')};
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 16px 4 rgb(27, 27, 27);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const DetailsContainer = styled.div`
  min-height: 40%;
  max-height: 40%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    max-width: 40%;
    min-height: 100%;
    max-height: 100%;
  }
`;

const ProjectName = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px 2px rgb(27, 27, 27);
  @media only screen and (max-width: 1000px) {
    flex: 0;
  }
`;

const Divider = styled.div`
  width: 80%;
  height: 2px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  @media only screen and (min-width: 1000px) {
    width: 80%;
    min-height: 2px;
    max-height: 2px;
  }
  @media only screen and (max-width: 500px) {
    min-height: 2px;
    max-height: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70%;
  margin: 10px 0px;
  gap: 20px;
  flex-wrap: wrap;
  align-self: center;
  @media only screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

const Chip = styled.div`
  padding: 4px 6px;
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 2px 2px 3px 2px rgb(27, 27, 27);
`;

const Skill = styled.div`
  color: white;
  letter-spacing: 0.5px;
`;

const Intro = styled.h2`
  color: white;
  width: 60%;
  margin-left: 10%;
  margin-top: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  @media only screen and (min-width: 1000px) {
    margin-top: auto;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
    width: 90%;
    margin-left: 0px;
    margin-top: 10px;
    text-align: center;
    align-self: center;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.8s ease;
  border-radius: 10px 10px 0px 0px;
  opacity: 0;
  @media only screen and (min-width: 1000px) {
    border-radius: 0px 25px 25px 0px;
  }
  @media only screen and (max-width: 500px) {
    border-radius: 25px;
  }
`;

const ImageContainer = styled.div`
  min-height: 60%;
  position: relative;
  &:hover ${Image} {
    opacity: 0.4;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 38%;
  z-index: 999;
  cursor: pointer;
  transition: 0.7s ease all;
`;

const CircleText = styled.h3`
  color: white;
  text-align: center;
  transition: 0.7s ease all;
`;

export default Project;
