import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nurse } from '../data/Nurse';
import hoslocation from '../../public/assets/location.png';
import degree from '../../public/assets/qualification.png'; 

const Nurses = () => {
  const location = useLocation();
  const { city } = location.state || { city: 'Unknown City' };

  const filteredNurses = Nurse.filter(nurse => nurse.location === city);

  return (
    <div className='block m-auto w-3/4'>
      <h1 className='text-green-500 text-3xl text-left font-semibold my-12'>Finding Best Nurses in {city}</h1>
      {filteredNurses.length > 0 ? (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-20'>
          {filteredNurses.map(({ id, name, hospital, profile, qualification }) => (
            <div key={id} className='flex flex-col items-center border p-4 rounded-lg shadow-md hover:opacity-75 transition duration-300'>
              <div className='flex w-full items-center justify-evenly'>
                <div className='w-24 h-24 mr-4'>
                  <img src={profile} alt={`${name}'s profile`} className='w-full h-full object-cover rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold ml-3'>{name}</h2>
                  <p className='text-gray-600 flex items-center gap-3'><img src={hoslocation} alt="" className='h-5 w-5'/>{hospital}</p>
                  <p className='text-gray-600 flex items-center gap-3'><img src={degree} alt="" className='h-5 w-5'/>{qualification}</p>
                </div>
              </div>
              <button className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300'>Book Now</button>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-red-500 text-2xl mb-20 text-center'>No nurses found in {city}</p>
      )}
    </div>
  );
};

export default Nurses;
