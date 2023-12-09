"use client";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const footer = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="pt-10 dark:bg-[#222222] bg-[#f6f6f6] bottom-0 w-full left-0"
    >
      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex flex-col sm:w-3/4 w-11/12 mx-auto gap-8 mb-16 lg:flex-row lg:justify-between lg:items-center"
      >
        <div className="text-center">
          <span className="title font-bold text-4xl">SpoType</span>
        </div>
        <div className="text-center font-semibold flex gap-4 items-center justify-center">
          <Link href={"/about"}>About</Link>
          <Link href={"/elements"}>Elements</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link
            href={"https://www.facebook.com"}
            className="w-12 bg-black dark:bg-white h-12 rounded-lg flex items-center justify-center"
          >
            <Image className="ticks" src={"/fb.svg"} width={25} height={0} />
          </Link>
          <Link
            href={"https://www.facebook.com"}
            className="w-12 bg-black dark:bg-white h-12 rounded-lg flex items-center justify-center"
          >
            <Image
              className="ticks"
              src={"/twitter.svg"}
              width={25}
              height={0}
            />
          </Link>
          <Link
            href={"https://www.facebook.com"}
            className="w-12 bg-black dark:bg-white h-12 rounded-lg flex items-center justify-center"
          >
            <Image
              className="ticks"
              src={"/github.svg"}
              width={25}
              height={0}
            />
          </Link>
          <Link
            href={"https://www.facebook.com"}
            className="w-12 bg-black dark:bg-white h-12 rounded-lg flex items-center justify-center"
          >
            <Image
              className="ticks"
              src={"/linkedin.svg"}
              width={25}
              height={0}
            />
          </Link>
        </div>
      </motion.div>

      <div className="flex items-center justify-center py-5 border-t dark:border-gray-400">
        <motion.span variants={slideInFromLeft(0.5)}>
          Designed & Developed By Spotype
        </motion.span>
      </div>
    </motion.div>
  );
};

export default footer;
