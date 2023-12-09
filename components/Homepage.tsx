"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
const Homepage = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="">
      <div className="flex mx-auto w-11/12 h-[100vh] lg:h-[140vh] items-center justify-center flex-col gap-10 sm:w-3/4">
        <div className="flex flex-col gap-4 text-center items-center justify-center md:mt-14 lg:mt-0">
          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-5xl font-[1000] title sm:max-w-2xl lg:max-w-3xl lg:text-6xl sm:text-5xl md:text-6xl sm:dark:text-white lg:mt-10"
          >
            The Ultimate Starter Template You Need To Start Your Next.JS Project
          </motion.p>
          <motion.p
            variants={slideInFromRight(0.5)}
            className="text-base font-medium text-gray-500 dark:text-[#A8ABAC] sm:max-w-xl "
          >
            NextJS is a free starter tepmplate build with next and tailwindCSS,
            providing everything you need to jumpstart your hugo project and
            save valuable time.
          </motion.p>

          <motion.button
            onClick={() => (window.location.href = "facebook.com")}
            variants={slideInFromLeft(0.5)}
            className="flex items-center w-[250px] font-bold justify-center gap-4 text-white bg-black dark:bg-white dark:text-black py-3 my-5 px-4 rounded-md"
          >
            Get Started For Free{" "}
            <i className="fi fi-rr-arrow-small-right flex"></i>
          </motion.button>
        </div>

        <motion.div variants={slideInFromTop}>
          <Image
            src={"/banner.webp"}
            width={500}
            height={500}
            className=" lg:w-[60rem] md:w-[38rem]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
