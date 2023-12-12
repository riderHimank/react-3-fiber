import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Calendar(props) {
  const { nodes, materials } = useGLTF('models/Calendar.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes.mesh_0_1.geometry} material={materials['1A1A1A']} />
      <mesh geometry={nodes.mesh_0_2.geometry} material={materials['00BCD4']} />
      <mesh geometry={nodes.mesh_0_3.geometry} material={materials['455A64']} />
    </group>
  )
}

useGLTF.preload('models/Calendar.gltf')
