
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

  const NavItems = () => (
    <>
      <Button variant="ghost" size="icon" onClick={handleHomeClick}>
        <Home className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Link href="/profile">
        <Button variant="ghost" size="icon">
          <User className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </Link>
      <Link href="/projects">
        <Button variant="ghost" size="icon">
          <FolderKanban className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="ghost" size="icon">
          <Mail className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[200px] sm:w-[240px]">
              <nav className="flex flex-col gap-4 mt-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}
