import { FirstPersonControls,OrbitControls,PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experience = () => {
    const boxRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();


    useFrame((state,delta) =>{
        boxRef.current.rotation.x += 1 * delta;

        coneRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());

        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());

        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());

        sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 5;
    })
   
    return (
    <>
        <PointerLockControls/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,10,2]} intensity={2} />
        
        <mesh ref={boxRef} position={[6, 0, -2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#FF7E0C" />
            </mesh>

        
        <mesh ref={coneRef}>
            <coneGeometry arg = {[2, 5]} />
            <meshNormalMaterial wireframe={false} position={[10, 10, 5]} color="#0CB2FF" />
        </mesh>
        

        <mesh ref={torusRef} position={[-2, 0, -5]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6}>
            <torusGeometry args={[2, 1, 32, 64]} />
            <meshStandardMaterial wireframe color="purple" />
        </mesh>

        <mesh ref={sphereRef} position-z={-10}>
            <sphereGeometry args={[2, 16, 32]} />
            <meshToonMaterial color="red" />
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