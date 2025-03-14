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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-start space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary font-medium"
            variants={childVariants}
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            variants={childVariants}
          >
            <span className="text-white">John Doe</span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400"
            variants={childVariants}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="text-slate-400 max-w-xl text-lg"
            variants={childVariants}
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4 pt-4"
            variants={childVariants}
          >
            <motion.a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              View My Work
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-primary to-accent rounded-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
