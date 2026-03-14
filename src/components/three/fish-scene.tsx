"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Center } from "@react-three/drei"
import { Group, DoubleSide } from "three"

interface FishSceneProps {
  position?: [number, number, number]
  scale?: number
  animationSpeed?: number
  mousePos?: { x: number; y: number }
  isHovering?: boolean
}

// Procedural fish shape as a placeholder (GLB asset not available)
function ProceduralFish({ offset, color }: { offset: number; color: string }) {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime + offset
    // Tail wiggle
    meshRef.current.rotation.y = Math.sin(t * 3) * 0.2
  })

  return (
    <group ref={meshRef}>
      {/* Body */}
      <mesh>
        <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
        <meshStandardMaterial color={color} side={DoubleSide} roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Tail */}
      <mesh position={[-0.4, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.15, 0.25, 4]} />
        <meshStandardMaterial color={color} side={DoubleSide} roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  )
}

export function FishScene({
  position = [0, 0, 0],
  scale = 1,
  animationSpeed = 0.8,
  mousePos = { x: 0, y: 0 },
  isHovering = false,
}: FishSceneProps) {
  const groupRef = useRef<Group>(null!)

  // Smooth mouse following with lerp
  const smoothMouseRef = useRef({ x: 0, y: 0 })

  // Scatter effect state
  const isScatteredRef = useRef(false)
  const scatterTimeRef = useRef(0)

  // Generate fish positions
  const fishData = useMemo(() => {
    const fish = []
    const colors = ["#4488aa", "#336699", "#55aacc", "#2277aa", "#66bbdd"]
    for (let i = 0; i < 12; i++) {
      fish.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        offset: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
        scale: 0.6 + Math.random() * 0.8,
      })
    }
    return fish
  }, [])

  // Update group movement with mouse interactivity
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime

      // Smooth lerp towards mouse position
      const lerpSpeed = isHovering ? 0.03 : 0.02
      smoothMouseRef.current.x += (mousePos.x - smoothMouseRef.current.x) * lerpSpeed
      smoothMouseRef.current.y += (mousePos.y - smoothMouseRef.current.y) * lerpSpeed

      // Handle scatter effect (when cursor gets too close)
      const mouseDistance = Math.sqrt(smoothMouseRef.current.x ** 2 + smoothMouseRef.current.y ** 2)
      if (isHovering && mouseDistance > 0.6 && !isScatteredRef.current) {
        isScatteredRef.current = true
        scatterTimeRef.current = t
      }
      if (isScatteredRef.current && t - scatterTimeRef.current > 2) {
        isScatteredRef.current = false
      }

      // Base organic swimming movement
      const swimX = Math.sin(t * 0.15) * 3 + Math.cos(t * 0.08) * 1.5
      const swimY = Math.sin(t * 0.2) * 1.5 + Math.cos(t * 0.12) * 0.8
      const swimZ = Math.sin(t * 0.1) * 2

      // Mouse influence - fish swim away from cursor (negative influence)
      const mouseInfluenceX = -smoothMouseRef.current.x * 8
      const mouseInfluenceY = -smoothMouseRef.current.y * 5

      // Scatter effect - fish dart away quickly
      let scatterX = 0
      let scatterY = 0
      let scatterZ = 0
      if (isScatteredRef.current) {
        const scatterProgress = (t - scatterTimeRef.current) * 2
        const scatterDecay = Math.exp(-scatterProgress * 0.8)
        scatterX = Math.sin(scatterProgress * 5) * 6 * scatterDecay
        scatterY = Math.cos(scatterProgress * 4) * 4 * scatterDecay
        scatterZ = Math.sin(scatterProgress * 3) * 3 * scatterDecay
      }

      // Combine all movement
      groupRef.current.position.x = position[0] + swimX + mouseInfluenceX + scatterX
      groupRef.current.position.y = position[1] + swimY + mouseInfluenceY + scatterY
      groupRef.current.position.z = position[2] + swimZ + scatterZ

      // Rotation - look in swimming direction with mouse influence
      const targetRotY = Math.sin(t * 0.15) * 0.2 + smoothMouseRef.current.x * 0.3
      const targetRotX = Math.sin(t * 0.12) * 0.08 - smoothMouseRef.current.y * 0.15

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Center>
        <group scale={scale}>
          {fishData.map((fish, i) => (
            <group key={i} position={fish.position} scale={fish.scale}>
              <ProceduralFish offset={fish.offset} color={fish.color} />
            </group>
          ))}
        </group>
      </Center>
    </group>
  )
}
