import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import House from "./House"
import Model from "./Model";
import { VRCanvas, DefaultXRControllers, Hands, useXR } from "@react-three/xr"
import { useGLTF, Environment, Stage, OrbitControls } from '@react-three/drei'
import { Suspense, useLayoutEffect } from 'react'
import * as THREE from 'three'


import { softShadows } from "@react-three/drei"

softShadows()



export default function App() {
  // const { player } = useXR()
  // useEffect(() => {
  //   player.position.x += 5
  // }, [])


  function CarLambo(props) {
    const { scene, nodes, materials } = useGLTF('/lambo.glb')
    // A layout effect executes after the jsx has "rendered" but before it is committed to screen by the host (threejs)
    // This is a good place to make adjustments
    useLayoutEffect(() => {
      scene.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))
      Object.assign(nodes.wheel003_020_2_Chrome_0.material, { metalness: 1, roughness: 0.4, color: new THREE.Color('black') })
      // Using the emissive colors is a nice trick to give textures a warm sheen
      Object.assign(materials.WhiteCar, { roughness: 0, metalness: 0.25, emissive: new THREE.Color('#500000'), envMapIntensity: 0.5 })
    }, [scene, nodes, materials])
    // <primitive> just puts an existing thing into the scene graph
    // For more control over the asset refer to https://github.com/pmndrs/gltfjsx
    return <primitive object={scene} {...props} />
  }

  return (
    <VRCanvas
      shadows
      camera={{ fov: 82 }}
      raycaster={{
        computeOffsets: (e) => ({ offsetX: e.target.width / 2, offsetY: e.target.height / 2 }),
      }}
    >
      <Sky sunPosition={[100, 20, 100]} />
      {/* <fog attach="fog" args={["white", 0, 40]} /> */}
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[0, 50, 0]} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        {/* <Cube position={[0, 0.5, 0]} /> */}
        <Cube position={[10, 0.5, 0]} />
        <Cube position={[0, 0.5, 10]} />
        <Cube position={[10, 0.5, 10]} />
        <Cube position={[-10, 0.5, 0]} />
        <Cube position={[-10, 0.5, 10]} />
        <Cube position={[0, 0.5, -10]} />
        <Cube position={[10, 0.5, -10]} />
        <Cube position={[-10, 0.5, -10]} />
        <Model position={[4, 0, 4]} scale="1" />
        <House position={[-15, 2.5, -15]} scale="5" />

        
        <Cubes />
      </Physics>
      <PointerLockControls />
      <Hands />
      <DefaultXRControllers />
    </VRCanvas>
  )
}