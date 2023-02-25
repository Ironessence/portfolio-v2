import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import '../../styles/Homepage.styles.scss';

const Contact = () => {
  return (
    <Container>
      <Title>Let's Talk</Title>
      <CommsContainer
        initial={{ backgroundColor: 'black' }}
        whileInView={{
          backgroundColor: ['hsl(0, 100, 0)', 'hsl(0, 100, 100)'],
          transition: { duration: 2 },
        }}
      >
        <Wrapper>
          <Icon
            src={require('../../assets/linkedin.png')}
            alt="linkedin"
          />
          <Text>LinkedIn</Text>
        </Wrapper>
        <Wrapper>
          <Icon
            src={require('../../assets/github.png')}
            alt="github"
          />
          <Text>GitHub</Text>
        </Wrapper>
        <Wrapper>
          <Icon
            src={require('../../assets/gmail.png')}
            alt="gmail"
          />
          <Text>alexdinca.dev@gmail.com</Text>
        </Wrapper>
      </CommsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 20vh;
`;

const Title = styled.h1`
  color: white;
  font-size: 8em;
  font-weight: 700;
  text-align: end;
  margin-right: 10%;
`;

const CommsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 200px 0px 200px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const Text = styled.h2`
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default Contact;
