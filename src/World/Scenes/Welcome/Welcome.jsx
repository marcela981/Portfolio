import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const Welcome = (props) => {
    const text = "Welcome"
    return (
        <Center
            position-y={35}
        >
            <Float
                speed={1} // Animation speed
                rotationIntensity={1.5} // XYZ rotation intensity
                floatIntensity={1.5} // Up/down float intensity
            >
                <Text3D
                    font={"/assets/fonts/Mansalva_Regular.json"}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.1}
                    height={0.1}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    size={10}
                >
                    {text}
                    <meshNormalMaterial />
                </Text3D>
            </Float>
           
       
        </Center>
    
    )
}
export default Welcome;