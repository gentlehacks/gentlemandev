"use client"
import {motion} from "framer-motion";

interface Skill {
    id: number;
    name: string;
    description: string;
    percentage: string;
  } 
interface SkillCardProps {
  title: string;
  description: string;
  data: Skill[];
}

const SkillsCard = ({title, description, data}: SkillCardProps) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: "50px", scale: 0.9}}
      whileInView={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 1}}
    className="relative w-full border-[0.5px] border-blue-900 hover:border-blue-600 rounded-3xl p-6 bg-blue-400/10 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-md shadow-blue-400/10  transition-all duration-200">
      <h1 className="font-bold text-xl text-blue-500">
        {title}
      </h1>
      <p className="text-gray-400 mt-3">
        {description}
      </p>
      
      {/* Skills */}
      <div className="flex flex-col mt-8 gap-4">
      {data.map(skill => (
        <div key={skill.id} className="p-4 flex flex-col border border-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <h1 className="text-md font-semibold text-gray-200 ml-2">
                {skill.name}
              </h1>
            </div>
            <p className="text-gray-300 text-md font-medium">
              {skill.percentage}</p>
          </div>
          <motion.div 
            initial={{backgroundColor: "rgba(36, 36, 36, 1)"}}
            animate={{backgroundColor: "rgba(54, 54, 54, 0.7)"}}
            transition={{duration: 2, repeat: Infinity, repeatType: 'mirror'}}
          className="relative w-full h-2 bg-gray-800 rounded-full mt-4">
            <motion.div className={`absolute left-0 top-0 h-2 bg-blue-500 rounded-full `} initial={{width: "0%"}} whileInView={{width: skill.percentage}} transition={{duration: 1.5,  ease: "easeOut"}}
            />
          </motion.div>
          <p className="mt-3 text-sm text-gray-400">
            {skill.description}
          </p>
        </div>
      ))}
      </div>

      <div className="absolute top-6 right-6 bg-blue-400/70 rounded-xl w-12 h-12 z-[-20] rotate-[60deg]" />
      <div className="absolute bottom-3 left-4 bg-blue-400/70 rounded-full w-12 h-12 z-[-20] rotate-[60deg]" />
    </motion.div>
  )
}

export default SkillsCard