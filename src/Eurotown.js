import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Eurotown(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/eurotown.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.91, 0.91, 0.91]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.03, 0.03, 0.03]}>
            <group
              position={[159.91, 627.25, -1220.11]}
              rotation={[0, 1.57, 0]}
              scale={[-1, -1, -1]}>
              <group
                position={[2.74, 627.25, -305.01]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={nodes.Object_12.material}
                />
              </group>
              <group
                position={[2.74, 627.25, -305.01]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={nodes.Object_14.material}
                />
              </group>
              <group
                position={[2.74, 627.25, -305.01]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <group position={[-2.74, 0, -336.22]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={nodes.Object_8.material}
                  />
                </group>
                <group position={[-2.74, 0, 0]} rotation={[0, 0, Math.PI]} scale={[-1.08, -1, -1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={nodes.Object_10.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['bijgebouw5.002']}
                />
              </group>
              <group position={[419.97, 627.25, -268.66]} rotation={[Math.PI, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={nodes.Object_22.material}
                />
              </group>
              <group position={[419.97, 627.25, -268.66]} rotation={[Math.PI, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={nodes.Object_24.material}
                />
              </group>
              <group position={[419.97, 627.25, -268.66]} rotation={[Math.PI, 0, 0]}>
                <group position={[45.73, 238.87, -122.5]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={nodes.Object_18.material}
                  />
                </group>
                <group position={[45.73, 238.87, -59.06]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={nodes.Object_20.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={nodes.Object_16.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={nodes.Object_102.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={nodes.Object_104.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={nodes.Object_106.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={nodes.Object_108.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={nodes.Object_110.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={nodes.Object_112.material}
                />
              </group>
              <group position={[866.47, 627.25, -22.77]} rotation={[0, 0, Math.PI]}>
                <group position={[0, 0, -19.69]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={nodes.Object_28.material}
                  />
                </group>
                <group position={[345.76, 397.08, -334.88]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={nodes.Object_32.material}
                  />
                </group>
                <group position={[345.76, 397.08, -334.88]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={nodes.Object_34.material}
                  />
                </group>
                <group position={[345.76, 397.08, -334.88]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={nodes.Object_36.material}
                  />
                </group>
                <group position={[345.76, 397.08, -334.88]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={nodes.Object_38.material}
                  />
                </group>
                <group position={[345.76, 397.08, -334.88]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={nodes.Object_30.material}
                  />
                </group>
                <group position={[345.76, 397.08, -77.01]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={nodes.Object_42.material}
                  />
                </group>
                <group position={[345.76, 397.08, -77.01]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={nodes.Object_44.material}
                  />
                </group>
                <group position={[345.76, 397.08, -77.01]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={nodes.Object_46.material}
                  />
                </group>
                <group position={[345.76, 397.08, -77.01]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={nodes.Object_48.material}
                  />
                </group>
                <group position={[345.76, 397.08, -77.01]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={nodes.Object_40.material}
                  />
                </group>
                <group position={[345.76, 397.08, -542.75]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={nodes.Object_52.material}
                  />
                </group>
                <group position={[345.76, 397.08, -542.75]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_54.geometry}
                    material={nodes.Object_54.material}
                  />
                </group>
                <group position={[345.76, 397.08, -542.75]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_56.geometry}
                    material={nodes.Object_56.material}
                  />
                </group>
                <group position={[345.76, 397.08, -542.75]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_58.geometry}
                    material={nodes.Object_58.material}
                  />
                </group>
                <group position={[345.76, 397.08, -542.75]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={nodes.Object_50.material}
                  />
                </group>
                <group position={[345.76, 397.08, -794.33]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_62.geometry}
                    material={nodes.Object_62.material}
                  />
                </group>
                <group position={[345.76, 397.08, -794.33]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_64.geometry}
                    material={nodes.Object_64.material}
                  />
                </group>
                <group position={[345.76, 397.08, -794.33]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_66.geometry}
                    material={nodes.Object_66.material}
                  />
                </group>
                <group position={[345.76, 397.08, -794.33]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_68.geometry}
                    material={nodes.Object_68.material}
                  />
                </group>
                <group position={[345.76, 397.08, -794.33]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_60.geometry}
                    material={nodes.Object_60.material}
                  />
                </group>
                <group position={[273.99, 474.59, -201.58]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_72.geometry}
                    material={nodes.Object_72.material}
                  />
                </group>
                <group position={[273.99, 474.59, -201.58]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_74.geometry}
                    material={nodes.Object_74.material}
                  />
                </group>
                <group position={[273.99, 474.59, -201.58]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_76.geometry}
                    material={nodes.Object_76.material}
                  />
                </group>
                <group position={[273.99, 474.59, -201.58]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_78.geometry}
                    material={nodes.Object_78.material}
                  />
                </group>
                <group position={[273.99, 474.59, -201.58]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_70.geometry}
                    material={nodes.Object_70.material}
                  />
                </group>
                <group position={[273.99, 474.59, -441.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_82.geometry}
                    material={nodes.Object_82.material}
                  />
                </group>
                <group position={[273.99, 474.59, -441.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_84.geometry}
                    material={nodes.Object_84.material}
                  />
                </group>
                <group position={[273.99, 474.59, -441.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_86.geometry}
                    material={nodes.Object_86.material}
                  />
                </group>
                <group position={[273.99, 474.59, -441.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_88.geometry}
                    material={nodes.Object_88.material}
                  />
                </group>
                <group position={[273.99, 474.59, -441.74]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_80.geometry}
                    material={nodes.Object_80.material}
                  />
                </group>
                <group position={[273.99, 474.59, -676.78]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_92.geometry}
                    material={nodes.Object_92.material}
                  />
                </group>
                <group position={[273.99, 474.59, -676.78]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_94.geometry}
                    material={nodes.Object_94.material}
                  />
                </group>
                <group position={[273.99, 474.59, -676.78]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_96.geometry}
                    material={nodes.Object_96.material}
                  />
                </group>
                <group position={[273.99, 474.59, -676.78]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_98.geometry}
                    material={nodes.Object_98.material}
                  />
                </group>
                <group position={[273.99, 474.59, -676.78]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_90.geometry}
                    material={nodes.Object_90.material}
                  />
                </group>
                <group position={[0, 0, -901.97]} rotation={[0, 0, -Math.PI]} scale={[-1, -1, -1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_100.geometry}
                    material={nodes.Object_100.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={nodes.Object_26.material}
                />
              </group>
              <group
                position={[419.97, 627.25, -665.85]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.83, -0.97, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={nodes.Object_120.material}
                />
              </group>
              <group
                position={[419.97, 627.25, -665.85]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.83, -0.97, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={nodes.Object_122.material}
                />
              </group>
              <group
                position={[419.97, 627.25, -665.85]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.83, -0.97, -1]}>
                <group position={[45.73, 238.87, -122.5]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_116.geometry}
                    material={nodes.Object_116.material}
                  />
                </group>
                <group position={[45.73, 238.87, -59.06]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_118.geometry}
                    material={nodes.Object_118.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={nodes.Object_114.material}
                />
              </group>
              <group
                position={[256.28, 627.25, -316.1]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={nodes.Object_126.material}
                />
              </group>
              <group
                position={[256.28, 627.25, -316.1]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={nodes.Object_128.material}
                />
              </group>
              <group
                position={[256.28, 627.25, -316.1]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={nodes.Object_130.material}
                />
              </group>
              <group
                position={[256.28, 627.25, -316.1]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={nodes.Object_132.material}
                />
              </group>
              <group
                position={[256.28, 627.25, -316.1]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials['deur.002']}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={nodes.Object_210.material}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={nodes.Object_212.material}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={nodes.Object_214.material}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={nodes.Object_216.material}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={nodes.Object_218.material}
                />
              </group>
              <group
                position={[866.47, 627.25, -22.77]}
                rotation={[-Math.PI, 1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <group position={[-25.69, 474.59, -332.58]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_138.geometry}
                    material={nodes.Object_138.material}
                  />
                </group>
                <group position={[-25.69, 474.59, -332.58]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_140.geometry}
                    material={nodes.Object_140.material}
                  />
                </group>
                <group position={[-25.69, 474.59, -332.58]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_142.geometry}
                    material={nodes.Object_142.material}
                  />
                </group>
                <group position={[-25.69, 474.59, -332.58]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_144.geometry}
                    material={nodes.Object_144.material}
                  />
                </group>
                <group position={[-25.69, 474.59, -332.58]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_136.geometry}
                    material={nodes.Object_136.material}
                  />
                </group>
                <group position={[-227.65, 474.59, -462.54]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_148.geometry}
                    material={nodes.Object_148.material}
                  />
                </group>
                <group position={[-227.65, 474.59, -462.54]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_150.geometry}
                    material={nodes.Object_150.material}
                  />
                </group>
                <group position={[-227.65, 474.59, -462.54]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_152.geometry}
                    material={nodes.Object_152.material}
                  />
                </group>
                <group position={[-227.65, 474.59, -462.54]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_154.geometry}
                    material={nodes.Object_154.material}
                  />
                </group>
                <group position={[-227.65, 474.59, -462.54]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_146.geometry}
                    material={nodes.Object_146.material}
                  />
                </group>
                <group position={[-425.3, 474.59, -589.73]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_158.geometry}
                    material={nodes.Object_158.material}
                  />
                </group>
                <group position={[-425.3, 474.59, -589.73]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_160.geometry}
                    material={nodes.Object_160.material}
                  />
                </group>
                <group position={[-425.3, 474.59, -589.73]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_162.geometry}
                    material={nodes.Object_162.material}
                  />
                </group>
                <group position={[-425.3, 474.59, -589.73]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_164.geometry}
                    material={nodes.Object_164.material}
                  />
                </group>
                <group position={[-425.3, 474.59, -589.73]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_156.geometry}
                    material={nodes.Object_156.material}
                  />
                </group>
                <group
                  position={[-758.49, 0, -488.09]}
                  rotation={[0, 1, Math.PI]}
                  scale={[-0.97, -1, -1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_166.geometry}
                    material={nodes.Object_166.material}
                  />
                </group>
                <group position={[-16.55, 0, -10.65]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_168.geometry}
                    material={nodes.Object_168.material}
                  />
                </group>
                <group position={[-100.12, 397.08, -463.26]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_172.geometry}
                    material={nodes.Object_172.material}
                  />
                </group>
                <group position={[-100.12, 397.08, -463.26]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_174.geometry}
                    material={nodes.Object_174.material}
                  />
                </group>
                <group position={[-100.12, 397.08, -463.26]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_176.geometry}
                    material={nodes.Object_176.material}
                  />
                </group>
                <group position={[-100.12, 397.08, -463.26]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_178.geometry}
                    material={nodes.Object_178.material}
                  />
                </group>
                <group position={[-100.12, 397.08, -463.26]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_170.geometry}
                    material={nodes.Object_170.material}
                  />
                </group>
                <group position={[116.74, 397.08, -323.71]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_182.geometry}
                    material={nodes.Object_182.material}
                  />
                </group>
                <group position={[116.74, 397.08, -323.71]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_184.geometry}
                    material={nodes.Object_184.material}
                  />
                </group>
                <group position={[116.74, 397.08, -323.71]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_186.geometry}
                    material={nodes.Object_186.material}
                  />
                </group>
                <group position={[116.74, 397.08, -323.71]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_188.geometry}
                    material={nodes.Object_188.material}
                  />
                </group>
                <group position={[116.74, 397.08, -323.71]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_180.geometry}
                    material={nodes.Object_180.material}
                  />
                </group>
                <group position={[-274.92, 397.08, -575.75]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_192.geometry}
                    material={nodes.Object_192.material}
                  />
                </group>
                <group position={[-274.92, 397.08, -575.75]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_194.geometry}
                    material={nodes.Object_194.material}
                  />
                </group>
                <group position={[-274.92, 397.08, -575.75]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_196.geometry}
                    material={nodes.Object_196.material}
                  />
                </group>
                <group position={[-274.92, 397.08, -575.75]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_198.geometry}
                    material={nodes.Object_198.material}
                  />
                </group>
                <group position={[-274.92, 397.08, -575.75]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_190.geometry}
                    material={nodes.Object_190.material}
                  />
                </group>
                <group position={[-486.48, 397.08, -711.88]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_202.geometry}
                    material={nodes.Object_202.material}
                  />
                </group>
                <group position={[-486.48, 397.08, -711.88]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_204.geometry}
                    material={nodes.Object_204.material}
                  />
                </group>
                <group position={[-486.48, 397.08, -711.88]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_206.geometry}
                    material={nodes.Object_206.material}
                  />
                </group>
                <group position={[-486.48, 397.08, -711.88]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_208.geometry}
                    material={nodes.Object_208.material}
                  />
                </group>
                <group position={[-486.48, 397.08, -711.88]} rotation={[0, 1, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_200.geometry}
                    material={nodes.Object_200.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={nodes.Object_134.material}
                />
              </group>
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_497.geometry}
                material={nodes.Object_497.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_499.geometry}
                material={nodes.Object_499.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_501.geometry}
                material={nodes.Object_501.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_503.geometry}
                material={materials['auto_107.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_505.geometry}
                material={materials['auto_106.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_507.geometry}
                material={materials['auto_104.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_509.geometry}
                material={materials['auto_105.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_511.geometry}
                material={nodes.Object_511.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_513.geometry}
                material={nodes.Object_513.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_515.geometry}
                material={nodes.Object_515.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_517.geometry}
                material={nodes.Object_517.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_519.geometry}
                material={nodes.Object_519.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_521.geometry}
                material={nodes.Object_521.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_523.geometry}
                material={nodes.Object_523.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_525.geometry}
                material={nodes.Object_525.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_527.geometry}
                material={nodes.Object_527.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_529.geometry}
                material={nodes.Object_529.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_531.geometry}
                material={nodes.Object_531.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_533.geometry}
                material={materials['auto_100.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_535.geometry}
                material={nodes.Object_535.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_537.geometry}
                material={nodes.Object_537.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_539.geometry}
                material={nodes.Object_539.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_541.geometry}
                material={materials['auto_102.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_543.geometry}
                material={nodes.Object_543.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_545.geometry}
                material={nodes.Object_545.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_547.geometry}
                material={nodes.Object_547.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_549.geometry}
                material={nodes.Object_549.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_551.geometry}
                material={nodes.Object_551.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_553.geometry}
                material={nodes.Object_553.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_555.geometry}
                material={nodes.Object_555.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_557.geometry}
                material={nodes.Object_557.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_559.geometry}
                material={materials['auto_112.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_561.geometry}
                material={nodes.Object_561.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_563.geometry}
                material={nodes.Object_563.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_565.geometry}
                material={materials['auto_113.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_567.geometry}
                material={materials['auto_110.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_569.geometry}
                material={materials['auto_109.002']}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_571.geometry}
                material={nodes.Object_571.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_573.geometry}
                material={nodes.Object_573.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_575.geometry}
                material={nodes.Object_575.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_577.geometry}
                material={nodes.Object_577.material}
              />
            </group>
            <group position={[340.67, 1540.22, 68.9]} rotation={[0, 0, -Math.PI]}>
              <group
                position={[1417.2, 1540.22, -2421.71]}
                rotation={[0, 1.06, 0]}
                scale={[-0.75, -1.47, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={nodes.Object_222.material}
                />
              </group>
              <group position={[1549.53, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={nodes.Object_226.material}
                />
              </group>
              <group position={[1549.53, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={nodes.Object_228.material}
                />
              </group>
              <group position={[1549.53, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={nodes.Object_230.material}
                />
              </group>
              <group position={[1549.53, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={nodes.Object_224.material}
                />
              </group>
              <group
                position={[1010.71, 1540.22, -2213.8]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.75, -1.47, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={nodes.Object_232.material}
                />
              </group>
              <group position={[1541.61, 1540.22, -2272.46]} scale={[-0.75, -1.47, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={nodes.Object_234.material}
                />
              </group>
              <group position={[1323.03, 1267.1, -23.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={nodes.Object_236.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1411.94]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={nodes.Object_238.material}
                />
              </group>
              <group position={[1493.5, 1267.1, -23.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={nodes.Object_240.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -879.77]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={nodes.Object_242.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1204.91]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={nodes.Object_246.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1204.91]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={nodes.Object_248.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1204.91]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={nodes.Object_244.material}
                />
              </group>
              <group position={[1212.91, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={nodes.Object_252.material}
                />
              </group>
              <group position={[1212.91, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={nodes.Object_254.material}
                />
              </group>
              <group position={[1212.91, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={nodes.Object_256.material}
                />
              </group>
              <group position={[1212.91, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={nodes.Object_250.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1678.03]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={nodes.Object_258.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -613.69]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={nodes.Object_260.material}
                />
              </group>
              <group position={[1048.74, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={nodes.Object_264.material}
                />
              </group>
              <group position={[1048.74, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={nodes.Object_266.material}
                />
              </group>
              <group position={[1048.74, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={nodes.Object_268.material}
                />
              </group>
              <group position={[1048.74, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={nodes.Object_262.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -347.61]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={nodes.Object_270.material}
                />
              </group>
              <group position={[1804.9, 1109.12, -238.58]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={nodes.Object_272.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -347.61]}
                rotation={[0, 1.57, 0]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={nodes.Object_276.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -347.61]}
                rotation={[0, 1.57, 0]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={nodes.Object_274.material}
                />
              </group>
              <group position={[1152.95, 1267.1, -23.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={nodes.Object_278.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={nodes.Object_282.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={nodes.Object_284.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={nodes.Object_286.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={nodes.Object_288.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={nodes.Object_290.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={nodes.Object_292.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={nodes.Object_294.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={nodes.Object_296.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={nodes.Object_298.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={nodes.Object_300.material}
                />
              </group>
              <group
                position={[1456.43, 981.46, -13.78]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.57, 0.43, 0.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={nodes.Object_280.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={nodes.Object_320.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={nodes.Object_322.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={nodes.Object_324.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={nodes.Object_326.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={nodes.Object_328.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={nodes.Object_330.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={nodes.Object_332.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  material={nodes.Object_334.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_336.geometry}
                  material={nodes.Object_336.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={nodes.Object_338.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={nodes.Object_340.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  material={nodes.Object_342.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_344.geometry}
                  material={nodes.Object_344.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={nodes.Object_346.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={nodes.Object_348.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  material={nodes.Object_350.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_352.geometry}
                  material={nodes.Object_352.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={nodes.Object_354.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={nodes.Object_356.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  material={nodes.Object_358.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359.geometry}
                  material={nodes.Object_359.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361.geometry}
                  material={nodes.Object_361.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363.geometry}
                  material={nodes.Object_363.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_365.geometry}
                  material={nodes.Object_365.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367.geometry}
                  material={nodes.Object_367.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369.geometry}
                  material={nodes.Object_369.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371.geometry}
                  material={nodes.Object_371.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373.geometry}
                  material={nodes.Object_373.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375.geometry}
                  material={nodes.Object_375.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377.geometry}
                  material={nodes.Object_377.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379.geometry}
                  material={nodes.Object_379.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381.geometry}
                  material={nodes.Object_381.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_383.geometry}
                  material={nodes.Object_383.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385.geometry}
                  material={nodes.Object_385.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_387.geometry}
                  material={nodes.Object_387.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_389.geometry}
                  material={nodes.Object_389.material}
                />
              </group>
              <group position={[1378.64, 785.5, -228.89]} rotation={[-Math.PI, 1.57, 0]}>
                <group position={[0, 0, -215.11]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_306.geometry}
                    material={nodes.Object_306.material}
                  />
                </group>
                <group position={[0, 0, -215.11]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_304.geometry}
                    material={nodes.Object_304.material}
                  />
                </group>
                <group position={[215.11, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_310.geometry}
                    material={nodes.Object_310.material}
                  />
                </group>
                <group position={[215.11, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_308.geometry}
                    material={nodes.Object_308.material}
                  />
                </group>
                <group rotation={[0, -1.57, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_314.geometry}
                    material={nodes.Object_314.material}
                  />
                </group>
                <group rotation={[0, -1.57, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_312.geometry}
                    material={nodes.Object_312.material}
                  />
                </group>
                <group position={[215.11, 0, -215.11]} rotation={[0, 1.57, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_318.geometry}
                    material={nodes.Object_318.material}
                  />
                </group>
                <group position={[215.11, 0, -215.11]} rotation={[0, 1.57, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_316.geometry}
                    material={nodes.Object_316.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={nodes.Object_302.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -347.61]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_393.geometry}
                  material={nodes.Object_393.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -347.61]} rotation={[-Math.PI, 1.57, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_391.geometry}
                  material={nodes.Object_391.material}
                />
              </group>
              <group position={[1389.29, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_397.geometry}
                  material={nodes.Object_397.material}
                />
              </group>
              <group position={[1389.29, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_399.geometry}
                  material={nodes.Object_399.material}
                />
              </group>
              <group position={[1389.29, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_401.geometry}
                  material={nodes.Object_401.material}
                />
              </group>
              <group position={[1389.29, 1480.75, -3.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_395.geometry}
                  material={nodes.Object_395.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -1145.86]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_403.geometry}
                  material={nodes.Object_403.material}
                />
              </group>
              <group position={[1777.34, 1540.22, -68.9]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_407.geometry}
                  material={nodes.Object_407.material}
                />
              </group>
              <group position={[1777.34, 1540.22, -68.9]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_409.geometry}
                  material={nodes.Object_409.material}
                />
              </group>
              <group position={[1777.34, 1540.22, -68.9]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_411.geometry}
                  material={nodes.Object_411.material}
                />
              </group>
              <group position={[1777.34, 1540.22, -68.9]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_405.geometry}
                  material={nodes.Object_405.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -406.66]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_415.geometry}
                  material={nodes.Object_415.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -406.66]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_417.geometry}
                  material={nodes.Object_417.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -406.66]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_413.geometry}
                  material={nodes.Object_413.material}
                />
              </group>
              <group
                position={[743.1, 1540.22, -1737.08]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_419.geometry}
                  material={nodes.Object_419.material}
                />
              </group>
              <group
                position={[1154.45, 1540.22, -2432.65]}
                rotation={[-Math.PI, 1.06, -Math.PI]}
                scale={[-0.75, -1.47, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_421.geometry}
                  material={nodes.Object_421.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -672.74]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_425.geometry}
                  material={nodes.Object_425.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -672.74]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_427.geometry}
                  material={nodes.Object_427.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -672.74]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_423.geometry}
                  material={nodes.Object_423.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -938.83]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_431.geometry}
                  material={nodes.Object_431.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -938.83]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_433.geometry}
                  material={nodes.Object_433.material}
                />
              </group>
              <group
                position={[743.09, 1540.22, -938.83]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_429.geometry}
                  material={nodes.Object_429.material}
                />
              </group>
              <group
                position={[743.1, 1540.22, -1471]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_437.geometry}
                  material={nodes.Object_437.material}
                />
              </group>
              <group
                position={[743.1, 1540.22, -1471]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_439.geometry}
                  material={nodes.Object_439.material}
                />
              </group>
              <group
                position={[743.1, 1540.22, -1471]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_441.geometry}
                  material={nodes.Object_441.material}
                />
              </group>
              <group
                position={[743.1, 1540.22, -1471]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_435.geometry}
                  material={nodes.Object_435.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -347.61]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_443.geometry}
                  material={nodes.Object_443.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1145.86]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_445.geometry}
                  material={nodes.Object_445.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1678.03]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_447.geometry}
                  material={nodes.Object_447.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1471]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_451.geometry}
                  material={nodes.Object_451.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1471]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_453.geometry}
                  material={nodes.Object_453.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1471]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_455.geometry}
                  material={nodes.Object_455.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1471]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_449.geometry}
                  material={nodes.Object_449.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1411.94]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_457.geometry}
                  material={nodes.Object_457.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1204.91]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_461.geometry}
                  material={nodes.Object_461.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1204.91]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_463.geometry}
                  material={nodes.Object_463.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1204.91]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_459.geometry}
                  material={nodes.Object_459.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -938.83]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_467.geometry}
                  material={nodes.Object_467.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -938.83]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_469.geometry}
                  material={nodes.Object_469.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -938.83]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_465.geometry}
                  material={nodes.Object_465.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -672.75]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_473.geometry}
                  material={nodes.Object_473.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -672.75]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_475.geometry}
                  material={nodes.Object_475.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -672.75]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_471.geometry}
                  material={nodes.Object_471.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -879.77]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_477.geometry}
                  material={nodes.Object_477.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -613.69]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_479.geometry}
                  material={nodes.Object_479.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -1737.08]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_481.geometry}
                  material={nodes.Object_481.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -406.66]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_485.geometry}
                  material={nodes.Object_485.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -406.66]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_487.geometry}
                  material={nodes.Object_487.material}
                />
              </group>
              <group position={[1804.9, 1540.22, -406.66]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_483.geometry}
                  material={nodes.Object_483.material}
                />
              </group>
              <group
                position={[774.86, 1540.22, -68.9]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_491.geometry}
                  material={nodes.Object_491.material}
                />
              </group>
              <group
                position={[774.86, 1540.22, -68.9]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_493.geometry}
                  material={nodes.Object_493.material}
                />
              </group>
              <group
                position={[774.86, 1540.22, -68.9]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_495.geometry}
                  material={nodes.Object_495.material}
                />
              </group>
              <group
                position={[774.86, 1540.22, -68.9]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_489.geometry}
                  material={nodes.Object_489.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_220.geometry}
                material={materials['auto_108.002']}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_589.geometry}
                material={nodes.Object_589.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_591.geometry}
                material={nodes.Object_591.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_593.geometry}
                material={nodes.Object_593.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_594.geometry}
                material={materials['auto_55_0.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_595.geometry}
                material={materials['auto_55_1.003']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_596.geometry}
                material={materials['auto_55_2.003']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_597.geometry}
                material={materials['auto_55_3.002']}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_599.geometry}
                material={nodes.Object_599.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_601.geometry}
                material={nodes.Object_601.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_603.geometry}
                material={nodes.Object_603.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_605.geometry}
                material={nodes.Object_605.material}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_607.geometry}
                material={materials['auto_177.002']}
              />
            </group>
            <group
              position={[5594.52, 415.08, 12.23]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <group
                position={[42.97, 39.37, -283.8]}
                rotation={[0, 0.76, 0]}
                scale={[-1.08, -1, -1.07]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_583.geometry}
                  material={nodes.Object_583.material}
                />
              </group>
              <group
                position={[42.97, 39.37, -283.8]}
                rotation={[0, 0.76, 0]}
                scale={[-1.08, -1, -1.07]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_581.geometry}
                  material={nodes.Object_581.material}
                />
              </group>
              <group
                position={[42.97, 39.37, -447.19]}
                rotation={[0, 0.76, 0]}
                scale={[-1.08, -1, -1.07]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_587.geometry}
                  material={nodes.Object_587.material}
                />
              </group>
              <group
                position={[42.97, 39.37, -447.19]}
                rotation={[0, 0.76, 0]}
                scale={[-1.08, -1, -1.07]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_585.geometry}
                  material={nodes.Object_585.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_579.geometry}
                material={nodes.Object_579.material}
              />
            </group>
            <group
              position={[6730.85, 664.57, 14.89]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_627.geometry}
                material={nodes.Object_627.material}
              />
            </group>
            <group
              position={[6730.85, 664.57, 14.89]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_629.geometry}
                material={nodes.Object_629.material}
              />
            </group>
            <group
              position={[6730.85, 664.57, 14.89]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_631.geometry}
                material={materials['auto_182.002']}
              />
            </group>
            <group
              position={[6730.85, 664.57, 14.89]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_633.geometry}
                material={materials['auto_183.002']}
              />
            </group>
            <group
              position={[6730.85, 664.57, 14.89]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <group
                position={[384.96, 490.83, -404.25]}
                rotation={[1.57, 0, 1.43]}
                scale={[-1.06, -1.03, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_611.geometry}
                  material={nodes.Object_611.material}
                />
              </group>
              <group
                position={[384.96, 365.24, -404.25]}
                rotation={[1.57, 0, 1.43]}
                scale={[-1.06, -1.03, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_613.geometry}
                  material={nodes.Object_613.material}
                />
              </group>
              <group
                position={[400.38, 365.24, -293.62]}
                rotation={[1.57, 0, 1.43]}
                scale={[-1.06, -1.03, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_615.geometry}
                  material={nodes.Object_615.material}
                />
              </group>
              <group
                position={[9.84, 217.45, 4.17]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1.03, -1, -1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_619.geometry}
                  material={nodes.Object_619.material}
                />
              </group>
              <group
                position={[9.84, 217.45, 4.17]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1.03, -1, -1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_621.geometry}
                  material={nodes.Object_621.material}
                />
              </group>
              <group
                position={[9.84, 217.45, 4.17]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1.03, -1, -1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_623.geometry}
                  material={nodes.Object_623.material}
                />
              </group>
              <group
                position={[9.84, 217.45, 4.17]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1.03, -1, -1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_625.geometry}
                  material={nodes.Object_625.material}
                />
              </group>
              <group
                position={[9.84, 217.45, 4.17]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-1.03, -1, -1.06]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_617.geometry}
                  material={nodes.Object_617.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_609.geometry}
                material={nodes.Object_609.material}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_637.geometry}
                material={materials['auto_218.002']}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_639.geometry}
                material={nodes.Object_639.material}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_641.geometry}
                material={materials['auto_219.002']}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_643.geometry}
                material={materials['auto_216.002']}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_645.geometry}
                material={nodes.Object_645.material}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_647.geometry}
                material={nodes.Object_647.material}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_649.geometry}
                material={materials['auto_217.002']}
              />
            </group>
            <group
              position={[4999.4, 446.54, 63.54]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_635.geometry}
                material={materials['auto_220.002']}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_743.geometry}
                material={nodes.Object_743.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_745.geometry}
                material={materials['auto_243.002']}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_747.geometry}
                material={nodes.Object_747.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_749.geometry}
                material={nodes.Object_749.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_751.geometry}
                material={nodes.Object_751.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_753.geometry}
                material={nodes.Object_753.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_755.geometry}
                material={nodes.Object_755.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_757.geometry}
                material={nodes.Object_757.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_759.geometry}
                material={nodes.Object_759.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_761.geometry}
                material={nodes.Object_761.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_763.geometry}
                material={nodes.Object_763.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_765.geometry}
                material={nodes.Object_765.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_767.geometry}
                material={nodes.Object_767.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_769.geometry}
                material={nodes.Object_769.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_771.geometry}
                material={nodes.Object_771.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_773.geometry}
                material={nodes.Object_773.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_775.geometry}
                material={nodes.Object_775.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_777.geometry}
                material={nodes.Object_777.material}
              />
            </group>
            <group
              position={[6038.71, 706.64, 29.95]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-1, -1, -1]}>
              <group
                position={[558.27, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_653.geometry}
                  material={nodes.Object_653.material}
                />
              </group>
              <group
                position={[11.81, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_655.geometry}
                  material={nodes.Object_655.material}
                />
              </group>
              <group
                position={[550.39, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_657.geometry}
                  material={nodes.Object_657.material}
                />
              </group>
              <group
                position={[213.8, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_659.geometry}
                  material={nodes.Object_659.material}
                />
              </group>
              <group
                position={[449.63, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_661.geometry}
                  material={nodes.Object_661.material}
                />
              </group>
              <group
                position={[113.41, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_663.geometry}
                  material={nodes.Object_663.material}
                />
              </group>
              <group
                position={[314.98, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_665.geometry}
                  material={nodes.Object_665.material}
                />
              </group>
              <group
                position={[180.33, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_667.geometry}
                  material={nodes.Object_667.material}
                />
              </group>
              <group
                position={[247.26, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_669.geometry}
                  material={nodes.Object_669.material}
                />
              </group>
              <group
                position={[483.48, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_671.geometry}
                  material={nodes.Object_671.material}
                />
              </group>
              <group
                position={[417.34, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_673.geometry}
                  material={nodes.Object_673.material}
                />
              </group>
              <group
                position={[281.12, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_675.geometry}
                  material={nodes.Object_675.material}
                />
              </group>
              <group
                position={[146.87, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_677.geometry}
                  material={nodes.Object_677.material}
                />
              </group>
              <group
                position={[348.84, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_679.geometry}
                  material={nodes.Object_679.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_683.geometry}
                  material={nodes.Object_683.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_685.geometry}
                  material={nodes.Object_685.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_687.geometry}
                  material={nodes.Object_687.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_689.geometry}
                  material={nodes.Object_689.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_691.geometry}
                  material={nodes.Object_691.material}
                />
              </group>
              <group position={[555.07, 150.56, -276.84]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_681.geometry}
                  material={nodes.Object_681.material}
                />
              </group>
              <group position={[11.81, 201.34, -27.56]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_693.geometry}
                  material={nodes.Object_693.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_697.geometry}
                  material={nodes.Object_697.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_699.geometry}
                  material={nodes.Object_699.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_701.geometry}
                  material={nodes.Object_701.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_703.geometry}
                  material={nodes.Object_703.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_705.geometry}
                  material={nodes.Object_705.material}
                />
              </group>
              <group position={[555.07, 150.56, -383.53]} scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_695.geometry}
                  material={nodes.Object_695.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_709.geometry}
                  material={nodes.Object_709.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_711.geometry}
                  material={nodes.Object_711.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_713.geometry}
                  material={nodes.Object_713.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_715.geometry}
                  material={nodes.Object_715.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_717.geometry}
                  material={nodes.Object_717.material}
                />
              </group>
              <group
                position={[38.27, 151.31, -286.03]}
                rotation={[-Math.PI, 0.1, -Math.PI]}
                scale={[-1, -1, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_707.geometry}
                  material={nodes.Object_707.material}
                />
              </group>
              <group
                position={[17.55, 152.79, -50.94]}
                rotation={[0, 0.78, 0]}
                scale={[-1, -0.97, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_725.geometry}
                  material={nodes.Object_725.material}
                />
              </group>
              <group
                position={[17.55, 152.79, -50.94]}
                rotation={[0, 0.78, 0]}
                scale={[-1, -0.97, -1]}>
                <group position={[2.07, 23.54, -0.47]} scale={[1.34, 1.32, 1.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_723.geometry}
                    material={nodes.Object_723.material}
                  />
                </group>
                <group position={[2.07, 23.54, -0.47]} scale={[1.34, 1.32, 1.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_721.geometry}
                    material={nodes.Object_721.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_719.geometry}
                  material={nodes.Object_719.material}
                />
              </group>
              <group
                position={[554.61, 152.79, -50.94]}
                rotation={[0, 0.78, 0]}
                scale={[-1, -0.97, -1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_733.geometry}
                  material={nodes.Object_733.material}
                />
              </group>
              <group
                position={[554.61, 152.79, -50.94]}
                rotation={[0, 0.78, 0]}
                scale={[-1, -0.97, -1]}>
                <group position={[2.07, 23.54, -0.47]} scale={[1.34, 1.32, 1.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_729.geometry}
                    material={nodes.Object_729.material}
                  />
                </group>
                <group position={[2.07, 23.54, -0.47]} scale={[1.34, 1.32, 1.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_731.geometry}
                    material={nodes.Object_731.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_727.geometry}
                  material={nodes.Object_727.material}
                />
              </group>
              <group
                position={[383.09, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_735.geometry}
                  material={nodes.Object_735.material}
                />
              </group>
              <group
                position={[46.48, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_737.geometry}
                  material={nodes.Object_737.material}
                />
              </group>
              <group
                position={[516.55, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_739.geometry}
                  material={nodes.Object_739.material}
                />
              </group>
              <group
                position={[80.33, 201.34, -27.56]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[-1, -1, -0.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_741.geometry}
                  material={nodes.Object_741.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_651.geometry}
                material={nodes.Object_651.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_889.geometry}
                material={materials['auto_207.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_891.geometry}
                material={nodes.Object_891.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_893.geometry}
                material={nodes.Object_893.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_895.geometry}
                material={nodes.Object_895.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_897.geometry}
                material={nodes.Object_897.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_899.geometry}
                material={materials['auto_201.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_901.geometry}
                material={nodes.Object_901.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_903.geometry}
                material={materials['auto_200.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_905.geometry}
                material={materials['auto_202.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_907.geometry}
                material={materials['auto_197.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_909.geometry}
                material={materials['auto_199.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_911.geometry}
                material={nodes.Object_911.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_913.geometry}
                material={materials['auto_203.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_915.geometry}
                material={nodes.Object_915.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_917.geometry}
                material={nodes.Object_917.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_919.geometry}
                material={nodes.Object_919.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_921.geometry}
                material={materials['auto_206.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_923.geometry}
                material={materials['auto_209.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_925.geometry}
                material={nodes.Object_925.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_926.geometry}
                material={nodes.Object_926.material}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_928.geometry}
                material={materials['auto_204.002']}
              />
            </group>
            <group position={[4699.89, 393.72, 10.26]} rotation={[0, 0, -Math.PI]}>
              <group position={[286.01, 285.51, -80.42]} rotation={[-1.57, 0, 3.08]}>
                <group
                  position={[37.17, 0, -27.61]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.71, 0.63, 0.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_833.geometry}
                    material={nodes.Object_833.material}
                  />
                </group>
                <group
                  position={[37.17, 0, -27.61]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.71, 0.63, 0.71]}>
                  <group
                    position={[14.37, 41.04, -17.05]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_785.geometry}
                      material={nodes.Object_785.material}
                    />
                  </group>
                  <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_787.geometry}
                      material={nodes.Object_787.material}
                    />
                  </group>
                  <group position={[0, 25.59, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_789.geometry}
                      material={nodes.Object_789.material}
                    />
                  </group>
                  <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_791.geometry}
                      material={nodes.Object_791.material}
                    />
                  </group>
                  <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_793.geometry}
                      material={nodes.Object_793.material}
                    />
                  </group>
                  <group
                    position={[12.11, 25.59, -34.95]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_795.geometry}
                      material={nodes.Object_795.material}
                    />
                  </group>
                  <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_797.geometry}
                      material={nodes.Object_797.material}
                    />
                  </group>
                  <group
                    position={[36.32, 25.59, -6.99]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_799.geometry}
                      material={nodes.Object_799.material}
                    />
                  </group>
                  <group position={[0, 0, -13.98]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_801.geometry}
                      material={nodes.Object_801.material}
                    />
                  </group>
                  <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_803.geometry}
                      material={nodes.Object_803.material}
                    />
                  </group>
                  <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_805.geometry}
                      material={nodes.Object_805.material}
                    />
                  </group>
                  <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_807.geometry}
                      material={nodes.Object_807.material}
                    />
                  </group>
                  <group position={[14.37, 41.04, -10.9]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_809.geometry}
                      material={nodes.Object_809.material}
                    />
                  </group>
                  <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_811.geometry}
                      material={nodes.Object_811.material}
                    />
                  </group>
                  <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_813.geometry}
                      material={nodes.Object_813.material}
                    />
                  </group>
                  <group position={[12.59, 35.93, -10.9]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_815.geometry}
                      material={nodes.Object_815.material}
                    />
                  </group>
                  <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_817.geometry}
                      material={nodes.Object_817.material}
                    />
                  </group>
                  <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_819.geometry}
                      material={nodes.Object_819.material}
                    />
                  </group>
                  <group
                    position={[15.25, 35.93, -18.59]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_821.geometry}
                      material={nodes.Object_821.material}
                    />
                  </group>
                  <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_823.geometry}
                      material={nodes.Object_823.material}
                    />
                  </group>
                  <group
                    position={[20.58, 35.93, -12.44]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_825.geometry}
                      material={nodes.Object_825.material}
                    />
                  </group>
                  <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_827.geometry}
                      material={nodes.Object_827.material}
                    />
                  </group>
                  <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_829.geometry}
                      material={nodes.Object_829.material}
                    />
                  </group>
                  <group
                    position={[19.69, 41.04, -13.98]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_831.geometry}
                      material={nodes.Object_831.material}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_783.geometry}
                    material={nodes.Object_783.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_781.geometry}
                  material={nodes.Object_781.material}
                />
              </group>
              <group position={[278.46, 285.51, -509.49]} rotation={[-1.57, 0, 3.08]}>
                <group
                  position={[37.17, 0, -27.61]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.71, 0.63, 0.71]}>
                  <group
                    position={[14.37, 41.04, -17.05]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_839.geometry}
                      material={nodes.Object_839.material}
                    />
                  </group>
                  <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_841.geometry}
                      material={nodes.Object_841.material}
                    />
                  </group>
                  <group position={[0, 25.59, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_843.geometry}
                      material={nodes.Object_843.material}
                    />
                  </group>
                  <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_845.geometry}
                      material={nodes.Object_845.material}
                    />
                  </group>
                  <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_847.geometry}
                      material={nodes.Object_847.material}
                    />
                  </group>
                  <group
                    position={[12.11, 25.59, -34.95]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_849.geometry}
                      material={nodes.Object_849.material}
                    />
                  </group>
                  <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_851.geometry}
                      material={nodes.Object_851.material}
                    />
                  </group>
                  <group
                    position={[36.32, 25.59, -6.99]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_853.geometry}
                      material={nodes.Object_853.material}
                    />
                  </group>
                  <group position={[0, 0, -13.98]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_855.geometry}
                      material={nodes.Object_855.material}
                    />
                  </group>
                  <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_857.geometry}
                      material={nodes.Object_857.material}
                    />
                  </group>
                  <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_859.geometry}
                      material={nodes.Object_859.material}
                    />
                  </group>
                  <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_861.geometry}
                      material={nodes.Object_861.material}
                    />
                  </group>
                  <group position={[14.37, 41.04, -10.9]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_863.geometry}
                      material={nodes.Object_863.material}
                    />
                  </group>
                  <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_865.geometry}
                      material={nodes.Object_865.material}
                    />
                  </group>
                  <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_867.geometry}
                      material={nodes.Object_867.material}
                    />
                  </group>
                  <group position={[12.59, 35.93, -10.9]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_869.geometry}
                      material={nodes.Object_869.material}
                    />
                  </group>
                  <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_871.geometry}
                      material={nodes.Object_871.material}
                    />
                  </group>
                  <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_873.geometry}
                      material={nodes.Object_873.material}
                    />
                  </group>
                  <group
                    position={[15.25, 35.93, -18.59]}
                    rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_875.geometry}
                      material={nodes.Object_875.material}
                    />
                  </group>
                  <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_877.geometry}
                      material={nodes.Object_877.material}
                    />
                  </group>
                  <group
                    position={[20.58, 35.93, -12.44]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_879.geometry}
                      material={nodes.Object_879.material}
                    />
                  </group>
                  <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_881.geometry}
                      material={nodes.Object_881.material}
                    />
                  </group>
                  <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_883.geometry}
                      material={nodes.Object_883.material}
                    />
                  </group>
                  <group
                    position={[19.69, 41.04, -13.98]}
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_885.geometry}
                      material={nodes.Object_885.material}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_837.geometry}
                    material={nodes.Object_837.material}
                  />
                </group>
                <group
                  position={[37.17, 0, -27.61]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.71, 0.63, 0.71]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_887.geometry}
                    material={nodes.Object_887.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_835.geometry}
                  material={nodes.Object_835.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_779.geometry}
                material={materials['auto_194.002']}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_932.geometry}
                material={nodes.Object_932.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_934.geometry}
                material={nodes.Object_934.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_936.geometry}
                material={nodes.Object_936.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_938.geometry}
                material={nodes.Object_938.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_940.geometry}
                material={nodes.Object_940.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_942.geometry}
                material={nodes.Object_942.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_944.geometry}
                material={nodes.Object_944.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_946.geometry}
                material={nodes.Object_946.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_948.geometry}
                material={nodes.Object_948.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_950.geometry}
                material={nodes.Object_950.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_952.geometry}
                material={nodes.Object_952.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_954.geometry}
                material={nodes.Object_954.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_956.geometry}
                material={nodes.Object_956.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_958.geometry}
                material={nodes.Object_958.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_960.geometry}
                material={nodes.Object_960.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_962.geometry}
                material={nodes.Object_962.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_964.geometry}
                material={nodes.Object_964.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_966.geometry}
                material={nodes.Object_966.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_968.geometry}
                material={nodes.Object_968.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_970.geometry}
                material={nodes.Object_970.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_972.geometry}
                material={nodes.Object_972.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_974.geometry}
                material={nodes.Object_974.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_976.geometry}
                material={nodes.Object_976.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_978.geometry}
                material={nodes.Object_978.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_980.geometry}
                material={nodes.Object_980.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_982.geometry}
                material={nodes.Object_982.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_984.geometry}
                material={nodes.Object_984.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_986.geometry}
                material={nodes.Object_986.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_988.geometry}
                material={nodes.Object_988.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_990.geometry}
                material={nodes.Object_990.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_992.geometry}
                material={nodes.Object_992.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_994.geometry}
                material={nodes.Object_994.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_996.geometry}
                material={nodes.Object_996.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_998.geometry}
                material={nodes.Object_998.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1000.geometry}
                material={nodes.Object_1000.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1002.geometry}
                material={nodes.Object_1002.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1004.geometry}
                material={nodes.Object_1004.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1006.geometry}
                material={nodes.Object_1006.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1008.geometry}
                material={nodes.Object_1008.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1010.geometry}
                material={nodes.Object_1010.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1012.geometry}
                material={nodes.Object_1012.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1014.geometry}
                material={nodes.Object_1014.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1016.geometry}
                material={nodes.Object_1016.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1018.geometry}
                material={nodes.Object_1018.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1020.geometry}
                material={nodes.Object_1020.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1022.geometry}
                material={nodes.Object_1022.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1024.geometry}
                material={nodes.Object_1024.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1026.geometry}
                material={nodes.Object_1026.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1028.geometry}
                material={nodes.Object_1028.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1030.geometry}
                material={nodes.Object_1030.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1032.geometry}
                material={nodes.Object_1032.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1034.geometry}
                material={nodes.Object_1034.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1036.geometry}
                material={nodes.Object_1036.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1038.geometry}
                material={nodes.Object_1038.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1040.geometry}
                material={nodes.Object_1040.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1042.geometry}
                material={nodes.Object_1042.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1044.geometry}
                material={nodes.Object_1044.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1046.geometry}
                material={nodes.Object_1046.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1048.geometry}
                material={nodes.Object_1048.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1050.geometry}
                material={nodes.Object_1050.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1052.geometry}
                material={nodes.Object_1052.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1054.geometry}
                material={nodes.Object_1054.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1056.geometry}
                material={nodes.Object_1056.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1058.geometry}
                material={nodes.Object_1058.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1060.geometry}
                material={nodes.Object_1060.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1062.geometry}
                material={nodes.Object_1062.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1064.geometry}
                material={nodes.Object_1064.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1066.geometry}
                material={nodes.Object_1066.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1068.geometry}
                material={nodes.Object_1068.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1070.geometry}
                material={nodes.Object_1070.material}
              />
            </group>
            <group position={[1432.01, -238.01, 104.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_930.geometry}
                material={nodes.Object_930.material}
              />
            </group>
            <group position={[-120.94, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1178.geometry}
                material={nodes.Object_1178.material}
              />
            </group>
            <group position={[-120.94, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1180.geometry}
                material={nodes.Object_1180.material}
              />
            </group>
            <group position={[-120.94, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1182.geometry}
                material={nodes.Object_1182.material}
              />
            </group>
            <group position={[-120.94, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1184.geometry}
                material={nodes.Object_1184.material}
              />
            </group>
            <group position={[-120.94, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <group position={[-17.03, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1124.geometry}
                  material={nodes.Object_1124.material}
                />
              </group>
              <group position={[-17.03, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1076.geometry}
                    material={nodes.Object_1076.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1078.geometry}
                    material={nodes.Object_1078.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1080.geometry}
                    material={nodes.Object_1080.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1082.geometry}
                    material={nodes.Object_1082.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1084.geometry}
                    material={nodes.Object_1084.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1086.geometry}
                    material={nodes.Object_1086.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1088.geometry}
                    material={nodes.Object_1088.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1090.geometry}
                    material={nodes.Object_1090.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1092.geometry}
                    material={nodes.Object_1092.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1094.geometry}
                    material={nodes.Object_1094.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1096.geometry}
                    material={nodes.Object_1096.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1098.geometry}
                    material={nodes.Object_1098.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1100.geometry}
                    material={nodes.Object_1100.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1102.geometry}
                    material={nodes.Object_1102.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1104.geometry}
                    material={nodes.Object_1104.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1106.geometry}
                    material={nodes.Object_1106.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1108.geometry}
                    material={nodes.Object_1108.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1110.geometry}
                    material={nodes.Object_1110.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1112.geometry}
                    material={nodes.Object_1112.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1114.geometry}
                    material={nodes.Object_1114.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1116.geometry}
                    material={nodes.Object_1116.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1118.geometry}
                    material={nodes.Object_1118.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1120.geometry}
                    material={nodes.Object_1120.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1122.geometry}
                    material={nodes.Object_1122.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1074.geometry}
                  material={nodes.Object_1074.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1176.geometry}
                  material={nodes.Object_1176.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1128.geometry}
                    material={nodes.Object_1128.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1130.geometry}
                    material={nodes.Object_1130.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1132.geometry}
                    material={nodes.Object_1132.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1134.geometry}
                    material={nodes.Object_1134.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1136.geometry}
                    material={nodes.Object_1136.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1138.geometry}
                    material={nodes.Object_1138.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1140.geometry}
                    material={nodes.Object_1140.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1142.geometry}
                    material={nodes.Object_1142.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1144.geometry}
                    material={nodes.Object_1144.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1146.geometry}
                    material={nodes.Object_1146.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1148.geometry}
                    material={nodes.Object_1148.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1150.geometry}
                    material={nodes.Object_1150.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1152.geometry}
                    material={nodes.Object_1152.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1154.geometry}
                    material={nodes.Object_1154.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1156.geometry}
                    material={nodes.Object_1156.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1158.geometry}
                    material={nodes.Object_1158.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1160.geometry}
                    material={nodes.Object_1160.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1162.geometry}
                    material={nodes.Object_1162.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1164.geometry}
                    material={nodes.Object_1164.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1166.geometry}
                    material={nodes.Object_1166.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1168.geometry}
                    material={nodes.Object_1168.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1170.geometry}
                    material={nodes.Object_1170.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1172.geometry}
                    material={nodes.Object_1172.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1174.geometry}
                    material={nodes.Object_1174.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1126.geometry}
                  material={nodes.Object_1126.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1072.geometry}
                material={nodes.Object_1072.material}
              />
            </group>
            <group position={[-1714.25, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1292.geometry}
                material={nodes.Object_1292.material}
              />
            </group>
            <group position={[-1714.25, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1294.geometry}
                material={nodes.Object_1294.material}
              />
            </group>
            <group position={[-1714.25, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1296.geometry}
                material={nodes.Object_1296.material}
              />
            </group>
            <group position={[-1714.25, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1298.geometry}
                material={nodes.Object_1298.material}
              />
            </group>
            <group position={[-1714.25, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <group position={[-17.03, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1190.geometry}
                    material={nodes.Object_1190.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1192.geometry}
                    material={nodes.Object_1192.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1194.geometry}
                    material={nodes.Object_1194.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1196.geometry}
                    material={nodes.Object_1196.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1198.geometry}
                    material={nodes.Object_1198.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1200.geometry}
                    material={nodes.Object_1200.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1202.geometry}
                    material={nodes.Object_1202.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1204.geometry}
                    material={nodes.Object_1204.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1206.geometry}
                    material={nodes.Object_1206.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1208.geometry}
                    material={nodes.Object_1208.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1210.geometry}
                    material={nodes.Object_1210.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1212.geometry}
                    material={nodes.Object_1212.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1214.geometry}
                    material={nodes.Object_1214.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1216.geometry}
                    material={nodes.Object_1216.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1218.geometry}
                    material={nodes.Object_1218.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1220.geometry}
                    material={nodes.Object_1220.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1222.geometry}
                    material={nodes.Object_1222.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1224.geometry}
                    material={nodes.Object_1224.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1226.geometry}
                    material={nodes.Object_1226.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1228.geometry}
                    material={nodes.Object_1228.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1230.geometry}
                    material={nodes.Object_1230.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1232.geometry}
                    material={nodes.Object_1232.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1234.geometry}
                    material={nodes.Object_1234.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1236.geometry}
                    material={nodes.Object_1236.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1188.geometry}
                  material={nodes.Object_1188.material}
                />
              </group>
              <group position={[-17.03, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1238.geometry}
                  material={nodes.Object_1238.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1242.geometry}
                    material={nodes.Object_1242.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1244.geometry}
                    material={nodes.Object_1244.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1246.geometry}
                    material={nodes.Object_1246.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1248.geometry}
                    material={nodes.Object_1248.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1250.geometry}
                    material={nodes.Object_1250.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1252.geometry}
                    material={nodes.Object_1252.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1254.geometry}
                    material={nodes.Object_1254.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1256.geometry}
                    material={nodes.Object_1256.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1258.geometry}
                    material={nodes.Object_1258.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1260.geometry}
                    material={nodes.Object_1260.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1262.geometry}
                    material={nodes.Object_1262.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1264.geometry}
                    material={nodes.Object_1264.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1266.geometry}
                    material={nodes.Object_1266.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1268.geometry}
                    material={nodes.Object_1268.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1270.geometry}
                    material={nodes.Object_1270.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1272.geometry}
                    material={nodes.Object_1272.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1274.geometry}
                    material={nodes.Object_1274.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1276.geometry}
                    material={nodes.Object_1276.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1278.geometry}
                    material={nodes.Object_1278.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1280.geometry}
                    material={nodes.Object_1280.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1282.geometry}
                    material={nodes.Object_1282.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1284.geometry}
                    material={nodes.Object_1284.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1286.geometry}
                    material={nodes.Object_1286.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1288.geometry}
                    material={nodes.Object_1288.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1240.geometry}
                  material={nodes.Object_1240.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1290.geometry}
                  material={nodes.Object_1290.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1186.geometry}
                material={nodes.Object_1186.material}
              />
            </group>
            <group position={[7451.11, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1406.geometry}
                material={nodes.Object_1406.material}
              />
            </group>
            <group position={[7451.11, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1408.geometry}
                material={nodes.Object_1408.material}
              />
            </group>
            <group position={[7451.11, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1410.geometry}
                material={nodes.Object_1410.material}
              />
            </group>
            <group position={[7451.11, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1412.geometry}
                material={nodes.Object_1412.material}
              />
            </group>
            <group position={[7451.11, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <group position={[-17.03, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1304.geometry}
                    material={nodes.Object_1304.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1306.geometry}
                    material={nodes.Object_1306.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1308.geometry}
                    material={nodes.Object_1308.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1310.geometry}
                    material={nodes.Object_1310.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1312.geometry}
                    material={nodes.Object_1312.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1314.geometry}
                    material={nodes.Object_1314.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1316.geometry}
                    material={nodes.Object_1316.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1318.geometry}
                    material={nodes.Object_1318.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1320.geometry}
                    material={nodes.Object_1320.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1322.geometry}
                    material={nodes.Object_1322.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1324.geometry}
                    material={nodes.Object_1324.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1326.geometry}
                    material={nodes.Object_1326.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1328.geometry}
                    material={nodes.Object_1328.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1330.geometry}
                    material={nodes.Object_1330.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1332.geometry}
                    material={nodes.Object_1332.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1334.geometry}
                    material={nodes.Object_1334.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1336.geometry}
                    material={nodes.Object_1336.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1338.geometry}
                    material={nodes.Object_1338.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1340.geometry}
                    material={nodes.Object_1340.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1342.geometry}
                    material={nodes.Object_1342.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1344.geometry}
                    material={nodes.Object_1344.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1346.geometry}
                    material={nodes.Object_1346.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1348.geometry}
                    material={nodes.Object_1348.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1350.geometry}
                    material={nodes.Object_1350.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1302.geometry}
                  material={nodes.Object_1302.material}
                />
              </group>
              <group position={[-17.03, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1352.geometry}
                  material={nodes.Object_1352.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1356.geometry}
                    material={nodes.Object_1356.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1358.geometry}
                    material={nodes.Object_1358.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1360.geometry}
                    material={nodes.Object_1360.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1362.geometry}
                    material={nodes.Object_1362.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1364.geometry}
                    material={nodes.Object_1364.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1366.geometry}
                    material={nodes.Object_1366.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1368.geometry}
                    material={nodes.Object_1368.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1370.geometry}
                    material={nodes.Object_1370.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1372.geometry}
                    material={nodes.Object_1372.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1374.geometry}
                    material={nodes.Object_1374.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1376.geometry}
                    material={nodes.Object_1376.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1378.geometry}
                    material={nodes.Object_1378.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1380.geometry}
                    material={nodes.Object_1380.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1382.geometry}
                    material={nodes.Object_1382.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1384.geometry}
                    material={nodes.Object_1384.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1386.geometry}
                    material={nodes.Object_1386.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1388.geometry}
                    material={nodes.Object_1388.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1390.geometry}
                    material={nodes.Object_1390.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1392.geometry}
                    material={nodes.Object_1392.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1394.geometry}
                    material={nodes.Object_1394.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1396.geometry}
                    material={nodes.Object_1396.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1398.geometry}
                    material={nodes.Object_1398.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1400.geometry}
                    material={nodes.Object_1400.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1402.geometry}
                    material={nodes.Object_1402.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1354.geometry}
                  material={nodes.Object_1354.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1404.geometry}
                  material={nodes.Object_1404.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1300.geometry}
                material={nodes.Object_1300.material}
              />
            </group>
            <group position={[1342.84, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1520.geometry}
                material={nodes.Object_1520.material}
              />
            </group>
            <group position={[1342.84, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1522.geometry}
                material={nodes.Object_1522.material}
              />
            </group>
            <group position={[1342.84, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1524.geometry}
                material={nodes.Object_1524.material}
              />
            </group>
            <group position={[1342.84, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1526.geometry}
                material={nodes.Object_1526.material}
              />
            </group>
            <group position={[1342.84, -45.99, -190.64]} rotation={[Math.PI, 0, Math.PI]}>
              <group position={[-17.03, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1418.geometry}
                    material={nodes.Object_1418.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1420.geometry}
                    material={nodes.Object_1420.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1422.geometry}
                    material={nodes.Object_1422.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1424.geometry}
                    material={nodes.Object_1424.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1426.geometry}
                    material={nodes.Object_1426.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1428.geometry}
                    material={nodes.Object_1428.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1430.geometry}
                    material={nodes.Object_1430.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1432.geometry}
                    material={nodes.Object_1432.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1434.geometry}
                    material={nodes.Object_1434.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1436.geometry}
                    material={nodes.Object_1436.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1438.geometry}
                    material={nodes.Object_1438.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1440.geometry}
                    material={nodes.Object_1440.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1442.geometry}
                    material={nodes.Object_1442.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1444.geometry}
                    material={nodes.Object_1444.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1446.geometry}
                    material={nodes.Object_1446.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1448.geometry}
                    material={nodes.Object_1448.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1450.geometry}
                    material={nodes.Object_1450.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1452.geometry}
                    material={nodes.Object_1452.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1454.geometry}
                    material={nodes.Object_1454.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1456.geometry}
                    material={nodes.Object_1456.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1458.geometry}
                    material={nodes.Object_1458.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1460.geometry}
                    material={nodes.Object_1460.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1462.geometry}
                    material={nodes.Object_1462.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1464.geometry}
                    material={nodes.Object_1464.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1416.geometry}
                  material={nodes.Object_1416.material}
                />
              </group>
              <group position={[-17.03, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1466.geometry}
                  material={nodes.Object_1466.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <group
                  position={[14.37, 41.04, -17.05]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1470.geometry}
                    material={nodes.Object_1470.material}
                  />
                </group>
                <group position={[8.07, 0, -27.96]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1472.geometry}
                    material={nodes.Object_1472.material}
                  />
                </group>
                <group position={[0, 25.59, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1474.geometry}
                    material={nodes.Object_1474.material}
                  />
                </group>
                <group position={[20.18, 25.59, 6.99]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1476.geometry}
                    material={nodes.Object_1476.material}
                  />
                </group>
                <group position={[-4.04, 25.59, -20.97]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1478.geometry}
                    material={nodes.Object_1478.material}
                  />
                </group>
                <group
                  position={[12.11, 25.59, -34.95]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1480.geometry}
                    material={nodes.Object_1480.material}
                  />
                </group>
                <group position={[32.28, 25.59, -27.96]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1482.geometry}
                    material={nodes.Object_1482.material}
                  />
                </group>
                <group
                  position={[36.32, 25.59, -6.99]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1484.geometry}
                    material={nodes.Object_1484.material}
                  />
                </group>
                <group position={[0, 0, -13.98]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1486.geometry}
                    material={nodes.Object_1486.material}
                  />
                </group>
                <group position={[8.07, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1488.geometry}
                    material={nodes.Object_1488.material}
                  />
                </group>
                <group position={[24.21, 0, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1490.geometry}
                    material={nodes.Object_1490.material}
                  />
                </group>
                <group position={[32.28, 0, -13.98]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1492.geometry}
                    material={nodes.Object_1492.material}
                  />
                </group>
                <group position={[14.37, 41.04, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1494.geometry}
                    material={nodes.Object_1494.material}
                  />
                </group>
                <group position={[24.21, 0, -27.96]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1496.geometry}
                    material={nodes.Object_1496.material}
                  />
                </group>
                <group position={[17.92, 41.04, -10.9]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1498.geometry}
                    material={nodes.Object_1498.material}
                  />
                </group>
                <group position={[12.59, 35.93, -10.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1500.geometry}
                    material={nodes.Object_1500.material}
                  />
                </group>
                <group position={[11.7, 35.93, -15.52]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1502.geometry}
                    material={nodes.Object_1502.material}
                  />
                </group>
                <group position={[19.69, 35.93, -17.05]} rotation={[Math.PI, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1504.geometry}
                    material={nodes.Object_1504.material}
                  />
                </group>
                <group
                  position={[15.25, 35.93, -18.59]}
                  rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1506.geometry}
                    material={nodes.Object_1506.material}
                  />
                </group>
                <group position={[17.03, 35.93, -9.37]} rotation={[0, Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1508.geometry}
                    material={nodes.Object_1508.material}
                  />
                </group>
                <group
                  position={[20.58, 35.93, -12.44]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1510.geometry}
                    material={nodes.Object_1510.material}
                  />
                </group>
                <group position={[17.92, 41.04, -17.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1512.geometry}
                    material={nodes.Object_1512.material}
                  />
                </group>
                <group position={[12.59, 41.04, -13.98]} rotation={[0, -Math.PI / 3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1514.geometry}
                    material={nodes.Object_1514.material}
                  />
                </group>
                <group
                  position={[19.69, 41.04, -13.98]}
                  rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1516.geometry}
                    material={nodes.Object_1516.material}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1468.geometry}
                  material={nodes.Object_1468.material}
                />
              </group>
              <group position={[93.6, 263.9, -156.09]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1518.geometry}
                  material={nodes.Object_1518.material}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1414.geometry}
                material={nodes.Object_1414.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/eurotown.gltf')
