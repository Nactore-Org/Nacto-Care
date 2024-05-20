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
        <h1 className="text-center text-2xl sm:text-6xl font-semibold leading-loose">
          Nacto Care excels at helping <br /> you{" "}
          <span className="text-green-500">stay healthy</span>
        </h1>
        <div className="pt-12 sm:pt-28 m-auto flex justify-center flex-wrap gap-4 text-center sm:px-28">
          <div className="flex flex-col justify-center items-center">
            <h5 className="font-semibold text-xl pb-2 text-green-500">
              Our Mission
            </h5>
            <p className="text-left w-full max-w-96 text-base">
            At Nacto Care, our mission is to bridge the gap in healthcare employment by empowering Indian nurses. With the aim of increasing the nurse-to-population ratio from 2.06 to 3 nurses per 1000 people, in alignment with WHO's convention, we are dedicated to transforming healthcare accessibility and quality across India. Join us in making a difference in the lives of millions through sustainable healthcare solutions.
            </p>
          </div>
          <div className="">
            <img src="/assets/group.png" width={400} height={400} alt="group" />
          </div>
        </div>

        <div className="pt-28 m-auto">
          <h5 className="font-semibold text-center text-xl pb-2 text-green-500">
            Our Story
          </h5>
          <div className="flex justify-center flex-wrap-reverse gap-4 text-center sm:px-28">
            <div className="">
              {/* <img src="/assets/mission.svg" width={250} height={250} /> */}
              <video width="400" height="400" controls>
                <source src="./Videos/video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-left w-full max-w-96 text-base">
              Nacto Care began with a vision to address the critical shortage of nursing professionals in India. Our journey is marked by a commitment to empowering nurses to lead and innovate in the healthcare sector. Through strategic partnerships, education initiatives, and advocacy efforts, we are shaping a future where every individual has access to quality healthcare services.
              </p>
            </div>
          </div>
        </div>
        <div id='about-us' style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
    <h5 className="font-semibold text-center text-xl pb-2 text-green-500 mt-32">Our Features</h5>
    <div className='about-us-block'>
        <div className='about-us-community' onMouseOver={()=>setNurseHovered(true)} onMouseLeave={()=>setNurseHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={nurseHovered ? nurse : nursehover} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Instant Care</div>
            </div>
            <p className='about-us-blk-para'>Experience seamless booking with Instant Care. Quickly schedule qualified nurses for in-home assistance, ensuring convenience and peace of mind for you and your loved ones.</p>
        </div>
        <div className='about-us-product' onMouseOver={()=>setCareerHovered(true)} onMouseLeave={()=>setCareerHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={careerHovered ? careerhover : career} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Nurse Careers</div>
            </div>
            <p className='about-us-blk-para'>Explore rewarding opportunities in nursing with Nursing Careers Hub. We offer comprehensive training, competitive benefits, and a supportive environment to nurture your professional growth as a nurse.</p>
        </div>
    </div>
    <div className='about-us-block'>
        <div className='about-us-location' onMouseOver={()=>setPlaceHovered(true)} onMouseLeave={()=>setPlaceHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={placeHovered ? anywherehover : anywhere} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Nationwide Reach</div>
            </div>
            <p className='about-us-blk-para'>Our commitment to healthcare accessibility means we're expanding Nationwide Reach. Now serving more cities across India, providing quality care wherever you are.</p>
        </div>
        <div className='about-us-event' onMouseOver={()=>setSupport(true)} onMouseLeave={()=>setSupport(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={support ? anytimehover : anytime} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
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
