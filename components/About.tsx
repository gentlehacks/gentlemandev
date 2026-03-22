"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { PiBrainBold } from "react-icons/pi"
import { RiMapPinUserFill } from "react-icons/ri"

const images = [
  "image-1.JPG",
  "image-2.PNG",
  "image-3.JPG",
  "image-4.jpg"
]

interface Skill {
  id: number;
  image: string;
  name: string;
}

const skills: Skill[] = [
  {
    id: 1,
    image: "html.png",
    name: "HTML"
  },
  {
    id: 2,
    image: "javascript.png",
    name: "Javascript"
  },
  {
    id: 3,
    image: "typescript.svg",
    name: "Typescript"
  },
  {
    id: 4,
    image: "tailwind.png",
    name: "tailwindCSS"
  },
  {
    id: 5,
    image: "reactjs.png",
    name: "ReactJs"
  },
  {
    id: 6,
    image: "nextjs.svg",
    name: "NextJs"
  },
  {
    id: 7,
    image: "expo.svg",
    name: "Expo"
  },
  {
    id: 8,
    image: "nodejs.svg",
    name: "NodeJs"
  },
  {
    id: 9,
    image: "expressjs.webp",
    name: "ExpressJs"
  },
  {
    id: 10,
    image: "framer-motion.svg",
    name: "Framer motion"
  },
  {
    id: 11,
    image: "zustand.svg",
    name: "Zustand"
  },
  {
    id: 12,
    image: "git.png",
    name: "Git"
  },
  {
    id: 13,
    image: "github.png",
    name: "GitHub"
  },
]

const About = () => {
  const [aboutMe, setAboutMe] = useState('myself')
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="w-full p-8 md:p-15 flex flex-col lg:flex-row justify-between gap-8 bg-gray-800 border border-gray-700/50 rounded-3xl mb-[10rem]">
      <div className="w-full lg:w-[50%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">About Me</h1>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 150 }} transition={{ duration: 0.8 }} className="h-2 bg-blue-600 rounded-full mt-3" />
        <div className="flex items-center gap-6 mt-6">
          <button onClick={() => setAboutMe('myself')} className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-200 flex items-center justify-center
            ${aboutMe == 'myself' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 hover:bg-gray-600 text-gray-100'}  
          `}>
            <RiMapPinUserFill size={15} className={`mr-2 ${aboutMe == 'myself' ? 'text-gray-100' : 'text-gray-100'}`} />
            My Self
          </button>
          <button onClick={() => setAboutMe('skills')} className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-200 flex items-center justify-center
            ${aboutMe == 'skills' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 hover:bg-gray-600 text-gray-100'}  
          `}>
            <PiBrainBold size={15} className={`mr-2 ${aboutMe == 'myself' ? 'text-gray-100' : 'text-gray-100'}`} />
            Skills
          </button>
        </div>
        {aboutMe == 'myself' ? (
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8  font-medium text-lg text-gray-200">
            I'm a passionate Full-Stack Developer dedicated to crafting clean, modern, and high-performance digital experiences. My core expertise lies in the React ecosystem, where I leverage TypeScript, Next.js, and React Native to build seamless applications across both web and mobile platforms.
            <br />
            <br />
            I thrive at the intersection of design and logic—turning complex ideas into functional, user-centric products. While my strength is in frontend architecture and styling with Tailwind CSS, I also bring foundational knowledge of Node.js to the table, allowing me to bridge the gap between client-side beauty and backend efficiency.
            <br />
            <br />
            For me, coding is more than just writing syntax; it&apos;s about solving real-world problems through scalable, maintainable, and visually striking solutions. I am a lifelong learner, constantly exploring emerging technologies to ensure the products I build are not only functional but truly enjoyable to use.
            <br />
            <br />
            <span className="italic ">GentleManDev - Software Developer</span>
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            className="w-full flex flex-wrap justify-center gap-6 mt-8"
          >
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col items-center justify-center w-38 py-4 rounded-3xl hover:shadow-xl transition-all duration-200">

                <div className="w-[4rem] h-[4rem] overflow-hidden rounded-full shadow-3xl flex items-center justify-center bg-gray-800 backdrop-filter backdrop-blur-md">
                  <Image
                    src={`/${skill.image}`}
                    alt={`Skill ${skill.id}`}
                    width={200}
                    height={200}
                    priority={true}
                    className="w-[80%]"
                  />
                </div>
                <h2 className="font-medium text-lg text-gray-200 mt-5">{skill.name}</h2>
              </div>
            ))}

          </motion.div>
        )}
      </div>
      <AnimatePresence mode="wait" >
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-140 md:h-200 lg:h-130 xl:h-180 w-full md:w-[70%] lg:w-[42%] mt-12 md:mt-0 p-2 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-700/20 backdrop-filter backdrop-blur-md border border-gray-700">
          <div className="overflow-hidden h-full rounded-xl">
            <Image
              alt="GentleManDev Image"
              src={`/${images[imageIndex]}`}
              width={800}
              height={800}
              className="w-full"
            />
            </div>
          
          {/* Invisible Click Zones for Controls */}
          <div className="absolute inset-0 flex">
            <div
              onClick={prevSlide}
              className="w-1/2 h-full cursor-pointer z-10"
              title="Previous"
            />
            <div
              onClick={nextSlide}
              className="w-1/2 h-full cursor-pointer z-10"
              title="Next"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${imageIndex === i ? "bg-white w-4" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default About
