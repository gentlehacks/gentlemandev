"use client"
import {motion} from "framer-motion"
import SkillsCard from "./SkillsCard"

const Skills = () => {
  return (
    <motion.section id="skills" 
      initial={{opacity: 0, y: "200px", scale: 0.9}}
      whileInView={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 1}}
    className="mb-[10rem] flex flex-col items-center justify-center px-6 sm:px-10 md:px-8 lg:px-12">
      <h1 className="text-xl md:text-2xl font-semibold "><span className="border-b-2 border-blue-500">Technical</span> Expertise</h1>
      <p className="text-gray-400 text-md mt-3 max-w-[30rem] text-center">A collection of technologies and methodologies I've mastered through years of hands-on experience</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[5rem] sm:px-12 md:px-0">
        {/* Fontend  */}
        <SkillsCard 
          title={"Frontend Engineering"}
          description={"Crafting intuitive user experience"}
          data={[
            {
              id: 1,
              name: "ReactJs",
              description: "Building scalable component architectures",
              percentage: "80%",
            },
            {
              id: 2,
              name: "TypeScript",
              description: "Type-safe development practices",
              percentage: "70%",
            },
            {
              id: 3,
              name: "HTML/CSS",
              description: "Semantic markup & modern styling",
              percentage: "95%",
            },
            {
              id: 4,
              name: "Tailwind CSS",
              description: "Utility-first design system",
              percentage: "90%",
            }
          ]}
        />

        {/* Developent tools  */}
        <SkillsCard 
          title={"Development Tools"}
          description={"Streamlining development workflows"}
          data={[
            {
              id: 1,
              name: "NextJs",
              description: "Building scalable component architectures",
              percentage: "80%",
            },
            {
              id: 2,
              name: "Git/Github",
              description: "Version control & collaboration",
              percentage: "85%",
            },
            {
              id: 3,
              name: "Figma",
              description: "Design system creation",
              percentage: "70%",
            },
            {
              id: 4,
              name: "VScode",
              description: "Productive development environment",
              percentage: "83%",
            }
          ]}
        />

        {/* Backend  */}
        <SkillsCard 
          title={"Backend Systems"}
          description={"Crafting intuitive user experience"}
          data={[
            {
              id: 1,
              name: "NodeJs",
              description: "JavaScript runtime expertise",
              percentage: "70%",
            },
            {
              id: 2,
              name: "ExpressJs",
              description: "Web framework mastery",
              percentage: "70%",
            },
            {
              id: 3,
              name: "Supabase",
              description: "Backend-as-service",
              percentage: "75%",
            },
            {
              id: 4,
              name: "Rest Api",
              description: "API achitecture & design",
              percentage: "70%",
            }
          ]}
        />
      </div>
    </motion.section>
  )
}

export default Skills