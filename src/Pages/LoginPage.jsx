import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function LoginPage() {
  const [passVis, setPassVis] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const recaptcha_token = await window.grecaptcha.execute('6LfsY-8pAAAAAKOXCgEf_anUnVPrcOhW9pfIAVyX', { action: 'submit' });

    const formData=new FormData(e.target);
    formData.append('recaptcha_token', recaptcha_token);

    const res=await axios.post('/auth/login', formData);
  }
  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js?render=6LfsY-8pAAAAAKOXCgEf_anUnVPrcOhW9pfIAVyX" async defer></script>
      </Helmet>
      <section className="bg-zinc-50 py-8 min-h-screen login">
        <div className="flex flex-col items-center max-w-[28rem] justify-center px-6 py-8 mx-auto mt-7 lg:py-8">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img className="w-8 h-8 mr-2" src="\assets\icon.webp" alt="logo" />
            <div className="login">Nacto Care</div>
          </a>
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" id="login-form" action="#" onSubmit={onSubmit}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type={passVis ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                  <span
                    onClick={() => setPassVis(!passVis)}
                    className="bg-red absolute right-4 top-10 text-gray-400 hover:cursor-pointer"
                  >
                    {passVis ? (
                      <IoEyeOff className="h-5 w-5" />
                    ) : (
                      <IoEye className="h-5 w-5" />
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-950"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
