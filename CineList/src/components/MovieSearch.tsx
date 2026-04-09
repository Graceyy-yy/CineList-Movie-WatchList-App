import { BiSearchAlt2 } from "react-icons/bi"; 
import React from 'react'


export const MovieSearch = () => {
  return (
    <div className = 'text-center'>
     
      <h2>CineList, the World of movies</h2>

      <p className ='paragraph'>
        Search for movie below:
      </p>

      <input className = 'input'
      placeholder='Search for movie'>

      </input>

      <button className='search'>
        <BiSearchAlt2 className = 'text-white text-4xl'/>
      </button>
      
    
    </div>
  )
}
