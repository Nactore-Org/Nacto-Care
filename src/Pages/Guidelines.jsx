import React from 'react';
import styled from 'styled-components';
import BackBtn from "../components/BackBtn/BackBtn";

const GuidelinesWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  @media (max-width: 760px) {
    max-width: 80%;
  }

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

const BrandGuidelines = () => {
  return (
    <>
    <div className="py-8 mb-5 w-full lg:w-[50vw] justify-start ml-auto mr-auto mt-10">
      <div>
        <BackBtn Page={"Brand Guidelines"} />
        <GuidelinesWrapper className='brand-guidelines'>
          <section>
            <p>Last updated: May 24, 2024</p>
            <p>
              Welcome to Nactore Brand Center. These Brand Guidelines govern the use of our brand assets, including our logo, colors, and typography. By using any of our brand assets, you agree to comply with and be bound by the terms outlined in these guidelines.
            </p>
          </section>
          <section>
            <h2 className='guideline-subheading'>Brand Assets</h2>
            <p>
              Our brand assets are valuable intellectual property and an important part of our corporate identity. Proper use of these assets is essential to maintain the consistency and integrity of our brand.
            </p>
          </section>
          <section>
            <h2 className='guideline-subheading'>Logo Usage</h2>
            <ul>
              <li>Use the logo as provided without any alterations.</li>
              <li>Maintain clear space around the logo to ensure visibility and impact.</li>
              <li>Avoid using the logo in a way that implies endorsement or partnership without permission.</li>
              <li>Do not use the logo in any manner that would disparage NactoCare.</li>
            </ul>
          </section>
          <section>
            <h2 className='guideline-subheading'>Color Palette</h2>
            <p>
              Consistent use of our color palette helps reinforce our brand identity. Please use the following colors:
            </p>
            <ul>
              <li>Primary Color: #0D47A1</li>
              <li>Secondary Color: #1976D2</li>
              <li>Accent Color: #FFC107</li>
              <li>Neutral Colors: #333333, #F5F5F5</li>
            </ul>
          </section>
          <section>
            <h2 className='guideline-subheading'>Typography</h2>
            <p>
              Use the following typefaces for all communications to maintain a consistent look and feel:
            </p>
            <ul>
              <li>Headlines: Arial Bold, size 24px</li>
              <li>Subheadings: Arial Regular, size 18px</li>
              <li>Body Text: Arial Regular, size 14px</li>
              <li>Captions: Arial Italic, size 12px</li>
            </ul>
          </section>
          <section>
            <h2 className='guideline-subheading'>Imagery</h2>
            <p>
              Use high-quality images that align with our brand values and messaging. Avoid using images that are blurry, pixelated, or inconsistent with our brand identity.
            </p>
          </section>
          <section>
            <h2 className='guideline-subheading'>Contact Information</h2>
            <p>
              If you have any questions or concerns about these Brand Guidelines, please contact us at:
              Email: <a href="mailto:nactoreorganization@gmail.com" style={{color: 'blue'}}>nactoreorganization@gmail.com</a>
            </p>
          </section>
        </GuidelinesWrapper>
      </div>
    </div>
    </>
  );
}

export default BrandGuidelines;
