import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb'); // Ensure this path is correct

    return (
        <Float floatIntensity={1}> {/* Adjust floatIntensity and rotationIntensity as needed */}
            <group scale={0.25} {...props} position={[8, 8, 0]} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/react.glb'); // Ensure this path is correct

export default ReactLogo;