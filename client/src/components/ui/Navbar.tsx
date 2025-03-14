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
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 border-t">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className={`block py-2 text-base font-medium transition-colors hover:text-primary cursor-pointer ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <span>Get In Touch</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;