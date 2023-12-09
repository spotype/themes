"use client";
import { Header } from "@/components/Header";
import { slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const notfound = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <Header />
      <motion.div
        variants={slideInFromRight(1)}
        className="flex flex-col items-center justify-center h-screen w-full font-bold"
        style={{
          fontFamily: "Signika",
        }}
      >
        <Image src={"/error.png"} width={500} height={500} />

        <Link href={"/"} className="text-5xl text-gray-400 font-bold title">
          Page not found
        </Link>

        <button
          onClick={() => (window.location.href = "/")}
          className="py-2 px-4 bg-black text-white dark:bg-white dark:text-black my-5 rounded-lg"
        >
          Back To Home
        </button>
      </motion.div>
    </motion.div>
  );
};

export default notfound;
