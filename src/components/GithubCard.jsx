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
     <div className='grid grid-cols-1 p-2 bg-white rounded-lg shadow-lg w-72 h-96  transition-all duration-300 hover:scale-105'>
        <h2 className='text-xl sm:text-1xl md:text-2xl lg:text-3xl font-bold'>GitHub</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="rounded-full w-24 h-24 mx-auto"
      />
      <h2 className="text-lg font-bold mt-2">{user.login}</h2>
      <p>Repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
}

export default GithubCard;
