import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {showButton && (
        <div>
          <button
            type="button"
            onClick={backToTop}
            className={` ${
              showButton ? `inline-block` : `hidden`
            } fixed right-10 bottom-10 z-50 cursor-pointer rounded-full bg-rose-600 p-3 text-xs leading-tight font-medium text-white uppercase shadow-md transition duration-150 ease-in-out hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:ring-0 focus:outline-none active:bg-rose-800 active:shadow-lg`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <Outlet />
    </>
  )
}

export default App
