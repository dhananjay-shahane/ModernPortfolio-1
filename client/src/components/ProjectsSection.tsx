import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { projects } from "../lib/data";

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.1 * i
      }
    }),
    hover: { 
      y: -8,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.6 }
    },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Projects" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-dark-light rounded-lg overflow-hidden shadow-lg transition-all duration-300 project-card"
              custom={index}
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex space-x-3 mb-2">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-md text-sm transition-colors"
                      >
                        Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark hover:bg-dark/90 text-white px-3 py-1 rounded-md text-sm transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-xs bg-dark px-2 py-1 rounded-md ${
                        tech.color || "text-primary"
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-block border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
