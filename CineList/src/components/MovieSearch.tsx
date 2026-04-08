import { BiSearchAlt2 } from "react-icons/bi"; 
import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

export const MovieSearch = () => {
  return (
    <div>
      <Nav /> 
      <h2>CineList, the World of movies</h2>
      <p>Search for movie below:</p>
      <input className = 'input'
      placeholder='Search for movie'>

      </input>

      <button>
        <BiSearchAlt2 className = 'text-white text-4xl'/>
      </button>
      
      <Footer /> 
    </div>
  )
}
