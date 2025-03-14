import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { 
  Laptop, 
  Server, 
  Settings2, 
  Sliders 
} from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.3 + (i * 0.1)
      }
    }),
    hover: { 
      y: -8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p 
              className="text-slate-300 mb-6"
              variants={textVariants}
            >
              Hello! I'm John, a passionate full-stack developer with over 5 years of experience creating web applications. My journey in software development began when I built my first website during college, and I've been hooked ever since.
            </motion.p>
            
            <motion.p 
              className="text-slate-300 mb-6"
              variants={textVariants}
            >
              I've had the privilege of working at a <span className="text-primary">startup</span>, a <span className="text-accent">large corporation</span>, and as a <span className="text-secondary">freelance developer</span>. This diverse experience has given me a unique perspective on different development approaches and business needs.
            </motion.p>
            
            <motion.p 
              className="text-slate-300 mb-6"
              variants={textVariants}
            >
              My focus is on creating intuitive, efficient, and accessible web applications that provide real value to users. I'm constantly learning new technologies and approaches to stay at the forefront of web development.
            </motion.p>
            
            <motion.p 
              className="text-slate-300"
              variants={textVariants}
            >
              When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new cooking recipes.
            </motion.p>
          </motion.div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              className="bg-dark p-6 rounded-lg shadow-lg transition-all"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-primary text-3xl mb-2">
                <Laptop className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Front-end</h3>
              <p className="text-slate-400">Creating responsive, accessible user interfaces with modern frameworks</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark p-6 rounded-lg shadow-lg transition-all"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-accent text-3xl mb-2">
                <Server className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Back-end</h3>
              <p className="text-slate-400">Building robust APIs and services with scalable architecture</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark p-6 rounded-lg shadow-lg transition-all"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-secondary text-3xl mb-2">
                <Settings2 className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">DevOps</h3>
              <p className="text-slate-400">Setting up CI/CD pipelines and cloud infrastructure</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark p-6 rounded-lg shadow-lg transition-all"
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-primary text-3xl mb-2">
                <Sliders className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">UI/UX</h3>
              <p className="text-slate-400">Designing intuitive interfaces with a focus on user experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
