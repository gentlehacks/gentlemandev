"use client"
import Image from "next/image"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-[10rem] w-full px-6 md:px-8 lg:px-12 py-4 bg-gray-900 flex flex-col  items-center justify-center">
      <div className="flex flex-col w-full">
        <Image 
          src="/favicon.png"
          alt="favicon"
          width={250}
          height={250}
          priority
          className="w-[2.5rem]"
        />
        <h2 className="mt-2 font-bold text-lg md:text-1xl text-blue-500">
          GentlemanDev
        </h2>
        <p className="mt-4 text-md text-gray-400">
          A passionate software developer creating innovative solutions and exceptional digital experiences with modern technologies
        </p>
        <div className="flex items-center gap-4 mt-6"> 
          <Link href="https://github.com/gentlehacks" 
          className=" w-10 h-10 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 cursor-pointer rounded-full">
            <LuGithub className="text-gray-400" />
          </Link>
          <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290" 
          className=" w-10 h-10 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 cursor-pointer rounded-full">
            <LuLinkedin className="text-gray-400" />
          </Link>
          <Link href="https://x.com/gentlemandev" 
          className=" w-10 h-10 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 cursor-pointer rounded-full">
            <FaXTwitter className="text-gray-400" />
          </Link>
          <Link href="mailto:salihuadamu4678@gmail.com" 
          className=" w-10 h-10 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 cursor-pointer rounded-full">
            <LuMail className="text-gray-400" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-15 lg:gap-20 mt-10">
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">About</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">Projects</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">skills</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">contact</Link>
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <h2 className="font-semibold text-lg mb-2">Services</h2>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">Web Development</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">Mobile Apps</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500/80 text-md mt-2">UI/UX Design</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-1 border-gray-700 w-full flex flex-col items-center justify-center pt-5">
        <p className="sm text-gray-400 ">
          &copy; {new Date().getFullYear()} GentlemanDev made with 💜
        </p>
        <Link href="#">
          <button className="flex items-center justify-center text-gray-200 px-3 py-2  border-1 border-blue-50/10 hover:border-blue-500/50 rounded-lg font-medium mt-5 mb-8 transition-all duration-200 cursor-pointer">
            Back to top
            <MdKeyboardArrowUp className="ml-2 text-lg " />
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer