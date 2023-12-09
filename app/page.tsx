"use client";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Homepage from "@/components/Homepage";
import Included from "@/components/Included";
import Reasons from "@/components/Reasons";
import Saying from "@/components/Saying";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.main initial="hidden" animate="visible">
      <title>Spotype</title>
      <Header />
      <Homepage />
      <Included />
      <Discover />
      <Reasons />
      <Saying />
      <Footer />
    </motion.main>
  );
}

export default Home;
