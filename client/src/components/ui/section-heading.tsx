import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "4rem",
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <div className="flex flex-col items-center mb-12">
      <motion.h2 
        className="text-3xl font-bold text-white flex items-center mb-2"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <span className="text-primary mr-2">&lt;</span>
        {title}
        <span className="text-primary ml-2">/&gt;</span>
      </motion.h2>
      
      <motion.div 
        className="h-1 bg-primary rounded-full"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      />
    </div>
  );
};

export default SectionHeading;
