import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';
import '../../styles/Homepage.styles.scss';

const AboutMe = () => {
  return (
    <Container>
      <TitleBg>
        <Title>About me</Title>
      </TitleBg>
      <FirstSection>
        <Text>
          Hi there! Glad you've made it this far! <br />
          I'm Alex, a <Highlight>creative</Highlight> and <Highlight>passionate</Highlight> software
          engineer, with an extended expertise in <Highlight>Front-End</Highlight> development.
          <br />I like building performant and clean applications while creating a smooth and
          immersive experience for the user.
          <br />
          I'm a disciplined and organized person, with an eye for details, and I try to always show
          this in my work.
        </Text>
      </FirstSection>
      <SecondSection>
        <Text>
          I'm constantly looking for ways to further <Highlight>improve</Highlight> anything I work
          on, and I generally enjoy bringing <Highlight>new ideas</Highlight> to the table. I'm also
          very keen on writing <Highlight>clean code</Highlight> and planning beforehand.
          <br />
          <Highlight>Communication</Highlight> is key - I believe - in order to be able to take any
          idea and turn it into reality, exactly as it was imagined. Or...{' '}
          <Highlight>better</Highlight>?
        </Text>
      </SecondSection>
      <ThirdSection>
        <Text>
          Besides software engineering, I know a thing or two about <Highlight>branding</Highlight>,
          creating a powerful social media presence via <Highlight>marketing</Highlight>, and I'm
          also keen on <Highlight>photo & video editing</Highlight>.
        </Text>
      </ThirdSection>
    </Container>
  );
};

const section = css`
  width: 30%;
  line-height: 4vh;
  background-color: rgba(68, 68, 120, 0.3);
  padding: 120px;
  @media only screen and (max-width: 1000px) {
    align-self: center;
    width: 80%;
    padding: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const TitleBg = styled.div`
  background-color: rgba(68, 68, 120, 0.3);
  padding: 100px;
  clip-path: polygon(0 32%, 100% 0, 100% 50%, 0 85%);
  @media only screen and (max-width: 700px) {
    clip-path: polygon(0 14%, 100% 0, 100% 86%, 0% 100%);
    padding: 0px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 8em;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  margin-left: 100px;
  text-shadow: 3px 3px 3px black;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
    font-size: 5em;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    font-size: 4em;
  }
`;

const FirstSection = styled(motion.div)`
  ${section}
  margin-left: 10%;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
  }
`;

const SecondSection = styled(motion.div)`
  ${section}
  margin-left: auto;
  margin-right: 10%;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const ThirdSection = styled(motion.div)`
  ${section}
  margin-left: 10%;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
  }
`;

const Text = styled(motion.h3)`
  color: white;
  font-weight: 500;
`;

const Highlight = styled(motion.span)`
  color: orange;
`;

export default AboutMe;
