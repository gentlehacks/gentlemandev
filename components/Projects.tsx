"use client"
import Project from "./Project" 

interface ProjectProps {
  id: number;
  name: string;
  image: string;
  category: "Clinic" | "website";
}

const projects: ProjectProps[] = [
  {
    id: 1,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  },
  {
    id: 2,
    name: "Weather App",
    image: "/weather-app.png",
    category: "website"
  },
  {
    id: 3,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  },
  {
    id: 4,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  },
  {
    id: 5,
    name: "ZexSend landing page",
    image: "/zexsend.png",
    category: "website"
  },
  {
    id: 6,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "website"
  },
  {
    id: 7,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  },
  {
    id: 8,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  },
  {
    id: 9,
    name: "Sauki PHC patient record",
    image: "/saukiphc.png",
    category: "Clinic"
  }
];

const Projects = () => {

  return (
    <section id="projects" className=' mb-[10rem] px-8 md:px-12 lg:px-15 flex flex-col items-center justify-center'>
      <h1 className="text-xl md:text-2xl font-medium">My Projects</h1>

      {/* Projects */}
      <ul className="mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project =>  (
          <Project 
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            category={project.category}
          />
        ))}
      </ul>
    
    </section>
  )
}

export default Projects