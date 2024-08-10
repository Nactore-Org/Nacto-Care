import React from 'react';
import { useLocation } from 'react-router-dom';

const FindPatients = () => {
  const location = useLocation();
  const { city } = location.state || { city: 'Delhi' }; // Default to 'Delhi' if city is not passed

  const patients = [
    { name: 'John Doe', age: 65 },
    { name: 'Jane Doe', age: 70 },
    { name: 'Richard Roe', age: 72 },
  ];

  return (
    <div className='w-3/4 m-auto'>
      <h2 className='text-3xl font-bold mb-5'>Patients in {city}</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className='mb-4'>
            <div className='p-4 bg-gray-100 rounded-md'>
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindPatients;
