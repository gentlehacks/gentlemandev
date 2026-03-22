"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

interface Tool {
  id: number;
  image: string;
}

const tools: Tool[] = [
  {
    id: 1,
    image: "html.png"
  },
  {
    id: 2,
    image: "javascript.png"
  },
  {
    id: 3,
    image: "typescript.svg"
  },
  {
    id: 4,
    image: "tailwind.png"
  },
  {
    id: 5,
    image: "reactjs.png"
  },
  {
    id: 6,
    image: "nextjs.svg"
  },
  {
    id: 7,
    image: "expo.svg"
  },
  {
    id: 8,
    image: "nodejs.svg"
  },
  {
    id: 9,
    image: "expressjs.webp"
  },
  {
    id: 10,
    image: "framer-motion.svg"
  },
  {
    id: 11,
    image: "zustand.svg"
  },
  {
    id: 12,
    image: "git.png"
  },
  {
    id: 13,
    image: "github.png"
  },
]

const projects = [
  {
    id: 1,
    image: '/psdshub.jpg'
  },
  {
    id: 2,
    image: '/skihub.jpg'
  },
  {
    id: 3,
    image: '/saukiphc.jpg'
  },
  {
    id: 4,
    image: '/weather-app.jpg'
  },
  {
    id: 5,
    image: '/zexsend.jpg'
  },
  {
    id: 6,
    image: '/farmlook.jpg'
  },
]

const HeroSection = () => {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <main className="mb-[10rem] w-full mt-[4rem] flex flex-col items-center justify-center px-6 md:px-8 lg:px-22 overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[2rem] md:text-[3.5rem]  font-medium text-gray-100 text-center">
        Hi I&apos;m <span className="text-blue-500">Salihu Adamu (gentleman)</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-[1.7rem] md:text-[2rem] lg:text-[2.2rem] font-medium text-gray-100 text-center mt-6">A Software Developer</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-gray-200 text-center md:px-42 text-lg font-medium mt-8 leading-[1.8]">
        I build seamless, scalable, and user-focused digital experiences that merge creativity with functionality. From intuitive websites and web apps to decentralized solutions, I love turning ideas into innovation through clean, and efficient code.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-8 flex items-center gap-4 md:gap-6">
        <Link href="#projects" >
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: '-5px' }}
            whileTap={{ scale: [1.1, 0.9, 1] }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            className="px-6 py-3 rounded-full flex items-center justify-center font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer"

          >
            View my work
          </motion.button>
        </Link>
        <Link href="#contact" >
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: '-5px' }}
            whileTap={{ scale: [1.1, 0.9, 1] }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            className="px-6 py-3 rounded-full flex items-center justify-center font-medium bg-gray-900 border-2 border-blue-600 hover:border-blue-700 transition-all duration-200 cursor-pointer"
          >

            Contact me

          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-full md:w-[60%] mt-20 flex flex-wrap justify-center gap-5">
        {tools.map(s => (
          <motion.div
            key={s.id}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center p-2 bg-white/80 backdrop-filter backdrop-blur-md w-[3.2rem] h-[3.2rem] rounded-full shrink-0 shadow-xl"
          >
            <Image
              src={`/${s.image}`}
              alt={`Tool Image ${s.id}`}
              width={200}
              height={200}
              className="w-[95%] object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex w-max gap-5 mt-42"
        // 1. Keep this ALWAYS active so it never resets the position
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // Adjust for speed
          ease: "linear",
        }}
        // 2. This is the key: Toggle the CSS play state directly
        style={{
          display: "flex",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...projects, ...projects].map((s, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-filter backdrop-blur-md p-1 w-[20rem] h-[15rem] md:w-[25rem] md:h-[18rem] overflow-hidden flex items-center justify-center rounded-2xl shadow-sm border border-gray-800"
          >
            <Image
              src={s.image}
              alt={`Project ${index}`}
              width={600}
              height={400}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </motion.div>




    </main>
  )
}

export default HeroSection