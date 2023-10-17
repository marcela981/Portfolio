import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei"

const Environments = () => {
    return (
        <>
            {/* <Environment
                files={"/assets/environments/sunset_fairway_4k.hdr"}
                ground={
                    { height: 20, scale: 256 }
                }
                background={true}
            /> */}
            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={20} // Depth of area where stars should fit (default=50)
                count={2000} // Amount of stars (default=5000)
                factor={0.2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />
            <Sky
                moonPosition={[0, 0, 1]} // Coloca el sol debajo del horizonte
                inclination={0.1}       // Ajusta la inclinación para simular el atardecer
                azimuth={180}          // Ajusta el ángulo azimutal para cambiar la dirección de la luz
                mieCoefficient={0.05}  // Ajusta la dispersión atmosférica
                elevation={10}           // Ajusta la elevación del sol
                mieDirectionalG={0.07}   // Ajusta la luminosidad del sol
                rayleigh={3}        // Ajusta la dispersión de Rayleigh
                turbidity={2}         // Ajusta la claridad del cielo]
                exposure={0.5}
            />
            <Sparkles
                color="bronze"
                count={100}
                size={5}
                fade={false}
                speed={0.5}
                scale={20}
            />
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={50} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20}
            />
        </>
    )
}
export default Environments;