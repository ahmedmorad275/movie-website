import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import FilmCard from './FilmCard'

export default function NewArrival() {
  const [movies, setMovies] = useState([])

  const fetchNewArrival = async () => {
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
  }

  useEffect(() => {
    fetchNewArrival()
  }, [])
  return (
    <section className="my-8 p-2 md:p-3">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">New Arrival</p>
          <a className="flex cursor-pointer items-center gap-2.5 text-lg text-rose-700 transition-colors duration-300 hover:text-rose-600">
            See More
            <span>
              <FaChevronRight />
            </span>
          </a>
        </div>
        {/* Films */}
        <div className="mt-6 flex justify-between gap-12">
          {movies.slice(0, 4).map((movie) => {
            return <FilmCard key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    </section>
  )
}
