import { Link } from "wouter";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Enhanced footer component with multiple sections
 * Includes navigation, newsletter signup, contact info, and social links
 */
const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-muted/30 border-t relative">
      {/* Decorative Footer Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img 
          src="/attached_assets/footer.jpg" 
          alt="Decorative footer" 
          className="w-full h-auto object-cover"
          style={{ maxHeight: '120px' }}
        />
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/">
              <span className="inline-block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 cursor-pointer">John Doe</span>
            </Link>
            <p className="text-muted-foreground">
              Full-stack developer specializing in crafting beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {["Github", "Twitter", "LinkedIn", "Instagram"].map((platform, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">San Francisco, California</li>
              <li>
                <a 
                  href="mailto:john@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  john@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-base font-medium">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to my newsletter for the latest projects and updates.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and React
              </span>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;