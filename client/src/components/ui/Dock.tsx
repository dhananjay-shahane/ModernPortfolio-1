
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
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
    { href: "/about", icon: User, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-lg px-4 py-2 rounded-full border shadow-lg">
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = location === href;
          return (
            <Link key={href} href={href}>
              <Button
                onClick={href === "/" ? scrollToTop : undefined}
                variant="ghost"
                size="icon"
                className={cn(
                  "relative rounded-full transition-all duration-300",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Button>
            </Link>
          );
        })}
        <div className="w-px h-6 bg-border mx-2" />
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
