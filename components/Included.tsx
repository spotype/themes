"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
const Included = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="dark:bg-[#222222] md:py-10"
    >
      <div className="mx-auto flex w-11/12 flex-col lg:flex-row lg:grid lg:grid-cols-2 gap-12 sm:w-3/4 md:items-center">
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="w-full pt-16 pb-4 dark:bg-transparent md:flex md:items-center md:justify-center md:p-10"
        >
          <img
            src={"/content.webp"}
            className="w-full lg:w-96  xl:w-full 2xl:w-full "
          />
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="py-4 flex flex-col gap-4"
        >
          <h1 className=" text-4xl font-bold title">
            What's Included in Spotype
          </h1>
          <p className="text-base font-medium text-gray-500 md:text-lg dark:text-[#A8ABAC] my-5 sm:text-xl md:my-2">
            Spotype is a comprehensive starter template that includes everything
            you need to get started with your Spotype project. What's Included
            in Spotype
          </p>

          <div className="flex md:my-2 flex-col gap-4 my-4 dark:text-[#A8ABAC] sm:text-lg">
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i> 10+ Pre-build pages
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>95+ Google Pagespeed Score
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              Build with Spotype and TailwindCSS for easy and customizable
              styling
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>Fully responsive on all
              devices
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>SEO-optimized for better
              search engine rankings
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <div>
                <span className=" font-bold">open-source and free </span>
                for personal nad commercial use
              </div>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Included;
