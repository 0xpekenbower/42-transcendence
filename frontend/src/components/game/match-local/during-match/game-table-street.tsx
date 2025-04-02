import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export function Background_street(props) {
        const { nodes, materials } = useGLTF('/background_street.glb')
        return (
            <group {...props} dispose={null}>
                <group scale={0.01}>
                <mesh castShadow receiveShadow geometry={(nodes.Plane_road_0 as THREE.Mesh).geometry} material={materials.road} scale={100}
                        rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh castShadow receiveShadow geometry={(nodes.Circle002_Zinc_Roof_0 as THREE.Mesh).geometry} material={materials.Zinc_Roof}
                        position={[-414.006, 554.658, -316.149]} rotation={[-Math.PI / 2, 0.089, 0]} scale={[150.825, 100, 100.412]}
                />
                <mesh castShadow receiveShadow geometry={(nodes.Plane005_graffiti_wall_0 as THREE.Mesh).geometry} position={[0, 0, -148.886]}
                    material={materials.graffiti_wall} rotation={[-Math.PI / 2, 0, 0]} scale={100}
                />
                <mesh castShadow receiveShadow material={materials.building_left} position={[0, 0, -148.886]} rotation={[-Math.PI / 2, 0, 0]}
                        scale={100} geometry={(nodes.Plane007_building_left_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.building_right} position={[0, 0, -148.886]} rotation={[-Math.PI / 2, 0, 0]}
                        scale={100} geometry={(nodes.Plane008_building_right_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.workshop} position={[0, 0, -148.886]} rotation={[-Math.PI / 2, 0, 0]}
                        scale={100} geometry={(nodes.Plane010_workshop_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.pole} position={[-742.102, 1128.172, 1224.036]} scale={265.982}
                        rotation={[-Math.PI / 2, 0, 0.062]} geometry={(nodes.Cylinder004_pole_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-1403.508, 869.305, 1456.342]} scale={84.729}
                        rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube002_windows_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-385.38, 869.305, 1456.342]} scale={84.729}
                        rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube003_windows_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[657.498, 869.305, 1528.045]} scale={84.729}
                        rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube005_windows_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-1403.508, 1718.594, 1456.342]} scale={84.729}
                    geometry={(nodes.Cube006_windows_0 as THREE.Mesh).geometry} rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-385.38, 1718.594, 1456.342]} scale={84.729}
                    geometry={(nodes.Cube007_windows_0 as THREE.Mesh).geometry} rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[1041.141, 0, -75.821]} scale={100}
                    geometry={(nodes.Plane013_windows_0 as THREE.Mesh).geometry} rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh castShadow receiveShadow material={materials.road_props} position={[155.749, 87.084, 1460.098]} scale={100}
                    geometry={(nodes.Plane021_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow scale={150} material={materials.street_props} position={[-223.064, 112.706, -821.829]}
                        geometry={(nodes['200_L_drum001_C��rculo016_street_props_0'] as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, -0.339]} scale={58.033} material={materials.street_props}
                        position={[14.478, 8.637, 287.75]} geometry={(nodes.Cylinder002_street_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 1.144]} material={materials.street_props} scale={58.033}
                        position={[68.402, 8.637, 375.911]} geometry={(nodes.Cylinder003_street_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, -0.339]} material={materials.street_props} scale={58.033} 
                        position={[-679.364, 8.637, 257.386]} geometry={(nodes.Cylinder001_street_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow geometry={(nodes.Cylinder005_street_props_0 as THREE.Mesh).geometry} scale={58.033}
                    material={materials.street_props} position={[-620.802, 8.637, 368.629]} rotation={[-Math.PI / 2, 0, 0.423]} 
                />
                <mesh castShadow receiveShadow geometry={(nodes.Cube014_street_props_0 as THREE.Mesh).geometry} scale={136.401}
                        material={materials.street_props} position={[-177.844, 71.763, 41.049]} rotation={[-Math.PI / 2, 0, 0.35]} 
                />
                <mesh castShadow receiveShadow geometry={(nodes.Cylinder008_street_props_0 as THREE.Mesh).geometry} material={materials.street_props}
                        position={[-244.434, 67.358, -151.497]} rotation={[-Math.PI / 2, 0, 0.876]} scale={[107.542, 107.542, 126.813]}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[149.696, 60.698, -5.858]} scale={100}
                        geometry={(nodes.Cube012_street_props_0 as THREE.Mesh).geometry} rotation={[-Math.PI / 2, 0, -0.181]}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[72.09, 29.693, -289.846]} scale={100}
                        geometry={(nodes.Cube013_street_props_0 as THREE.Mesh).geometry} rotation={[-Math.PI / 2, 0, 1.748]}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[-138.685, 112.706, -952.138]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo001_street_props_0'] as THREE.Mesh).geometry} rotation={[-Math.PI, 1.529, Math.PI]}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[-226.674, 73.223, -937.72]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo002_street_props_0'] as THREE.Mesh).geometry} rotation={[-3.044, 1.126, -1.659]}
                />
                <mesh castShadow receiveShadow material={materials.Zinc_Roof} position={[-414.006, 554.658, -316.149]} scale={[150.825, 100, 100.412]}
                    rotation={[-Math.PI / 2, 0.089, 0]} geometry={(nodes.Circle003_Zinc_Roof_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[222.322, 62.883, 264.237]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo003_street_props_0'] as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[168.469, 44.759, -13.004]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo004_street_props_0'] as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[-228.769, 109.969, -46.743]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo005_street_props_0'] as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.street_props} position={[-244.33, 81.294, 104.683]} scale={150}
                        geometry={(nodes['200_L_drum001_C��rculo006_street_props_0'] as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.road_props} position={[-673.502, 18.555, 941.042]} scale={100}
                    rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube001_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.road_props} position={[-673.502, 18.555, 1340.456]} scale={100}
                        rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube009_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow position={[155.749, 87.084, 1460.098]} scale={100} material={materials.road_props}
                        geometry={(nodes.Plane001_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow position={[155.749, 87.084, 1460.098]} scale={100} material={materials.road_props}
                        geometry={(nodes.Plane002_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow position={[155.749, 87.084, 1460.098]} scale={100} material={materials.road_props}
                        geometry={(nodes.Plane003_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow scale={100} material={materials.road_props} position={[155.749, 87.084, 1460.098]}
                        geometry={(nodes.Plane006_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow scale={100} material={materials.road_props} position={[-717.548, 436.463, 169.978]}
                        geometry={(nodes.Plane009_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow scale={100} material={materials.road_props} position={[-717.548, 632.823, 124.461]}
                        geometry={(nodes.Plane012_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow scale={100} material={materials.road_props} position={[-717.548, 721.218, 124.461]}
                        geometry={(nodes.Plane015_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.road_props} position={[-717.548, 1037.398, 124.461]} scale={100}
                        geometry={(nodes.Plane016_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.road_props} position={[-717.548, 1133.481, 124.461]} scale={100}
                        geometry={(nodes.Plane022_road_props_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-631.354, 674.223, -228.484]} scale={84.729}
                    rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube008_windows_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} position={[-1403.508, 869.305, 1456.342]} scale={84.729}
                    rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube010_windows_0 as THREE.Mesh).geometry}
                />
                <mesh castShadow receiveShadow material={materials.windows} scale={84.729} position={[-631.354, 674.223, -658.484]} 
                    rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube011_windows_0 as THREE.Mesh).geometry} 
                />
                <mesh castShadow receiveShadow material={materials.windows} scale={84.729} position={[-631.354, 674.223, -1088.484]} 
                    rotation={[-Math.PI / 2, 0, 0]} geometry={(nodes.Cube015_windows_0 as THREE.Mesh).geometry} 
                />
                <mesh castShadow receiveShadow material={materials.windows} scale={84.729} position={[-994.57, 674.223, 144.772]} 
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]} geometry={(nodes.Cube016_windows_0 as THREE.Mesh).geometry} 
                />
                <mesh castShadow receiveShadow material={materials.windows} scale={84.729} position={[-1585.213, 674.223, 250.184]} 
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]} geometry={(nodes.Cube017_windows_0 as THREE.Mesh).geometry} 
                />
            </group>
        </group>
    )
}
  
useGLTF.preload('/background_street.glb')