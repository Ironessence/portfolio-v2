import React from 'react';
import styled from 'styled-components';

const Skill = ({ skill, icon }) => {
  return (
    <Container>
      <Icon src={require(`../../../assets/${icon}`)} />
      <Title>{skill}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(60, 60, 60, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
`;

const Icon = styled.img`
  width: 90px;
`;

const Title = styled.h2`
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  margin: 5px 0px;
`;

export default Skill;
