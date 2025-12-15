import { useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

export default function Header() {
  const [movies, setMovies] = useState([])
  const [isPaused, setIsPaused] = useState(false)
  const [curIndex, setCurIndex] = useState(0)

  const intervalRef = useRef(null)

  // Fetching Movies
  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ5MjQ1MTUwNmVjMzgwNmM0NzUyYjNkMGMyMDgyMCIsIm5iZiI6MTc2NTU4MzExNi45MDcsInN1YiI6IjY5M2NhOTBjZTZmZjU1Mjg0MmY3N2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuNMN3nyC-xVQM4IuVOEHHXZEKrjKunq7mKLBSMgziU',
            },
          },
        )

        const data = await res.json()
        setMovies(data.results.slice(0, 5))
      } catch (error) {
        console.error('Failed to fetch movies', error)
      }
    })()
  }, [])

  // Change Movie
  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(() => {
      setCurIndex((count) => (count + 1) % movies.length)
    }, 7000)

    return () => clearInterval(intervalRef.current)
  }, [isPaused, movies])

  const movie = movies[curIndex]

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* NavBar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          key={movie?.backdrop_path}
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          className="animate-fadeIn h-screen w-full overflow-hidden object-cover"
          alt={movie?.title}
        />
      </div>

      {/* Global Dark Overlay */}
      <div className="absolute inset-0 -z-20 h-screen overflow-hidden bg-black/30"></div>

      {/* Vignette (Top & Bottom stronger) */}
      <div className="absolute inset-0 -z-10 h-screen overflow-hidden bg-linear-to-b from-black/80 via-black/20 to-black/80"></div>

      {/* Hero Section */}
      <Hero
        movies={movies}
        movie={movie}
        setCurIndex={setCurIndex}
        curIndex={curIndex}
        setIsPaused={setIsPaused}
      />
    </header>
  )
}
