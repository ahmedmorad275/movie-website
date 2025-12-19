import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

export default function FilmCard({ movie }) {
  const titleRef = useRef(null)
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    if (!titleRef.current) return
    const el = titleRef.current
    const lineHeight = parseInt(getComputedStyle(el).lineHeight)
    const lines = Math.round(el.scrollHeight / lineHeight)

    // لو عدد السطور > 1 يبقا محتاج انيميشن
    if (lines > 1) setScroll(true)
  }, [])

  const imgURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
  return (
    <div className="flex-1 space-y-3 cursor-pointer hover:backdrop-brightness-95 overflow-hidden rounded-lg bg-gray-50/20 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={imgURL} className="rounded-lg" />
        <div className="absolute top-4 right-4 cursor-pointer rounded-full bg-gray-400 p-1 text-gray-600">
          <MdFavoriteBorder className="text-2xl" />
        </div>
      </div>
      <p className="text-xs text-gray-400">
        USA,{' '}
        {new Date(movie.release_date).getFullYear() ||
          new Date(movie.first_air_date).getFullYear()}{' '}
        - Current
      </p>
      <h3
        className={`movie-title overflow-hidden text-lg font-bold text-gray-900`}
      >
        <span
          ref={titleRef}
          className={`inline-block ${
            scroll ? 'animate-marquee whitespace-nowrap' : 'line-clamp-2'
          }`}
        >
          {movie.original_name || movie.title}
        </span>
      </h3>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            className="h-4"
          />
          <p>
            86.0<span> / 100</span>
          </p>
        </div>
        <p>
          🍅 <span>97%</span>
        </p>
      </div>
      <p className="text-xs text-gray-400"></p>
    </div>
  )
}
