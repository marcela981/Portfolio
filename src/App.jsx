import { Canvas } from "@react-three/fiber"
import Experience from "./World/Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = 
    {
        position: [0, 2, 1],
        fov: 50
    }
    

    return (
        <>
            <Info 
                name={"Marcela Mazo Castro"} 
                    biography={"Frontend Developer"} 
            />
           <Canvas
                camera={cameraSettings}
                shadows            >

                <Experience />
            </Canvas>
        </>
    )
}
export default App