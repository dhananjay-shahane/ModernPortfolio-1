
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  const testimonials = [
    { id: 1, name: "John Smith", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Sarah Johnson", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Mike Brown", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center bg-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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
                    View My Work
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Me
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/20 blur-3xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>

                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border/40 shadow-xl bg-background/90 backdrop-blur-sm p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="John Doe" 
                    className="w-full h-full object-cover rounded-xl"
                  />

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
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

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
