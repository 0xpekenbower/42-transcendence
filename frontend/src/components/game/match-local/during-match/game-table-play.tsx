import React, { useRef} from 'react';
import * as THREE from 'three'
import { Text3D } from '@react-three/drei';
import { useGLTF } from '@react-three/drei'
import { BallPosition } from '@/components/game/match-local/during-match/socket';

interface DrawTableProps {
    playerLeft: string;
    playerRight: string;
    scorePlayerRight: number;
    scorePlayerLeft: number;
    positionPlayerPaddleLeft: number;
    positionPlayerPaddleRight: number;
    ballPosition: BallPosition;
}


export const Table_Game: React.FC<DrawTableProps> = ({
    playerLeft, playerRight,
    scorePlayerRight, scorePlayerLeft,
    positionPlayerPaddleLeft,
    positionPlayerPaddleRight,
    ballPosition,
}) => {
	const group = useRef(null)
	const { nodes, materials } = useGLTF('/pong.glb')

	const formatPlayerName = (name: string) => name.padEnd(4, ' ').slice(0, 4);
	const tableWidth = 40;
	const leftX = -tableWidth / 2 + (tableWidth * 0.25); // 25% of table width
	const rightX = tableWidth / 2 - (tableWidth * 0.34); // 75% of table width


    return (
        <group ref={group} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            {/* Table Game */}
                            <group name="Plane_3" position={[0, -0.2, 0]} scale={[1.117, 0.8, 1]}>
                                <mesh name="Object_8" castShadow receiveShadow geometry={(nodes.Object_8 as THREE.Mesh).geometry} material={materials['Material.001']}/>
                            </group>
                            
                            {/* Line Center */}
                            <group name="Cube_4" position={[0, 0, -5.7]} scale={[0.2, 0.07, 0.22]}>
                                <mesh name="Object_10" castShadow receiveShadow geometry={(nodes.Object_10 as THREE.Mesh).geometry} material={materials['Material.002']}/>
                            </group>

                            {/* Line Rounded left */}
                            <group name="Cube032_8" position={[0, -0.2, -6.2]} scale={[0.2, 0.3, 0.2]}>
                                <mesh name="Object_18" castShadow receiveShadow geometry={new THREE.BoxGeometry(100.4, 3, 2)} material={materials['Material.002']}/>
                            </group>
                            
                            {/* Line Rounded right */}
                            <group name="Cube032_8" position={[0, -0.2, 6.2]} scale={[0.2, 0.3, 0.2]}>
                                <mesh name="Object_18" castShadow receiveShadow geometry={new THREE.BoxGeometry(100.4, 3, 2)} material={materials['Material.002']}/>
                            </group>
                            
                            {/* Left Paddle */}
                            <group name="Cube001_5" position={[-9.3, 0, positionPlayerPaddleLeft]} scale={[0.24, 0.24, 0.24]}>
                                <mesh name="Object_12" castShadow receiveShadow geometry={(nodes.Object_12 as THREE.Mesh).geometry} material={materials['Material.002']}/>
                            </group>
                  
                            {/* Right Paddle */}
                            <group name="Cube002_6" position={[9.3, 0, positionPlayerPaddleRight]} scale={[0.24, 0.24, 0.24]}>
                                <mesh name="Object_14" castShadow receiveShadow geometry={(nodes.Object_14 as THREE.Mesh).geometry} material={materials['Material.002']}/>
                            </group>

                            {/* Text Pong Title Left Side */}
                            <group name="Text001_10" position={[0.3, -3.495, 9.255]} rotation={[Math.PI / 2, 0, 0]} scale={3.694}>                         
                                <mesh name="Object_22" castShadow receiveShadow geometry={(nodes.Object_22 as THREE.Mesh).geometry} material={materials['Material.012']}/>
                                <mesh name="Object_23" castShadow receiveShadow geometry={(nodes.Object_23 as THREE.Mesh).geometry} material={materials['Material.013']}/>
                                <mesh name="Object_24" castShadow receiveShadow geometry={(nodes.Object_24 as THREE.Mesh).geometry} material={materials['Material.014']}/>
                                <mesh name="Object_25" castShadow receiveShadow geometry={(nodes.Object_25 as THREE.Mesh).geometry} material={materials['Material.015']}/>
                                <mesh name="Object_26" castShadow receiveShadow geometry={(nodes.Object_26 as THREE.Mesh).geometry} material={materials['Material.016']}/>
                            </group>
                            
                            {/* Text Pong Title Right Side */}
                            <group name="Text005_13" position={[0, -3.495, -9.245]} rotation={[Math.PI / 2, 0, Math.PI]} scale={3.694}>
                                <mesh name="Object_34" castShadow receiveShadow geometry={(nodes.Object_34 as THREE.Mesh).geometry} material={materials['Material.012']}/>
                                <mesh name="Object_35" castShadow receiveShadow geometry={(nodes.Object_35 as THREE.Mesh).geometry} material={materials['Material.013']}/>
                                <mesh name="Object_36" castShadow receiveShadow geometry={(nodes.Object_36 as THREE.Mesh).geometry} material={materials['Material.014']}/>
                                <mesh name="Object_37" castShadow receiveShadow geometry={(nodes.Object_37 as THREE.Mesh).geometry} material={materials['Material.015']}/>
                                <mesh name="Object_38" castShadow receiveShadow geometry={(nodes.Object_38 as THREE.Mesh).geometry} material={materials['Material.016']}/>
                            </group>

                            {/* Text Line Right Side */}
                            <group name="Text002_11" position={[0, -3.495, 9.255]} rotation={[Math.PI / 2, 0, 0]} scale={3.694}>
                                <mesh name="Object_28" castShadow receiveShadow geometry={(nodes.Object_28 as THREE.Mesh).geometry} material={materials['Material.009']}/>
                                <mesh name="Object_29" castShadow receiveShadow geometry={(nodes.Object_29 as THREE.Mesh).geometry} material={materials['Material.010']}/>
                                <mesh name="Object_30" castShadow receiveShadow geometry={(nodes.Object_30 as THREE.Mesh).geometry} material={materials['Material.011']}/>
                            </group>

                            {/* Click Left Side */}
                            <group name="Cube017_14" position={[-6.617, -0.8, 8.081]} rotation={[Math.PI, -1.377, Math.PI]}>
                                <mesh name="Object_40" castShadow receiveShadow geometry={(nodes.Object_40 as THREE.Mesh).geometry} material={materials['Material.005']}/>
                                <mesh name="Object_41" castShadow receiveShadow geometry={(nodes.Object_41 as THREE.Mesh).geometry} material={materials['Material.006']}/>
                                <mesh name="Object_42" castShadow receiveShadow geometry={(nodes.Object_42 as THREE.Mesh).geometry} material={materials['Material.007']}/>
                            </group>

                            {/* Click Right Side */}
                            <group name="Cube024_15" position={[5.525, -0.8, 8.123]} rotation={[0, -1.46, 0]}>
                                <mesh name="Object_44" castShadow receiveShadow geometry={(nodes.Object_44 as THREE.Mesh).geometry} material={materials['Material.005']}/>
                                <mesh name="Object_45" castShadow receiveShadow geometry={(nodes.Object_45 as THREE.Mesh).geometry} material={materials['Material.006']}/>
                                <mesh name="Object_46" castShadow receiveShadow geometry={(nodes.Object_46 as THREE.Mesh).geometry} material={materials['Material.007']}/>
                            </group>
                            
                            {/* Line Left */}
                            <group name="BezierCurve_17" position={[-6.441, -0.535, 7.097]}>
                                <mesh name="Object_50" castShadow receiveShadow geometry={(nodes.Object_50 as THREE.Mesh).geometry} material={materials['Material.008']}/>
                            </group>

                            {/* Line Right */}
                            <group name="BezierCurve001_18" position={[5.433, -0.4, 7.127]}>
                                <mesh name="Object_52" castShadow receiveShadow geometry={(nodes.Object_52 as THREE.Mesh).geometry} material={materials['Material.008']}/>
                            </group>

                            {/* Text Line Left Side */}
                            <group name="Text004_12" position={[0.3, -3.495, -9.245]} rotation={[Math.PI / 2, 0, Math.PI]} scale={3.694}>
                                <mesh name="Object_32" castShadow receiveShadow geometry={(nodes.Object_32 as THREE.Mesh).geometry} material={materials.material_0}/>
                            </group>

                            {/* Table */}
                            <group name="Cube010_16" position={[0.1, -1.8, 0]}>
                                <mesh name="Object_48" castShadow receiveShadow geometry={(nodes.Object_48 as THREE.Mesh).geometry} material={materials['Material.008']}/>
                            </group>

                            {/* Ball */}
                            <group name="Cube003_7" scale={0.25} position={[ballPosition.x, ballPosition.y, ballPosition.z]}>
                                <mesh name="Object_16" castShadow receiveShadow geometry={(nodes.Object_16 as THREE.Mesh).geometry} material={materials['Material.002']}/>
                            </group>

                            {/* Score Left - Red Team Score */}
							<group name="Text003_1" position={[-2.3, 0, -7]} rotation={[-Math.PI/4, 0, 0]} scale={2}>
								<Text3D font="/VALORANT_Regular.json" size={0.5} height={0.1} curveSegments={12} bevelEnabled
									bevelThickness={0.02} bevelSize={0.01} bevelOffset={0} bevelSegments={5} letterSpacing={0.05}
								>
									{scorePlayerLeft}
									<meshStandardMaterial color="#F7F7F7"	metalness={0.7} roughness={0.3} emissive="#F7F7F7" emissiveIntensity={0.3}/>
								</Text3D>
							</group>

							{/* Score Right - Blue Team Score */}
							<group name="Text006_2" position={[1.3, 0, -7]} rotation={[-Math.PI/4, 0, 0]} scale={2}>
								<Text3D font="/VALORANT_Regular.json" size={0.5} height={0.1} curveSegments={12} bevelEnabled
									bevelThickness={0.02} bevelSize={0.01} bevelOffset={0} bevelSegments={5} letterSpacing={0.05}
								>
									{scorePlayerRight}
									<meshStandardMaterial color="#F7F7F7" metalness={0.7} roughness={0.3} emissive="#F7F7F7" emissiveIntensity={0.3}/>
								</Text3D>
							</group>

							{/* Table width assumption: 20 units (adjust as needed) */}
							{/* Player Left Name - Centered at 25% */}
							<group name="PlayerLeftText" position={[leftX, 0, -7]} scale={1.4} rotation={[-Math.PI/4, 0, 0]}>
								<Text3D font="/Robot Rocket_Italic.json" size={0.5} height={0.1} curveSegments={12} bevelEnabled
									bevelThickness={0.02} bevelSize={0.01} bevelOffset={0} bevelSegments={5} letterSpacing={0.05}
								>
									{formatPlayerName(playerLeft)}
									<meshStandardMaterial color="#FBF8EF" metalness={0.5} roughness={0.4} emissive="#FBF8EF" emissiveIntensity={0.2}/>
								</Text3D>
							</group>

							{/* Player Right Name - Centered at 75% */}
							<group name="PlayerRightText" position={[rightX, 0, -7]} scale={1.4} rotation={[-Math.PI/4, 0, 0]}>
								<Text3D font="/Robot Rocket_Italic.json" size={0.5} height={0.1} curveSegments={12} bevelEnabled
									bevelOffset={0} bevelThickness={0.02} bevelSize={0.01} bevelSegments={5} letterSpacing={0.05}
								>
									{formatPlayerName(playerRight)}
									<meshStandardMaterial color="#FBF8EF" metalness={0.6} roughness={0.3} emissive="#FBF8EF" emissiveIntensity={0.3}/>
								</Text3D>
							</group>


                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/pong.glb')