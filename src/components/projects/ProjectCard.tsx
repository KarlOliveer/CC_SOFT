import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

type Priority = "low" | "medium" | "high";
type Status = "pending" | "in-progress" | "complete";

interface ProjectCardProps {
  /** Flag que indica se o cartão deve ficar em modo escuro (true) ou claro (false) */
  isDarkMode?: boolean;

  title?: string;
  description?: string;
  priority?: Priority;
  status?: Status;
  dueDate?: string;
  onStatusChange?: (status: Status) => void;
  onPriorityChange?: (priority: Priority) => void;
}

const getPriorityColor = (priority: Priority) => {
  const colors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };
  return colors[priority];
};

const getStatusIcon = (status: Status) => {
  const icons = {
    pending: <Clock className="h-4 w-4 text-yellow-500" />,
    "in-progress": <AlertTriangle className="h-4 w-4 text-blue-500" />,
    complete: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  };
  return icons[status];
};

const ProjectCard = ({
  isDarkMode = false, // Por omissão, fica claro
  title = "Sample Project",
  description = "This is a sample project description that showcases the layout of the project card.",
  priority = "medium",
  status = "pending",
  dueDate = "2024-12-31",
  onStatusChange = () => {},
  onPriorityChange = () => {},
}: ProjectCardProps) => {
  // Escolhe as classes de fundo/texto conforme a flag
  const containerClasses = isDarkMode
    ? "!bg-gray-800 !text-gray-100"
    : "!bg-white !text-gray-900";

  return (
    <Card className={`w-[320px] shadow border rounded-xl ${containerClasses}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className={getPriorityColor(priority)}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          Due: {dueDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          {getStatusIcon(status)}
          <span className="text-sm font-medium capitalize">{status}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium">Status</h4>
                <div className="flex gap-2 mt-2">
                  {["pending", "in-progress", "complete"].map((s) => (
                    <Button
                      key={s}
                      variant={status === s ? "default" : "outline"}
                      size="sm"
                      onClick={() => onStatusChange(s as Status)}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium">Priority</h4>
                <div className="flex gap-2 mt-2">
                  {["low", "medium", "high"].map((p) => (
                    <Button
                      key={p}
                      variant={priority === p ? "default" : "outline"}
                      size="sm"
                      onClick={() => onPriorityChange(p as Priority)}
                    >
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex gap-2">
          {status !== "complete" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onStatusChange("complete")}
            >
              Complete
            </Button>
          )}
          {status !== "complete" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = `/projetos/editar/${title}`)}
            >
              Edit
            </Button>
          )}
          {status === "complete" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`/projetos/relatorio/${title}`, "_blank")}
            >
              Download Report
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
