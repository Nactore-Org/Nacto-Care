import React from "react";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="relative">
        {/* Block 1 */}
        <div
          className="h-[45rem] py-28 text-center lxg:text-left lxg:w-[70rem] m-auto justify-center gap-8 relative bg-gradient-to-b flex "
          id="block1"
        >
          <div className="py-10 px-7">
            <h4 className="font-semibold sm:text-3xl text-2xl mb-3">
              Empower Indian Nurses
            </h4>
            <h2 className="max-w-[16ch] m-auto sm:text-6xl lxg:ml-0 font-bold text-5xl mb-5">
              <span className="text-green-500">Book your Home Care</span> now
              using Nacto Care
            </h2>
            <p className="max-w-[55ch] m-auto lxg:ml-0 mb-6">
              Find the nurse you need for your loved ones at home. Professional
              Cure, personalized care plans, flexible scheduling, health
              insurance and much more.
            </p>
            <div className="mt-12 sm:mt-9 flex items-center flex-col sm:flex-row sm:justify-center  lxg:justify-start sm:gap-4">
              <Link to="book-nurse"><button className="bg-green-600 w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-green-300 hover:shadow-lg hover:scale-105 hover:shadow-green-400 text-white px-12 py-3 rounded-sm">
                Book Nurse
              </button>
              </Link>
              <a href="#block2">
                {/* TODO : Change this about to some block below since we are not planning an about page */}
                <button className="bg-black w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-zinc-300 hover:shadow-lg hover:shadow-zinc-400 hover:scale-105 text-white px-12 py-3 rounded-sm">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="py-10  items-end hidden lxg:flex px-7">
            <img
              width={400}
              height={400}
              src="/assets/Nurse.png"
              style={{ filter: "drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.3))" }}
              alt="nurse"
            />
          </div>
        </div>
        <div className="mx-14 mt-11 flex justify-center basis-[16rem] sm:mx-24">
          <Form />
        </div>

        {/* Block 2 */}
        <div className="px-8 lg:px-16  sm:mt-28 md:mt-28 mb-28" id="block2">
          <div className="text-center mb-14 ">
            <h3 className="text-3xl font-medium">Book a health checkup now</h3>
            <h2 className="text-5xl font-bold">
              Quick & easy care for elderly and your loved ones
            </h2>
          </div>
          <div className="flex flex-col  m-auto max-w-[75rem] lg:flex-row justify-evenly mt-14 lg:mt-28">
            <div className="flex flex-col items-center">
              <img
                src="/assets/nurseFlaticon.png"
                width={130}
                height={130}
                className="block"
                alt=""
              />
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">Professional Nurse</h2>
                <p className="max-w-[36ch] mt-3 text-gray-500 font-medium">
                  We provide a wide selection of nurses for all your healthcare
                  needs. We have the perfect caregiver to meet your
                  requirements.
                </p>
              </div>
            </div>
            {/* Contact Support */}
            <div className="flex flex-col items-center mt-14 lg:mt-0">
              <img
                src="/assets/customer-support.png"
                width={130}
                height={130}
                className="block"
                alt=""
              />
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">Contact Support</h2>
                <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
            </div>
            {/* Let's Ride */}
            <div className="flex flex-col items-center mt-14 lg:mt-0">
              <img
                src="/assets/health-insurance.png"
                width={130}
                height={130}
                className="block"
                alt=""
              />
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">We Care for you</h2>
                <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                  Personalized care tailored to you, with comprehensive health
                  insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        {/* <div className="mt-52 max-w-screen-xl mx-auto" id="block3">
          <div className="text-center">
            <h3 className="text-3xl font-medium">Category</h3>
            <h2 className="text-5xl mb-20 font-bold">Choose your ride now</h2>
          </div>
          <CatPrev />
        </div> */}

        {/* Block 5 */}
        <div className="m-auto flex flex-col items-center">
          <div className="block text-center smd:text-left smd:flex justify-between m-auto px-11 py-6 gap-11 mt-8 mb-8 ">
            <div>
              <div>
                <h4 className="font-bold text-2xl">Why Choose Us</h4>
                <h2 className="font-bold text-center ml-auto mr-auto smd:ml-0 text-5xl my-4 smd:text-left max-w-[20ch]">
                  We value for health, healthcare workers and the nation
                </h2>
                <p className="w-full text-center smd:text-left max-w-[65ch] my-2 text-zinc-600">
                  We believe in valuing every aspect of health, from individual
                  wellness to the tireless dedication of those who nurture it.
                  Nurses in India are migrating to different nation to find
                  better opportunities but we are on a mission to provide them
                  work opportunities by fulfilling the needs of home nursing as
                  a freelancing solution and connect the patients with certified
                  nurses.
                </p>
                <p className="w-full text-center smd:text-left max-w-[65ch] my-2 text-zinc-600">
                  For the care seekers, We provide them personalized healthcare
                  care plans and health insurances which will protect them in
                  case of emergency. Covering both the aspects of care seekers
                  and care givers we are aiming to solve the health care for
                  world's largest democratic nation.
                </p>
              </div>
            </div>
            <div className="my-16 text-center m-auto smd:text-left">
              <div className="flex flex-col gap-3  items-center smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img
                    src="\assets\health-professional.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    Certified Professional Healthcare workers
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    We ensure quality care by connecting you with certified
                    healthcare professionals you can trust. Your well-being is
                    our priority.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  gap-3 items-center  smd:gap-5 smd:flex smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img src="\assets\debt.png" height={100} width={100} alt="" />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    No Hidden Charges
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing and what you see
                    will be the last amount that you'd ever pay.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-3  items-center smd:gap-5  smd:flex  smd:flex-row max-w-[70ch] mb-4">
                <div>
                  <img src="\assets\india.png" height={100} width={100} />
                </div>
                <div className="max-w-[70ch] mb-3">
                  <h2 className="text-zinc-700 font-bold text-xl">
                    Get Care, Anywhere
                  </h2>
                  <p className="max-w-[38ch] text-zinc-500 font-medium text-xm">
                    We are constantly expanding our service across cities in
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
