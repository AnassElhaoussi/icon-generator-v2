import { Image } from "@chakra-ui/react";
import { g_img1, g_img2, g_img3, g_img5, g_img4, g_img6, g_img7, g_img8, g_img10, g_img9, g_img12, g_img11 } from "../images";

const Stats = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5 px-20">
      <Image
        src={g_img1}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img2}
        className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 w-20"
      />
      <Image
        src={g_img3}
        className="rounded-2xl shadow-2xl shadow-green-400 dark:shadow-green-800 w-20"
      />
      <Image
        src={g_img4}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img5}
        className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 w-20"
      />
      <Image
        src={g_img6}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img7}
        className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 w-20"
      />
      <Image
        src={g_img8}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img9}
        className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 w-20"
      />
      <Image
        src={g_img10}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img11}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
      <Image
        src={g_img12}
        className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-20 "
      />
    </div>
  );
};

export default Stats;
