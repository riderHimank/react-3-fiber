import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ComputerDesk(props) {
  const { nodes, materials } = useGLTF('models/ComputerDesk.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.ComputerDesk1.geometry} material={materials.MetalComputerDesk1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('models/ComputerDesk.gltf')
