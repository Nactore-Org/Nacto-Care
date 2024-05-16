import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-zinc-100 ">
          <div className="mx-auto w-full max-w-screen-xl">
            <h1 className="font-bold py-5 px-4 text-3xl">Nacto Care</h1>
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Company
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Help center
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="https://www.linkedin.com/company/nactore-organization/about/" className="hover:underline">
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://github.com/Nactore-Org/Nacto-Care" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Legal
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4  flex items-center justify-center">
            © 2024 Nactore Organization, Building for democracy with care
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
