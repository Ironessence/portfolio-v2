import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import projectsData from '../utils/projectsData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [sections, setSections] = useState(null);
  const projects = useRef(null);
  const titleRef = useRef(null);
  const [titleWrapperHeight, setTitleWrapperHeight] = useState(0);
  const desktopScreen = window.matchMedia('screen and (min-width: 1000px');

  useEffect(() => {
    setSections(gsap.utils.toArray('.proj-container'));
  }, []);

  useEffect(() => {
    setTitleWrapperHeight(titleRef.current.clientHeight);
  }, []);

  useEffect(() => {
    console.log(desktopScreen);
  }, [desktopScreen]);

  useEffect(() => {
    if (sections !== null) {
      let ctx = gsap.context(() => {
        //INSIDE CONTEXT >
        if (desktopScreen.matches) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: projects.current,
              start: '-60 top',
              scrub: 1,
              pin: true,
              snap: 1 / (sections.length - 1),
              markers: true,
              end: '+=2000',
            },
          });
          //HANDLE ANIMATION FOR PROJECTS FOR TABLET / MOBILE
        } else {
          gsap.utils.toArray(sections).forEach((section, index) => {
            ScrollTrigger.create({
              trigger: section,
              start: 'top top',

              pin: true,
              pinSpacing: false,
            });
          });
        }
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
      <TitleWrapper ref={titleRef}>
        <Circle>
          <Number>01</Number>
        </Circle>
        <Title>Projects</Title>
      </TitleWrapper>
      <ProjectsWrapper>
        {projectsData.map((info) => (
          <Project
            name={info.name}
            key={info.key}
            titleHeight={titleWrapperHeight}
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
  height: 95vh;
`;

const TitleWrapper = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
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
  opacity: 1;
  height: '100%';
  display: flex;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Projects;
