import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "./ui/section-heading";
import SocialIcons from "./ui/social-icons";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Extend the validation schema
const formSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();

  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Contact form mutation
  const mutation = useMutation({
    mutationFn: (data: FormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Submit handler
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Contact Me" />
        
        <p className="text-slate-400 mt-4 max-w-2xl text-center mx-auto mb-12">
          Have a question or want to work together? Feel free to contact me using the form below or through social media.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-dark-light p-8 rounded-lg shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-dark border-slate-700 text-white focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            className="bg-dark border-slate-700 text-white focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject of your message" 
                            className="bg-dark border-slate-700 text-white focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            rows={5}
                            className="bg-dark border-slate-700 text-white focus:ring-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-colors font-medium"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Get In Touch
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="text-primary mr-4 mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a 
                      href="mailto:john.doe@example.com" 
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      john.doe@example.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="text-primary mr-4 mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="text-primary mr-4 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-slate-400">San Francisco, California</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <SocialIcons />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
