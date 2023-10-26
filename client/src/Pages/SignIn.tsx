import React, { useState, useContext, useEffect } from "react";
import { logo } from "../images";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../Context/UserContextProvider";
import { UserContextType } from "../types/Context/signin";
import { Divider, Spinner } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { PricingAccessContext } from "../Context/PricingAccessContext";
import { IPricingAccessContextValues } from "../types/Context/pricing_access";
import SideAlert from "../components/dashboard/SideAlert";

const SignIn = () => {
  const [error, setError] = useState<{
    isError: boolean;
    errorMessage: string;
  }>({
    isError: false,
    errorMessage: "",
  });
  const { user, addUser, logoutUser, isLoading, isNotLoading, loading } =
    useContext(UserContext) as UserContextType;
  const {isAccessDenied, setIsAccessDenied} = useContext(PricingAccessContext) as IPricingAccessContextValues
  const [sideAlertOn, setSideAlertOn] = useState<boolean>(false)

  const [searchParams] = useSearchParams()
  useEffect(() => {
    if(searchParams.get("pricing_access") === "denied" && isAccessDenied) {
      setSideAlertOn(true)
      setTimeout(() => {
        setSideAlertOn(false)
        setIsAccessDenied(false)  
      }, 5000)
    }
  }, [])

  const signIn = useGoogleLogin({
    onSuccess: async function (response: object) {
      isLoading();
      try {
        const res = await addUser(response);
        if (res.status === 200) {
          searchParams.get("pricing_access") === "denied"
          ? window.location.href = "/pricing"
          : window.location.href = "/dashboard"
        }
      } catch (e) {
        setError({
          isError: true,
          errorMessage: "Something went wrong!",
        });
      }
      isNotLoading();
    },
    onError: (error) =>
      setError({
        isError: true,
        errorMessage: error.error as string,
      }),
  });
  return (
    <section className="relative overflow-hidden font-poppins text-white bg-black flex flex-col items-center justify-center h-screen ">
      <img src={logo} alt="" className="relative top-10 w-56 " />
      <div className="px-5 relative flex flex-col gap-8 items-center h-full w-screen justify-center">
        <div className="text-center md:w-3/4 space-y-2">
          <div className="relative">
            <div className="absolute right-[5rem]  -z-0 w-3/4 h-28 bg-purple-800 rounded-4xl blur-3xl"></div>
            <span className="relative z-10 font-extrabold lg:text-[6.5rem] md:text-[5rem] text-7xl text-gray-200 text-center lg:leading-[6.5rem] mg:[5rem] leading-[4.5rem] ">
              Sign in and get 10 free credits.
            </span>
          </div>
          <p className="font-light text-gray-400">
            Use 10 credits to generate 10 icons based on your needs!
          </p>
        </div>
        <button
          className=" flex gap-x-3 bg-white items-center text-blue-600 font-semibold text-xl font-light py-3 px-6 rounded-lg hover:scale-110 transition-all"
          onClick={() => signIn()}
        >
          {loading && <Spinner size="md" />}
          Sign in with Google
        </button>
        {error.isError && (
          <small className="text-red-500 text-lg">{error.errorMessage}</small>
        )}
      </div>
      {sideAlertOn && <SideAlert description="You need to sign in before accessing the pricing page!" />}
    </section>
  );
};

export default SignIn;
