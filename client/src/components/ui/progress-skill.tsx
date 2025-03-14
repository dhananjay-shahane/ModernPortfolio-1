import { motion } from "framer-motion";

interface ProgressSkillProps {
  name: string;
  percentage: number;
  color: "primary" | "accent" | "secondary";
  delay?: number;
}

const ProgressSkill = ({ name, percentage, color, delay = 0 }: ProgressSkillProps) => {
  // Convert color name to appropriate Tailwind class
  const colorMap = {
    primary: "text-primary bg-primary",
    accent: "text-accent bg-accent",
    secondary: "text-secondary bg-secondary"
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { 
        duration: 1,
        ease: "easeInOut",
        delay: delay
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: delay
      }
    }
  };

  return (
    <div>
      <motion.div 
        className="flex justify-between mb-1"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className={`text-sm font-medium ${colorMap[color].split(" ")[0]}`}>{percentage}%</span>
      </motion.div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div 
          className={`${colorMap[color].split(" ")[1]} h-2 rounded-full`}
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default ProgressSkill;
