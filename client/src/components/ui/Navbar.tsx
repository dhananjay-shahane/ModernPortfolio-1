import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold cursor-pointer">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`relative cursor-pointer transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    location === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="justify-start px-4"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
            >
              {theme === "dark" ? (
                <>
                  <Sun size={16} className="mr-2" /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={16} className="mr-2" /> Dark Mode
                </>
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;