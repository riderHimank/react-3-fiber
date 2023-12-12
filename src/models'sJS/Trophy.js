import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trophy(props) {
  const { nodes, materials } = useGLTF('models/Trophy.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Trophy.geometry} material={materials.Material} scale={100} />
    </group>
  )
}

useGLTF.preload('models/Trophy.gltf')
