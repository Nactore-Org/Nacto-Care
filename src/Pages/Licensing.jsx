import React from 'react';
import styled from 'styled-components';
import BackBtn from "../components/BackBtn/BackBtn";


const Licensing = () => {
  return (

    <>
    <div className="py-8 mb-5 w-[50vw] justify-start ml-auto mr-auto mt-10">
    <div>
      <BackBtn Page={"Licensing"} />
      <LicenseWrapper>
    
      <section>
      <p>Last updated: May 17, 2024</p>
        <p>Welcome to NactoCare. This Licensing Agreement governs your access and use of our software, content, and services. By accessing or using any part of our services, you agree to comply with and be bound by the terms outlined in this agreement.</p>
      </section>
      <section>
        <h2>License Grant</h2>
        <p>NactoCare hereby grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our services strictly in accordance with the terms of this agreement. This license does not include any rights to:</p>
        <ul>
          <li>Modify, distribute, or create derivative works of our software or content;</li>
          <li>Remove any proprietary notices or labels;</li>
          <li>Use any data mining, robots, or similar data gathering or extraction methods;</li>
          <li>Resell, sublicense, or publicly display any portion of our services;</li>
          <li>Use our services for any purpose that is unlawful or prohibited by this agreement.</li>
        </ul>
      </section>

      <section>
        <h2>Restrictions on Use</h2>
        <p>As a condition of your use of our services, you agree not to:</p>
        <ul>
          <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the services without express written permission from NactoCare;</li>
          <li>Use our services to transmit or post any unlawful, threatening, defamatory, obscene, or otherwise objectionable material;</li>
          <li>Engage in any activity that interferes with or disrupts the services or the servers and networks that host our services;</li>
          <li>Attempt to gain unauthorized access to any portion or feature of our services or any other systems or networks connected to our services;</li>
          <li>Use our services to develop a competing platform or service.</li>
        </ul>
      </section>
    
      <section>
        <h2>Changes to This Agreement</h2>
        <p>NactoCare reserves the right to modify or update this Licensing Agreement at any time. We will notify you of any changes by posting the new agreement on this page. Your continued use of our services after any such changes constitutes your acceptance of the new terms.</p>
      </section>
      <section>
        <h2>Contact Information</h2>
        <p>If you have any questions or concerns about this Licensing Agreement, please contact us at: Email: nactoreorganization@gmail.com</p>
      
      </section>
    </LicenseWrapper>
    </div>
  </div>
    
    </>
  );
};

const LicenseWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }

  address {
    font-style: normal;
    line-height: 1.6;
  }
`;

export default Licensing;