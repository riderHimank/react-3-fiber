import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import floorTexture from "./textures/floor.jpg";
import wallTexture from "./textures/wall.jpg";

const Room = () => {
  const [floorMap,wallMap] = useTexture([floorTexture,wallTexture]);
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2, -0.35, -4.5]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#FFF" side={DoubleSide} map={floorMap} />
      </mesh>
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-3, 4.65, -4.5]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#FFF" side={DoubleSide} map={wallMap} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 2]} position={[2, 4.65, 0.49]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#FFF" side={DoubleSide} map={wallMap} />
      </mesh>
    </group>
  );
};

export default Room;
