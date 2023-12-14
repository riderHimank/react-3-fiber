import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  CameraControls,
  PerspectiveCamera,
  Environment,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { ComputerDesk } from "./models'sJS/ComputerDesk";
import { AlarmClock } from "./models'sJS/AlarmClock";
import { Calendar } from "./models'sJS/Calendar";
import { Computer } from "./models'sJS/Computer";
import { Cupboard } from "./models'sJS/Cupboard";
import { Microphone } from "./models'sJS/Microphone";
import { Phone } from "./models'sJS/Phone";
import { Trophy } from "./models'sJS/Trophy";
import LightHelp from "./LightHelp";
import Room from "./Room";
import { DoubleSide, TextureLoader } from "three";

export default function App() {
  return (
    <Canvas camera={{ fov: 70, position: [0, 3, -6] }}>
      {/* <OrbitControls /> */}
      <CameraControls minPolarAngle={0} maxPolarAngle={2 * Math.PI} />
      <ambientLight intensity={0.3} />
      <LightHelp position={[0, 10, 0]} intensity={1} />
      <LightHelp position={[0, 0, -10]} intensity={2} />
      <Environment preset="night" background blur={1} />
      {/* <PerspectiveCamera
        makeDefault
        position={[0, 1.5, -0.5]}
        near={1}
        far={10}
        children
      /> */}
      <color attach="background" args={["#191920"]} />
      {/* <fog attach="fog" args={["#191920", 0, 15]} /> */}
      <group scale={1}>
        <Room />
        <group scale={2.5} position={[1, 0.55, -0.75]}>
          <ComputerDesk position={[0, 0, 0]} />
          <AlarmClock position={[-0.75, 0.45, 0]} />
          <Calendar scale={0.02} position={[0, 1, 0.48]} />
          <Computer
            scale={0.001}
            position={[0, 0.4, 0]}
            rotation={[0, Math.PI, 0]}
          />
          <Cupboard
            position={[1.5, -0.34, 0.28]}
            rotation={[0, -Math.PI, 0]}
            scale={0.7}
          />
          <Microphone scale={0.02} position={[0.5, 0.4, 0]} />
          <Phone
            scale={0.2}
            position={[-1, 0.5, 0]}
            rotation={[0, -Math.PI, 0]}
          />
          <Trophy position={[-0.6, 0.4, 0.2]} />
        </group>
      </group>
    </Canvas>
  );
}
