import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { frontendSkills, backendSkills, projects } from "@/lib/data";
import { useState } from 'react';

/**
 * Home page component
 * Features hero section, selected projects, skills, testimonials, and call to action
 * Includes animations and interactive elements
 */
const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Akash Patel",
      role: "Tech Lead, WebStack Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Dhananjay's expertise in React and attention to detail resulted in a pixel-perfect implementation of our design system.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager, InnovateTech",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Working with Dhananjay was great. His frontend skills and commitment to creating responsive, user-friendly interfaces are impressive.",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Founder, DesignFirst",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      content: "Dhananjay's ability to translate complex designs into smooth, interactive web experiences exceeded our expectations.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section - with animated gradient background and particles */}
      <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient-slow"></div>

        {/* Animated particles (decorative elements) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="inline-block text-primary font-medium"
                variants={itemVariants}
              >
                Hello, I'm John Doe
              </motion.span>

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                variants={itemVariants}
              >
                Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">digital experiences</span> that matter
              </motion.h1>

              <motion.p 
                className="text-xl text-muted-foreground max-w-xl"
                variants={itemVariants}
              >
                Full-stack developer specializing in building exceptional digital 
                experiences that are accessible, human-centered, and business-focused.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-2"
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
                className="flex items-center gap-3 pt-4"
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

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/20 blur-3xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>

                {/* Profile image with glow effect */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border/40 shadow-xl bg-background/90 backdrop-blur-sm p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="John Doe" 
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Floating skill badges */}
                  <Badge className="absolute top-6 -left-2 shadow-lg animate-float-slow" variant="secondary">
                    React
                  </Badge>
                  <Badge className="absolute top-20 -right-2 shadow-lg animate-float-slow animation-delay-300" variant="secondary">
                    Node.js
                  </Badge>
                  <Badge className="absolute bottom-16 -left-2 shadow-lg animate-float-slow animation-delay-700" variant="secondary">
                    TypeScript
                  </Badge>
                  <Badge className="absolute bottom-6 right-4 shadow-lg animate-float-slow animation-delay-500" variant="secondary">
                    UI/UX
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work. Each project was carefully crafted to solve specific challenges.
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link href="/projects">
                <span>View All Projects</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="group h-full flex flex-col overflow-hidden border-2 border-border/30 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="space-y-1">
                          <h3 className="font-bold text-lg text-white">{project.title}</h3>
                          <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="default" className="bg-primary/90 hover:bg-primary shadow-lg" onClick={() => setSelectedProject(project)} asChild>
                            <span>Details</span>
                          </Button>
                          {project.demoUrl && (
                            <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm hover:bg-secondary/80" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className={tech.color}>{tech.name}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I specialize in.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/80 to-primary/30 text-primary-foreground flex items-center justify-center mr-4 shadow-sm">
                  <span className="font-bold text-xl">F</span>
                </div>
                <h3 className="text-2xl font-semibold">Frontend Development</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {frontendSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 bg-muted/70 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary/80 to-primary/50 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/80 to-purple-500/30 text-white flex items-center justify-center mr-4 shadow-sm">
                  <span className="font-bold text-xl">B</span>
                </div>
                <h3 className="text-2xl font-semibold">Backend Development</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {backendSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-colors">
                          <span className="text-xs font-medium text-purple-500">{index + 1}</span>
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 bg-muted/70 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-500/80 to-purple-500/50 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="px-8" asChild>
              <Link href="/about">
                <span>View All Skills</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5"></div>
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals worldwide. Here's what they say about working with me.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative">
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>

                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="w-16 h-16 border-4 border-background shadow-xl group-hover:border-primary/20 transition-colors duration-500">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"} transition-colors duration-300`} 
                          />
                        ))}
                      </div>

                      <p className="text-lg font-medium leading-relaxed text-foreground/90 italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="relative hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm overflow-hidden p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to bring your ideas to life?</h2>
                <p className="text-lg text-muted-foreground">
                  I'm available for freelance projects and full-time opportunities. 
                  Let's work together to create something amazing.
                </p>
              </div>
              <Button size="lg" className="min-w-[150px]" asChild>
                <Link href="/contact">
                  <span>Get in Touch</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HomePage;