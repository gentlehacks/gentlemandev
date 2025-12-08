"use client"
import Image from "next/image"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { LuMail, LuPhone } from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className="mt-[10rem] w-full px-6 py-4 bg-gray-900 flex flex-col  items-center justify-center">
      <Image 
        src="/favicon.png"
        alt="favicon"
        width={250}
        height={250}
        priority
        className="w-[3rem] mt-5"
      />
      {/* Links */}
      <ul className='gap-5 flex items-center mt-15'>
        <Link href="#" className="text-blue-400 hover:mt-[-2px] hover:text-gray-300">
          Home
        </Link>
        <Link href="#sevices" className="text-blue-400 hover:mt-[-2px] hover:text-gray-300">
          Services
        </Link>
        <Link href="#about" className="text-blue-400 hover:mt-[-2px] hover:text-gray-300">
          About
        </Link>
        <Link href="#projects" className="text-blue-400 hover:mt-[-2px] hover:text-gray-300">
          Projects
        </Link>
        <Link href="#contact" className="text-blue-400 hover:mt-[-2px] hover:text-gray-300">
          Contact
        </Link>
      </ul>
      {/* Socials */}
      <ul className='mt-12 flex items-center gap-6'>
        <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290" className="p-2 flex items-center justify-center rounded-full border-1 border-blue-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer">
          <FaLinkedin className="text-lg" />
        </Link>
        <Link href="" className="p-2 flex items-center justify-center rounded-full border-1 border-blue-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer">
          <FaInstagram className="text-lg" />
        </Link>
        <Link href="https://x.com/gentlemanwebdev" className="p-2 flex items-center justify-center rounded-full border-1 border-blue-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer">
          <FaXTwitter className="text-lg" />
        </Link>
        <Link href="https://github.com/gentlehacks" className="p-2 flex items-center justify-center rounded-full border-1 border-blue-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer">
          <FaGithub className="text-lg" />
        </Link>
      </ul>
      <div className="flex items-center gap-6 mt-8 border-b-1 border-gray-800 pb-5">
        <Link href="mailto:salihuadamu4678@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm">
          <LuMail className="mr-2 " /> Salihuadamu4678@gmail.com
        </Link>
        <p className="flex items-center text-gray-300 text-sm">
          <LuPhone className="mr-2 " /> +2349131165467
        </p>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        © GentlemanDev {new Date().getFullYear()} all rights reserved.
      </p>
    </footer>
  )
}

export default Footer