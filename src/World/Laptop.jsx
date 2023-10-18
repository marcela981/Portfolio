/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Aullwen (https://sketchfab.com/Aullwen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-7d870e900889481395b4a575b9fa8c3e
Title: Laptop
*/

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/assets/models/Laptop/laptop.glb');
  const aboutMeRef = useRef();
  const cameraRef = useRef();

  const handleSign = (e, type) => {
    // ...
  }

  const handleKeyboard = (e, type) => {
    if (e.key === "A") {
      // Movemos la cámara a la posición del elemento aboutMe
      cameraRef.current.position.set(aboutMeRef.current.position.x, aboutMeRef.current.position.y, aboutMeRef.current.position.z);
    }
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        //geometry={nodes.Screen.geometry}
        //material={materials.Screen}
        
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
        onPointerMove={(e) => {handleKeyboard(e, "About Me") }}
        name="aboutMe"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
        onPointerMove={(e) => {handleSign(e, "About Me") }}
          name="aboutMe"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      >

      </mesh>
      {props.children}
    </group>
  );
}
export default Laptop
useGLTF.preload('/assets/models/Laptop/laptop.glb');