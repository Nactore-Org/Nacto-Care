import React from 'react';
import brand from "../../public/assets/brand.avif";
import guidelines from '../../public/assets/guidelines.jpg';
import care from '../../public/assets/care.png';
import caretaker from '../../public/assets/caretaker.png';
import reliable from '../../public/assets/reliable.png';
import '../styles/BrandCenter.css';

const BrandCenter = () => {
  return (
    <>
      <div className='w-full p-10 font-bold text-grey-500 text-5xl text-center bg-blue-300'>Nacto Care Brand Centre</div>
      <div className='flex flex-col w-full lg:w-10/12 mx-auto gap-16 lg:gap-40 pb-20 lg:pb-40 px-4 lg:px-0'>

        <div className='flex flex-col gap-10 mt-20 lg:mt-40 lg:flex-row items-center justify-center lg:justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-xl font-bold lg:text-3xl'>Welcome!</h2><br/>
            <p className='font-semibold'>At Nacto Care, our brand represents our core values and commitment to exceptional care. We believe in presenting a unified brand appearance, with compelling stories and design that authentically reflect our identity.</p><br/>
            <p>Our brand assets reflect our dedication to providing compassionate and professional care to our clients, ensuring consistency and trustworthiness in every interaction. Our brand embodies our dedication to excellence and compassion, ensuring that every aspect of our identity reflects our commitment to exceptional care.</p>
          </div>
          <div className='w-full lg:w-2/5 flex justify-center'>
            <img src={brand} alt="" className='w-3/4 lg:w-full'/>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
          <div className='w-full lg:w-2/5 flex items-start justify-center mb-8'>
            <img width={70} src="\assets\icon.png" alt="Logo" className='h-2/3 w-2/3'/>
          </div>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-xl font-bold lg:text-3xl'>Download Brand Assets</h2><br/>
            <p>Download our brand assets to access high-quality logos, images, fonts, and design elements. These assets adhere to our brand guidelines, ensuring consistency and professionalism in your communications. Whether you're creating posters, brochures, or digital content, our brand assets will help you maintain the integrity of our brand identity across all channels.</p><br/>
            <a href="\assets\icon.png" className='text-blue-800 underline font-semibold link' download>Click here to Download Logo</a><br/>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-xl font-bold lg:text-3xl'>Brand Guidelines</h2><br/>
            <p>Here you will find our comprehensive brand guidelines, designed to help you create various communication assets such as posters, brochures, roll-ups, site signages, and imagery. These guidelines ensure consistency in our visual and verbal identity across all platforms, maintaining a cohesive and professional brand image. Our brand guidelines cover key aspects including logo usage, color palette, typography, imagery style, and tone of voice, empowering you to effectively represent our brand in all communications.</p><br/>
            <a href="/guidelines" className='text-blue-800 underline font-semibold link'>Read more</a><br/>
          </div>
          <div className='w-full lg:w-2/5 flex justify-center mt-8'>
            <img src={guidelines} alt="" className='w-3/4 lg:w-full'/>
          </div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row bg-blue-950 justify-between py-10 w-full rounded-md'>
          <div className='w-full lg:w-1/3 flex flex-col items-center justify-center image-container'>
            <img src={reliable} alt="" className='w-40 h-40'/>
            <p className='font-bold text-2xl text-white mt-5 text-center'>100% Reliable</p>
            <p className='text-large text-white text-center'>Trust and Safety Assurance</p>
          </div>
          <div className='w-full lg:w-1/3 flex flex-col items-center justify-center image-container'>
            <img src={care} alt="" className='w-40 h-40'/>
            <p className='font-bold text-2xl text-white mt-5 text-center'>Expert Care</p>
            <p className='text-large text-white text-center'>Highly Qualified Nurses you can count on</p>
          </div>
          <div className='w-full lg:w-1/3 flex flex-col items-center justify-center image-container'>
            <img src={caretaker} alt="" className='w-40 h-40'/>
            <p className='font-bold text-2xl text-white mt-5 text-center'>Consistent Support</p>
            <p className='text-large text-white text-center'>Seamless Continuity of Caregiving</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandCenter;
