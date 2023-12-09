"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
const page = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <title>Contact</title>
      <Header />
      <div className="py-20 flex flex-col mx-auto w-11/12 sm:w-3/4 items-center">
        <motion.div
          variants={slideInFromTop}
          className="w-full flex items-center justify-center h-44 lg:h-56 dark:bg-gradient-to-t dark:from-[#222222] dark:to-[#1c1c1c] mb-10 rounded-lg flex-col bg-gradient-to-t from-[#f7f7f7] to-white"
        >
          <motion.span
            variants={slideInFromLeft(0.5)}
            className="text-4xl font-bold inline-block text-center title md:text-5xl"
          >
            Contact
          </motion.span>
          <motion.span
            variants={slideInFromRight(0.5)}
            className="font-bold my-5"
          >
            <Link href={"/"}>Home</Link> /{" "}
            <Link href={"/contact"}>Contact</Link>
          </motion.span>
        </motion.div>
        <motion.form
          variants={slideInFromTop}
          className="flex flex-col text-left gap-5 text-lg sm:max-w-lg w-full md:max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-3 w-full">
            <label
              htmlFor="neme"
              className="font-bold dark:text-[#a9a4ab] title"
            >
              Full Name <span className="dark:text-red-500">*</span>
            </label>
            <input
              type="text"
              id="neme"
              className="dark:bg-[#222222] dark:border-2 bg-[#f6f6f6] dark:border-[#3d3d3d] outline-none py-5 px-4 rounded-lg placeholder:text-[#545454] border-2"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label
              htmlFor="email"
              className="font-bold dark:text-[#a9a4ab] title"
            >
              Working Mail <span className="dark:text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="border-2 outline-none bg-[#f6f6f6] dark:bg-[#222222] dark:border-[#3d3d3d] py-5 px-4 rounded-lg placeholder:text-[#545454]"
              placeholder="john.doe@email.com"
            />
          </div>
          {/* a9a4ab */}
          <div className="flex flex-col gap-3 w-full">
            <label
              htmlFor="message"
              className="font-bold dark:text-[#a9a4ab] title "
            >
              Anything else? <span className="dark:text-red-500">*</span>
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="outline-none dark:border-2 bg-[#f6f6f6] dark:bg-[#222222] dark:border-[#3d3d3d] p-4 rounded-lg placeholder:text-[#545454] border-2 dark:text-gray-300"
              placeholder="Message goes here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className=" dark:bg-white dark:text-black font-bold title py-2 px-6 rounded-lg bg-black text-white"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>

      <Footer />
    </motion.div>
  );
};

export default page;

// f7f7f7
