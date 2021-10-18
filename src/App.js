import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls,Stars } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import House from "./House"
import Model from "./Model"
import Tree from "./Tree"
import Avatar from "./Avatar"
import Car from "./Car"

import { VRCanvas, DefaultXRControllers, Hands, useXR } from "@react-three/xr"
import { useGLTF, Environment, Stage, OrbitControls } from "@react-three/drei"
import { Suspense, useLayoutEffect } from "react"
import * as THREE from "three"
import Camera from "./components/Camera/Camera"
import DirectionalLight from "./components/DirectionalLight/DirectionalLight"

import PointLight from "./components/PointLight/PointLight"

export default function App() {
  return (
    <VRCanvas
    onCreated={({ gl }) => { 
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}>
      <Sky sunPosition={[50, 80, 100]} />
      <Stars />
      {/* <fog attach="fog" args={["white", 0, 40]} /> */}
      <ambientLight intensity={0.5} />
      <DirectionalLight
        position={[50, 80, 100]}
        target={[-5, -3, 50]}
        intensity={0.5}
        color={"white"}
        shadowCamBot={-50}
        shadowCamTop={50}
        shadowCamL={53}
        shadowCamR={-53}
      />
      {/* <PointLight intensity={0.3} position={[29, 50, 60]} /> */}
      <fog attach="fog" args={["#f0f4f5", 30, 250]}/>
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
        <Model position={[4, 0.5, 4]} scale="1" />
        <House position={[-15, 2.5, -15]} scale="5" />

        <Tree position={[8, 0, 1]} scale="0.2" />

        <Avatar position={[3, 0, -7]} scale="0.8" />

        <Car position={[6, 1, 6]} scale="1" />
        <Target position={[-3, 0, -8]} scale="0.7" />


        <Cubes />
      </Physics>
      <PointerLockControls />
      {/* <Hands />
      <DefaultXRControllers /> */}
    </VRCanvas>
  )
}



function Target(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  return <primitive object={scene} {...props} />
}