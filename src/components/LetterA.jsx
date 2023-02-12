import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export function Model(props) {
  const { nodes, materials } = useGLTF('/letterA.gltf');
  const aRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(aRef.current.position, {
        z: 5,
        duration: 5,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=2000',
          scrub: true,
        },
      });
    }, '.hero');
    //Clean-Up
    return () => ctx.revert();
  }, []);
  return (
    <group
      {...props}
      dispose={null}
      ref={aRef}
    >
      <directionalLight position={[1, 10, 15]} />
      <ambientLight intensity={0.5} />
      <mesh
        geometry={nodes['3D_Text_-_A'].geometry}
        material={materials['Cold Spring']}
        position={[-1.85, -2, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        position-y={-2.5}
        rotation-x={-Math.PI * 0.5}
        scale={[13, 8, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial color="rgb(27, 27, 27)" />
      </mesh>
      <mesh
        position-y={-2.4}
        position-x={0.3}
        rotation-x={-Math.PI * 0.5}
        scale={[4.2, 1.5, 4]}
      >
        <planeGeometry />
        <meshBasicMaterial color="rgb(1, 1, 1)" />
      </mesh>
    </group>
  );
}

useGLTF.preload('/letterA.gltf');
