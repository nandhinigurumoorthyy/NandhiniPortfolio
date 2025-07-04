import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <div>
      <section className="px-6 py-10" id="projects">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Projects
        </h1>
        <div className="h-1 w-24 mb-8 bg-white"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden h-[400px] transition transform"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />

              <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/45 text-slate-100">
                <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
                <div className="flex flex-col justify-between">
                  <p className="mb-4 flex-grow text-lg">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener norefferer"
                    className="bg-white text-stone-900 rounded-full p-2 w-32 text-sm hover:bg-gray-100 text-center"
                  >
                    Source                  
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener norefferer"
                    className="bg-white text-stone-900 rounded-full p-2 w-32 text-sm hover:bg-gray-100 text-center"
                  >
                    Demo
                  </a></div>
                </div>
              </div>

             
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
