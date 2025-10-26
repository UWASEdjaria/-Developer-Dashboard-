import React, { useState, useEffect } from 'react';

function GithubCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/UWASEdjaria')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className='flex flex-row font-sans'>
     <div className='grid grid-cols-1 p-1  bg-white rounded-lg shadow-lg w-80 h-96 transition-all duration-300 hover:scale-105'>
        <h2 className='text-2xl font-bold mb-2'>GitHub</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="rounded-full  w-30 h-30 "
      />
    
      <span className='text-center space-y-2 text-xl md:text-2xl lg:text-3xl font-bold '> {user.public_repos} </span>
      <p className='text-center  text-lg md:text-xs lg:text-xl'>Repos</p>
      
      
      <span className='text-center m-2 space-y-2 text-xl md:text-2xl lg:text-3xl  font-bold'>{user.followers} </span>
      <p  className='text-center text-lg md:text-xs lg:text-xl'>Followers</p>

      <span className='text-center space-y-2 text-xl md:text-2xl  lg:text-4xl font-bold'> {user.following}</span> 
      <p  className='text-center  text-lg md:text-xs lg:text-xl'>Following</p>
    </div>
    </div>
   

  );
}

export default GithubCard;
