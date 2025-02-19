import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Project {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "complete";
  dueDate: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = [
    {
      id: "1",
      title: "Backend API Development",
      description:
        "Implement RESTful API endpoints for the new user management system",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-06-30",
    },
    {
      id: "2",
      title: "Frontend Dashboard",
      description:
        "Create responsive dashboard interface with data visualization",
      priority: "medium",
      status: "pending",
      dueDate: "2024-07-15",
    },
    {
      id: "3",
      title: "Database Optimization",
      description: "Optimize database queries and implement caching",
      priority: "low",
      status: "complete",
      dueDate: "2024-05-20",
    },
  ],
}: ProjectsSectionProps) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400">
            {projects.length} active projects
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            priority={project.priority}
            status={project.status}
            dueDate={project.dueDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
