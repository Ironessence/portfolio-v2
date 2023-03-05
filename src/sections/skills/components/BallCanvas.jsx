import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, useTexture } from '@react-three/drei';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, animation }) => {
  return (
    <Container
      variants={animation}
      viewport={{ once: true }}
    >
      <Canvas
        frameLoop="demand"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={require(`../../../assets/${icon}`)} />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled(motion.div)``;

export default BallCanvas;
