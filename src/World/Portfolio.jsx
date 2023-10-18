import { Html } from "@react-three/drei"


const Portfolio = (props) => {
    return (
        <Html position={[0,13,-5.38028]} 
            transform
            occlude 
            
            style={{
                    background:'#BFB8AA',
                    width: '913px',
                    height: '650px',
                    overflow: 'auto'

                }}
        >
            <div className="Portfolio">
                <h1 className="Title"> Marcela Mazo Castro </h1>
                <ul className="Home">
                    <li> <a href="#">Info</a></li>
                    <li> <a href="#">Projects</a></li>
                    <li> <a href="#">Contact</a></li>
                </ul>
            </div>
            
            
            
        </Html>
    )
}
export default Portfolio;