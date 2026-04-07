import { TiThMenuOutline } from "react-icons/ti"; 
import React from 'react'
import Logo from "../assets/icon.svg"

export const Nav = () => {
  return (
    <div className = 'navbody'>
      <img src = {Logo} width = {80} />
      <h1  className='h1'>CineList</h1>
      <button className = 'btn'>
        <TiThMenuOutline className = 'text-green-600 text-4xl'/>
      </button>

    </div>
  )
}
