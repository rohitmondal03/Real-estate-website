import React from "react"

// STYLES
import "./Navbar.css"

// FRAMER
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <motion.nav
      className='absolute bg-transparent z-10 flex flex-row items-center justify-between w-screen px-8 py-5'
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
        <ul className='flex flex-row items-center'>
          <li className='nav_list_items'>Home</li>
          <li className='nav_list_items'>Services</li>
          <li className='nav_list_items'>Projects</li>
          <li className='nav_list_items'>Contact</li>
          <button className='nav_list_items'>Call Now</button>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar