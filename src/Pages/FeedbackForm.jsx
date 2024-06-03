import React, { useContext, useState } from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import { ThemeContext } from "/src/main"; // Adjusted import path

function FeedbackPage() {
  const { theme } = useContext(ThemeContext); // Access the theme
  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRedirect = () => {
    const subject = encodeURIComponent("Feedback and Suggestions for Improvement");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nFeedback: ${feedback}`
    );
    window.location.href = `mailto:nactoreorganization@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRedirect();
  };

  return (
    <div className="py-8 px-4 lg:px-8 mx-auto max-w-screen-md">
      <BackBtn Page={"Feedback"} />
      <div className="mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-6">
          We'd Love Your Feedback!
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-8">
          Let us know how we're doing and how we can improve.
        </p>
        <div className="flex justify-center items-center mb-8">
          <label
            htmlFor="rating"
            className={`block mr-4 text-lg font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Rate us:
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleRatingChange(value)}
                className={`mr-2 ${
                  rating === value
                    ? "text-green-500"
                    : theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                } focus:outline-none`}
                style={{ fontSize: "2rem" }} // Adjust font size here
              >
                {rating >= value ? "😊" : "😐"}
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <label
            htmlFor="name"
            className={`block mb-2 text-lg font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="block w-full text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 p-4 mb-4"
            placeholder="Enter your name"
            required
          />
          <label
            htmlFor="email"
            className={`block mb-2 text-lg font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="block w-full text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 p-4 mb-4"
            placeholder="Enter your email"
            required
          />
          <label
            htmlFor="feedback"
            className={`block mb-2 text-lg font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            rows="6"
            value={feedback}
            onChange={handleFeedbackChange}
            className="block w-full text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 p-4 mb-4"
            placeholder="Let us know how we can improve..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;
