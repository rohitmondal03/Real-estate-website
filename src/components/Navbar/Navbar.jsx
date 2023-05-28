import React from "react"
import { Link } from "react-router-dom"

// STYLES
import "./Navbar.css"

// FRAMER
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <motion.nav
      className='nav absolute bg-transparent z-10 flex flex-row items-center justify-between px-8 py-5'
      initial={{ y: '-200px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className='nav_left text-2xl text-white'>
        <p className='cursor-pointer'>Residential</p>
        <p className=''>Remodeled</p>
        <p className=''>with...</p>
      </div>

      <div className='nav_right text-zinc-200'>
        <ul className='flex flex-row items-center uppercase'>
          <Link><li className='nav_list_items'>Home</li></Link>
          <Link><li className='nav_list_items'>Services</li></Link>
          <Link><li className='nav_list_items'>projects</li></Link>
          <Link><li className='nav_list_items'>contact</li></Link>
          <button className='nav_list_items'>Call Now</button>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar