import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-row min-h-screen gap-6 justify-center items-center mt-5'>
        <div className='grid grid-cols-1 items-start p-2 bg-white rounded-lg shadow-lg w-72 h-60 transition-all duration-300 hover:scale-105'>
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Current Weather</h1>
         </div>
         <div className='grid grid-cols-1 p-2 bg-white rounded-lg shadow-lg w-72 h-60 transition-all duration-300 hover:scale-105'>
        <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>GitHub</h2>
   
    </div>
    </div>
  )
}

export default Dashboard