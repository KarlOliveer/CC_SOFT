import React from "react";
import NewProjectDialog from "./NewProjectDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { downloadProjectReport } from "./DownloadReport";

interface Project {
  id: string;
  title: string;
  type: string;
  dueDate: string;
  serviceType: string;
  description: string;
  priority: "Alta" | "Média" | "Baixa";
  status: "Pendente" | "Em Andamento" | "Concluído";
  hardwareSpecs?: any;
  boards?: any[];
  repairDetails?: {
    description: string;
    replacedComponents: Array<{ name: string; quantity: string }>;
  };
}

const ProjectsPage = () => {
  const [editingProject, setEditingProject] = React.useState<string | null>(
    null,
  );
  const [activeProjects, setActiveProjects] = React.useState<Project[]>([
    {
      id: "1",
      title: "Calibrador A",
      type: "Calibrador",
      dueDate: "2024-04-30",
      serviceType: "Montagem",
      description: "Calibração mensal necessária",
      priority: "Alta",
      status: "Pendente",
    },
    {
      id: "2",
      title: "Reparo PC-001",
      type: "PC",
      dueDate: "2024-05-15",
      serviceType: "Reparação",
      description: "Troca de componentes",
      priority: "Média",
      status: "Em Andamento",
    },
  ]);
  const [completedProjects, setCompletedProjects] = React.useState<Project[]>(
    [],
  );

  const handleProjectComplete = (projectId: string) => {
    const project = activeProjects.find((p) => p.id === projectId);
    if (project) {
      const updatedProject = { ...project, status: "Concluído" };
      setCompletedProjects([...completedProjects, updatedProject]);
      setActiveProjects(activeProjects.filter((p) => p.id !== projectId));
    }
  };

  const handleNewProject = (data: any) => {
    const newProject = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      status: "Pendente",
    };
    setActiveProjects([...activeProjects, newProject]);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Projetos</h1>
          <p className="text-gray-500">Gerencie seus projetos técnicos</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setEditingProject("new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Left sidebar */}
        <div className="w-64 space-y-1">
          <div className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Todos</span>
            </div>
            <span className="text-sm text-gray-500">
              {activeProjects.length + completedProjects.length}
            </span>
          </div>
          {["PC", "Calibrador", "Placa", "Outros"].map((type) => (
            <div
              key={type}
              className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{type}</span>
              </div>
              <span className="text-sm text-gray-500">
                {activeProjects.filter((p) => p.type === type).length +
                  completedProjects.filter((p) => p.type === type).length}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Todos os Projetos</h2>
            <Tabs defaultValue="em-andamento" className="w-full">
              <TabsList>
                <TabsTrigger value="em-andamento">Em Andamento</TabsTrigger>
                <TabsTrigger value="concluidos">Concluídos</TabsTrigger>
              </TabsList>

              <TabsContent value="em-andamento" className="mt-4">
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 bg-white rounded-lg border hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">
                              {project.title}
                            </h3>
                            <div
                              className={cn(
                                "px-2 py-1 rounded-full text-xs font-medium",
                                project.priority === "Alta"
                                  ? "bg-red-100 text-red-800"
                                  : project.priority === "Média"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800",
                              )}
                            >
                              {project.priority}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 mb-4">
                            {project.type}
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm">
                              Data Limite: {project.dueDate}
                            </div>
                            <div className="text-sm">
                              Tipo de Serviço: {project.serviceType}
                            </div>
                            <div className="text-sm text-gray-500">
                              {project.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              const projectToEdit = activeProjects.find(
                                (p) => p.id === project.id,
                              );
                              if (projectToEdit) {
                                setEditingProject(project.id);
                              }
                            }}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleProjectComplete(project.id)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="concluidos" className="mt-4">
                <div className="space-y-4">
                  {completedProjects.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      Nenhum projeto concluído
                    </div>
                  ) : (
                    completedProjects.map((project) => (
                      <div
                        key={project.id}
                        className="p-6 bg-white rounded-lg border"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold">
                                {project.title}
                              </h3>
                            </div>
                            <div className="text-sm text-gray-500 mb-4">
                              {project.type}
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm">
                                Data Limite: {project.dueDate}
                              </div>
                              <div className="text-sm">
                                Tipo de Serviço: {project.serviceType}
                              </div>
                              <div className="text-sm text-gray-500">
                                {project.description}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <button
                              onClick={() => downloadProjectReport(project)}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Baixar Relatório
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <NewProjectDialog
        key={`project-dialog-${editingProject || "new"}`}
        projectId={editingProject}
        project={
          editingProject
            ? activeProjects.find((p) => p.id === editingProject)
            : null
        }
        onSubmit={(data) => {
          if (editingProject) {
            setActiveProjects(
              activeProjects.map((p) =>
                p.id === editingProject ? { ...p, ...data } : p,
              ),
            );
          } else {
            handleNewProject(data);
          }
          setEditingProject(null);
        }}
      />
    </div>
  );
};

export default ProjectsPage;
