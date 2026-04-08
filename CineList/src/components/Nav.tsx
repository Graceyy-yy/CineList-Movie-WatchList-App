import { TiThMenuOutline } from "react-icons/ti"; 
import React from 'react'
import Logo from "../assets/icon.svg"

export const Nav = () => {
  return (
    <div className ='bg-pink-300'>

      <img src = {Logo}
       width = {80} />

      <h1>CineList</h1>

      <button className = 'bg-pink-400'>
        <TiThMenuOutline className = 'icon'/>
      </button>

    </div>
  )
}
