"use client"
import Image from "next/image"
import Link from "next/link"
import { CiCalendarDate } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";

interface Technologies {
  id: number;
  name: string;
};

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  year: number;
  demoLink: string;
  status: 'live' | 'active' | 'prototyping' | 'production';
  technologies: Technologies[];
}

const Project = (
  {
    id, 
    image, 
    title, 
    description, 
    year, 
    demoLink, 
    status, 
    technologies
  }: Project) => {

  return (
    <div className="w-[100%] block rounded-xl overflow-hidden p-1 border-1 border-gray-700 hover:border-blue-400 relative transiton-all duration-200">
      <div className="w-full h-50 overflow-hidden rounded-t-xl">
        <Image 
          src={image}
          alt={title}
          width={300}
          height={300}
          priority
          className="w-full  hover:scale-[1.1] transition-all duration-200 ease-in-out"
        />
      </div>
      <div className="w-full flex flex-col mt-5 p-4">
        <div className=" w-full flex items-center justify-between">
          <h1 className="font-semibold text-lg text-gray-100">{title}</h1>
          <div className="p-1 bg-gray-800 rounded-full flex items-center justify-center">
            <CiCalendarDate className="mr-1 text-sm" />
            <p className="text-xs">{year}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-400 text-sm">
          {description}
        </p>
        <div className="mt-4 flex grid grid-cols-3 w-fit gap-3">
          {technologies.map(tech => (
            <div key={tech.id} className="p-1 px-2 w-fit bg-blue-500/10 rounded-full">
              <p className="font-medium text-blue-600 text-xs">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between mt-6">
          <Link href={demoLink} target="_blank">
            <button className="px-4 py-2 flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200">
              <LuExternalLink className="text-sm mr-2" />
              <h3 className="font-medium text-sm">Live Demo</h3>
            </button>
          </Link>
          <div className="flex items-center">
            <div className={`mr-2 w-2 h-2 rounded-full animate-pulse bg-green-500 `} /> 
            <p className="text-gray-400 text-sm">
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;