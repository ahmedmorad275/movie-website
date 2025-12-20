import { FaPlayCircle } from 'react-icons/fa'
import Navbar from '../Components/Navbar'
import Modal from '../Components/Modal'
import { useState } from 'react'

export default function MoviePage() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Navbar color={'bg-gray-900'} />
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal} movie={movie} />
      )}
      <div className="bg-gray-800 p-2 text-white md:p-3">
        <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-4 md:flex-row">
          {/* Image */}
          <h2 className="text-2xl font-bold tracking-wider md:hidden">Title</h2>
          <div>
            <img
              src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
              className="rounded-2xl"
            />
          </div>
          {/* Details */}
          <div className="flex flex-col items-center justify-center space-y-3.5 text-center md:block md:text-left">
            {/* Title */}
            <h2 className="hidden text-2xl font-bold tracking-wider md:block">
              Title
            </h2>
            {/* Description */}
            <p className="text-left tracking-wide text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati nobis reiciendis repellendus, ipsam repellat, in, ab
              optio beatae voluptate corrupti possimus blanditiis placeat vel
              harum! Odio voluptas fuga animi!
            </p>
            {/* Rate */}
            <p>79 / 100</p>
            {/*  */}
            <div className="flex gap-2.5 text-sm">
              <p className="rounded-2xl border bg-slate-900 px-2.5 py-0.5">
                comedy
              </p>
              <p className="rounded-2xl border bg-slate-900 px-2.5 py-0.5">
                action
              </p>
            </div>
            {/* Trailer */}
            <button
              onClick={() => setOpenModal(true)}
              aria-label="Watch Trailer"
              className="mx-auto flex cursor-pointer items-center gap-2.5 rounded-lg bg-rose-700 px-4 py-1.5 font-bold transition-colors duration-300 hover:bg-rose-600 md:mx-0"
            >
              <FaPlayCircle />
              <p>WATCH TRAILER</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
