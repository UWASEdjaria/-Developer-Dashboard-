import React, { useState, useEffect } from 'react';

function GithubCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/UWASEdjaria') 
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p className="mt-4 text-center">Loading...</p>;

  return (
    <div className='flex flex-row font-sans'>
     <div className='grid grid-cols-1 p-1 transition-all duration-300 bg-black rounded-lg shadow-lg dark:bg-white w-80 h-96 hover:scale-105'>
        <h2 className='p-1 mb-2 text-2xl font-bold text-black bg-white'>GitHub</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="rounded-full w-30 h-30 "
      />
    
      <span className='space-y-2 text-xl font-bold text-center text-black md:text-2xl lg:text-3xl dark:text-black'> {user.public_repos} </span>
      <p className='text-lg text-center md:text-xs lg:text-xl dark:text-black'>Repos</p>
      
      <span className='m-2 space-y-2 text-xl font-bold text-center text-black md:text-2xl lg:text-3xl dark:text-black'>{user.followers} </span>
      <p className='text-lg text-center text-gray-700 md:text-xs lg:text-xl dark:text-black'>Followers</p>

      <span className='space-y-2 text-xl font-bold text-center text-black md:text-2xl lg:text-4xl dark:text-black'> {user.following}</span> 
      <p className='text-lg text-center text-gray-700 md:text-xs lg:text-xl dark:text-black'>Following</p>
    </div>
    </div>
   

  );
}

export default GithubCard;
