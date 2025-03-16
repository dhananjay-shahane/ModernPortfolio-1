import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { 
  Laptop, 
  Server, 
  Palette,
  Code2
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
    <section id="about" className="py-16 md:py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6">
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
              Hi! I'm Dhananjay, a passionate frontend developer with a keen eye for creating engaging and responsive web interfaces. My journey in web development began with a strong desire to build beautiful and functional websites that users love.
            </motion.p>

            <motion.p 
              className="text-slate-300 mb-6"
              variants={textVariants}
            >
              I specialize in modern web technologies like <span className="text-primary">React</span>, <span className="text-accent">TypeScript</span>, and <span className="text-secondary">Tailwind CSS</span>. I'm committed to writing clean, maintainable code and creating intuitive user experiences.
            </motion.p>

            <motion.p 
              className="text-slate-300 mb-6"
              variants={textVariants}
            >
              My focus is on crafting pixel-perfect, accessible web applications that not only look great but also perform exceptionally well. I stay up-to-date with the latest frontend trends and best practices to deliver modern solutions.
            </motion.p>

            <motion.p 
              className="text-slate-300"
              variants={textVariants}
            >
              When I'm not coding, I enjoy exploring new web technologies, contributing to open-source projects, and sharing knowledge with the developer community.
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
                <Code2 className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">React & TypeScript</h3>
              <p className="text-slate-400">Building modern web applications with type-safe code</p>
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
                <Laptop className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Responsive Design</h3>
              <p className="text-slate-400">Creating layouts that work seamlessly across all devices</p>
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
                <Server className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Performance</h3>
              <p className="text-slate-400">Optimizing applications for speed and efficiency</p>
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
                <Palette className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">UI/UX</h3>
              <p className="text-slate-400">Crafting intuitive and engaging user experiences</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;