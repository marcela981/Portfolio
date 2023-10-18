import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

const Floor = () => {
    const PATH = "/assets/texture/grass/";

    const propsTexture = useTexture({
        map: PATH + 'grassColor.jpg',
        normalMap: PATH + 'grassNormal.jpg',
        displacementMap: PATH + 'grassHeight.png',
        roughnessMap: PATH + 'grassRoughness.jpg',
        aoMap: PATH + 'grassAO.jpg',
    })

    const repeat = new Vector2(8, 8);

    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.repeat = repeat
    }

    const repeatWrapping = RepeatWrapping;
    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.wrapS = map.wrapT = repeatWrapping;
    }

    propsTexture.map.offset = propsTexture.normalMap.offset = propsTexture.displacementMap.offset = propsTexture.roughnessMap.offset = propsTexture.aoMap.offset = new Vector2(0.1, 0.5);

    return (
        <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow >
            <planeGeometry
                args={[12, 12, 20, 20]}
            />
            <meshStandardMaterial
                {...propsTexture}
            />
        </mesh>
    );
}
export default Floor;