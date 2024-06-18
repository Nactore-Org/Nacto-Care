import React, { useContext, useState } from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "/src/main"; // Adjusted import path

function ContactPage() {
    const { theme } = useContext(ThemeContext); // Access the theme

    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')


    const handleEmailSubmit=(e)=>{
      e.preventDefault();

      const templateParams={
        from_email:email,
        to_name:"Nacto-care",
        subject:subject,
        message: message,
      }

      emailjs.send("service_lktb68z","template_4vxjnl1",templateParams,"o6kveYmOSDrs0l1Mg")
      .then((response)=>{
        console.log("email sent",response)
        alert("Your message has been sent successfully! Will get back to you as soon as possible.")
        setEmail('')
        setSubject('')
        setMessage('')        
      })
      .catch((err)=>{
        console.log("error",err)
        alert("Sorry, something went wrong while sending your message. Please try again later.");
      })
    }

  return (
    <>
      <div className="py-8 mb-5 flex w-[50vw] justify-start ml-auto mr-auto mt-10">
        <div>
          <BackBtn Page={"Contact"} />
        </div>
      </div>
      <div>
        <form className="bg-white dark:bg-gray-800 contact" onSubmit={handleEmailSubmit}>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl font-extrabold text-center text-green-500">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-300 contact-para">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <div className="space-y-8">
              <div>
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
                  name='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Email@Email.com"
                  required
                />
              </div>
              <div>
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
                  name="subject"
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                  className="block p-3 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
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
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
