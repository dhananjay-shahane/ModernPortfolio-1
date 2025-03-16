import * as React from "react";
import { Link } from "wouter";
import { Home, User, FolderKanban, Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Dock() {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-lg rounded-full p-2 shadow-lg border">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 hover:bg-accent"
          onClick={scrollToTop}
        >
          <Link href="/">
            <Home className="h-6 w-6" />
          </Link>
        </Button>
        <Link href="/about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-accent"
          >
            <User className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-accent"
          >
            <FolderKanban className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-accent"
          >
            <Mail className="h-6 w-6" />
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 hover:bg-accent"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-6 w-6 dark:hidden" />
          <Moon className="h-6 w-6 hidden dark:block" />
        </Button>
      </div>
    </div>
  );
}
