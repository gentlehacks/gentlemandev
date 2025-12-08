"use client"
import Image from "next/image"

interface Project {
  id: number;
  name: string;
  image: string;
  category: "Clinic" | "website";
}

const Project = ({id, name, image, category}: Project) => {

  return (
    <div className="w-[100%] h-[250px] rounded-2xl rounded-b-xl overflow-hidden p-1 border-1 border-gray-700 hover:border-blue-400 relative transiton-all duration-200">
      <Image 
        src={image}
        alt={name}
        width={300}
        height={300}
        priority
        className="w-full rounded-t-xl hover:scale-[1.1] transition-all duration-200 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black px-4 py-3 flex items-center justify-between">
        <h3 className="font-medium text-[13px] text-gray-300">
          {name}
        </h3>
        <p className="text-sm text-gray-400">
          {category}
        </p>
      </div> 
    </div>
  )
}

export default Project;