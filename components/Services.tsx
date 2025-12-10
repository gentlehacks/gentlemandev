"use client"
import {motion} from "framer-motion"
import { CgWebsite } from 'react-icons/cg'
import { FaAppStoreIos } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services" className='mb-[10rem] px-8 md:px-12 lg:px-15 flex flex-col items-center justify-center'>
      <h1 className="text-xl md:text-2xl font-medium">Services</h1>

      {/* Services */}
      <div className="mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 01 */}
        <motion.div 
          initial={{y: '200px', opacity: 0, scale: 0.9}}
          whileInView={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
        className="w-full bg-gray-900 p-5 rounded-xl shadow-sm shadow-blue-900 bg-gray-900/50 backdrop-filter backdrop-blur-md bg-clip-padding hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center">
          <TbWorldWww className="text-[4rem] text-blue-500" />
          <h2 className="font-medium text-lg text-blue-500 mt-3">Website Dev</h2>
          <p className="mt-4 text-gray-400 text-center">I create a mordern websites that not just beautiful, but also look responsive across all devices while keeping your businness Alive 💡</p>
        </motion.div>
        {/* 02 */}
        <motion.div 
          initial={{y: '200px', opacity: 0, scale: 0.9}}
          whileInView={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
        className="w-full bg-gray-900 p-5 rounded-xl shadow-sm shadow-blue-900 bg-gray-900/50 bacdrop-filter backdrop-blur-md bg-clip-padding hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center">
          <FaAppStoreIos className="text-[4rem] text-blue-500" />
          <h2 className="font-medium text-lg text-blue-500 mt-3">Mobile Dev</h2>
          <p className="mt-4 text-gray-400 text-center">Mobile App Development for Android & IOS, with a strong focus on building clean, modern, and user-friendly digital experiences with React Native.</p>
        </motion.div>
        {/* 03 */}
        <motion.div 
          initial={{y: '200px', opacity: 0, scale: 0.9}}
          whileInView={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
        className="w-full bg-gray-900 p-5 rounded-xl shadow-sm shadow-blue-900 bg-gray-900/50 bacdrop-filter backdrop-blur-md bg-clip-padding hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center">
          <FaPenNib className="text-[4rem] text-blue-500" />
          <h2 className="font-medium text-lg text-blue-500 mt-3">Ui/Ux Design</h2>
          <p className="mt-4 text-gray-400 text-center">UI designs that speaks your brand identity for your website and mobile app and look good for user experience</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services