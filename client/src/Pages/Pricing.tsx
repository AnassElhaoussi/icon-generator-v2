import React, { useContext, useEffect, useState } from "react";
import { logo } from "../images";
import { UserContext } from "../Context/UserContextProvider";
import { UserContextType } from "../types/Context/signin";
import { Link, useSearchParams } from "react-router-dom";
import { useDisclosure, useToast } from "@chakra-ui/react";
import PaypalPayment from "../components/dashboard/PaypalPayments";
import { pricingPlans } from "../constants/plans";
import { Helmet } from "react-helmet";

interface ICheckoutInfos {
  id: number;
  category: string;
  description: string;
  cost: string;
  amount: number;
}

const Pricing = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [checkoutInfos, setCheckoutInfos] = useState<null | ICheckoutInfos>(
    null
  );
  const [searchParams] = useSearchParams();
  const toast = useToast();

  useEffect(() => {
    if (searchParams.get("pricing_access")) {
      toast({
        title: "You can now access our pricing page",
        description:
          "Choose a payment plan and method and start generating icons easily!",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
  }, []);

  const handlePlanClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckoutInfos(
      pricingPlans[parseInt(e.currentTarget.id)] as ICheckoutInfos
    );
    onOpen();
  };

  return (
    <section>
      <Helmet>
        <html lang="en" />
        <title>Pricing</title>
        <meta
          name="description"
          content="Pricing : Choose a pricing plan and start generating icons using Iconize AI"
        />
        <meta
          name="keywords"
          content="icons, AI, AI icons, 3d illustrations, 3d vectors, pixel art, 3d style, design tool, iconize ai pricing, pricing plan, 3d icons, ai logo"
        />
      </Helmet>
      <main className="dark:bg-black bg-gray-200 text-center text-white font-poppins flex flex-col items-center justify-center gap-20 pb-44 pt-10 px-8">
        <img src={logo} alt="" className="w-40" />
        <div className="space-y-4">
          <div className="relative">
            <h1 className="relative z-10 md:text-8xl sm:text-7xl text-6xl md:font-black font-extrabold dark:text-gray-200 text-gray-800">
              Buy credits!
            </h1>
            <div className="absolute -z-0 h-32 w-full -top-10 dark:bg-gray-800 bg-gray-300 blur-2xl"></div>
          </div>
          <p className="font-light text-md dark:text-gray-400 text-gray-600">
            Choose a plan that fits your needs and budget effortlessly.
          </p>
        </div>
        <div
          id="0"
          className="flex justify-center items-stretch gap-4 lg:flex-nowrap flex-wrap w-full px-10"
        >
          <div className="relative flex flex-col gap-y-6 dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900 bg-gray-300 h-[17rem] items-center justify-around p-8 rounded-2xl md:w-[20rem] w-full">
            <h3 className="text-5xl font-black text-blue-700">Basic</h3>
            <p className="text-xl dark:text-gray-300 text-gray-800 font-light">
              Buy 80 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">
              0.06$ /image
            </span>
            {!user ? (
              <Link
                to="/signin"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={(e) => handlePlanClick(e)}
                id="0"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Buy in 5$
              </button>
            )}
          </div>
          <div
            id="1"
            className="relative flex flex-col gap-y-6 dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900 bg-gray-300 h-[17rem] items-center justify-around p-8 rounded-2xl md:w-[20rem] w-full"
          >
            <h3 className="bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text text-5xl font-black text-blue-700">
              Standard
            </h3>
            <p className="text-xl dark:text-gray-300 text-gray-800 font-light">
              Buy 160 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">
              0.07$ /image
            </span>
            {!user ? (
              <Link
                to="/signin"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={(e) => handlePlanClick(e)}
                id="1"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Buy in 12$
              </button>
            )}
          </div>
          <div
            id="2"
            className="relative flex flex-col gap-y-6 dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900 bg-gray-300 h-[17rem] items-center justify-around p-8 rounded-2xl md:w-[20rem] w-full"
          >
            <h3 className="bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text text-5xl font-black text-blue-700">
              Premium
            </h3>
            <p className="text-xl dark:text-gray-300 text-gray-800 font-light">
              Buy 240 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">
              0.08$ /image
            </span>
            {!user ? (
              <Link
                to="/signin"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={(e) => handlePlanClick(e)}
                id="2"
                className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all "
              >
                Buy in 20$
              </button>
            )}
          </div>
        </div>
        <PaypalPayment
          checkoutInfos={checkoutInfos as ICheckoutInfos}
          isOpen={isOpen}
          onClose={onClose}
        />
      </main>
    </section>
  );
};

export default Pricing;
