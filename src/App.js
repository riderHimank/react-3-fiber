import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { ComputerDesk } from "./ComputerDesk";
import { AlarmClock } from "./AlarmClock";
import { Calendar } from "./Calendar";
import { Computer } from "./Computer";
import { Cupboard } from "./Cupboard";
import { Microphone } from "./Microphone";
import { Phone } from "./Phone";
import { Trophy } from "./Trophy";
export default function App() {
  return (
    <Canvas flat>
      <OrbitControls />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI} />
      <ambientLight intensity={Math.PI / 2} />
      {/* <directionalLight intensity={2} position={[0, 0, 100]} /> */}
      {/* <Environment preset="park" background blur={0} /> */}
      <PerspectiveCamera makeDefault position={[0, 0, -20]} />
      <ComputerDesk position={[10, 0, 0]} />
      <AlarmClock position={[10, 2, 0]} />
      <Calendar />
      {/* { <Computer></Computer> */}
      <Cupboard position={[0, 0, -10]}></Cupboard>
      <Microphone></Microphone>
      <Phone position={[-10, 0, -10]}></Phone>
      <Trophy position={[0, 0, -10]}></Trophy>
    </Canvas>
  );
}
