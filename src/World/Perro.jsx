import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef}from "react";


const Perro = () => {
    const perroRef = useRef ();
    const perroModel = useGLTF('/assets/models/Perro/scene.gltf')
    const {animations} = perroModel;
    
    const { actions } = useAnimations(animations, perroRef);

    useEffect(()=>{
        const action = actions["0|sitting_0"]
        action.play()
    }, [])



    return (
      
            <mesh ref={perroRef} position={[0, -2, 1.3]} rotation-y={-Math.PI * 0.85} scale={0.009}>
                <primitive object={perroModel.scene} />
            </mesh>
        
    )

}
export default Perro;
useGLTF.preload('/assets/models/Perro/scene.gltf');