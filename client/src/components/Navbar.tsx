import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest("#mobileMenu") && !target.closest("#menuButton")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 200) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white flex items-center">
          <span className="text-primary">&lt;</span>
          <span>John Doe</span>
          <span className="text-primary">/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className={`nav-link text-slate-200 hover:text-primary transition-colors relative ${
              activeSection === "home" ? "text-primary" : ""
            }`}
          >
            Home
            {activeSection === "home" && (
              <motion.span 
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary"
                layoutId="navIndicator"
              />
            )}
          </a>
          <a 
            href="#about" 
            className={`nav-link text-slate-200 hover:text-primary transition-colors relative ${
              activeSection === "about" ? "text-primary" : ""
            }`}
          >
            About
            {activeSection === "about" && (
              <motion.span 
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary"
                layoutId="navIndicator"
              />
            )}
          </a>
          <a 
            href="#projects" 
            className={`nav-link text-slate-200 hover:text-primary transition-colors relative ${
              activeSection === "projects" ? "text-primary" : ""
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <motion.span 
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary"
                layoutId="navIndicator"
              />
            )}
          </a>
          <a 
            href="#skills" 
            className={`nav-link text-slate-200 hover:text-primary transition-colors relative ${
              activeSection === "skills" ? "text-primary" : ""
            }`}
          >
            Skills
            {activeSection === "skills" && (
              <motion.span 
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary"
                layoutId="navIndicator"
              />
            )}
          </a>
          <a 
            href="#contact" 
            className={`nav-link text-slate-200 hover:text-primary transition-colors relative ${
              activeSection === "contact" ? "text-primary" : ""
            }`}
          >
            Contact
            {activeSection === "contact" && (
              <motion.span 
                className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary"
                layoutId="navIndicator"
              />
            )}
          </a>
          <a 
            href="#" 
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          id="menuButton"
          className="md:hidden text-slate-200 focus:outline-none" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(true)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobileMenu"
              className="fixed inset-0 bg-dark/95 flex flex-col items-center justify-center space-y-8 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                id="closeMenuButton"
                className="absolute top-6 right-6 text-slate-200" 
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              
              <motion.a 
                href="#home"
                className={`text-xl ${activeSection === "home" ? "text-primary" : "text-slate-200"} hover:text-primary transition-colors`}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Home
              </motion.a>
              
              <motion.a 
                href="#about"
                className={`text-xl ${activeSection === "about" ? "text-primary" : "text-slate-200"} hover:text-primary transition-colors`}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About
              </motion.a>
              
              <motion.a 
                href="#projects"
                className={`text-xl ${activeSection === "projects" ? "text-primary" : "text-slate-200"} hover:text-primary transition-colors`}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Projects
              </motion.a>
              
              <motion.a 
                href="#skills"
                className={`text-xl ${activeSection === "skills" ? "text-primary" : "text-slate-200"} hover:text-primary transition-colors`}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Skills
              </motion.a>
              
              <motion.a 
                href="#contact"
                className={`text-xl ${activeSection === "contact" ? "text-primary" : "text-slate-200"} hover:text-primary transition-colors`}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Contact
              </motion.a>
              
              <motion.a 
                href="#"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
