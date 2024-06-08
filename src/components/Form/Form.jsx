import React from "react";

function Form() {

  // Handling submission of the form
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const date = document.querySelector(".input__date").value;
    const time = document.querySelector(".input__time").value;

    const dateSplitted = date.split("-")
    const timeSplitted = time.split(":")
    const inputDateTime = new Date(dateSplitted[0], `${Number(dateSplitted[1])-1}`, dateSplitted[2], timeSplitted[0],timeSplitted[1],0,0 );

    const currentDateTime = new Date()

    const inputValidationDate = document.querySelector(".input__validation-date");
    const inputValidationTime = document.querySelector(".input__validation-time");

    if(inputDateTime.getDate()<currentDateTime.getDate() || date===""){
      inputValidationDate.textContent = "Please enter a valid date"  
    }
    else
      inputValidationDate.textContent = ""

    if(currentDateTime.getDate()===inputDateTime.getDate() && inputDateTime.getTime()<currentDateTime.getTime() || time===""){
      inputValidationTime.textContent = "Please enter a valid time"; 
    }else 
      inputValidationTime.textContent = ""
    
  }
  return (
    <>
      <div className="bg-white dark:bg-[#333333] rounded-xl w-[70rem] p-6 drop-shadow-xl outline-1 outline-green-300 outline">
        <form class="w-full  m-auto" onSubmit={(e)=>handleFormSubmit(e)}>
          <div className="mb-6 px-3 font-bold text-2xl">
            <h2>Find your Home Care Taker</h2>
          </div>
          <div class="flex flex-1 flex-wrap  mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 dark:text-white text text-xs font-bold mb-2"
                htmlFor="grid-first-name"
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
                htmlFor="grid-first-name"
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
                htmlFor="grid-city"
              >
                Choose Date
              </label>
              <div>
                <input
                  class="input__date block appearance-none w-full bg-gray-200 dark:text-white dark:bg-gray-700 border dark:border-[#333333] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  type="date"
                />
                <label htmlFor="grid-state" className="input__validation-date  text-rose-500 font-extrathin"></label>
              </div>
              
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Choose Time
              </label>
              <div class="relative">
                <input
                  class="input__time block appearance-none w-full bg-gray-200 dark:text-white dark:bg-gray-700 border dark:border-[#333333] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  type="time"
                />
              <label htmlFor="grid-state" className="input__validation-time  text-rose-500 font-extrathin"></label>
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
