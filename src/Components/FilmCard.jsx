import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

export default function FilmCard() {
  return (
    <div className="flex-1 space-y-3 overflow-hidden rounded-lg bg-gray-50/20 p-2">
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_.jpg"
          className="rounded-lg"
        />
        <div className="absolute top-4 right-4 cursor-pointer rounded-full bg-gray-400 p-1 text-gray-600">
          <MdFavoriteBorder className="text-2xl" />
        </div>
      </div>
      <p className="text-xs text-gray-400">USA, 2016 - Current</p>
      <h3 className="text-lg font-bold text-gray-900">Stranger Things</h3>
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
      <p className="text-xs text-gray-400">Action, Adventure / Horror</p>
    </div>
  )
}
