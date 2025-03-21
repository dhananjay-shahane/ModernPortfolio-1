import { motion } from "framer-motion";
import { frontendSkills, backendSkills, toolsSkills } from "../lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Star } from "lucide-react";
const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4  bg-clip-text">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/80 to-primary/30 text-primary-foreground flex items-center justify-center mr-4 shadow-sm">
                  <span className="font-bold text-xl">F</span>
                </div>
                <h3 className="text-2xl font-semibold">Frontend Development</h3>
              </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
          >

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
                        <span className="text-xs font-medium text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.percentage}%
                    </span>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
          >

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
                        <span className="text-xs font-medium text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.percentage}%
                    </span>
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
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="relative px-6 py-3 text-lg font-bold pixel-font bg-yellow-400 hover:text-white text-black shadow-[4px_4px_4px_4px_#bbbb] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all" asChild>
            <Link href="/about">
              <span>View All Skills</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
