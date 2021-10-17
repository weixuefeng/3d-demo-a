import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function House(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/house1/model.gltf')
  return (
    <group ref={group} {...props} dispose={null} receiveShadow castShadow >
      <mesh geometry={nodes.Mesh_house_type01.geometry} material={materials['border.001']} />
      <mesh geometry={nodes.Mesh_house_type01_1.geometry} material={materials['window.001']} />
      <mesh geometry={nodes.Mesh_house_type01_2.geometry} material={materials['door.001']} />
      <mesh geometry={nodes.Mesh_house_type01_3.geometry} material={materials['_defaultMat.001']} />
      <mesh geometry={nodes.Mesh_house_type01_4.geometry} material={materials['roof.003']} />
    </group>
  )
}

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/house1/model.gltf')