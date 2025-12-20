import { FaPlayCircle } from 'react-icons/fa'
import Navbar from '../Components/Navbar'
import Modal from '../Components/Modal'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaStar } from 'react-icons/fa6'
import Footer from '../Components/Footer'

export default function MoviePage() {
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ5MjQ1MTUwNmVjMzgwNmM0NzUyYjNkMGMyMDgyMCIsIm5iZiI6MTc2NTU4MzExNi45MDcsInN1YiI6IjY5M2NhOTBjZTZmZjU1Mjg0MmY3N2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuNMN3nyC-xVQM4IuVOEHHXZEKrjKunq7mKLBSMgziU',
            },
          },
        )

        const data = await res.json()
        setMovie(data)
      } catch (error) {
        console.error('Failed to fetch movies', error)
      }
    })()
  }, [id])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar color={'bg-gray-900'} />
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal} movie={movie} />
      )}
      <div className="relative flex-1 bg-gray-800 p-2 text-white md:p-3">
        {movie.success === false ? (
          <h2 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-semibold md:whitespace-nowrap">
            Sorry, Movie Data isn't available now!
          </h2>
        ) : (
          <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-4 md:flex-row">
            {/* Image */}
            <h2 className="text-2xl font-bold tracking-wider md:hidden">
              {movie?.title}
            </h2>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                className="rounded-2xl"
              />
            </div>
            {/* Details */}
            <div className="flex flex-col items-center justify-center space-y-3.5 text-center md:block md:text-left">
              {/* Title */}
              <h2 className="hidden text-2xl font-bold tracking-wider md:block">
                {movie?.title}
              </h2>
              {/* Description */}
              <p className="text-left tracking-wide text-gray-200">
                {movie?.overview}
              </p>
              {/* Rate */}
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <FaStar color="gold" />
                <p>{movie?.vote_average?.toFixed(2)}</p>
              </div>
              {/*  */}
              <div className="flex gap-2.5 text-sm">
                {movie?.genres?.map((ele) => {
                  return (
                    <p
                      key={ele.id}
                      className="rounded-2xl border bg-slate-900 px-2.5 py-0.5"
                    >
                      {ele.name}
                    </p>
                  )
                })}
              </div>
              {/* Trailer */}
              <button
                onClick={() => setOpenModal(true)}
                aria-label="Watch Trailer"
                className="mx-aut my-3 flex cursor-pointer items-center gap-2.5 rounded-lg bg-rose-700 px-4 py-1.5 font-bold transition-colors duration-300 hover:bg-rose-600 md:mx-0 md:mt-12"
              >
                <FaPlayCircle />
                <p>WATCH TRAILER</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
