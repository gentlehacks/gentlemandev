"use client"
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'

const About = () => {
  return (
    <section id="about" className="mb-[10rem] px-8 md:px-12 lg:px-15 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        <span className="border-b-2 border-blue-500">About</span>{" "} 
        My Journey
      </h1>
      <p className="text-gray-400 text-md mt-3 max-w-[30rem] text-center">
        A passionate full-stack developer crafting digital experiences through innovative solutions
      </p>

      <motion.div 
        initial={{y: "100px", opacity: 0, scale: 0.9}}
        whileInView={{y: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}
      className="w-full flex flex-col md:flex-row items-center justify-between mt-[3rem]">
        <div className="w-full md:w-[80%]">
          <Image
            src="/profile-2.png"
            alt="profile-2"
            width={400}
            height={400}
            priority
            className="w-[100%]"
          />
        </div>
        <div className="w-full flex-col items-center justify-center mt-4 md:mt-0">
          <h4 className="w-full text-gray-400 text-md leading-[2]">
            <p className="mb-4 font-bold text-blue-500 text-xl border-b-2 border-blue-500 w-fit" >Software Develper</p>
            I&apos;m a passionate full-stack developer with a strong focus on building clean, modern, and user-friendly digital experiences. I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, and React Native, and I also have foundational knowledge of Node.js for backend development.
            I enjoy turning ideas into real products—whether it&apos;s a web application, a mobile app, or an interface that solves a real problem. I&apos;m constantly learning, improving my skills, and exploring new technologies to build scalable and efficient solutions.

            My goal is to create products that are not just functional, but also visually appealing and enjoyable to use.
          </h4>
          <Link href="/cv.pdf" rel="noopener noreferer">
            <button className="mt-6 flex items-center justify-center px-6 py-2 text-sm fon-medum bg-blue-600 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg hover:mb-[-3px] transition-all duration-200 cursor-pointer">
              <BiDownload className="mr-2 text-lg" />  Download Cv
            </button>

          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default About