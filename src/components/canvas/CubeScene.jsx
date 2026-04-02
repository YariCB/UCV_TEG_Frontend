import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Edges, Float } from '@react-three/drei'

function AnimatedBox() {
  const groupRef = useRef()

  // Animación de rotación constante
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5
    groupRef.current.rotation.x += delta * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* Parte Inferior (La Caja) */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial 
          color="#5b3ea6" 
          transparent 
          opacity={0.6} 
          roughness={0.1} 
        />
        {/* Líneas de wireframe/bordes */}
        <Edges scale={1} threshold={15} color="#7015b5" />
      </mesh>

      {/* Parte Superior (Tapa / Submallado 2) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.6, 0.2, 1.6]} />
        <meshStandardMaterial 
          color="#6e4eb8" 
          emissive="#6e4eb8" 
          emissiveIntensity={0.5} 
        />
        <Edges scale={1} threshold={15} color="white" />
      </mesh>
    </group>
  )
}

export default function CubeScene() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 40 }}>
        {/* Iluminación para resaltar volúmenes */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        {/* Efecto de levitación */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AnimatedBox />
        </Float>

        {/* Permite al usuario moverlo, pero bloqueamos el zoom para no romper el layout */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}