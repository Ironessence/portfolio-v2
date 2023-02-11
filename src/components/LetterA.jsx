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
      <mesh
        geometry={nodes['3D_Text_-_A'].geometry}
        material={materials['Light Aroma']}
        position={[-1.85, -2, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload('/letterA.gltf');
