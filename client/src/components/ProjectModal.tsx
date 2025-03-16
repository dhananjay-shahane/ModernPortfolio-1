
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
        <div className="relative h-[300px] w-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Project Type</h4>
                <p className="text-muted-foreground">{project.type || "Web Application"}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Completion Date</h4>
                <p className="text-muted-foreground">{project.date || "2024"}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className={tech.color}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {project.demoUrl && (
                <Button className="flex-1" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.codeUrl && (
                <Button variant="outline" className="flex-1" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
