import React from "react";

function Form() {
  return (
    <>
      <div className="bg-white dark:bg-[#333333] rounded-xl w-[70rem] p-6 drop-shadow-xl outline-1 outline-green-300 outline">
        <form class="w-full  m-auto">
          <div className="mb-6 px-3 font-bold text-2xl">
            <h2>Find your Home Care Taker</h2>
          </div>
          <div class="flex flex-1 flex-wrap  mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 dark:text-white text text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Select Medical Need
              </label>
              <select
                class="appearance-none  block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border dark:border-[#333333] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              >
                <option>Home Health</option>
                <option>Pharmacy</option>
                <option>Dental</option>
                <option>Long-term Acute Care</option>
                <option>Ambulatory Surgery</option>
                <option>Rehabilitation</option>
                <option>Behavioral Health</option>
                <option>Assisted Living</option>
                <option>Acute Care</option>
                <option>Nutritionist</option>
              </select>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide dark:text-white text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Select your city
              </label>
              <select
                class="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border dark:border-[#333333] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              >
                <option>New Delhi</option>
                <option>Hydrabad</option>
                <option>Mohali</option>
                <option>Mumbai</option>
                <option>Bengaluru</option>
                <option>Ahmedabad</option>
              </select>
            </div>
          </div>
          <div class="flex  flex-1 flex-wrap  mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                for="grid-city"
              >
                Choose Date
              </label>
              <input
                class="block appearance-none w-full bg-gray-200 dark:text-white dark:bg-gray-700 border dark:border-[#333333] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                type="date"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                for="grid-state"
              >
                Choose Time
              </label>
              <div class="relative">
                <input
                  class="block appearance-none w-full bg-gray-200 dark:text-white dark:bg-gray-700 border dark:border-[#333333] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  type="time"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3  md:mb-0  text-white text-xl font-semibold">
              <button className="bg-green-500 transition-all mb-6 w-full h-12 rounded-sm shadow-md hover:shadow-lg hover:shadow-green-400 shadow-green-300 md:mt-6">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
