import { Canvas , useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { ComputerDesk } from "./models'sJS/ComputerDesk";
import { AlarmClock } from "./models'sJS/AlarmClock";
import { Calendar } from "./models'sJS/Calendar";
import { Computer } from "./models'sJS/Computer";
import { Cupboard } from "./models'sJS/Cupboard";
import { Microphone } from "./models'sJS/Microphone";
import { Phone } from "./models'sJS/Phone";
import { Trophy } from "./models'sJS/Trophy";
import React, { useRef } from "react";







export default function App() {
  return (
    <Canvas >
      <OrbitControls />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI} />
      <ambientLight intensity={Math.PI / 2} />
      {/* <directionalLight intensity={2} position={[0, 0, 100]} /> */}
       <Environment preset="night" background blur={1} /> 
      <PerspectiveCamera makeDefault position={[0, 1, -6]} near={1} far={10} />
      <ComputerDesk position={[0, 0, 0]} />
      <AlarmClock  position={[-0.75, 0.45, 0]} />
      <Calendar scale={0.02} position={[0,1,0.5]}/>
      <Computer scale={0.001} position={[0,0.4,0]} rotation={[0, Math.PI, 0]}/>
      <Cupboard position={[1.5, 0, -0.7]} rotation={[0, -Math.PI / 1.2 , 0]} scale={0.7}/>
      <Microphone scale={0.02} position={[0.5,0.4,0]}/>
      <Phone scale={0.2} position={[-1, 0.5, 0]}></Phone>
      <Trophy position={[-0.6, 0.4, 0.2]}></Trophy>
    </Canvas>
  );
}
