/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

import { Canvas, useFrame } from "@react-three/fiber"

export default function Avatar(props) {
  const { scene } = useGLTF("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/skater-male/model.gltf")
  scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  useFrame(() => {
    scene.rotation.y += 0.01
  })
  return <primitive object={scene} {...props} />
}