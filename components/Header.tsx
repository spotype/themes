"use client";
import { slideInFromTops } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export const Header = () => {
  const [drop, setDrop] = useState(false);
  const [dark, setDark] = useState(() => {
    // Retrieve dark mode state from localStorage, default to false if not set
    return localStorage.getItem("darkMode") === "true" ? true : false;
  });

  const dropDown = () => {
    setDrop(!drop);
  };

  const darkMode = () => {
    // Toggle dark mode state
    setDark((prevDark) => {
      const newDark = !prevDark;
      // Save dark mode state to localStorage
      localStorage.setItem("darkMode", newDark.toString());
      return newDark;
    });
  };

  useEffect(() => {
    // Apply dark mode class to the document element
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromTops(0.1)}
      className="h-16 flex items-center border-b w-full fixed z-10 left-0 top-0 bg-white dark:text-white dark:bg-[#1c1c1c] dark:border-none lg:h-20"
    >
      <div className="w-11/12 sm:w-3/4 mx-auto items-center flex justify-between">
        <Link href={"/"} className="flex gap-2">
          <Image
            src={"/logo.svg"}
            width={20}
            height={10}
            className="lg:w-6 tick"
          />
          <h1 className=" text-xl font-bold title lg:text-3xl sm:text-2xl">
            Spotype
          </h1>
        </Link>
        <div
          className={
            drop
              ? "block absolute left-0 w-full text-center flex flex-col top-16 py-10 font-bold gap-2 bg-white shadow-xl dark:bg-dark"
              : "hidden lg:block lg:font-bold lg:gap-8 lg:flex lg:items-center lg:justify-center"
          }
        >
          <Link className="py-3" href={"/"}>
            Home
          </Link>
          <Link className="py-3" href={"/about"}>
            About
          </Link>
          <Link className="py-3" href={"/elements"}>
            Elements
          </Link>
          <Link className="py-3" href={"/contact"}>
            Contact
          </Link>

          <Link href={"/about/me"}>Me</Link>
        </div>
        <div className="flex gap-4  font-bold items-center">
          <button>
            <i className="fi fi-rr-search text-2xl flex"></i>
          </button>
          <button
            onClick={darkMode}
            className=" bg-black text-white w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center dark:bg-white"
          >
            {dark ? (
              <Image
                src={"/moon.svg"}
                width={14}
                height={14}
                className="lg:w-5"
              />
            ) : (
              <Image
                src={"/sun.svg"}
                width={13}
                height={13}
                className="lg:w-5"
              />
            )}
          </button>
          <button onClick={dropDown} className=" lg:hidden flex">
            {drop ? (
              // <i className="fi fi-rr-cross text-xl flex"></i>
              <Image
                src={"/menux.svg"}
                className="tickses"
                width={25}
                height={25}
              />
            ) : (
              // <i className="fi fi-rr-menu-burger text-xl flex"></i>
              <Image
                src={"/menu.svg"}
                className="tickses"
                width={25}
                height={25}
              />
            )}
          </button>
          <button className=" lg:block hidden bg-black text-white px-4 py-2 rounded-xl dark:bg-white dark:text-black">
            Get A Quote
          </button>
          {/* drop down */}
        </div>
      </div>
    </motion.div>
  );
};
