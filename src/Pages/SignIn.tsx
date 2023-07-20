import React, {useState, useContext, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../assets";
import {useGoogleLogin, googleLogout} from "@react-oauth/google"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";
import { UserContextType } from "../types/Context";

const SignIn = () => {
  const [error, setError] = useState<string | undefined>("")
  const {user, addUser, logoutUser, isLoading, isNotLoading, loading} = useContext(UserContext) as UserContextType

  const navigate = useNavigate()
  const signIn = useGoogleLogin({
    onSuccess: (response: object) => {
      addUser(response)
      navigate('/dashboard')
    },
    onError: (error) => setError(error.error)
  })
  return (
    <section className="relative overflow-hidden font-poppins text-white bg-black flex flex-col items-center justify-center h-[110vh] ">
      <img src={logo} alt="" className="absolute w-64 -top-16" />
      <div className="px-5 relative flex flex-col gap-8 items-center h-full w-screen justify-center">
        <div className="text-center md:w-3/4 space-y-2">
          <div className="relative">
            <div className="absolute right-[5rem] -z-0 w-3/4 h-28 bg-purple-800 rounded-4xl blur-3xl"></div>
            <span className="relative z-10 font-extrabold lg:text-[6.5rem] md:text-[5rem] text-7xl text-gray-200 text-center lg:leading-[6.5rem] mg:[5rem] leading-[4.5rem] ">
              Sign in and get 10 free credits.
            </span>
          </div>
          <p className="font-light text-gray-400">
            Use 10 credits to generate 10 icons based on your needs!
          </p>
        </div>
        <button 
        className=" bg-blue-700 text-white font-light py-3 px-6 rounded-lg hover:scale-110 transition-all"
        onClick={() => signIn()}
        >
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default SignIn;
