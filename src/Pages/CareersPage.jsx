import React from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import { Link } from "react-router-dom";

function CareersPage() {
  const handleRedirect = () => {
    window.location.href = `mailto:nactoreorganization@gmail.com?subject=${encodeURIComponent("[Healthcare Professional] Job Application for <position>")}`;
  };
  return (
    <>
      <div className="py-2 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-5">
        <div>
          <BackBtn Page={"Careers"} />
        </div>
      </div>
      <div className="m-auto flex flex-col items-center">
        <div className="m-auto object-contain my-0 px-12 sm:px-14 md:px-20 smd:px-14">
          <img width={1000} src="\assets\careers.webp" alt="careers" />
        </div>
        <div className=" text-center smd:text-left smd:flex justify-between m-auto px-7 py-6 gap-11 mt-8 mb-5 ">
          <div className="sm:px-[4vw]">
            <div>
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl">Join Nacto Care</h4>
              <h2 className="font-bold text-center mx-auto text-3xl sm:text-4xl md:text-5xl leading-[2rem] my-6 smd:ml-0 smd:text-left max-w-[20ch]">
                We are looking for best healthcare professionals
              </h2>
              <p className="mx-auto text-xm text-center smd:text-left max-w-[72ch] my-2 text-zinc-600">
                We need you to join us in our journey to reshape healthcare in
                India. At Nacto Care, we empower nurses and enhance
                accessibility to healthcare, revolutionizing the industry. Join
                us to be part of a mission-driven team committed to making a
                meaningful impact.
              </p>
              <p className="mx-auto text-xm text-center smd:text-left max-w-[72ch] my-2 text-zinc-600">
                Let's cater the nursing in our nation and fulfill the needs and
                in return we give you an opportunity to earn and improve your
                lifestyle. A win win for all of us.
              </p>
            </div>
          </div>
          <div className="mt-16 mb-4 text-center m-auto sm:flex sm:px-8 sm:gap-8 smd:block smd:text-left">
            <div className="flex flex-col gap-3  items-center smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img
                  src="\assets\empowering.webp"
                  height={100}
                  width={100}
                  alt=""
                  className="w-[5rem] sm:w-[4rem] smd:w-[7rem] lg:w-[6rem] xl:w-[5rem]"
                />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl sm:mb-2 smd:mb-0">
                  We Empower Healthcare workers
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium text-xm sm:text-[0.9rem] smd:text-xm">
                  Championing Indian nurses with better opportunities, support,
                  and career growth, fostering professional excellence.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-3 items-center  smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img src="\assets\times.webp" height={100} width={100} alt="" className="w-[5rem] sm:w-[4rem] smd:w-[7rem] lg:w-[6rem] xl:w-[5rem]" />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl sm:mb-2 smd:mb-0">
                  Own the Time
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium sm:text-[0.9rem] smd:text-xm">
                  Contribute to the gig economy by elevating nursing as a
                  freelancing career choice, while prioritizing your well-being
                  and satisfaction.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-3  items-center smd:gap-5  smd:flex  smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img src="\assets\up.webp" height={100} width={100} className="w-[5rem] sm:w-[4rem] smd:w-[7rem] lg:w-[6rem] xl:w-[5rem]" />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl sm:mb-2 smd:mb-0">
                  Upskilling Opportunity
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium sm:text-[0.9rem] smd:text-xm">
                  We try to engage you with local communities fostering trust
                  and strengthening relationships for further opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-green-600 w-[80vw] mb-12  m-auto rounded-xl shadow-xl text-white text-center px-4 py-5 md:py-7 lg:py-8 shadow-green-400 cursor-pointer"
        onClick={handleRedirect}
      >
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
          Send your Job Application @ Nacto-Care
        </h2>
      </div>
    </>
  );
}

export default CareersPage;