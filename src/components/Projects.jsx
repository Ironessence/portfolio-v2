import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import projectsData from '../utils/projectsData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [sections, setSections] = useState(null);
  const projects = useRef(null);

  useEffect(() => {
    setSections(gsap.utils.toArray('.proj-container'));
  }, []);

  useEffect(() => {
    console.log('SECTIONS:', sections);
  }, [sections]);

  useEffect(() => {
    if (sections !== null) {
      let ctx = gsap.context(() => {
        //INSIDE CONTEXT >
        gsap.to(sections, {
          xPercent: -150 * sections.length,
          ease: 'none',
          scrollTrigger: {
            trigger: projects.current,
            start: '-100 top',
            scrub: 1,
            pin: true,
            markers: true,
            end: '+=9000',
          },
        });
      }, projects);
      //Clean-Up
      return () => ctx.revert();
    }
  }, [sections]);

  return (
    <Container
      className="projects-container"
      ref={projects}
    >
      <TitleWrapper>
        <Circle>
          <Number>01</Number>
        </Circle>
        <Title>Projects</Title>
      </TitleWrapper>
      <ProjectsWrapper>
        {projectsData.map((info) => (
          <Project
            name={info.name}
            intro={info.intro}
            startImage={info.startImage}
            image1={info.image1}
            image1width={info.image1width}
            middleText={info.middleText}
            image2={info.image2}
            image3={info.image3}
            image3width={info.image3width}
            image4={info.image4}
            endText={info.endText}
            link={info.link}
            key={info.key}
          />
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

const Container = styled.div`
  overscroll-behavior: none;
  margin-top: 500px;
  opacity: 1;
`;

const TitleWrapper = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(141, 52, 173, 0.6);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: white;
  opacity: 1;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 1;
  margin-left: -50px;
`;

const ProjectsWrapper = styled.div`
  overscroll-behavior: none;
  flex-wrap: nowrap;
  //gap: 200px;
  opacity: 1;
  height: '100%';
  display: flex;
  //flex-wrap: nowrap;
`;

export default Projects;
