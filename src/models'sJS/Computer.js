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
