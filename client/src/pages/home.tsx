import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { frontendSkills, backendSkills, projects } from "@/lib/data";
import { useState } from "react";
import CtaSection from "@/components/CtaSection";
import SkillsSection from "@/components/SkillsSection";

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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Akash Patel",
      role: "Tech Lead, WebStack Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "Dhananjay's expertise in React and attention to detail resulted in a pixel-perfect implementation of our design system.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager, InnovateTech",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "Working with Dhananjay was great. His frontend skills and commitment to creating responsive, user-friendly interfaces are impressive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Founder, DesignFirst",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      content:
        "Dhananjay's ability to translate complex designs into smooth, interactive web experiences exceeded our expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "Rahul Verma",
      role: "Founder, DesignFirst",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      content:
        "Dhananjay's ability to translate complex designs into smooth, interactive web experiences exceeded our expectations.",
      rating: 3,
    },
  ];

  return (
    <div>
      {/* Hero Section - with animated gradient background and particles */}
      <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm bg-[url('https://www.wizardshock.xyz/images/background-1.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm bg-[url('https://www.wizardshock.xyz/images/level-1.gif')] bg-center"></div>
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm bg-[url('https://www.wizardshock.xyz/images/level-2.gif')] bg-center"></div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="pixel-text md:text-5xl text-3xl"
              variants={itemVariants}
            >
              Hello, I'm Dhananjay Shahane
            </motion.h2>

            <motion.p
              className="text-xl text-gray-50 mb-8 leading-relaxed max-w-5xl mx-auto"
              variants={itemVariants}
            >
              UI Developer specializing in React.js, Tailwind CSS I am
              passionate about solving complex challenges and transforming them
              into user-friendly, visually appealing digital experiences. With a
              focus on responsive web design and seamless interactions, I
              partner with startups and businesses globally to build innovative
              websites and applications that boost user engagement, drive
              growth, and give them a competitive edge in the market.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-6"
              variants={itemVariants}
            >
              <Button
                size="lg"
                asChild
                className="relative px-6 py-3 text-lg font-bold pixel-font bg-yellow-400 hover:text-white text-black shadow-[4px_4px_4px_4px_#bbbb] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
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
                  <Avatar
                    key={testimonial.id}
                    className="border-2 border-background w-8 h-8"
                  >
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-50">
                  from{" "}
                  <span className="font-medium text-gray-50">20+ clients</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4  bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work. Each project was carefully
                crafted to solve specific challenges.
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="relative px-6 py-3 text-lg font-bold pixel-font bg-yellow-400 hover:text-white text-black shadow-[4px_4px_4px_4px_#bbbb] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
            >
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
                      <div className="absolute bottom-4 right-4 flex justify-between items-end">
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="default"
                            className="bg-primary/90 hover:bg-primary shadow-lg"
                            onClick={() => setSelectedProject(project)}
                            asChild
                          >
                            <span>Details</span>
                          </Button>
                          {project.demoUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="shadow-lg backdrop-blur-sm hover:bg-secondary/80"
                              asChild
                            >
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className={tech.color}>
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <SkillsSection />

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
                animation: `float ${
                  Math.random() * 10 + 15
                }s infinite ease-in-out`,
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
              Trusted by professionals worldwide. Here's what they say about
              working with me.
            </p>
          </div>

          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative">
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>

                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="w-16 h-16 border-4 border-background shadow-xl group-hover:border-primary/20 transition-colors duration-500">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-lg font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            } transition-colors duration-300`}
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
      <CtaSection />
    </div>
  );
};

export default HomePage;
