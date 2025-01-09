import { div } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  return (
    <div>
    <NavLink>Meus projetos</NavLink>
    <NavLink>Novo projeto</NavLink>
    </div>
  )

}

export default Navbar