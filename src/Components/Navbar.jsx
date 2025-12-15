import logo from '../assets/logo.png'
import { IoSearch, IoMenu } from 'react-icons/io5'

export default function Navbar() {
  return (
    <>
      <nav className="p-2 md:p-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="logo-box flex cursor-pointer items-center gap-1.5 md:gap-3">
            <img src={logo} className="h-10 md:h-12" alt="AMG Cinema" />
            <p className="text-xl font-bold tracking-wide text-rose-700 brightness-150 md:text-2xl">
              AMG<span className="text-white">Cinema</span>
            </p>
          </div>

          {/* Search Desktop*/}
          <div className="search-box-pc relative hidden text-white md:block">
            {/* search Input */}
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-72 rounded-lg border border-white/30 bg-black/40 px-3 py-1 pr-8 text-white transition-all duration-300 outline-none placeholder:text-white/70 focus:w-80 focus:border-rose-600 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                placeholder="Search movies..."
              />
              <IoSearch className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            {/* Search Result */}
            {/* <div className="absolute mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-h-80 overflow-auto z-50">
              <div className="flex gap-3 p-2 items-center hover:bg-gray-800 cursor-pointer">
                <img src={logo} className="h-14 rounded-md" />
                <div>
                  <p className="text-white font-semibold">Ahmed Morad</p>
                  <p className="text-rose-400 text-sm">2025</p>
                </div>
              </div>
              <div className="flex gap-3 p-2 items-center hover:bg-gray-800 cursor-pointer">
                <img src={logo} className="h-14 rounded-md" />
                <div>
                  <p className="text-white font-semibold">Ahmed Morad</p>
                  <p className="text-rose-400 text-sm">2025</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Menu Desktop*/}
          <div className="menu-box flex items-center gap-2.5 md:gap-3.5">
            <button className="cursor-pointer rounded-lg border border-gray-300 px-4 py-1 font-semibold text-white transition-colors duration-300 hover:border-rose-700 hover:bg-rose-700">
              Login
            </button>
            <div className="flex cursor-pointer items-center rounded-full bg-rose-700 p-1 text-2xl font-bold text-white">
              <IoMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
