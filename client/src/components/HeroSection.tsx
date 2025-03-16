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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.7
      }
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary font-medium text-lg"
            variants={childVariants}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            variants={childVariants}
          >
            <span className="text-white">Dhananjay Shahane</span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400"
            variants={childVariants}
          >
            Frontend Developer
          </motion.h2>

          <motion.p 
            className="text-slate-400 max-w-xl text-base sm:text-lg"
            variants={childVariants}
          >
            I specialize in crafting responsive and intuitive web interfaces using modern technologies like React, TypeScript, and Tailwind CSS. Passionate about creating seamless user experiences that bring ideas to life.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-2"
            variants={childVariants}
          >
            <motion.a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              View My Work
            </motion.a>

            <motion.a 
              href="#contact" 
              className="border border-primary text-primary hover:bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Dhananjay Shahane" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;