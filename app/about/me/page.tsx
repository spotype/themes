"use client";
import { Header } from "@/components/Header";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

function me() {
  return (
    <main>
      {/* main page title */}
      <title>About / ME</title>
      <Header />
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col h-screen w-full items-center justify-center"
      >
        <motion.span
          variants={slideInFromTop}
          className="font-bold title text-5xl"
        >
          Abdul Musabbir
        </motion.span>
        <motion.span
          variants={slideInFromTop}
          className="text-2xl font-semibold"
        >
          Web Developer
        </motion.span>
      </motion.div>
    </main>
  );
}

export default me;
