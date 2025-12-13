import React from 'react'
import VideoCard from './VideoCard'

export default function ExclusiveVideos() {
  return (
    <section className="my-8 p-2 md:p-3">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Exclusive Videos</p>
          <a className="flex cursor-pointer items-center gap-2.5 text-lg text-rose-700 transition-colors duration-300 hover:text-rose-600">
            See More
            <span>{/* <FaChevronRight /> */}</span>
          </a>
        </div>
        {/* Films */}
        <div className="mt-6 flex justify-between gap-12">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
