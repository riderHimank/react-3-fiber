import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AlarmClock(props) {
  const { nodes, materials } = useGLTF('models/AlarmClock.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group335136011.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1223167977.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1985222978.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group517170809.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group803034596.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group441368084.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group148875579.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group1361049194.geometry} material={materials.mat15} />
      <mesh geometry={nodes.group762837274.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group3801153.geometry} material={materials.mat16} />
      <mesh geometry={nodes.group336328460.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group712291025.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group371484656.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group817882658.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group424689230.geometry} material={materials.mat8} />
      <mesh geometry={nodes.group917248833.geometry} material={materials.mat21} />
      <mesh geometry={nodes.group1238423518.geometry} material={materials.mat21} />
      <mesh geometry={nodes.group1377990193.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group722696530.geometry} material={materials.mat14} />
      <mesh geometry={nodes.group601692100.geometry} material={materials.mat15} />
      <mesh geometry={nodes.group889766223.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1342934644.geometry} material={materials.mat16} />
      <mesh geometry={nodes.group795273595.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1666950865.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1572523851.geometry} material={materials.mat23} />
      <mesh geometry={nodes.mesh_15.geometry} material={materials.mat15} />
      <mesh geometry={nodes.mesh_15_1.geometry} material={materials.mat23} />
      <mesh geometry={nodes.mesh_25.geometry} material={materials.mat23} />
      <mesh geometry={nodes.mesh_25_1.geometry} material={materials.mat15} />
    </group>
  )
}

useGLTF.preload('models/AlarmClock.gltf')
