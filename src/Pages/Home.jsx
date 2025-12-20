import React from 'react'
import Header from '../Components/Header'
import FeaturedMovies from '../Components/FeaturedMovies'
import NewArrival from '../Components/NewArrival'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Header />
      <FeaturedMovies />
      <NewArrival />
    </>
  )
}
