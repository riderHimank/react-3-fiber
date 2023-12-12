import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Phone(props) {
  const { nodes, materials } = useGLTF('models/Phone.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.943}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.White} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Phone.gltf')
