import { createRoot} from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./Info";
import "./styles.css"

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Canvas 
        camera={{ 
            position: [2, 0, 5] 
        }}
    >

        <Experience />
    </Canvas>
        
            <Info 
                name={"Portfolio - Marcela Mazo Castro"}
                biography={"Web 3D Developer"} 
            />
        
        
    </>
    
);








/*
Clase 1 Sobre react
const root = createRoot(document.getElementById('root'));

root.render
( 
    <Canvas 
        camera={{ 
            position: [2, 0, 5] 
        }}
    >

        <Experience />
    </Canvas>
);
*/