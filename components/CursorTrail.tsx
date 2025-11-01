'use client'

import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    const trail: HTMLElement[] = []
    const trailLength = 10

    const createTrail = (e: MouseEvent) => {
      const dot = document.createElement('div')
      dot.className = 'cursor-trail'
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      document.body.appendChild(dot)

      trail.push(dot)
      if (trail.length > trailLength) {
        const oldDot = trail.shift()
        if (oldDot) {
          oldDot.remove()
        }
      }

      setTimeout(() => {
        dot.remove()
        const index = trail.indexOf(dot)
        if (index > -1) {
          trail.splice(index, 1)
        }
      }, 500)
    }

    window.addEventListener('mousemove', createTrail)

    return () => {
      window.removeEventListener('mousemove', createTrail)
    }
  }, [])

  return null
}


