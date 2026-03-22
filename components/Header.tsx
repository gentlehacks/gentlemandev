"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiDownload } from "react-icons/bi"
import {  FaMoon } from "react-icons/fa6"
import { IoMenuOutline } from "react-icons/io5"

const Header = ({ showMobileMenu, setShowMobileMenu }: { showMobileMenu: boolean; setShowMobileMenu: (showMobileMenu: boolean) => void }) => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light')
  }, [theme])

  return (
    <header className="sticky top-2 md:top-4 z-200 w-full mt-4 flex items-center justify-center px-4">
      <ul className="w-[90%] md:w-[85%] lg:w-[92%] xl:w-[85%] bg-gray-800/40 backdrop-filter backdrop-blur-md shadow-3xl border-1 border-gray-700/40 text-gray-100 w-full px-4 md:px-6 py-4 md:py-5 rounded-full flex items-center justify-between">
        <li className="flex items-center">
          <Image
            src="/favicon.png"
            alt="favicon"
            width={250}
            height={250}
            priority
            className="w-[3rem]"
          />
          <h1 className="font-[400]  ml-2 text-blue-400 text-[1.2rem]">{"<gentleman/>"}</h1>
        </li>
        <li className="w-full flex items-center justify-center gap-[2rem] hidden lg:flex md:gap-[2.5rem]">
          <Link href="#" className="font-medium text-[12px] md:text-[1rem] hover:text-blue-400 px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100">
            Home
          </Link>
          <Link href="#projects" className="hidden md:block font-medium text-[12px] md:text-[1rem] hover:text-blue-400 px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100">
            Projects
          </Link>
          <Link href="#about" className="font-medium text-[12px] md:text-[1rem] hover:text-blue-400 px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100">
            <p className="hidden md:block">About me</p>
            <p className="block md:hidden">About</p>
          </Link>
          <Link href="#contact" className="font-medium text-[12px] md:text-[1rem] hover:text-blue-400 px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100 ">
            <p className="hidden md:block">Contact me</p>
            <p className="block md:hidden">Contact</p>
          </Link>
        </li>
        <li className="flex items-center mr-4 gap-6">
          <Link href="#" className="hidden lg:flex px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-100 flex items-center justify-center gap-2">
          <BiDownload size={15} />
            <p className="text-sm font-medium">Resume</p>
          </Link>
          <button onClick={() => setTheme(!theme)}>
            <FaMoon size={20} />
          </button>
          <button className="lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <IoMenuOutline size={25} />
          </button>

        </li>
      </ul>
    </header>
  )
}

export default Header