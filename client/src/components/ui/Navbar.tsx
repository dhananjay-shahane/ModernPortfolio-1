import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Modern navbar with animated link indicators and mobile support
 * Includes theme toggling and responsive design
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20" ref={navRef}>
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 cursor-pointer">John Doe</span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  <Link href={link.href}>
                    <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {link.label}
                      {location === link.href && (
                        <motion.div
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Theme toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            {/* CTA Button */}
            <Button asChild>
              <Link href="/contact">
                <span>Get In Touch</span>
              </Link>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`md:hidden fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu content */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-card/95 backdrop-blur-md border-l shadow-xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col h-full">
              <div className="sticky top-0 z-10 p-5 bg-background/80 backdrop-blur-sm border-b flex items-center justify-between">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 cursor-pointer">John Doe</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex-1 p-6 pb-14 overflow-y-auto">
                <nav>
                  <ul className="space-y-5">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <div 
                            className={`group flex items-center py-3 px-4 -mx-4 rounded-lg transition-colors hover:bg-muted cursor-pointer ${
                              location === link.href ? "bg-muted/70 text-primary" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${
                              location === link.href ? "bg-primary" : "bg-muted-foreground/40 group-hover:bg-primary/40"
                            }`}></div>
                            <span className="font-medium">{link.label}</span>
                            {location === link.href ? (
                              <motion.span
                                className="ml-auto text-primary"
                                layoutId="mobile-nav-indicator"
                                transition={{ type: "spring", bounce: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </motion.span>
                            ) : (
                              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-40">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-10 pt-6 border-t">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <span>Get In Touch</span>
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-10 pt-6 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Theme</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="gap-2"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4" /> 
                          <span>Light</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" /> 
                          <span>Dark</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;