
import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

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
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center py-20">
        <div className="absolute inset-0 overflow-hidden">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`,
                opacity: 0.1,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Hello, I'm John Doe
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Full-stack developer specializing in building exceptional digital 
              experiences that are accessible, human-centered, and business-focused.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={itemVariants}
            >
              <Button size="lg" asChild>
                <Link href="/projects">
                  <span>View My Work</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <span>Contact Me</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 pt-4 justify-center"
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
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  from <span className="font-medium text-foreground">20+ clients</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Here are some of my recent works that showcase my skills and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="group bg-card hover:bg-card/80 rounded-lg overflow-hidden border transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video bg-muted">
                  <img
                    src={`https://picsum.photos/seed/${project}/600/400`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/projects/${project}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">My Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I use to bring projects to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-card hover:bg-card/80 border rounded-lg p-6 text-center transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-xl font-semibold">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
