import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backIcon from '../../../assets/back-icon.png';

const ProjectPage = () => {
  const {
    state: { project },
  } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton
          src={backIcon}
          alt="icon-back"
          onClick={() => navigate('/')}
        />
      </Header>
      <Title>{project.name.toUpperCase()}</Title>
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

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  position: fixed;
`;

const BackButton = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover {
    transform: rotateZ(-15deg);
  }
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

export default ProjectPage;
