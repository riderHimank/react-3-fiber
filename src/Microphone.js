import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Microphone(props) {
  const { nodes, materials } = useGLTF('models/Microphone.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Microphone_mesh.geometry} material={materials.lambert2SG} />
    </group>
  )
}

useGLTF.preload('models/Microphone.gltf')
