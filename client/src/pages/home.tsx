import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  { id: 1, name: "John", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Mike", avatar: "https://i.pravatar.cc/150?u=3" },
];

const skills = ["React", "Node.js", "TypeScript", "UI/UX", "Next.js", "Tailwind"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Building the
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> future </span>
              of web
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Full-stack developer crafting modern web experiences with cutting-edge technologies.
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={itemVariants}
            >
              <Button size="lg" className="min-w-[140px]" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[140px]" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center gap-4 pt-8"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {testimonials.map((testimonial) => (
                  <Avatar key={testimonial.id} className="border-2 border-background w-8 h-8">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by <span className="font-medium text-foreground">20+ clients</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}