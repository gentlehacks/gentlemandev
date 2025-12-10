"use client"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full mt-4 flex items-center justify-center px-4">
      <ul className="bg-gray-900 text-gray-100 w-full px-6 md:px-8 py-3 rounded-full flex items-center justify-between">
        <li className="hidden lg:flex">
          <Image 
            src="/favicon.png"
            alt="favicon"
            width={250}
            height={250}
            priority
            className="w-[2.5rem]"
          />
        </li>
        <li className="w-full flex items-center justify-center gap-[2rem] md:gap-[2.2rem]">
          <Link href="#" className="font-medium text-[12px] md:text-[1rem] hover:text-gray-300 transition-all duration-200 hover:mr-2">
            Home
          </Link>
          <Link href="#services" className="hidden md:block font-medium text-[12px] md:text-[1rem] hover:text-gray-300 transition-all duration-200 hover:mr-2">
            Services
          </Link>
          <Link href="#about" className="font-medium text-[12px] md:text-[1rem] hover:text-gray-300 transition-all duration-200 hover:mr-2">
            <p className="hidden md:block">About me</p>
            <p className="block md:hidden">About</p>
          </Link>
          <Link href="#projects" className="font-medium text-[12px] md:text-[1rem] hover:text-gray-300 transition-all duration-200 hover:mr-2">
            Projects
          </Link>
          <Link href="#contact" className="font-medium text-[12px] md:text-[1rem] hover:text-gray-300 transition-all duration-200 hover:mr-2">
            <p className="hidden md:block">Contact me</p>
            <p className="block md:hidden">Contact</p>
          </Link>
        </li>
        <li className="w-[8rem] hidden md:flex">
          <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290">
            <button className="px-6 py-2 font-medium rounded-full bg-blue-600 cursor-pointer transition-all duration-200 hover:bg-blue-700">
              Hire me
            </button>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header