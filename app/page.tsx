'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Preloader from '@/components/Preloader'
import CursorTrail from '@/components/CursorTrail'
export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <>
      <CursorTrail />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Technologies />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

