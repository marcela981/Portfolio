import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef}from "react";


const House = () => {
    const houseRef = useRef ();
    const houseModel = useGLTF('/assets/models/house/scene.gltf')
    const {animations} = houseModel;
    
    const { actions } = useAnimations(animations, houseRef);

    


    return (
      
            <mesh ref={houseRef} position-x={2} rotation-y={-Math.PI * 0.15} scale={2}>
                <primitive object={houseModel.scene} />
            </mesh>
        
    )

}
export default House;
useGLTF.preload('/assets/models/house/scene.gltf');