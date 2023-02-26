import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProjectsTitle = () => {
  const containerRef = useRef(null);
  const projectsTitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(containerRef.current, {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '500 top',
          end: '+=100',
          scrub: true,
        },
      });
    }, '.homepage');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(projectsTitleRef.current, {
        x: '5%',
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '500 top',
          end: '+=1200',
          scrub: true,
        },
      });
    }, '.homepage');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  return (
    <Container ref={containerRef}>
      <TitleWrapper>
        <Title ref={projectsTitleRef}>Recent work</Title>
      </TitleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  opacity: 0;
  margin-top: -50vh;
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
  color: white;
  transform: translateX(100%);
  font-size: 12em;
  letter-spacing: 2px;
  white-space: nowrap;
  @media only screen and (max-width: 1500px) {
    font-size: 8em;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 8em;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 5em;
  }
  @media only screen and (max-width: 550px) {
    font-size: 5em;
    white-space: normal;
    margin-bottom: -100px;
  }
`;

export default ProjectsTitle;
