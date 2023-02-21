import React from 'react';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import styled from 'styled-components';

const SkillsTitle = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Container>
      <Scroller style={{ x }}>
        <Text>{children} </Text>
        <Text>{children} </Text>
        <Text>{children} </Text>
        <Text>{children} </Text>
        <Text>{children} </Text>
      </Scroller>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 1;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Scroller = styled(motion.div)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 7em;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  line-height: 1;
  gap: 40px;
`;

const Text = styled.span`
  display: block;
  color: white;
  font-weight: 800;
`;

export default SkillsTitle;
