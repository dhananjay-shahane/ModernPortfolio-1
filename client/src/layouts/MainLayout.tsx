import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dock } from "@/components/ui/Dock";
import Footer from "@/components/ui/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header, footer, and page transitions
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Dock />

      <AnimatePresence mode="wait">
        <motion.main 
          className="flex-grow w-full flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MainLayout;