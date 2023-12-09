"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
const page = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <Header />
      <title>About</title>
      <div className="mx-auto flex flex-col w-11/12 py-28">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="my-5 flex items-center justify-center flex-col gap-8"
        >
          <Image
            src={"/Boy.jpg"}
            width={200}
            height={200}
            className=" rounded-lg"
          />
          <span className="text-2xl font-bold title">
            Hey, I am Abdul Musabbir
          </span>

          <p className=" text-[#a8abac] sm:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perspiciatis ad iure odio quidem, laboriosam temporibus soluta magni
            tempore eum hic ducimus odit porro omnis incidunt officia explicabo
            quae fuga.
          </p>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default page;
