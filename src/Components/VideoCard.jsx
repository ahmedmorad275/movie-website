import React from 'react'
import { IoPlayCircleOutline } from 'react-icons/io5'

export default function VideoCard() {
  return (
    <div className="flex-1 space-y-3 overflow-hidden rounded-lg bg-gray-50/20 p-2">
      <div className="relative text-white">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_.jpg"
          className="h-64 w-96 rounded-lg"
        />
        <IoPlayCircleOutline className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-6xl cursor-pointer" />
      </div>

      <h3 className="text-lg font-bold text-gray-900">Stranger Things</h3>
    </div>
  )
}
