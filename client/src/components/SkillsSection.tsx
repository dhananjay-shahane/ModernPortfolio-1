import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import ProgressSkill from "./ui/progress-skill";
import { Laptop, Server, Settings2 } from "lucide-react";
import { frontendSkills, backendSkills, toolsSkills } from "../lib/data";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1 * i
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="bg-dark p-8 rounded-lg shadow-lg"
            custom={0}
            variants={skillCardVariants}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Laptop className="h-6 w-6 text-primary mr-2" />
              Frontend Development
            </h3>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <ProgressSkill 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="primary"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-dark p-8 rounded-lg shadow-lg"
            custom={1}
            variants={skillCardVariants}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Server className="h-6 w-6 text-accent mr-2" />
              Backend Development
            </h3>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <ProgressSkill 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="accent"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Others */}
          <motion.div 
            className="bg-dark p-8 rounded-lg shadow-lg"
            custom={2}
            variants={skillCardVariants}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Settings2 className="h-6 w-6 text-secondary mr-2" />
              Tools & Other Skills
            </h3>
            
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <ProgressSkill 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="secondary"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
