
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Loader({ className, size = "md" }: LoaderProps) {
  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full overflow-hidden rounded-full bg-secondary", sizes[size], className)}>
      <motion.div
        className="h-full w-[40%] rounded-full bg-primary"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
