import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import FilmCard from './FilmCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
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
    <section className="my-4 p-2 md:p-3">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Featured Movies</p>
          <a className="flex cursor-pointer items-center gap-2.5 text-lg text-rose-700 transition-colors duration-300 hover:text-rose-600">
            See More
            <span>
              <FaChevronRight />
            </span>
          </a>
        </div>
        {/* Films */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 5000 }}
        >
          {movies.slice(0, 10).map((movie) => {
            return (
              <SwiperSlide>
                <FilmCard key={movie.id} movie={movie} />
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>
    </section>
  )
}
