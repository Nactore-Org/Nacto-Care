import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import VanillaTilt from "vanilla-tilt";
import certifiedWorkers from "../Pages/Images/certifiedWorkers.jpeg";
import getCareAnywhere from "../Pages/Images/getCareAnywhere.jpg";
import noHiddenFees from "../Pages/Images/noHiddenFees.png";

function LandingPage() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <>
      <div className="relative">
        {/* Block 1 */}
        <div
          className="h-[45rem] py-28 text-center lxg:text-left lxg:w-[70rem] m-auto justify-center gap-8 relative bg-gradient-to-b flex"
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
            <div className="mt-12 sm:mt-9 flex items-center flex-col sm:flex-row sm:justify-center lxg:justify-start sm:gap-4">
              <Link to="book-nurse">
                <button className="bg-green-600 w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-black hover:shadow-lg hover:scale-105 hover:shadow-green-400 text-white px-12 py-3 rounded-sm">
                  Book Nurse
                </button>
              </Link>
              <ScrollLink to="block2" smooth={true} offset={-125} duration={85}>
                <button className="bg-sky-500/100 w-48 mb-4 sm:mb-0 sm:min-w-[10rem] transition-all shadow-lg shadow-black hover:shadow-lg hover:shadow-cyan-400 hover:scale-105 text-white px-12 py-3 rounded-sm">
                  Learn More
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="py-10 items-end hidden lxg:flex px-7" data-tilt>
            <img
              width={400}
              height={400}
              src="/assets/Nurse.webp"
              style={{ filter: "drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.3))" }}
              alt="nurse"
              className="w-[22rem] float"
            />
          </div>
        </div>
        <div className="lg:mx-14 mx-4 md:mx-10 lg:mt-11 flex justify-center basis-[16rem] ">
          <Form />
        </div>

        {/* Block 2 */}
        <div className="px-8 lg:px-16 mt-24 sm:mt-28 md:my-28" id="block2">
          <div className="text-center mb-14 flex flex-col gap-4">
            <h3 className="text-xl sm:text-3xl font-medium">
              Book a health checkup now
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Quick & easy care for elderly and your loved ones
            </h2>
          </div>
          <div className="flex flex-col m-auto max-w-[75rem] lg:flex-row justify-evenly mt-14 lg:mt-28">
            <div className="flex flex-col items-center">
              <img
                src="/assets/nurseFlaticon.webp"
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
                src="/assets/customer.webp"
                width={130}
                height={130}
                className="block"
                alt=""
              />
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">Contact Support</h2>
                <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns.
                </p>
              </div>
            </div>
            {/* We Care for You */}
            <div className="flex flex-col items-center mt-14 lg:mt-0">
              <img
                src="/assets/health-insurance.webp"
                width={130}
                height={130}
                className="block"
                alt=""
              />
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">We Care for You</h2>
                <p className="max-w-[40ch] mt-3 text-gray-500 font-medium">
                  Personalized care tailored to you, with comprehensive health
                  insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 5 */}
        <div className="m-auto flex flex-col items-center text-center">
          <div className="px-11 py-6 mt-8 mb-8">
            <h4 className="font-bold text-2xl text-center">Why Choose Us</h4>
            <div className="flex flex-col sm:flex-row justify-center mt-4 gap-12">
              <div className="max-w-[45ch] text-left px-4">
                <h2 className="font-bold text-3xl mb-4">
                  We value health, healthcare workers, and the nation
                </h2>
                <p className="text-zinc-600 mb-4">
                  We believe in valuing every aspect of health, from individual
                  wellness to the tireless dedication of those who nurture it.
                  Nurses in India are migrating to different nations to find better
                  opportunities, but we are on a mission to provide them work
                  opportunities by fulfilling the needs of home nursing as a
                  freelancing solution and connecting the patients with certified
                  nurses.
                </p>
                <p className="text-zinc-600">
                  For the care seekers, we provide personalized healthcare care plans
                  and health insurance which will protect them in case of emergency.
                  Covering both the aspects of care seekers and care givers, we aim to
                  solve the health care needs of the world's largest democratic nation.
                </p>
              </div>
              <div className="max-w-[45ch] px-4">
                <div className="flex flex-col gap-6 mt-8 sm:mt-0">
                  <div className="flex items-center">
                    <img
                      src={certifiedWorkers}
                      height={150}
                      width={150}
                      alt="Certified Professional Healthcare Workers"
                      className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                    <div className="ml-4">
                      <h2 className="text-green-500 font-bold text-xl">
                        Certified Professional Healthcare Workers
                      </h2>
                      <p className="text-zinc-500 font-medium text-xm">
                        We ensure quality care by connecting you with certified healthcare
                        professionals you can trust. Your well-being is our priority.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={noHiddenFees}
                      width={150}
                      height={150}
                      alt="No Hidden Charges"
                      className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                    <div className="ml-4">
                      <h2 className="text-blue-500 font-bold text-xl">
                        No Hidden Charges
                      </h2>
                      <p className="text-zinc-500 font-medium text-xm">
                        Enjoy peace of mind with our no hidden charges policy. We believe in
                        transparent and honest pricing. What you see is what you pay.
                        </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={getCareAnywhere}
                    height={150}
                    width={150}
                    alt="Get Care Anywhere"
                    className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  />
                  <div className="ml-4">
                    <h2 className="text-red-500 font-bold text-xl">
                      Get Care, Anywhere
                    </h2>
                    <p className="text-zinc-500 font-medium text-xm">
                    We are constantly expanding our service across cities in India.
                      </p>
                    </div>
                  </div>
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