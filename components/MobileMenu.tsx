"use client"
import { motion } from "framer-motion"
import Link from 'next/link'
import { MdFileDownload } from "react-icons/md";


const MobileMenu = ({ showMobileMenu, setShowMobileMenu }: { 
  showMobileMenu: boolean;
  setShowMobileMenu: (showMobileMenu: boolean) => void;
}) => {
  return (
    <motion.div onClick={() => setShowMobileMenu(!showMobileMenu)}
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
      transition={{ duration: 0.4 }}
      className='fixed z-200 flex  justify-center w-full h-screen'>

      <motion.ul
        initial={{ opacity: 0, y: -100, borderRadius: 0 }}
        animate={{ opacity: 1, y: 0, borderRadius: [0,0,1, 30] }}
        exit={{ opacity: 0, y: -100, borderRadius: 0 }}
        transition={{ duration: 0.3, stiffness: 100, }}
        className='w-[92%] h-max flex flex-col items-center bg-gray-800/80 backdrop-filter backdrop-blur-lg px-6 py-8 border-2 border-gray-700 mt-4 gap-10'>
        <li>
          <Link href="#" className='text-[1rem] px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100 w-full text-gray-100 font-medium'>
            Home
          </Link>
        </li>
        <li>
          <Link href="#projects" className='text-[1rem] px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100 w-full text-gray-100 font-medium'>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#about" className='text-[1rem] px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100 w-full text-gray-100 font-medium'>
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className='text-[1rem] px-2 py-1 hover:bg-gray-700/50 backdrop-filter backdrop-blur-sm rounded-full transition-all duration-100 w-full text-gray-100 font-medium'>
            Contact
          </Link>
        </li>
        <li className='w-full'>
          <Link href="/" className='w-[90%] mx-4 flex items-center justify-center px-6 py-3 bg-blue-600 rounded-full text-md font-medium hover:bg-blue-700 transition-all duration-200'>
          <MdFileDownload size={20} className="mr-2" />
            Download Resume
          </Link>
        </li>
      </motion.ul>
    </motion.div>
  )
}

export default MobileMenu