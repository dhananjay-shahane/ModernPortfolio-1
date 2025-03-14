import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Beam } from "@/components/ui/Beam";
import { ChevronRight, Award, GraduationCap, Briefcase, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  // experiences and education arrays removed as they are not present in edited code

  return (
    <div className="relative">
      <Beam className="pt-24 pb-16">
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
              <Button className="mb-8" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Personal Info Section -  Simplified from original */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={{hidden: { opacity: 0 }, visible: {opacity: 1, transition: {staggerChildren: 0.2, delayChildren: 0.1}}}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={{hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}}>
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
            </motion.div>
          </div>
        </section>


        {/* CTA Section - Moved from original */}
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
    </div>
  );
};

export default AboutPage;