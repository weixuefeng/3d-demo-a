
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import axeUrl from "./assets/axe.glb"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(axeUrl)
  return (
    <group ref={group} dispose={null} {...props}>
      <group rotation={[0, Math.PI / 1.8, -0.3]} scale={1}>
        <mesh geometry={nodes.Mesh_1001_1.geometry} color="black" />
        <mesh geometry={nodes.Mesh_1001_2.geometry} color="black" />
      </group>
    </group>
  )
}

useGLTF.preload("/axe.glb")
