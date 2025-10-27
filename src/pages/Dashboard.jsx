import React from 'react'
import GithubCard from '../components/GithubCard'
import WeatherCard from '../components/WeatherCard'

function Dashboard() {
  return (

        <div className='flex flex-row justify-center min-h-screen gap-6 '>
          
        <WeatherCard/>
        <GithubCard/>
       
        
        
       </div>
    
  )
}

export default Dashboard