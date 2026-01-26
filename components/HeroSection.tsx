"use client"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <main className="mb-[10rem] w-full mt-[4rem] lg:mt-0 px-8 md:px-12 lg:px-15 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col w-full">
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, ease: 'easeInOut'}}
        className="flex flex-col">
          <div>
            <h3 className="text-xl text-gray-300"> 
              Hi, i&apos;m
            </h3>
            <h2 className="mt-3 text-2xl font-medium">
              Salihu Adamu
            </h2>
            <h1 className="mt-4 font-bold text-blue-500 text-3xl md:text-4xl lg:text-5xl">
              Software Developer
            </h1>
          </div>
          <div className="flex items-center mt-10 gap-6">
            <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290">
              <button className="px-6 py-2 text-[11px] md:text-[0.9rem] font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:mt-1 transition-all duration-200 cursor-pointer">
                Hire me
              </button>
            </Link>
            <button className="px-6 py-2 text-[11px] md:text-[0.9rem] font-medium rounded-lg border-2 border-blue-600 hover:border-blue-700 transition-all duration-200 cursor-pointer">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{y: "200px", opacity: 0, scale: 0.8}}
          animate={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 1, delay: 0.5, ease: 'easeInOut'}}
        className="flex w-full md:w-[80%] items-center justify-center gap-10 md:gap-0 lg:gap-10 p-4 rounded-lg mt-15 bg-gray-900">
          <div className="flex flex-col border-r-2 border-gray-800 md:px-4 w-full">
            <h2 className="font-semibold text-blue-500">2y+</h2>
            <p className="text-gray-400 mt-3">Experience</p>
          </div>
          <div className="flex flex-col border-r-2 border-gray-800 md:px-4 w-full">
            <h2 className="font-semibold text-blue-500">9+</h2>
            <p className="text-gray-400 mt-3">Skills</p>
          </div>
          <div className="flex flex-col md:px-4 w-full">
            <h2 className="font-semibold text-blue-500">7+</h2>
            <p className="text-gray-400 mt-3">Projects</p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{scale: 0.8, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      className="w-full mt-[3rem] md:mt-0">
        <Image 
          src="/profile.png"
          width={550}
          height={550}
          alt="Profile"
          priority
          className="w-[90%]"
        />
      </motion.div>
    </main>
  )
}

export default HeroSection