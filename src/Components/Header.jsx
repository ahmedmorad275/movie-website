import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZDIyMTE0YWYtMDk3Mi00ZWQwLTlhOTYtYmRjZWI1YzQwMDkwXkEyXkFqcGc@._V1_.jpg"
          className="h-full w-full object-cover"
          alt="background"
        />
      </div>

      {/* Global Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-black/30"></div>

      {/* Vignette (Top & Bottom stronger) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/20 to-black/80"></div>

      <Navbar />
      <Hero />
    </header>
  )
}
