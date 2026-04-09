import { TiThMenuOutline } from "react-icons/ti"; 
import React from 'react'
import Logo from "../assets/icon.svg"


export const Nav = () => {
  return (
    <div className = 'flex items-center justify-between'>
        
        <div className= 'flex'>
            <img src = {Logo} 
              className='pic'
            />

            <h1>CineList</h1>
        </div>
      
        <button className = 'btn'>
          <TiThMenuOutline className = 'icon'/>
        </button>
  
      

    </div>
  )
}
