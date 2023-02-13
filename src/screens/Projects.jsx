import React from 'react';
import styled from 'styled-components';

const Projects = ({ projectsRef }) => {
  //const projectsTitleRef = useRef(null);
  //   useEffect(() => {
  //     let ctx = gsap.context(() => {
  //       //INSIDE CONTEXT >
  //       gsap.timeline().to(projectsTitleRef.current, {
  //         x: '-20vw',
  //         opacity: 1,
  //         duration: 3,
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: projectsTitleRef.current,
  //           start: '-500 top',
  //           end: '+=900',
  //           scrub: true,
  //           pin: true,
  //           anticipatePin: 1,
  //           markers: true,
  //         },
  //       });
  //     }, projectsRef);
  //     //Clean-Up
  //     return () => ctx.revert();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return <Container ref={projectsRef}></Container>;
};

const Container = styled.div``;

export default Projects;
