import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-row  font-sans justify-center  items-center gap-6 p-2 mt-5 mb-5'>
        <h1 className='text-xl text-left sm:text-xl md:text-4xl lg:text-5xl font-bold gap-6'>Developer Dashboard</h1>
        <button className='bg-blue-500 text-xl sm:text-base md:text-text-lg lg:text-xl font-bold text-white rounded-lg p-2'>Light / Dark</button>
    </nav>
  )
}

export default Navbar