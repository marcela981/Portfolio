import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Info = ({ name, biography }) => {

    return (
        <>
                <h2 className="name"> {name} </h2>
                <span className="biography"> {biography} </span>
        </>

    )
}

export default Info;