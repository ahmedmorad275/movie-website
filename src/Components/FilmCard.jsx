import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

export default function FilmCard({ movie }) {
  const date = new Date(movie.release_date)

  const imgURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
  return (
    <div className="flex-1 space-y-3 overflow-hidden rounded-lg bg-gray-50/20 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={imgURL} className="rounded-lg" />
        <div className="absolute top-4 right-4 cursor-pointer rounded-full bg-gray-400 p-1 text-gray-600">
          <MdFavoriteBorder className="text-2xl" />
        </div>
      </div>
      <p className="text-xs text-gray-400">
        USA,{' '}
        {new Date(movie.release_date).getFullYear() ||
          new Date(movie.first_air_date ).getFullYear()}{' '}
        - Current
      </p>
      <h3 className="text-lg  font-bold text-gray-900">
        {movie.original_name || movie.title}
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
