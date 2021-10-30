import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Heli(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/heli.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.01, 0.45]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_0_Mat_0.geometry}
              material={nodes.UNI_Gunship_LOD0_0_Mat_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_1_Mat_0.geometry}
              material={materials.Mat_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_2_Mat2_0.geometry}
              material={nodes.UNI_Gunship_LOD0_2_Mat2_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_3_Mat6_0.geometry}
              material={materials['Mat.6']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_4_Mat_0.geometry}
              material={nodes.UNI_Gunship_LOD0_4_Mat_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_5_Mat_0.geometry}
              material={nodes.UNI_Gunship_LOD0_5_Mat_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_6_Mat7_0.geometry}
              material={materials['Mat.7']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UNI_Gunship_LOD0_7_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
          </group>
          <group position={[0, 0.23, -1.15]}>
            <group
              position={[0, 0, 0.05]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.16, 0.16, 0.16]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.W_AT_UniGunshipGatling_POD_LOD0_0_Mat_0.geometry}
                material={nodes.W_AT_UniGunshipGatling_POD_LOD0_0_Mat_0.material}
              />
            </group>
            <group position={[0, 0, -0.05]} rotation={[3.03, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.W_Mounted_UniGunship_Gatling_LOD0_0_Mat_0.geometry}
                material={nodes.W_Mounted_UniGunship_Gatling_LOD0_0_Mat_0.material}
              />
            </group>
          </group>
          <group position={[0, 0.76, -0.72]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <group position={[0, -0.19, -0.05]}>
              <group position={[0, 0, -0.85]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Uni_HeliHelmet_LOD0_0_Mat3_0.geometry}
                  material={nodes.Uni_HeliHelmet_LOD0_0_Mat3_0.material}
                />
              </group>
              <group position={[0, 0, -0.85]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Uni_HeliHelmet_LOD0_1_Mat3_0.geometry}
                  material={nodes.Uni_HeliHelmet_LOD0_1_Mat3_0.material}
                />
              </group>
            </group>
            <group position={[0, 0.19, 0.05]}>
              <group position={[0, 0, -0.85]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Uni_HeliHelmet_LOD0_0_2_Mat3_0.geometry}
                  material={nodes.Uni_HeliHelmet_LOD0_0_2_Mat3_0.material}
                />
              </group>
              <group position={[0, 0, -0.85]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Uni_HeliHelmet_LOD0_1_2_Mat3_0.geometry}
                  material={nodes.Uni_HeliHelmet_LOD0_1_2_Mat3_0.material}
                />
              </group>
            </group>
          </group>
          <group position={[0, 0.46, 0.01]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.58, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.W_AT_UniGunshipRocket_POD_LOD0_0_002_Mat_0.geometry}
                material={nodes.W_AT_UniGunshipRocket_POD_LOD0_0_002_Mat_0.material}
              />
            </group>
            <group position={[0.58, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.W_Mounted_UniGunshipRocket_Turret_LOD0_0_Mat_0.geometry}
                material={nodes.W_Mounted_UniGunshipRocket_Turret_LOD0_0_Mat_0.material}
              />
            </group>
          </group>
          <group position={[0, 1.26, 0]}>
            <group position={[0.01, 0, -0.38]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <group position={[-0.01, 0.77, 0]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.RotorBlade_0_02_Mat_0.geometry}
                  material={nodes.RotorBlade_0_02_Mat_0.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RotorBlade_0_02_2_Mat_0.geometry}
                material={nodes.RotorBlade_0_02_2_Mat_0.material}
              />
            </group>
            <group position={[-0.01, 0, 0.38]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RotorBlade_0_01_Mat1_0.geometry}
                material={nodes.RotorBlade_0_01_Mat1_0.material}
              />
            </group>
            <group position={[0.01, 0, -0.38]} rotation={[-Math.PI / 2, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RotorBlade_0_01_2_Mat1_0.geometry}
                material={nodes.RotorBlade_0_01_2_Mat1_0.material}
              />
            </group>
          </group>
          <group position={[0, 0.5, 0.96]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0.51, -0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tail_LOD0_0_Mat_0.geometry}
                material={nodes.Tail_LOD0_0_Mat_0.material}
              />
            </group>
            <group position={[0, 0.51, -0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tail_LOD0_1__0.geometry}
                material={nodes.Tail_LOD0_1__0.material}
              />
            </group>
            <group position={[0, 0.51, -0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tail_LOD0_2_Mat2_0.geometry}
                material={nodes.Tail_LOD0_2_Mat2_0.material}
              />
            </group>
            <group position={[0, 0.51, -0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tail_LOD0_3__0.geometry}
                material={nodes.Tail_LOD0_3__0.material}
              />
            </group>
          </group>
          <group position={[-0.03, 1.05, 2.83]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 2.93, -1.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TailRotor_0_Mat_0.geometry}
                material={nodes.TailRotor_0_Mat_0.material}
              />
            </group>
            <group position={[0, 2.93, -1.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TailRotor_1_Mat_0.geometry}
                material={nodes.TailRotor_1_Mat_0.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/heli.gltf')