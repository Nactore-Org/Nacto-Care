import React, { useState } from 'react';
import '../styles/Faq.css';
import { questions } from '../components/FAQ/Faqdata';
import BackBtn from '../components/BackBtn/BackBtn';
import Faqpage from './Faqpage';

const Faq = () => {
    const [data, setData] = useState(questions);
  return (
    <div className="py-8 mb-5 w-11/12 lg:w-[50vw] justify-start ml-auto mr-auto mt-10">
        <BackBtn Page={"FAQ"} />
        <div>
            {
                data.map((curr) => {
                    return <Faqpage key={curr.id} {...curr}/>
                })
            }
        </div>
    </div>
  )
}

export default Faq