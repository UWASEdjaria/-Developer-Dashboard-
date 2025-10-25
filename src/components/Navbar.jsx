import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-row justify-center  items-center gap-6 p-5 mt-5 mb-5'>
        <h1 className=' text-2xl text-left sm:text-3xl md:text-4xl lg:text-5xl font-bold '>Developer Dashboard</h1>
        <button className='bg-blue-500 text-xl font-bold text-white rounded-lg p-2'>Light / Dark</button>
    </nav>
  )
}

export default Navbar