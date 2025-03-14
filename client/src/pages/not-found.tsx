import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/**
 * 404 Not Found page component
 * Displays when a user navigates to a non-existent route
 * Includes animated elements and navigation back to home
 */
const NotFoundPage = () => {
  // Animation variants for staggered animations
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center">
      <div className="container px-4 md:px-6 py-10 mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-[10rem] font-bold text-primary leading-none"
            variants={itemVariants}
          >
            404
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mt-6"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-lg text-muted-foreground max-w-md"
            variants={itemVariants}
          >
            Sorry, the page you are looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div 
            className="mt-8"
            variants={itemVariants}
          >
            <Button size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;