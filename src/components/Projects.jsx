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
              start: 'top top',
              scrub: true,
              pin: true,
              pinSpacing: false,
              markers: true,
              end: '+=4000',
            },
          });

          //HANDLE ANIMATION FOR PROJECTS FOR TABLET / MOBILE
        }
      }, projects);
      //Clean-Up
      return () => ctx.revert();
    }
  }, [desktopScreen.matches, sections]);

  useEffect(() => {
    if (sections !== null && !desktopScreen.matches) {
      let ctx = gsap.context(() => {
        gsap
          .timeline()
          .to(sections[0], {
            scrollTrigger: {
              trigger: sections[0],
              start: '1 top',
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .to(sections[0], {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: sections[0],
              start: 'top top',
              scrub: true,
            },
          })

          .to(sections[1], {
            scrollTrigger: {
              trigger: sections[1],
              start: '1 top',
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .to(sections[1], {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: sections[1],
              start: 'top top',
              scrub: true,
            },
          });
      }, projects);

      return () => ctx.revert();
    }
  }, [desktopScreen.matches, sections]);

  return (
    <Container
      className="projects-container"
      ref={projects}
    >
      <TitleWrapper ref={titleRef}>
        <Circle>
          <Number>01</Number>
        </Circle>
        <Title>PROJECTS</Title>
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
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgb(70, 52, 105);
  background: linear-gradient(
    218deg,
    rgba(70, 52, 105, 0.8636363636363636) 0%,
    rgba(102, 52, 79, 0.8397129186602871) 49%,
    rgba(153, 121, 163, 0.8373205741626795) 100%
  );
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
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
  font-weight: 500;
  letter-spacing: 1px;
  z-index: 1;
  margin-left: -50px;
`;

const ProjectsWrapper = styled.div`
  overscroll-behavior: none;
  padding: 0px 50px;
  flex-wrap: nowrap;
  opacity: 1;
  height: '100%';
  gap: 100px;
  display: flex;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Projects;
