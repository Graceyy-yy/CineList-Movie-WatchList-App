import React from 'react'
import { MovieSearch } from './components/MovieSearch'
import { Nav} from './components/Nav'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className='bg-gray-800 h-screen w-screen'>
      <Nav />
      <MovieSearch />
      <Footer />
    </div>
  )
}
