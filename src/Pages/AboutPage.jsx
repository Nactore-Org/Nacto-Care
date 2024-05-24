import React, { useState } from "react";
import nurse from '../../public/assets/booknurse.png'
import nursehover from '../../public/assets/booknursehover.png'
import anywhere from '../../public/assets/anywhere.png'
import anywherehover from '../../public/assets/anywherehover.png'
import anytime from '../../public/assets/anytime.png'
import anytimehover from '../../public/assets/anytimehover.png'
import career from '../../public/assets/nursecareer.png'
import careerhover from '../../public/assets/nursecareerhover.png'
import BackBtn from "../components/BackBtn/BackBtn";
import ourstory from '../../public/assets/ourstory.jpg'
import "../styles/AboutPage.css"

const AboutPage = () => {
  const [nurseHovered, setNurseHovered] = useState(false);
  const [placeHovered, setPlaceHovered] = useState(false);
  const [support, setSupport] = useState(false);
  const [careerHovered, setCareerHovered] = useState(false);

  return (
    <>
      <div className="py-8 mb-5 w-[50vw] justify-start ml-auto mr-auto mt-10">
        <div>
          <BackBtn Page={"About"} />
        </div>
      </div>
      <div className="mb-16">
        <h1 className=" text-center text-[6vw] lg:text-[4vw] font-semibold leading-[8vw] lg:leading-[6vw] ">
          Nacto Care excels at helping <br /> you{" "}
          <span className="text-green-500">stay healthy</span>
        </h1>
        <div className="pt-12 sm:pt-28 m-auto flex justify-center flex-wrap gap-6 lg:gap-12 text-center px-[6vw] lg:px-28">
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
            <h5 className="font-semibold text-xl text-green-500 sm:text-[2rem] lg:text-[3vw]">
              Our Mission
            </h5>
            <p className="text-left w-full lg:w-[35vw] text-base lg:text-[1.4vw] lg:leading-[2vw]">
              At Nacto Care, our mission is to bridge the gap in healthcare employment by empowering Indian nurses. With the aim of increasing the nurse-to-population ratio from 2.06 to 3 nurses per 1000 people, in alignment with WHO's convention, we are dedicated to transforming healthcare accessibility and quality across India. Join us in making a difference in the lives of millions through sustainable healthcare solutions.
            </p>
          </div>
          <div className="">
            <img src="/assets/group.png" width={400} height={400} alt="group" className="w-full lg:w-[35vw] rounded-xl" />
          </div>
        </div>

        <div className="pt-16 sm:pt-28 m-auto px-[6vw]">

          <div className="flex justify-center flex-wrap-reverse gap-6 sm:gap-8 lg:gap-14 text-center">
            <div className="">
              <img src={ourstory} width={400} height={400} className="w-full lg:w-[35vw] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="font-semibold text-center text-xl pb-4 sm:pb-6 lg:pb-8 text-green-500 sm:text-[2rem] lg:text-[3vw]">
                Our Story
              </h5>
              <p className="text-left w-full lg:w-[35vw] text-base lg:text-[1.4vw] lg:leading-[2vw]">
                Nacto Care began with a vision to address the critical shortage of nursing professionals in India. Our journey is marked by a commitment to empowering nurses to lead and innovate in the healthcare sector. Through strategic partnerships, education initiatives, and advocacy efforts, we are shaping a future where every individual has access to quality healthcare services.
              </p>
            </div>
          </div>
        </div>
        <div id='about-us' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h5 className="font-semibold text-center text-xl pb-2 lg:pb-6 text-green-500 mt-24 sm:mt-32 sm:text-[2rem]">Our Features</h5>
          <div className='about-us-block lg:px-16'>
            <div className='about-us-community' onMouseOver={() => setNurseHovered(true)} onMouseLeave={() => setNurseHovered(false)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={nurseHovered ? nurse : nursehover} alt="" style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }} />
                <div className='about-us-blk-text'>Instant Care</div>
              </div>
              <p className='about-us-blk-para'>Experience seamless booking with Instant Care. Quickly schedule qualified nurses for in-home assistance, ensuring convenience and peace of mind for you and your loved ones.</p>
            </div>
            <div className='about-us-product' onMouseOver={() => setCareerHovered(true)} onMouseLeave={() => setCareerHovered(false)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={careerHovered ? careerhover : career} alt="" style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }} />
                <div className='about-us-blk-text'>Nurse Careers</div>
              </div>
              <p className='about-us-blk-para'>Explore rewarding opportunities in nursing with Nursing Careers Hub. We offer comprehensive training, competitive benefits, and a supportive environment to nurture your professional growth as a nurse.</p>
            </div>
          </div>
          <div className='about-us-block lg:px-16'>
            <div className='about-us-location' onMouseOver={() => setPlaceHovered(true)} onMouseLeave={() => setPlaceHovered(false)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={placeHovered ? anywherehover : anywhere} alt="" style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }} />
                <div className='about-us-blk-text'>Nationwide Reach</div>
              </div>
              <p className='about-us-blk-para'>Our commitment to healthcare accessibility means we're expanding Nationwide Reach. Now serving more cities across India, providing quality care wherever you are.</p>
            </div>
            <div className='about-us-event' onMouseOver={() => setSupport(true)} onMouseLeave={() => setSupport(false)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={support ? anytimehover : anytime} alt="" style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }} />
                <div className='about-us-blk-text'>Support Hub</div>
              </div>
              <p className='about-us-blk-para'>Access Support Hub for round-the-clock assistance. Our dedicated team is here to address your inquiries and provide reliable support, ensuring your satisfaction with our services.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
