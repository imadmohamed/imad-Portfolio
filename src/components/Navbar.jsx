import React from 'react'
import { NavLink } from 'react-router-dom'
import {logo} from "../assets/images"

const Navbar = () => {
  return (
  <header>
    <NavLink to={"/"}>
        <img src={logo} alt="logo"/>
    </NavLink>
        <nav>
            <NavLink 
            to="/about"
            className={({isActive}) => isActive ? "text-blue-600" : "text-black"
            }>About</NavLink>
            <NavLink 
            to="/project"
            className={({isActive}) => isActive ? "text-blue-600" : "text-black"
            }>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar