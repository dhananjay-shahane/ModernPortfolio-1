import { motion } from "framer-motion";

const HeroSection = () => {
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

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 1.2
      }
    },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center py-8 sm:py-12 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient-slow"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary font-medium text-lg mb-4"
            variants={childVariants}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={childVariants}
          >
            <span className="text-white">Dhananjay Shahane</span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400 mb-6"
            variants={childVariants}
          >
            Frontend Developer
          </motion.h2>

          <motion.p 
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
            variants={childVariants}
          >
            I specialize in crafting responsive and intuitive web interfaces using modern technologies like React, TypeScript, and Tailwind CSS. Passionate about creating seamless user experiences that bring ideas to life.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={childVariants}
          >
            <motion.a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium transition-all text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              View My Work
            </motion.a>

            <motion.a 
              href="#contact" 
              className="border border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium transition-all text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;