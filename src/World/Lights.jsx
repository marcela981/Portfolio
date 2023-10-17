import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {

    const spotLightRef = useRef()
    const hemisphereLightRef = useRef();

   

    const options = useMemo(()=>{
        return{
            intensitySL: {value: 1000, min:0, max: 1000, step: 1},
            colorSL: {value: "magenta"},
        }
    })

    const {intensitySL, colorSL} = useControls("Spot Light", options)   

    return (
        <>
            <ambientLight intensity={0.2} />
    

            <spotLight
                ref={spotLightRef}
                position={[-2.5, 2, 3.5]}
                angle={Math.PI / 2}
                intensity={intensitySL}
                penumbra={0.5}
                color={colorSL}
                distance={5}
            />

            <spotLight
                ref={spotLightRef}
                position={[-2.5, 2, -3]}
                angle={Math.PI / 2}
                intensity={intensitySL}
                penumbra={0.5}
                decay={2}
                color={"blue"}
                distance={5}
            />

            <spotLight
                ref={spotLightRef}
                position={[0, 2, 0]}
                angle={Math.PI / 4}
                intensity={intensitySL}
                penumbra={1}
                decay={2.5}
                color={"orange"}
                distance={5}
               
          

            />

            

            <hemisphereLight ref={hemisphereLightRef} intensity={5} color={"pink"} />
        </>
    )
}

export default Lights;