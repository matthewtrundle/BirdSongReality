"use client"

import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"

interface CameraRigProps {
  scrollFactor?: number
  enabled?: boolean
}

export function CameraRig({ scrollFactor = 0.0005, enabled = true }: CameraRigProps) {
  const { camera } = useThree()
  const targetPosition = useRef(new Vector3())
  const targetLookAt = useRef(new Vector3(0, 0, -8)) // Fish position
  const scrollRef = useRef(0)

  useEffect(() => {
    const handler = () => { scrollRef.current = window.scrollY }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useFrame((state) => {
    if (!enabled) return

    const t = state.clock.elapsedTime
    const scroll = scrollRef.current
    const scrollOffset = scroll * scrollFactor

    // Subtle underwater camera drift
    const swayX = Math.sin(t * 0.1) * 0.5
    const bobY = Math.sin(t * 0.08) * 0.3

    // Camera zoomed out more (z: 28 instead of 20)
    targetPosition.current.set(
      swayX,
      bobY - scrollOffset * 3,
      28 + scrollOffset * 8
    )

    // Look at center where fish school moves
    targetLookAt.current.set(0, -scrollOffset * 2, -8)

    // Smooth interpolation
    camera.position.lerp(targetPosition.current, 0.02)
    camera.lookAt(targetLookAt.current)
  })

  return null
}
