import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const SocialIcons = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        delay: 0.1 * i
      }
    }),
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };
  
  const socialLinks = [
    { 
      id: 1, 
      icon: <Github className="h-6 w-6" />, 
      href: "https://github.com", 
      label: "GitHub" 
    },
    { 
      id: 2, 
      icon: <Linkedin className="h-6 w-6" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      id: 3, 
      icon: <Twitter className="h-6 w-6" />, 
      href: "https://twitter.com", 
      label: "Twitter" 
    },
    { 
      id: 4, 
      icon: <Instagram className="h-6 w-6" />, 
      href: "https://instagram.com", 
      label: "Instagram" 
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <motion.a 
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark p-3 rounded-full text-slate-400 hover:text-primary hover:bg-dark-light transition-all"
          aria-label={link.label}
          custom={link.id}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
