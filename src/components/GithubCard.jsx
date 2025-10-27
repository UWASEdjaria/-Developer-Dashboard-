import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';

function GithubCard() {
  const [user, setUser] = useState(null);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://api.github.com/users/UWASEdjaria') 

    
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p className="mt-4 text-center">Loading...</p>;

  return (
    <div className='flex flex-row font-sans'>
     <div className={`grid grid-cols-1 p-1 transition-all duration-300 rounded-lg shadow-lg w-80 h-96 hover:scale-105 ${
       dark ? 'bg-gray-800 text-white' : 'bg-white text-black'
     }`}>
        <h2 className={`p-1 mb-2 text-2xl font-bold text-center ${dark ? 'text-white' : 'text-black'}`}>GitHub</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="rounded-full w-30 h-30 "
      />
    
      <span className='space-y-2 text-xl font-bold text-center md:text-2xl lg:text-3xl'>{user.public_repos}</span>
      <p className='text-lg text-center md:text-xs lg:text-xl'>Repos</p>
      
      <span className='m-2 space-y-2 text-xl font-bold text-center md:text-2xl lg:text-3xl'>{user.followers}</span>
      <p className={`text-lg text-center md:text-xs lg:text-xl ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Followers</p>

      <span className='space-y-2 text-xl font-bold text-center md:text-2xl lg:text-4xl'>{user.following}</span> 
      <p className={`text-lg text-center md:text-xs lg:text-xl ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Following</p>
    </div>
    </div>
   

  );
}

export default GithubCard;
