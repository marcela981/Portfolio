import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef}from "react";


const Bus = () => {
    const busRef = useRef ();
    const busModel = useGLTF('/assets/models/bus_traveler/scene.gltf')
    const {animations} = busModel;
    
    const { actions } = useAnimations(animations, busRef);

    


    return (
      
            <mesh ref={busRef} position={[-4.5, -1.8, 1.5]} rotation-y={-Math.PI * 0.6} scale={0.007}>
                <primitive object={busModel.scene} />
            </mesh>
        
    )

}
export default Bus;
useGLTF.preload('/assets/models/bus_traveler/scene.gltf');