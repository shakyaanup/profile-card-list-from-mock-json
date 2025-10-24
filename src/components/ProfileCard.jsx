import React from 'react';

const ProfileCard = ({ name, role, avatar, active }) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-5 flex flex-col items-center text-center'>
      <img
        className='w-24 h-24 rounded-full object-cover mb-5' 
        src={avatar} 
        alt="profile" 
      />
      <h2 className='text-lg font-semibold'>{name}</h2>
      <p className='text-gray-500 mb-2'>{role}</p>
      {
        active ? (
          <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm'>Active</span>
        ) : (
          <span className='px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm'>Inactive</span>
        )
      }
      
    </div>
  );
}

export default ProfileCard;