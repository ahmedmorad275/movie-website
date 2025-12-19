import { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import Modal from './Modal'
export default function Hero({
  movies,
  movie,
  curIndex,
  setCurIndex,
  setIsPaused,
}) {
  const [openModal, setOpenModal] = useState(false)

  if (openModal) setIsPaused(true)
  else setIsPaused(false)

  return (
    <main className="absolute top-1/2 w-full -translate-y-1/2 p-2 md:p-3">
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal} movie={movie} />
      )}
      <div className="animate-fadeIn mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 text-white md:flex-row">
        {/* Description */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          key={movie?.id}
          className="animate-fadeIn description mx-auto w-full max-w-md space-y-5.5 md:mx-0"
        >
          {/* Title */}
          <h1 className="text-center text-4xl font-bold md:text-left md:text-5xl">
            {movie && movie.title}
          </h1>
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <FaStar color="gold" />
            <p>{movie && Math.round(movie.vote_average * 10)} %</p>
          </div>
          {/* Description */}
          <div>
            <p>{movie && movie.overview}</p>
          </div>
          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            aria-label="Watch Trailer"
            className="mx-auto flex cursor-pointer items-center gap-2.5 rounded-lg bg-rose-700 px-4 py-1.5 font-bold transition-colors duration-300 hover:bg-rose-600 md:mx-0"
          >
            <FaPlayCircle />
            <p>WATCH TRAILER</p>
          </button>
        </div>
        {/* Pagination */}
        <div className="pagination flex justify-center gap-4 text-gray-400 md:flex-col">
          {movies.map((_, index) => {
            return (
              <p
                onClick={() => {
                  setCurIndex(index)
                }}
                className={`cursor-pointer ${
                  index === curIndex
                    ? 'active-pagination text-lg font-bold text-white'
                    : ''
                } transition hover:text-white`}
              >
                {index + 1}
              </p>
            )
          })}
        </div>
      </div>
    </main>
  )
}
