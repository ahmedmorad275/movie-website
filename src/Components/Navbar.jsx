import React from 'react';
import logo from '../assets/logo.png';
import { IoSearch, IoMenu } from 'react-icons/io5';

export default function Navbar() {
  return (
    <>
      <nav className="md:p-3 p-2">
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          {/* Logo */}
          <div className="logo-box flex items-center gap-1.5 md:gap-3">
            <img src={logo} className="h-10 md:h-12" alt="AMG Cinema" />
            <p className="text-xl md:text-2xl  font-bold tracking-wide text-rose-700">
              AMG<span className="text-white">Cinema</span>
            </p>
          </div>

          {/* Search Desktop*/}
          <div className="search-box-pc relative hidden text-white md:block">
            {/* search Input */}
            <div className="flex items-center relative">
              <input
                type="text"
                className="placeholder:text-white border w-92 border-gray-300 outline-none focus:ring focus:ring-gray-400  text-white rounded-lg px-3 pr-8 py-1"
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
          <div className="flex menu-box items-center gap-2.5 md:gap-3.5">
            <button className="border text-white border-gray-300 rounded-lg px-4 py-1 cursor-pointer hover:bg-rose-700 hover:border-rose-700 font-semibold transition-colors duration-300 ">
              Login
            </button>
            <div className="flex items-center text-white bg-rose-700 font-bold text-2xl rounded-full p-1 cursor-pointer">
              <IoMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
