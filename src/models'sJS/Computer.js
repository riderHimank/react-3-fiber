import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { useSpring, animated } from "react-spring";

export function Computer(props) {
  const { nodes, materials } = useGLTF("models/Computer.gltf");
  const [clicked, setClicked] = useState(false);
  const markRef = useRef();
  const vec_3 = new THREE.Vector3();

  useFrame((state, dt) => {
    if (clicked ) {
      state.camera.position.lerp(vec_3.set(1.47, 1.4, -30.8), 0.5);
      state.camera.lookAt(vec_3.set(1, 1.99, -2));
      state.camera.zoom = 40 ;
      state.camera.updateProjectionMatrix();
      // console.log(state.camera.position);
    }
    return null;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={markRef}
      onClick={() => setClicked(!clicked)}
    >
      <mesh
        geometry={nodes.Comp_Mouse.geometry}
        material={materials.lambert3SG}
      />
      <mesh geometry={nodes.Monitor.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.Drive.geometry} material={materials.lambert3SG} />
      <mesh
        geometry={nodes.Keyboard1.geometry}
        material={materials.lambert3SG}
      />
      <mesh geometry={nodes.mesh_3.geometry} material={materials.lambert3SG} />
      <mesh
        geometry={nodes.mesh_3_1.geometry}
        material={materials.initialShadingGroup}
      />
    </group>
  );
}

useGLTF.preload("models/Computer.gltf");
