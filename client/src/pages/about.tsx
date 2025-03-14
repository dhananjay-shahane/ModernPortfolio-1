import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Award, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Beam = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * About page component
 * Displays detailed information about the developer, experience, education, and skills
 * Includes interactive timeline and animated sections
 */
const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
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

  // Experience and education data
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Leading the frontend development team in building scalable web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2018 - 2020",
      description: "Developed and maintained multiple web applications from conception to deployment. Collaborated with UX designers to create intuitive user interfaces.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebSolutions",
      period: "2016 - 2018",
      description: "Built responsive websites and implemented UI/UX improvements. Worked with backend team to integrate RESTful APIs.",
      technologies: ["JavaScript", "HTML/CSS", "jQuery", "PHP"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California",
      period: "2010 - 2014",
      description: "Dean&apos;s List for academic excellence. Participated in various hackathons and coding competitions."
    }
  ];

  return (
    <Beam className="pt-24 pb-16"> {/* Added Beam wrapper */}
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get to know more about me, my background, and what drives me as a developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-md mx-auto lg:ml-0">
                {/* Background decoration */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-500/10 rounded-2xl -z-10"></div>

                {/* Profile image */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={sectionVariants}>
                <h2 className="text-3xl font-bold mb-4">John Doe</h2>
                <h3 className="text-xl text-primary mb-6">Full Stack Developer</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;m a passionate full-stack developer with over 5 years of professional experience,
                  specializing in building exceptional digital experiences. With a strong foundation in both
                  frontend and backend technologies, I love bringing ideas to life through clean, efficient code.
                </p>
                <p className="text-muted-foreground mb-6">
                  My approach to development focuses on creating intuitive, accessible, and 
                  performant applications that solve real problems for users. I&apos;m constantly 
                  exploring new technologies and methodologies to enhance my skills and deliver 
                  better solutions.
                </p>
              </motion.div>

              <motion.div variants={sectionVariants} className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">JavaScript</Badge>
                <Badge variant="secondary" className="text-sm">TypeScript</Badge>
                <Badge variant="secondary" className="text-sm">React</Badge>
                <Badge variant="secondary" className="text-sm">Node.js</Badge>
                <Badge variant="secondary" className="text-sm">Express</Badge>
                <Badge variant="secondary" className="text-sm">MongoDB</Badge>
                <Badge variant="secondary" className="text-sm">PostgreSQL</Badge>
                <Badge variant="secondary" className="text-sm">GraphQL</Badge>
              </motion.div>

              <motion.div variants={sectionVariants} className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey and the companies I&apos;ve had the pleasure to work with.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="flex gap-4 md:gap-8 mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-2rem)] bg-border"></div>
                )}

                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <Badge variant="outline" className="text-muted-foreground">
                      {experience.period}
                    </Badge>
                  </div>
                  <h4 className="text-primary font-medium mb-3">{experience.company}</h4>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and qualifications that shaped my technical knowledge.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex gap-4 md:gap-8 mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-2rem)] bg-border"></div>
                )}

                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <Badge variant="outline" className="text-muted-foreground">
                      {item.period}
                    </Badge>
                  </div>
                  <h4 className="text-purple-500 font-medium mb-3">{item.institution}</h4>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Certifications & Awards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional qualifications and recognitions I&apos;ve earned throughout my career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                date: "2022",
                icon: <Award className="h-10 w-10 text-amber-500" />
              },
              {
                id: 2,
                title: "Professional Scrum Master",
                issuer: "Scrum.org",
                date: "2021",
                icon: <Award className="h-10 w-10 text-blue-500" />
              },
              {
                id: 3,
                title: "Google Cloud Certified",
                issuer: "Google Cloud",
                date: "2020",
                icon: <Award className="h-10 w-10 text-green-500" />
              },
              {
                id: 4,
                title: "Best Innovation Award",
                issuer: "Tech Conference 2019",
                date: "2019",
                icon: <Award className="h-10 w-10 text-purple-500" />
              },
              {
                id: 5,
                title: "React Developer Certification",
                issuer: "Meta",
                date: "2019",
                icon: <Award className="h-10 w-10 text-cyan-500" />
              },
              {
                id: 6,
                title: "Hackathon Winner",
                issuer: "CodeFest 2018",
                date: "2018",
                icon: <Award className="h-10 w-10 text-pink-500" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {item.issuer} • {item.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When I&apos;m not coding, you can find me exploring these interests and hobbies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Travel Photography",
                description: "Exploring new places and capturing moments through my lens.",
                image: "https://images.unsplash.com/photo-1533105045747-c9fff0905806?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Hiking & Outdoor Activities",
                description: "Staying active in nature helps me maintain a balanced lifestyle.",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Reading Science Fiction",
                description: "Exploring futuristic concepts and technological possibilities.",
                image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-video group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together or have a question? I&apos;d love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Beam>
  );
};

export default AboutPage;e;