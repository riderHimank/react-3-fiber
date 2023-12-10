import { Canvas } from '@react-three/fiber'
import { Fisheye, CameraControls, PerspectiveCamera, Environment } from '@react-three/drei'
import picture from './picture/beach.jpg';
export default function App() {
  return (
    <Canvas flat>
      <Fisheye >
        <CameraControls minPolarAngle={Math.PI/ 6} maxPolarAngle={Math.PI /2} />
        <ambientLight intensity={Math.PI / 2} />
        <Environment preset='park'  background blur={0} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      </Fisheye>
    </Canvas>
  )
}
