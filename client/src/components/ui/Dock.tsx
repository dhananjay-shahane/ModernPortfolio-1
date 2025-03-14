
import * as React from "react";
import { Link, useLocation } from "wouter";
import { Home, User, FolderKanban, Mail, Moon, Sun, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Dock() {
  const { theme, setTheme } = useTheme();
  const [, setLocation] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
    scrollToTop();
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-full px-8 py-6 bg-background/80 backdrop-blur-sm border">
            <div className="flex items-center gap-6">
              <Home className="w-5 h-5" />
              <FolderKanban className="w-5 h-5" />
              <Github className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Mail className="w-5 h-5" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full p-0">
          <nav className="grid gap-4 p-4">
            <Link href="/" onClick={handleHomeClick} className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link href="/projects" className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <FolderKanban className="w-5 h-5" /> Projects
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <Github className="w-5 h-5" /> Github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <Twitter className="w-5 h-5" /> Twitter
            </a>
            <Link href="/contact" className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg">
              <Mail className="w-5 h-5" /> Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
