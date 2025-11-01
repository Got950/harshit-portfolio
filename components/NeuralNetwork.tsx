'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NeuralNetwork() {
  const nodesRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.Group>(null)

  const nodeCount = 20
  const nodes: THREE.Vector3[] = []

  // Generate random node positions
  for (let i = 0; i < nodeCount; i++) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      )
    )
  }

  // Generate connections between nearby nodes
  const connections: [THREE.Vector3, THREE.Vector3][] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = nodes[i].distanceTo(nodes[j])
      if (distance < 2) {
        connections.push([nodes[i], nodes[j]])
      }
    }
  }

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group>
      {/* Connection Lines */}
      <group ref={linesRef}>
        {connections.map(([start, end], index) => (
          <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([...start.toArray(), ...end.toArray()])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#9155ff" opacity={0.3} transparent />
          </line>
        ))}
      </group>

      {/* Nodes */}
      <group ref={nodesRef}>
        {nodes.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#9155ff"
              emissive="#9155ff"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}


