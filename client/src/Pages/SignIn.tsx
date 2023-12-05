import React, { useState, useContext, useEffect } from "react";
import { logo } from "../images";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../Context/UserContextProvider";
import { UserContextType } from "../types/Context/signin";
import { Divider, Spinner, useToast } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { PricingAccessContext } from "../Context/PricingAccessContext";
import { IPricingAccessContextValues } from "../types/Context/pricing_access";
import { Helmet } from "react-helmet";

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
  const { isAccessDenied, setIsAccessDenied } = useContext(
    PricingAccessContext
  ) as IPricingAccessContextValues;
  const toast = useToast();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("pricing_access") === "denied" && isAccessDenied) {
      toast({
        title: "Cannot access the pricing page",
        description: "You're not signed in",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
  }, []);

  const signIn = useGoogleLogin({
    onSuccess: async function (response: object) {
      isLoading();
      try {
        const res = await addUser(response);
        if (res.status === 200) {
          searchParams.get("pricing_access") === "denied"
            ? (window.location.href = "/pricing?pricing_access=true")
            : (window.location.href = "/dashboard?account_created=true");
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
    <main>
      <Helmet>
        <html lang="en" />
        <title>Sign in</title>
        <meta name="description" content="Sign in to our platform and get 3 free credits if you're using the app for the first time" />
        <meta name="keywords" content="icons, AI, AI icons, 3d illustrations, 3d vectors, pixel art, 3d style, design tool, iconize ai pricing, pricing plan, 3d icons, ai logo" />
      </Helmet>

      <section className="relative overflow-hidden font-poppins text-white bg-gray-200 dark:bg-black flex flex-col items-center justify-center h-screen ">
        <img src={logo} alt="" className="relative top-10 w-56 " />
        <div className="px-5 relative flex flex-col gap-8 items-center h-full w-screen justify-center">
          <div className="text-center md:w-3/4 space-y-2">
            <div className="relative">
              <div className="absolute right-[5rem]  -z-0 w-3/4 h-28 dark:bg-blue-900 bg-blue-200 rounded-4xl blur-3xl"></div>
              <span className="relative z-10 font-extrabold lg:text-[6.5rem] md:text-[5rem] text-7xl dark:text-gray-200 text-gray-800 text-center lg:leading-[6.5rem] mg:[5rem] leading-[4.5rem] ">
                Sign in and get 3 free credits.
              </span>
            </div>
            <p className="font-light dark:text-gray-400 text-gray-600">
              If your signing in for the first time, you'll get to generate 3
              icons with 3 free given credits!
            </p>
          </div>
          <button
            className=" flex gap-x-3 dark:bg-white bg-blue-600 items-center dark:text-blue-600 text-white font-semibold text-xl font-light py-2 px-6 rounded-lg border-4 border-transparent hover:bg-transparent hover:text-blue-600 hover:border-blue-600 dark:hover:bg-transparent dark:hover:border-blue-600 dark:hover:text-gray-200 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] shadow-blue-600"
            onClick={() => signIn()}
          >
            {loading && <Spinner size="md" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          {error.isError && (
            <small className="text-red-500 text-lg">{error.errorMessage}</small>
          )}
        </div>
      </section>
    </main>
  );
};

export default SignIn;
