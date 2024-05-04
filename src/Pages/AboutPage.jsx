import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="py-12 sm:py-28 px-4">
        <h1 className="text-center text-2xl sm:text-6xl font-semibold leading-loose">
          Nacto Care excels at helping <br /> you{" "}
          <span className="text-green-500">stay healthy</span>
        </h1>
        <div className="pt-12 sm:pt-28 m-auto flex justify-center flex-wrap gap-4 text-center sm:px-28">
          <div className="flex flex-col justify-center items-center">
            <h5 className="font-semibold text-xl pb-2 text-green-500">Our Mission</h5>
            <p className="text-left w-full max-w-96 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="">
            <img src="/assets/group.png" width={400} height={400} alt="group" />
          </div>
        </div>

        <div className="pt-28 m-auto">
        <h5 className="font-semibold text-center text-xl pb-2 text-green-500">Our Story</h5>
        <div className="flex justify-center flex-wrap-reverse gap-4 text-center sm:px-28">
          <div className="">
            {/* <img src="/assets/mission.svg" width={250} height={250} /> */}
            <video width="400" height="400" controls >
                  <source src="./Videos/video1.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-left w-full max-w-96 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
