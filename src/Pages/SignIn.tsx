import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  googleIcon,
  facebookIcon,
  twitterIcon,
  socialsIllustration,
} from "../assets";
import Wave from "../components/Wave";

const SignIn = () => {
  return (
    <section className="px-5 font-poppins text-white bg-black flex flex-col items-center gap-10 justify-center h-screen">
      <div className="relative flex flex-col gap-8 items-center h-full w-screen justify-center">
        <div className="text-center md:w-2/3 space-y-2">
          <div>  
            <div className="absolute -z-0 xl:top-[12rem] lg:top-[10rem] lg:right-[20rem] sm:right-[10rem] sm:top-[10rem] w-1/2 h-28 bg-blue-500 rounded-4xl blur-3xl"></div>
            <span className="relative z-10 font-extrabold text-8xl text-gray-200 text-center leading-[5rem] ">Sign in and get 10 free credits.</span>
          </div>
          <p className="font-light text-gray-400">Use 10 credits to generate 10 icons based on your needs!</p>
        </div>
        <button className=" bg-blue-700 text-white font-light py-2 px-5 rounded-lg hover:scale-110 transition-all">
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default SignIn;
''