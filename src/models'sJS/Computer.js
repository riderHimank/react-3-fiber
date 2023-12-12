import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Computer(props) {
  const { nodes, materials } = useGLTF('models/Computer.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Comp_Mouse.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.Monitor.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.Drive.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.Keyboard1.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.mesh_3.geometry} material={materials.lambert3SG} />
      <mesh geometry={nodes.mesh_3_1.geometry} material={materials.initialShadingGroup} />
    </group>
  )
}

useGLTF.preload('models/Computer.gltf')
