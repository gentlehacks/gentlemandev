"use client"
import {motion} from "framer-motion"
import Project from "./Project" 

interface Technologies {
  id: number;
  name: string;
}

interface ProjectProps {
  id: number;
  image: string;
  title: string;
  description: string;
  year: number;
  demoLink: string;
  status: 'live' | 'active' | 'prototyping' | 'production';
  technologies: Technologies[];
}

const projects: ProjectProps[] = [
  {
    id: 1,
    image: "/saukiphc.jpg",
    title: "Sauki phc patients record system",
    description: "A patient management record system that save and manage patients records for Sauki P.H.C clinic Kawo - kontagora, Niger state Nigeria.",
    year: 2025,
    demoLink: "https://saukiphc.vercel.app",
    status: "active",
    technologies: [
      {
        id: 1,
        name: "React.js"
      },
      {
        id: 2,
        name: "TailwindCss"
      },
      {
        id: 3,
        name: "Next.js"
      },
      {
        id: 4,
        name: "Typescript"
      },
      {
        id: 5,
        name: "Supabase"
      },
    ]
  },
  {
    id: 2,
    image: "/weather-app.jpg",
    title: "Weather Forecating App",
    description: "A NextJs weather forecasting app for Ibrahim Badamasi Babangida University Lapai, school project.",
    year: 2025,
    demoLink: "https://weather-app-ibbu.vercel.app",
    status: "live",
    technologies: [
      {
        id: 1,
        name: "React.js"
      },
      {
        id: 2,
        name: "TailwindCss"
      },
      {
        id: 3,
        name: "Next.js"
      },
      {
        id: 4,
        name: "Typescript"
      },
    ]
  },
  {
    id: 3,
    image: "/psdshub.jpg",
    title: "Password Generator",
    description: "A Strong password generator build to generate unique password easily and fast.",
    year: 2025,
    demoLink: "https://psdshub.vercel.app",
    status: "live",
    technologies: [
      {
        id: 1,
        name: "React.js"
      },
      {
        id: 2,
        name: "TailwindCss"
      },
      {
        id: 3,
        name: "Zustand"
      },
      {
        id: 4,
        name: "Typescript"
      },
    ]
  },
  {
    id: 4,
    image: "/skihub.jpg",
    title: "SkiHub",
    description: "A smart curated learning platform that organized best free resources for tech skills.",
    year: 2025,
    demoLink: "https://skihubs.vercel.app",
    status: "live",
    technologies: [
      {
        id: 1,
        name: "React.js"
      },
      {
        id: 2,
        name: "Next.js"
      },
      {
        id: 3,
        name: "TailwindCss"
      },
      {
        id: 4,
        name: "Typescript"
      },
    ]
  },
  {
    id: 5,
    image: "/zexsend.jpg",
    title: "ZexSend Startup",
    description: "A startup that focus on gift sharing for friends & love ones, for occassions like birthday, christmas, or eid in Nigeria.",
    year: 2025,
    demoLink: "https://zexsend.com",
    status: "prototyping",
    technologies: [
      {
        id: 1,
        name: "React.js"
      },
      {
        id: 2,
        name: "React native"
      },
      {
        id: 3,
        name: "TailwindCss"
      },
      {
        id: 4,
        name: "supabase"
      },
      {
        id: 5,
        name: "Node.js"
      },
      {
        id: 6,
        name: "Typescript"
      },
    ]
  },
];

const Projects = () => {

  return (
    <section id="projects" className=' mb-[10rem] px-8 md:px-12 lg:px-15 flex flex-col items-center justify-center'>
      <h1 className="text-xl md:text-2xl font-medium">Project & Case Studiess</h1>
      <p className="text-gray-400 text-center mt-3">A showcase of my recent work, from concept to deployment</p>

      {/* Projects */}
      <motion.ul 
        initial={{opacity: 0, y: '100px'}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      className="mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project =>  (
          <Project 
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            year={project.year}
            demoLink={project.demoLink}
            status={project.status}
            technologies={project.technologies}
          />
        ))}
      </motion.ul>
    
    </section>
  )
}

export default Projects