
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sombrilla(props) {
  const { nodes, materials } = useGLTF('/assets/models/Sombrilla/prop_restaurant_umbrella.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder001_Material_#3_0"].geometry}
        material={materials.Material_3}
        position={[0.801, 3.907, -8.209]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        
      </mesh>
    </group>
  );
}
export default Sombrilla;
useGLTF.preload('/assets/models/Sombrilla/prop_restaurant_umbrella.glb');