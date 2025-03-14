import * as React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, FolderKanban, Mail, Settings, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 shadow-lg backdrop-blur-lg border">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FolderKanban className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="grid gap-4 py-4">
              <Link href="/" className="block px-4 py-2 hover:bg-accent rounded-lg">
                Home
              </Link>
              <Link href="/projects" className="block px-4 py-2 hover:bg-accent rounded-lg">
                Projects
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-accent rounded-lg">
                Contact
              </Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-accent rounded-lg">
                Settings
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}