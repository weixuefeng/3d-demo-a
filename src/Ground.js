import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { usePlane } from "@react-three/cannon"
import grass from "./assets/grass.jpg"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  const texture = useLoader(THREE.TextureLoader, grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial map={texture} map-repeat={[10000, 10000]} color="grey" />
    </mesh>
  )
}
