import { BakeShadows, ContactShadows, OrbitControls } from "@react-three/drei";
import Bus from "./Scenes/Welcome/Models/Bus.jsx";
import { Sombrilla } from "./Scenes/Welcome/Models/Sombrilla.jsx";
import { Tapete } from "./Scenes/Welcome/Models/Tapete.jsx";
import { Dispensador } from "./Scenes/Welcome/Models/Dispensador.jsx";
import { Laptop } from "./Scenes/Welcome/Models/Laptop.jsx"
import { Mesa } from "./Scenes/Welcome/Models/Mesa.jsx"
import { Perro } from "./Scenes/Welcome/Models/Perro.jsx"
import Lights from "./Staging/Lights.jsx";
import Environment from "./Staging/Environment.jsx"
import { Perf } from "r3f-perf";
import Floor from "./Scenes/Welcome/Models/Floor.jsx";
import Portfolio from "./Scenes/Welcome/Models/Portfolio.jsx";
import Welcome from "./Scenes/Welcome/Welcome.jsx";



const Experience = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            <Perf />
            <Environment />
            <Bus />
            <Sombrilla position={[2, -2, -0.2]} rotation-y={-Math.PI * 0.18} scale={0.0098}/>
            <Tapete position={[-0.8, -2, 0]}  rotation-y={-Math.PI * 0.48} scale={2}/>
            <Mesa position={[3, -2, -0.5]}  rotation-y={-Math.PI * 0.95} scale={0.5}/>
            <Perro position={[0, -2, 1.3]} rotation-y={-Math.PI * 0.85} scale={0.009} />
            <Laptop position={[-0.4, -1.95, -1.15]}  rotation-y={-Math.PI * 0.12} scale={0.02}>
                <Portfolio />
            </Laptop>

            <Dispensador position={[-3.15, -2, -3.4]}  rotation-y={-Math.PI * -0.22} scale={0.045}>
                <Welcome />
            </Dispensador>
            
            
        
            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>

                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color="#667735" />
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