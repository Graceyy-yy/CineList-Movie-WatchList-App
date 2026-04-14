import React from 'react'
import { MovieSearch } from './components/MovieSearch'
import { Nav} from './components/Nav'
import { Footer } from './components/Footer'

export const App = () => {
import { useState } from 'react'

import './App.css'
//import { Movies } from './data/MoviesData'
import { searchMovies } from './tmdb'

function App() {
  const [count, setCount] = useState(0)

searchMovies("Fight");
 // console.log(Movies)
// console.log(import.meta.env)

  return (
    <div className='bg-gray-800 h-screen w-screen'>
      <Nav />
      <MovieSearch />
      <Footer />
    </div>
  )
}
