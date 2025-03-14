
import * as React from "react";
import { Link, useLocation } from "wouter";
import { Home, User, FolderKanban, Mail, Moon, Sun, Menu } from "lucide-react";
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
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed bottom-4 right-4 rounded-full">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <div className="flex flex-col gap-4 pt-10">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-2" 
              onClick={handleHomeClick}
            >
              <Home className="h-5 w-5" />
              Home
            </Button>
            <Link href="/about">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-5 w-5" />
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FolderKanban className="h-5 w-5" />
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              Theme
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
