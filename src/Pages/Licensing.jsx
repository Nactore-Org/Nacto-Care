import React from 'react';
import styled from 'styled-components';
import BackBtn from "../components/BackBtn/BackBtn";


const Licensing = () => {
  return (

    <>
    <div className="py-8 mb-5 w-[50vw] justify-start ml-auto mr-auto mt-10">
    <div>
      <BackBtn Page={"Licensing"} />
      <LicenseWrapper className='privacy'>
            <section>
              <p>Last updated: May 17, 2024</p>
              <p>
                Welcome to NactoCare. This Licensing Agreement governs your access and use of our software, content, and services. By accessing or using any part of our services, you agree to comply with and be bound by the terms outlined in this agreement.
              </p>
            </section>
            <section>
              <h2>GNU General Public License v3.0</h2>
              <p>
                This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
              </p>
              <p>
                This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
              </p>
              <p>
                You should have received a copy of the GNU General Public License along with this program. If not, see <a href="https://www.gnu.org/licenses/" target="_blank" rel="noopener noreferrer">https://www.gnu.org/licenses/</a>.
              </p>
            </section>
            <section>
              <h2>Permissions</h2>
              <ul>
                <li>Use: You are free to use the software for any purpose.</li>
                <li>Study: You have the freedom to study how the program works and change it to make it do what you wish.</li>
                <li>Distribute: You can redistribute copies of the original program so you can help others.</li>
                <li>Modify: You can distribute copies of your modified versions to others.</li>
              </ul>
            </section>
            <section>
              <h2>Conditions</h2>
              <ul>
                <li>
                  The source code must be made available when the software is distributed.
                </li>
                <li>
                  Any modifications to the software must be licensed under the GNU GPL v3.0 or later.
                </li>
                <li>
                  The license notice and copyright notice must be preserved in all copies or substantial portions of the software.
                </li>
              </ul>
            </section>
            <section>
              <h2>Contact Information</h2>
              <p>
                If you have any questions or concerns about this Licensing Agreement, please contact us at:
                  Email: <a href="mailto:nactoreorganization@gmail.com">nactoreorganization@gmail.com</a>
              </p>
            
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