import React from 'react'
import { useState } from 'react';

const Booking = () => {
  const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Here you would implement the logic to fetch search results based on the searchQuery
        // For now, let's just log the searchQuery to the console
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="max-w-lg mx-auto my-8 p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Home Care Tracker</h2>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    className="flex-1 border rounded-l-lg py-2 px-4"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg"
                    onClick={handleSearch}
                >
                    Go
                </button>
            </div>
            <div className='py-1'>
                {/* Display search results here */}
                {/* For now, let's just display a message */}
                <p className="italic">Results will appear here</p>
            </div>
            {/* Example of a checkbox */}
            <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Sample Result 1</span>
            </label>
        </div>
    );
};

export default Booking
