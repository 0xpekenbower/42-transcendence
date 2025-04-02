"use client"

import { handleQuitGame } from '@/components/game/match-local/match';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import { Background_street } from './game-table-street';
import { Table_Game } from './game-table-play';

interface TableLocalProps {
	playerLeft: string;
	playerRight: string;
	scorePlayerLeft: number;
	scorePlayerRight: number;
	positionPlayerPaddleLeft: number;
	positionPlayerPaddleRight: number;
	ballPosition: { x: number; y: number; z: number };
	socket?: React.RefObject<WebSocket | null>;
	router?: ReturnType<typeof useRouter>;
}

const TableLocal: React.FC<TableLocalProps> = ({
    playerLeft, playerRight, scorePlayerLeft, scorePlayerRight, positionPlayerPaddleLeft, positionPlayerPaddleRight, ballPosition, socket, router,
}) => {
  	return (
    	<div className="w-full h-full bg-neutral-900 absolute flex flex-col justify-center items-center overflow-hidden">
			{/* Table */}
			<div style={{ width: '100vw', height: '100vh' }}>
    			<Canvas camera={{ position: [0, 25, 15], fov: 30, near: 14, far: 1000 }}>
        			{/* Lighting */}
					<ambientLight intensity={0.8} />
					<directionalLight position={[10, 10, 5]} intensity={1} />
					<pointLight position={[0, 20, 10]} intensity={0.5} />

					{/* 3D Background - Pushed Back */}
					<Background_street position={[-10, -10, -20]} scale={[3.5, 3.5, 3.5]} rotation={[0, 3 * Math.PI / 2, 0]}/>

					{/* Pong Table - Centered and Focused */}
					<group position={[0, -3, 0]} rotation={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
						<Table_Game 
							positionPlayerPaddleLeft={positionPlayerPaddleLeft} positionPlayerPaddleRight={positionPlayerPaddleRight} playerLeft={playerLeft}
							scorePlayerLeft={scorePlayerLeft} playerRight={playerRight} scorePlayerRight={scorePlayerRight} ballPosition={ballPosition} 
						/>
					</group>

					<OrbitControls enableZoom={true} minDistance={10} maxDistance={40} target={[0, 0, 0]}/>
				</Canvas>
			</div>


			{/* Bottom Controls */}
			{socket && router && (
				<div className="absolute text-center z-10 bottom-4 justify-center">
					<button onClick={() => handleQuitGame(socket, router)} className="px-8 py-2 bg-[#F5EEDC] bg-opacity-50 text-[#030303] border-2 
						border-[#030303] rounded-md hover:bg-[#3E3F5B] hover:text-[#1a1a2e] transition-all duration-300 text-2xl font-bold 
						uppercase tracking-wide flex items-center justify-center shadow-md shadow-[#3E3F5B]/30"
					>
						Quit Game
					</button>
				</div>
			)}
    	</div>
  	);
};

export { TableLocal };