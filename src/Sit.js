/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sit.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorig1Hips} />
        <skinnedMesh
          geometry={nodes.Ch17_Body.geometry}
          material={nodes.Ch17_Body.material}
          skeleton={nodes.Ch17_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Boots.geometry}
          material={nodes.Ch17_Boots.material}
          skeleton={nodes.Ch17_Boots.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Eyelashes.geometry}
          material={nodes.Ch17_Eyelashes.material}
          skeleton={nodes.Ch17_Eyelashes.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Hair.geometry}
          material={nodes.Ch17_Hair.material}
          skeleton={nodes.Ch17_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Helmet.geometry}
          material={nodes.Ch17_Helmet.material}
          skeleton={nodes.Ch17_Helmet.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Pants.geometry}
          material={nodes.Ch17_Pants.material}
          skeleton={nodes.Ch17_Pants.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Shirt.geometry}
          material={nodes.Ch17_Shirt.material}
          skeleton={nodes.Ch17_Shirt.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch17_Vest.geometry}
          material={nodes.Ch17_Vest.material}
          skeleton={nodes.Ch17_Vest.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/sit.glb')
