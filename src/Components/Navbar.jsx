import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearch, IoMenu } from 'react-icons/io5'
import Menu from './Menu'
import { useNavigate } from 'react-router'

export default function Navbar({ color }) {
  const [word, setWord] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [debouncedWord, setDebouncedWord] = useState(word)
  const [open, setOpen] = useState(false)
  const inputDesktopRef = useRef(null)
  const inputMobRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedWord(word)
    }, 500)

    return () => clearTimeout(timer)
  }, [word])
  // Fetching Movies
  useEffect(() => {
    if (!debouncedWord.trim()) {
      setMovies([])
      setLoading(false)
      return
    }
    ;(async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${debouncedWord}`,
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ5MjQ1MTUwNmVjMzgwNmM0NzUyYjNkMGMyMDgyMCIsIm5iZiI6MTc2NTU4MzExNi45MDcsInN1YiI6IjY5M2NhOTBjZTZmZjU1Mjg0MmY3N2ZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuNMN3nyC-xVQM4IuVOEHHXZEKrjKunq7mKLBSMgziU',
            },
          },
        )

        const data = await res.json()
        setMovies(data.results.slice(0, 4))
      } catch (error) {
        console.error('Failed to fetch movies', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [debouncedWord])

  useEffect(() => {
    function handleClose(e) {
      if (e.key === 'Escape') {
        inputDesktopRef.current?.blur()
        inputMobRef.current?.blur()
      }
    }
    document.body.addEventListener('keydown', handleClose)
    return () => {
      document.removeEventListener('keydown', handleClose)
    }
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <nav className={`p-2 md:p-3 ${color}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="logo-box flex cursor-pointer items-center gap-1.5 md:gap-3"
          >
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
                ref={inputDesktopRef}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                value={word}
                onChange={(e) => setWord(e.target.value)}
                type="text"
                className="w-72 rounded-lg border border-white/30 bg-black/40 px-3 py-1 pr-8 text-white transition-all duration-300 outline-none placeholder:text-white/70 focus:w-80 focus:border-rose-600 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                placeholder="Search movies..."
              />
              <IoSearch className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            {/* Search Result */}
            {open && movies.length > 0 && (
              <div className="absolute z-50 mt-2 h-fit w-full rounded-lg border border-gray-700 bg-gray-900 shadow-xl">
                {loading ? (
                  <p className="p-2 font-semibold text-white">Loading...</p>
                ) : (
                  movies.map((movie) => {
                    return (
                      <div
                        key={movie.id}
                        className="flex cursor-pointer items-center gap-3 p-2 hover:bg-gray-800"
                      >
                        <img
                          src={
                            'https://image.tmdb.org/t/p/w500' +
                            movie.poster_path
                          }
                          className="h-14 rounded-md"
                        />
                        <div>
                          <p className="font-semibold text-white">
                            {movie?.title}
                          </p>
                          <p className="text-sm text-rose-400">
                            {new Date(movie?.release_date).getFullYear()}
                          </p>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            )}
          </div>

          {/* Menu Desktop*/}
          <div className="menu-box flex items-center gap-2.5 md:gap-3.5">
            <Menu />
          </div>
        </div>

        {/* Search on Mobile */}
        <div className="relative mt-3.5 text-white md:hidden">
          <div className="relative flex items-center">
            <input
              ref={inputMobRef}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              type="text"
              className="w-full rounded-lg border border-white/30 bg-black/40 px-3 py-1 pr-8 text-white transition-all duration-300 outline-none placeholder:text-white/70 focus:border-rose-600 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(244,63,94,0.5)]"
              placeholder="Search movies..."
            />
            <IoSearch className="absolute top-1/2 right-3 -translate-y-1/2" />
          </div>

          {open && movies.length > 0 && (
            <div className="absolute z-50 mt-2 h-fit min-w-full rounded-lg border border-gray-700 bg-gray-900 shadow-xl md:hidden">
              {loading ? (
                <p className="p-2 font-semibold text-white">Loading...</p>
              ) : (
                movies.map((movie) => {
                  return (
                    <div
                      key={movie.id}
                      className="flex cursor-pointer items-center gap-3 p-2 hover:bg-gray-800"
                    >
                      <img
                        src={
                          'https://image.tmdb.org/t/p/w500' + movie.poster_path
                        }
                        className="h-14 rounded-md"
                      />
                      <div>
                        <p className="font-semibold text-white">
                          {movie?.title}
                        </p>
                        <p className="text-sm text-rose-400">
                          {new Date(movie?.release_date).getFullYear()}
                        </p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
