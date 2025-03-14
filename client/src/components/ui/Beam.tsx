import { motion } from "framer-motion";

interface BeamProps {
  children: React.ReactNode;
  className?: string;
}

export const Beam = ({ children, className }: BeamProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};