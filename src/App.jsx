import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import profileData from './data/profiles.json';

function App() {
  const [ proifles, setProfiles ] = useState([]);

  useEffect(() => {
    setProfiles(profileData);
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-8'>
      <h1 className='text-2xl font-bold mb-8'>Our Team</h1>
      <div className='grid gap-5 grid-cols-3'>
        { proifles.map((profile) => (
          <ProfileCard 
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            active={profile.active}
          />
        )) }
      </div>
    </div>
  )
}

export default App
