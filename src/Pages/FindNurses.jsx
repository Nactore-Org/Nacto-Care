import React from 'react';
import { useLocation } from 'react-router-dom';

const FindNurses = () => {
  const location = useLocation();
  const { city } = location.state || { city: 'Delhi' }; // Default to 'Delhi' if city is not passed

  const nurses = [
    { name: 'Nurse A', experience: '5 years' },
    { name: 'Nurse B', experience: '3 years' },
    { name: 'Nurse C', experience: '8 years' },
  ];

  return (
    <div className='w-3/4 m-auto'>
      <h2 className='text-3xl font-bold mb-5'>Nurses in {city}</h2>
      <ul>
        {nurses.map((nurse, index) => (
          <li key={index} className='mb-4'>
            <div className='p-4 bg-gray-100 rounded-md'>
              <p><strong>Name:</strong> {nurse.name}</p>
              <p><strong>Experience:</strong> {nurse.experience}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindNurses;
