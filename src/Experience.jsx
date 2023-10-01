import { FirstPersonControls,OrbitControls,PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import House from "./World/House";
import  Car from "./World/Car"


const Experience = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <House />
            <Car position={[-2, 0.25, 10]} scale={0.017}/>
            <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color="green" />
            </mesh>
        </>
    )
}


export default Experience;

/*
Clase 1
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