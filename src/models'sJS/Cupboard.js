import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cupboard(props) {
  const { nodes, materials } = useGLTF('models/Cupboard.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.004, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Wood1} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.Wood2} />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.mesh_0_3.geometry} material={materials.Cover1} />
        <mesh geometry={nodes.mesh_0_4.geometry} material={materials.Pages} />
        <mesh geometry={nodes.mesh_0_5.geometry} material={materials.Cover6} />
        <mesh geometry={nodes.mesh_0_6.geometry} material={materials.Cover2} />
        <mesh geometry={nodes.mesh_0_7.geometry} material={materials.Cover3} />
        <mesh geometry={nodes.mesh_0_8.geometry} material={materials.Cover4} />
        <mesh geometry={nodes.mesh_0_9.geometry} material={materials.Cover5} />
      </group>
      <group position={[0.775, 0.588, 0.299]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.mesh_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.mesh_1_1.geometry} material={materials.Metal} />
      </group>
      <group position={[-0.77, 0.588, 0.299]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.mesh_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.mesh_2_1.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Cupboard.gltf')
