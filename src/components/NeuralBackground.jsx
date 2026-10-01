import { useEffect, useRef } from 'react'

// Ambient "neural network" drawn behind the whole page: drifting nodes, edges between
// nearby nodes, signals travelling along edges, and links to the cursor.
const ACCENT = '127, 168, 212'
const LINK_DISTANCE = 150
const CURSOR_DISTANCE = 190
const AREA_PER_NODE = 16000
const MAX_NODES = 110

export default function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let nodes = []
    let signals = []
    let frame = 0
    const cursor = { x: -9999, y: -9999 }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(MAX_NODES, Math.round((width * height) / AREA_PER_NODE))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
      signals = []
    }

    function spawnSignal() {
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes.find(
        (n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < LINK_DISTANCE,
      )
      if (b) signals.push({ from: a, to: b, t: 0, speed: 0.012 + Math.random() * 0.012 })
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.14 * (1 - d / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        const dc = Math.hypot(a.x - cursor.x, a.y - cursor.y)
        if (dc < CURSOR_DISTANCE) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${0.35 * (1 - dc / CURSOR_DISTANCE)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(cursor.x, cursor.y)
          ctx.stroke()
        }

        ctx.fillStyle = `rgba(${ACCENT}, ${dc < CURSOR_DISTANCE ? 0.9 : 0.45})`
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const s of signals) {
        const x = s.from.x + (s.to.x - s.from.x) * s.t
        const y = s.from.y + (s.to.y - s.from.y) * s.t
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6)
        glow.addColorStop(0, `rgba(${ACCENT}, 0.9)`)
        glow.addColorStop(1, `rgba(${ACCENT}, 0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      if (signals.length < 6 && Math.random() < 0.04) spawnSignal()
      for (const s of signals) s.t += s.speed
      signals = signals.filter((s) => s.t < 1)

      draw()
      frame = requestAnimationFrame(step)
    }

    function start() {
      cancelAnimationFrame(frame)
      if (reducedMotion) draw()
      else frame = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      cursor.x = e.clientX
      cursor.y = e.clientY
    }
    const onLeave = () => {
      cursor.x = -9999
      cursor.y = -9999
    }
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(frame) : start())
    const onResize = () => {
      resize()
      start()
    }

    resize()
    start()
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
