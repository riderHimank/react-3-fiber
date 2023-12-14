import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function LightHelp({position,intensity}){
    const dirLight = useRef();
    // useHelper(dirLight, DirectionalLightHelper);
    return (
      <directionalLight
        intensity={intensity}
        position={position}
        ref={dirLight}
      />
    );
}
 