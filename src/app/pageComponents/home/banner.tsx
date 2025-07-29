"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BannerImage from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-full z-0"
    >
      <Image
        src={BannerImage}
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NEXUS</h1>

        <div className="backdrop-blur-sm bg-black/10 px-4 py-2 rounded mb-4 flex justify-center items-center">
          <div className="text-md md:text-xl w-3/4 h-fit leading-[2rem]">
            {`The acronum MMG carries profound significance-representing both the
            professional legacies of its founder and the core moral values that
            shape the firm's philosophy and service delivery model`}
          </div>
        </div>
        <button className="primary-button">Contact Us Now</button>
      </div>
    </motion.div>
  );
};

export default Banner;
