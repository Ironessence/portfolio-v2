import { motion } from 'framer-motion';
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
      <Title
        initial={{ x: -300, opacity: 0, rotateY: 90, skewX: 20 }}
        whileInView={{ x: 0, opacity: 1, rotateY: 0, skewX: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
      >
        {project.name.toUpperCase()}
      </Title>
      <HeaderImage
        src={require(`../../../assets/${project.startImage}`)}
        alt="header"
        initial={{ x: 300, opacity: 0, rotateX: 90 }}
        whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, delay: 0.4 } }}
        viewport={{ once: true }}
      />
      <Text
        initial={{ x: -300, opacity: 0, rotateY: 90 }}
        whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7, delay: 0.8 } }}
        viewport={{ once: true }}
      >
        {project.text1}
      </Text>
      {project.image1 && project.text2 && !project.image1width ? (
        <Section>
          <Picture
            src={require(`../../../assets/${project.image1}`)}
            initial={{ x: 300, opacity: 0, rotateX: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, delay: 1 } }}
            viewport={{ once: true }}
          />
          <Text
            initial={{ x: -300, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            {project.text2}
          </Text>
        </Section>
      ) : (
        <MobileSection>
          <MobilePicture
            src={require(`../../../assets/${project.image1}`)}
            initial={{ x: 300, opacity: 0, rotateX: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, delay: 1 } }}
            viewport={{ once: true }}
            width={project.image1width}
          />
          <MobileText
            initial={{ x: -300, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            {project.text2}
          </MobileText>
        </MobileSection>
      )}
      {project.image2 && project.text3 && (
        <Section>
          <Picture
            src={require(`../../../assets/${project.image2}`)}
            initial={{ x: 300, opacity: 0, rotateX: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          />
          <Text
            initial={{ x: -300, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            {project.text3}
          </Text>
        </Section>
      )}
      {project.image3 && project.text4 && !project.image3width ? (
        <Section>
          <Picture
            src={require(`../../../assets/${project.image3}`)}
            initial={{ x: 300, opacity: 0, rotateX: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          />
          <Text
            initial={{ x: -300, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            {project.text4}
          </Text>
        </Section>
      ) : (
        <MobileSection>
          <MobilePicture
            src={require(`../../../assets/${project.image3}`)}
            initial={{ x: 300, opacity: 0, rotateX: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, delay: 1 } }}
            viewport={{ once: true }}
            width={project.image3width}
          />
          <MobileText
            initial={{ x: -300, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            {project.text4}
          </MobileText>
        </MobileSection>
      )}
      {project.image4 && (
        <Picture
          src={require(`../../../assets/${project.image4}`)}
          initial={{ x: 300, opacity: 0, rotateX: 90 }}
          whileInView={{ x: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: rgb(3, 3, 3);
  background: linear-gradient(
    141deg,
    rgba(3, 3, 3, 0.9279233870967742) 100%,
    rgba(10, 10, 10, 0.9150201612903226) 49%,
    rgba(40, 40, 40, 0.9279233870967742) 0%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const Title = styled(motion.h1)`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 80px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 90px;
  font-weight: 700;
`;

const HeaderImage = styled(motion.img)`
  aspect-ratio: 16:9;
  width: 90%;

  
`;

const Text = styled(motion.h3)`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 2em;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 90px;
  font-weight: 400;
  margin-bottom: 5vh;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Picture = styled(motion.img)`
  aspect-ratio: 16:9;
  width: ${(props) => (props.width ? props.width : '80%')}
  
`;

//FOR SMALLER PICTURE

const MobileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5vh;
`;

const MobilePicture = styled(motion.img)`
  object-fit: contain;
  width: ${(props) => (props.width ? props.width : '80%')};
  margin-left: ${(props) => (props.width ? '20%' : '0')};
`;

const MobileText = styled(motion.h3)`
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 2em;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 400;
  width: 50%;
`;

export default ProjectPage;
