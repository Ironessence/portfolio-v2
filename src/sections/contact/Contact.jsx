import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../../styles/Homepage.styles.scss';
import { useRefContext } from '../../utils/context';

const Contact = () => {
  const { contactRef } = useRefContext();

  useEffect(() => {
    console.log('Contact ref:', contactRef.current.offsetTop);
  }, [contactRef]);

  return (
    <Container ref={contactRef}>
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
  @media only screen and (max-width: 1000px) {
    text-align: center;
    font-size: 5em;
    margin-right: 0px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 4em;
  }
`;

const CommsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 200px 0px 200px 0px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 10px 50px 10px;
  }
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
  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default Contact;
