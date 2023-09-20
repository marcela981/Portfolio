import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experience = () => {

    const coneRef = useRef();


    useFrame((state,delta) =>{
        coneRef.current.rotation.x += 1 * delta;
    })
   
    return (
    <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,10,2]} intensity={2} />
       
        <mesh ref={coneRef}>
            <coneGeometry arg = {[2, 5]} />
            <meshNormalMaterial wireframe={false} position={[10, 10, 5]} color="#FF7E0C" />
        </mesh>
    </>
    )

    
}

export default Experience;

/*
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experience = () => {

    const boxRef = useRef();


    useFrame((state,delta) =>{
        boxRef.current.rotation.x += 1 * delta;
    })
   
    return (
    <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef}>
            <boxGeometry arg = {[1, 1, 1]} />
            <meshStandardMaterial wireframe={false} position={[10, 10, 5]} color="#6032FF" />
        </mesh>
    </>
    )

        
    

}


export default Experience;
*/