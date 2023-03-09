import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProjectPage = () => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem('state')));
  const location = useLocation();
  const project = state.project;

  useEffect(() => {
    localStorage.removeItem('state');
  }, []);

  useEffect(() => {
    if (location.state) {
      setState(location.state);
    }
  }, [location]);

  return (
    <Container>
      <Title>{project.name.toUpperCase()}</Title>
      <HeaderImage
        src={require(`../../../assets/${project.startImage}`)}
        alt="header"
      />
      <Text>{project.text1}</Text>
      <Section>
        <Picture1 src={require(`../../../assets/${project.image2}`)} />
        <Text>{project.text2}</Text>
      </Section>
      <Section>
        <Picture2 src={require(`../../../assets/${project.image3}`)} />
        <Text>{project.text3}</Text>
      </Section>
      {project.image4 && project.text4 && (
        <Section>
          <Picture2 src={require(`../../../assets/${project.image4}`)} />
          <Text>{project.text4}</Text>
        </Section>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500vh;
  overflow-x: hidden;
  background: rgb(3, 3, 3);
  background: linear-gradient(
    141deg,
    rgba(3, 3, 3, 0.9279233870967742) 100%,
    rgba(10, 10, 10, 0.9150201612903226) 49%,
    rgba(40, 40, 40, 0.9279233870967742) 0%
  );
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 80px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 90px;
  font-weight: 700;
`;

const HeaderImage = styled.img`
  width: 90%;
  height: 40vh;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Text = styled.h3`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 2em;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 90px;
  font-weight: 400;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Picture1 = styled.img`
  width: 80%;
  height: 40vh;
`;

const Picture2 = styled.img`
  width: 80%;
  height: 40vh;
`;

export default ProjectPage;
