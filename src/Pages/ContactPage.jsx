import React, { useContext } from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import { ThemeContext } from "/src/main"; // Adjusted import path
import {motion} from "framer-motion";

function ContactPage() {
  const { theme } = useContext(ThemeContext); // Access the theme

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-10">
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{duration:2}}>
          <BackBtn Page={"Contact"} />
        </motion.div>
      </div>
      <div>
        <form className="bg-white dark:bg-gray-800 contact">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <motion.h2 initial={{ y: -200 }}
  whileInView={{ y:0}} transition={{ duration:1}}  className="mb-4 text-4xl font-extrabold text-center text-green-500">
              Contact Us
            </motion.h2>
            <motion.p initial={{ y: -200 }}
  whileInView={{ y:0}} transition={{ duration:1}}  className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-300 contact-para">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </motion.p>
            <div className="space-y-8">
              <motion.div initial={{ x: -200 }}
  whileInView={{ x:0}} transition={{ duration:1}}>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Email@Email.com"
                  required
                />
              </motion.div>
              <motion.div initial={{ x: -200 }}
  whileInView={{ x:0}} transition={{ duration:1}}>
                <label
                  htmlFor="subject"
                  className={`block mb-2 text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </motion.div>
              <motion.div initial={{ x: -200 }}
  whileInView={{ x:0}} transition={{ duration:1}} className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </motion.div>
              <motion.button initial={{ x: -200 }}
  whileInView={{ x:0}} transition={{ duration:1}}
                type="submit"
                className="py-3 px-5 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
