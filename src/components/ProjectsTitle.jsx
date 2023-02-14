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
        x: 200,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '500 top',
          end: '+=1500',
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
  margin-top: -70vh;
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
  color: white;
  transform: translateX(100%);
  font-size: 8em;
  letter-spacing: 2px;
`;

export default ProjectsTitle;
