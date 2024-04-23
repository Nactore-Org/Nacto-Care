import React from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import { Link } from "react-router-dom";

function CareersPage() {
  const handleRedirect = () => {
    window.location.href = `mailto:nactoreorganization@gmail.com?subject=${encodeURIComponent("[Healthcare Professional] Job Application for <position>")}`;
  };
  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-10">
        <div>
          <BackBtn Page={"Careers"} />
        </div>
      </div>
      <div className="m-auto flex flex-col items-center">
        <div className="m-auto object-contain my-0 px-12">
          <img width={1000} src="\assets\careers.png" alt="careers" />
        </div>
        <div className="block text-center smd:text-left smd:flex justify-between m-auto px-11 py-6 gap-11 mt-8 mb-8 ">
          <div>
            <div>
              <h4 className="font-bold text-2xl">Join Nacto Care</h4>
              <h2 className="font-bold text-center ml-auto mr-auto smd:ml-0 text-5xl my-4 smd:text-left max-w-[20ch]">
                We are looking for best healthcare professionals
              </h2>
              <p className="w-full text-center smd:text-left max-w-[72ch] my-2 text-zinc-600">
                We need you to join us in our journey to reshape healthcare in
                India. At Nacto Care, we empower nurses and enhance
                accessibility to healthcare, revolutionizing the industry. Join
                us to be part of a mission-driven team committed to making a
                meaningful impact.
              </p>
              <p className="w-full text-center smd:text-left max-w-[72ch] my-2 text-zinc-600">
                Let's cater the nursing in our nation and fulfill the needs and
                in return we give you an opportunity to earn and improve your
                lifestyle. A win win for all of us.
              </p>
            </div>
          </div>
          <div className="my-16 text-center m-auto smd:text-left">
            <div className="flex flex-col gap-3  items-center smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img
                  src="\assets\empowering.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl">
                  We Empower Healthcare workers
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                  Championing Indian nurses with better opportunities, support,
                  and career growth, fostering professional excellence.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-3 items-center  smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img src="\assets\time.png" height={100} width={100} alt="" />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl">
                  Own the Time
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                  Contribute to the gig economy by elevating nursing as a
                  freelancing career choice, while prioritizing your well-being
                  and satisfaction.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-3  items-center smd:gap-5  smd:flex  smd:flex-row max-w-[70ch] mb-4">
              <div>
                <img src="\assets\goal.png" height={100} width={100} />
              </div>
              <div className="max-w-[70ch] mb-3">
                <h2 className="text-zinc-700 font-bold text-xl">
                  Upskilling Opportunity
                </h2>
                <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                  We try to engage you with local communities fostering trust
                  and strengthening relationships for further opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-green-600 w-[80vw] mb-12  m-auto rounded-xl shadow-xl text-white text-center p-14 shadow-green-400 cursor-pointer"
        onClick={handleRedirect}
      >
        <h2 className="text-4xl font-bold">
          Send your Job Application @ Nacto-Care
        </h2>
      </div>
    </>
  );
}

export default CareersPage;
