
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
    <div className="flex flex-row md:flex-row items-center gap-2">
      <Button variant="ghost" size="icon" onClick={handleHomeClick}>
        <Home className="h-5 w-5" />
      </Button>
      <Link href="/profile">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </Link>
      <Link href="/projects">
        <Button variant="ghost" size="icon">
          <FolderKanban className="h-5 w-5" />
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="ghost" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
    </div>
  );

  return (
    <>
      <nav className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavItems />
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed bottom-4 right-4 rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[200px]">
          <div className="flex justify-center mt-4">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
