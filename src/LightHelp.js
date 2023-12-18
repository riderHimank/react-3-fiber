import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";

export default function LightHelp({ position, intensity }) {
  const dirLight = useRef();
  // const spotLight = useRef();
  // useHelper(spotLight, SpotLightHelper);
  return (
    <>
      <directionalLight
        castShadow
        intensity={intensity}
        position={position}
        ref={dirLight}
      />
      {/* <spotLight
        castShadow
        intensity={1.2}
        position={[10, 10, -5]}
        ref={spotLight}
      /> */}
    </>
  );
}
