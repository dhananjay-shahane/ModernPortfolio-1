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
        delay: 0.8
      }
    },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/10 rounded-full animate-float-slow"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={childVariants}
            className="inline-block mb-6"
          >
            <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-primary border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
              <span className="relative z-10">Available for Freelance Work</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></div>
            </span>
          </motion.div>

          <motion.h1 
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
              Dhananjay Shahane
            </span>
          </motion.h1>

          <motion.h2 
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 mb-6"
          >
            Frontend Developer
          </motion.h2>

          <motion.p 
            variants={childVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Crafting beautiful & performant web experiences with modern technologies.
            Specializing in React, TypeScript, and responsive design.
          </motion.p>

          <motion.div 
            variants={childVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a 
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a 
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary border-2 border-primary/20 rounded-lg hover:bg-primary/5 transition-colors duration-300"
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