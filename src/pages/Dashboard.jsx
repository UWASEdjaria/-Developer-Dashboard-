import React from 'react'
import GithubCard from '../components/GithubCard'
import WeatherCard from '../components/WeatherCard'

function Dashboard() {
  return (

        <div className='flex flex-row gap-6 min-h-screen justify-center'>
        <WeatherCard/>
        <GithubCard/>
       
        
        
       </div>
    
  )
}

export default Dashboard