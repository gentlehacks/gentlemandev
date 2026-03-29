"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from 'next/link'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-[10rem] w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 bg-gray-900 flex flex-col  items-center justify-center border-t-[1px] border-gray-700/40">
      <div className="flex flex-col w-full">
        <Image
          src="/favicon.png"
          alt="favicon"
          width={250}
          height={250}
          priority
          className="w-[3rem] md:w-[4rem]"
        />
        <h2 className="mt-2 font-medium text-xl md:text-2xl text-blue-500">
          {`<GentlemanDev />`}
        </h2>
        <p className="mt-3 text-md md:text-xl text-gray-400">
          A passionate software developer creating innovative solutions and exceptional digital experiences with modern technologies
        </p>
        <div className="flex items-center gap-4 mt-6">
          <Link href="https://github.com/gentlehacks"
            className=" w-12 h-12 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/80 text-gray-300 hover:text-gray-100  transition-all duration-200 cursor-pointer rounded-full">
            <LuGithub size={20} className="" />
          </Link>
          <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290"
            className=" w-12 h-12 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/80 text-gray-300 hover:text-gray-100  transition-all duration-200 cursor-pointer rounded-full">
            <LuLinkedin size={20} className="" />
          </Link>
          <Link href="https://x.com/gentlemandev"
            className=" w-12 h-12 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/80 text-gray-300 hover:text-gray-100  transition-all duration-200 cursor-pointer rounded-full">
            <FaXTwitter size={20} className="" />
          </Link>
          <Link href="mailto:salihuadamu4678@gmail.com"
            className=" w-12 h-12 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/80 text-gray-300 hover:text-gray-100  transition-all duration-200 cursor-pointer rounded-full">
            <LuMail size={20} className="" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-15 lg:gap-20 mt-10">
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">About</Link>
            <Link hrefj="#projects" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">Projects</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">Skills</Link>
            <Link href="#contact" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">Contact</Link>
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <h2 className="font-semibold text-lg mb-2">Services</h2>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">Web Development</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">Mobile Apps</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 
hover:ml-3 transition-all duration-200 text-md mt-2">UI/UX Design</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-1 border-gray-700 w-full flex flex-col items-center justify-center pt-8">
        <p className="sm text-gray-400 ">
          &copy; {new Date().getFullYear()} GentlemanDev made with 💙
        </p>
        <Link href="/">
          <motion.button
            initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            animate={{
              boxShadow: [
                '0px 0px 10px rgba(0, 0, 255, 0.8)', // Blue
                '0px 0px 10px rgba(255, 0, 0, 0.8)', // Red
                '0px 0px 10px rgba(0, 255, 0, 0.8)', // Green
                '0px 0px 10px rgba(0, 0, 255, 0.8)'  // Back to Blue for seamless loop
              ]
            }}
            transition={{
              duration: 3,        // Total time for one full cycle (1s per color)
              repeat: Infinity,   // Keeps it looping forever
              ease: "linear"      // Smooth constant transition
            }}
            className="flex items-center justify-center text-gray-200 px-4 py-2 border border-gray-700/80 hover:border-blue-400/40 hover:bg-gray-700/20 backdrop-filter backdrop-blur-md rounded-xl font-medium mt-8 mb-4 transition-all duration-200 cursor-pointer"
          >
            Back to top
            <MdKeyboardArrowUp className="ml-2 text-lg " />
          </motion.button>

        </Link>
      </div>
    </footer >
  )
}

export default Footer
