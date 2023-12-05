import { Avatar, Image } from "@chakra-ui/react";
import Stars from "react-star-ratings";
import { abstract_shape2 } from "../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

export const Reviews = () => {
  return (
    <section className="flex flex-col gap-20 items-center justfiy-center p-20">
      <div className="text-center">
        <h2 className="text-[14vmin] font-semibold dark:text-gray-200 text-gray-800 leading-[14vmin]">
          Reviews
        </h2>
        <p className="text-gray-500">
          See what our users think about the platform
        </p>
      </div>
      <div className="relative flex gap-10 flex-wrap">
        <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <Avatar name="Amelie Griffith" />
            <div>
              <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">
                Amelie Griffith
              </h2>
              <h4 className="text-gray-400 dark:text-gray-500">@amelie12</h4>
            </div>
          </div>
          <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">
            20 images generated
          </span>
          <p className="text-blue-900 dark:text-blue-400 opacity-80">
            I had been struggling to find specific icons for a while, but with
            this incredible tool, the process has become significantly easier.
            Now, I can effortlessly discover icons that perfectly match my
            requirements, including specific colors and styles. It's been a
            game-changer for me!
          </p>
          <Stars
            numberOfStars={5}
            rating={4.5}
            starRatedColor="orange"
            starDimension="2rem"
          />
        </div>
        <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] shadow-blue-600 p-8 rounded-2xl border-4 border-blue-700">
          <div className="flex items-center gap-3">
            <Avatar name="Burt Macklin" />
            <div>
              <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">
              Burt Macklin
              </h2>
              <h4 className="text-gray-400 dark:text-gray-500">@burtmacklin</h4>
            </div>
          </div>
          <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">
            45 images generated
          </span>
          <span className="text-yellow-800 bg-yellow-400 py-1 px-4 rounded-lg text-xs">
            <FontAwesomeIcon icon={faDiamond} /> Premium user
          </span>
          <p className="text-blue-900 dark:text-blue-400 opacity-80">
            Absolutely stunned with the new images! The transformation is truly
            remarkable, and the ease with which IconizeAI achieved this is
            simply mind-blowing. Thank you for making the process so
            unbelievably simple – couldn't be happier with the results!
          </p>
          <Stars
            numberOfStars={5}
            rating={4.5}
            starRatedColor="orange"
            starDimension="2rem"
          />
        </div>
        <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <Avatar name="Turd Ferguson" />
            <div>
              <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">
              Turd Ferguson
              </h2>
              <h4 className="text-gray-400 dark:text-gray-500">@turdfergusen40</h4>
            </div>
          </div>
          <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">
            112 images generated
          </span>
          <p className="text-blue-900 dark:text-blue-400 opacity-80">
            No more searching through endless icon libraries; with IconizeAI, I
            can swiftly create and download the perfect icon tailored to my
            project's needs. It's a time-saving, design-boosting marvel that has
            become an indispensable asset in my creative toolbox!
          </p>
          <Stars
            numberOfStars={5}
            rating={4.5}
            starRatedColor="orange"
            starDimension="2rem"
          />
        </div>
        <Image
          src={abstract_shape2}
          className="absolute -right-44 -top-32 -z-0"
        />
      </div>
    </section>
  );
};
