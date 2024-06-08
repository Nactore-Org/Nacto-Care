import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-zinc-100 footer">
          <div className="mx-auto w-3/4 py-6">
            <h1 className="font-bold text-3xl border-b-2 border-gray-300 pb-6">Nacto Care</h1>
            <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm text-gray-900 uppercase footer-heading font-bold">
                  Company
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="/about" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/careers" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/ourbrand" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/blog" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase footer-heading">
                  Help center
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="/contact" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/faq" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/feedback" className="hover:underline">
                      Help Us Improve!
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase footer-heading">
                  Legal
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="/privacypolicy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/licensing" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/termsandconditions" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/guidelines" className="hover:underline">
                      Brand Guidelines
                    </a>
                  </li>
                </ul>
              </div>
              <div >
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase footer-heading">
                  Connect
                </h2>
                <ul className="text-gray-500 flex items-center gap-5  font-medium">
                  <li className="w-[20%] md:w-[15%] sm:w-[10%] lg:w-[15%] xlg:w-[9%]">
                    <a href="https://www.linkedin.com/company/nactore-organization/about/" className="hover:underline" target="_blank" title="LinkedIn">
                     <img src="./assets/LinkedInIcon.svg" alt="LinkedIn logo"  /> 
                    </a>
                  </li>
                  <li className="w-[20%] md:w-[15%] sm:w-[10%] lg:w-[15%] xlg:w-[9%] max-w-7">
                    <a href="https://github.com/Nactore-Org/Nacto-Care" className="hover:underline" target="_blank" title="Github">
                    <img src="./assets/GithubIcon.svg" alt="Github logo"  /> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-4 flex items-center justify-center">
              © {new Date().getFullYear().toString()} Nactore Organization, Building for democracy with care
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
