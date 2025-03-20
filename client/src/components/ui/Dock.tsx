import * as React from "react";
import { Link, useLocation } from "wouter";
import { Home, User, FolderKanban, Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Dock() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/projects", icon: FolderKanban, label: "Projects" },
    { path: "/contact", icon: Mail, label: "Contact" },
    { path: "/about", icon: User, label: "About" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-md">
        {links.map(({ path, icon: Icon, label }) => (
          <Link key={path} href={path} onClick={scrollToTop}>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full transition-all",
                location === path && "bg-accent text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Button>
          </Link>
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}