import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Filter, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projects } from "@/lib/data";

/**
 * Projects page component
 * Displays a grid of projects with filtering and search functionality
 * Includes animated transitions and interactive elements
 */
const ProjectsPage = () => {
  // State for filtering and search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Extract all unique categories from projects
  const allCategories = ["all", ...new Set(
    projects.flatMap(project => 
      project.technologies.map(tech => tech.name)
    )
  )];
  
  // Filter projects based on search query and selected category
  useEffect(() => {
    let result = projects;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(project => 
        project.technologies.some(tech => 
          tech.name.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
    
    setFilteredProjects(result);
  }, [searchQuery, selectedCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore my portfolio of web applications, ranging from e-commerce platforms to interactive dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="rounded-lg border bg-card p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCategories.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-muted">
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-end justify-center p-4">
                        <div className="flex gap-3">
                          <Button size="sm" variant="default" className="shadow-lg hover:shadow-primary/20" asChild>
                            <Link href={`/projects/${project.id}`}>View Details</Link>
                          </Button>
                          {project.demoUrl && (
                            <Button size="sm" variant="outline" className="shadow-lg backdrop-blur-sm bg-background/50" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl font-bold tracking-tight">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className={tech.color}
                          onClick={() => setSelectedCategory(tech.name)}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-full bg-muted p-6 mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-4">
                  No projects match your current search criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="rounded-2xl bg-muted p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I&apos;m always open to new opportunities and exciting projects.
              Let&apos;s discuss how we can work together to bring your ideas to life.
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

export default ProjectsPage;