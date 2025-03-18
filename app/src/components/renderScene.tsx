// // components/avatar-renderer.tsx

// "use client";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import Scene from "@/3DModules/Scene"
// const SceneRender = () => {
//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <Suspense
//         fallback={
//           <div className="w-full h-full font-bold text-[30px] font-mono text-white">
//             loading...
//           </div>
//         }
//       >
//         <Canvas
//           shadows="basic"
//           camera={{
//             position: [0, 5, 11],
//             fov: 100,
//             castShadow: true,
//             zoom: 3,
//           }}
//           className="w-full h-full"
//         >
//           <OrbitControls />
//           {/* <ambientLight intensity={1.5} /> */}
//           <Environment preset="sunset" />
//           {/* <directionalLight intensity={0.8} /> */}
//           <Scene />
//         </Canvas>
//       </Suspense>
//     </div>
//   );
// };

// export default SceneRender;
"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from "@/3DModules/Scene";

const SceneRender = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Suspense
        fallback={
          <div className="w-full h-full font-bold text-[30px] font-mono text-white">
            loading...
          </div>
        }
      >
        <Canvas
          shadows="basic"
          camera={{
            position: [0, 0, 10], // Adjusted to better frame the pedestal
            fov: 50, // Reduced FOV for natural look
          }}
          className="w-full h-full"
        >
          <OrbitControls 
            target={[0, 2, 0]} // Keeps focus on pedestal & avatar
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
            minPolarAngle={Math.PI / 4} // Prevents camera from going too high
            maxPolarAngle={Math.PI / 2} // Prevents camera from going under the pedestal
          />
          <Environment preset="sunset" />
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SceneRender;
