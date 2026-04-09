import { TiThMenuOutline } from "react-icons/ti"; 
import React from 'react'
import Logo from "../assets/icon.svg"


export const Nav = () => {
  return (
    <div className = 'flex items-center justify-between'>

        <img src = {Logo} 
         className='w-24'
        />

        <h1>CineList</h1>
 
      
        <button className = 'btn'>
          <TiThMenuOutline className = 'icon'/>
        </button>
  
      

    </div>
  )
}
