import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import FilmCard from '../Components/FilmCard'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

export default function NewArrivalPage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ5MjQ1MTUwNmVjMzgwNmM0NzUyYjNkMGMyMDgyMCIsIm5iZiI6MTc2NTU4MzExNi45MDcsInN1YiI6IjY5M2NhOTBjZTZmZjU1Mjg0MmY3N2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuNMN3nyC-xVQM4IuVOEHHXZEKrjKunq7mKLBSMgziU',
            },
          },
        )

        const data = await res.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Failed to fetch movies', error)
      }
    })()
  }, [])

  return (
    <>
      <Navbar color={'bg-gray-900'} />
      <h2 className="mt-6 text-center text-2xl font-bold tracking-widest text-rose-700">
        Arriving Today
      </h2>
      {/* Movies Container */}
      <div className="movies-container mx-auto mt-2 max-w-7xl p-2 md:p-3">
        {/* Movie Container */}
        {movies.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <FilmCard movie={movie} />
            </Link>
          )
        })}
      </div>
      <Footer />
    </>
  )
}
