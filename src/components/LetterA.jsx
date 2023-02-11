import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/letterA.gltf');

  return (
    <group
      {...props}
      dispose={null}
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
