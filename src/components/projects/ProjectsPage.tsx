// src/components/ProjectsPage.tsx
"use client";

import React from "react";
import NewProjectDialog from "./NewProjectDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { downloadProjectReport } from "./DownloadReport";
import { ProjectReport } from "./ProjectReport"; // Import the new ProjectReport component
import type { Project } from "@/types/types"; // Import the updated Project type

const ProjectsPage = () => {
<<<<<<< HEAD
  const [editingProject, setEditingProject] = React.useState<string | null>(
    null,
  );
  const username = localStorage.getItem("user");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = users.find((u: any) => u.username === username);
  const canEditProjects = currentUser?.permissions?.includes("projetos_edit");
  const canCreateProjects =
    currentUser?.permissions?.includes("projetos_create");

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
=======
  const [editingProject, setEditingProject] = React.useState<string | null>(null);
  const [activeProjects, setActiveProjects] = React.useState<Project[]>([]);
  const [completedProjects, setCompletedProjects] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [reportOpen, setReportOpen] = React.useState<string | null>(null); // Track which project report is open
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)

  // Load projects from localStorage
  const loadProjects = () => {
    try {
      const storedActive = localStorage.getItem("activeProjects");
      const storedCompleted = localStorage.getItem("completedProjects");
      if (storedActive) {
        setActiveProjects(JSON.parse(storedActive));
      }
      if (storedCompleted) {
        setCompletedProjects(JSON.parse(storedCompleted));
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save projects to localStorage
  const saveProjects = (active: Project[], completed: Project[]) => {
    try {
      localStorage.setItem("activeProjects", JSON.stringify(active));
      localStorage.setItem("completedProjects", JSON.stringify(completed));
      setActiveProjects(active);
      setCompletedProjects(completed);
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

<<<<<<< HEAD
  // 1) Put "Todos" and other categories in a single array
  const categories = ["Todos", "PC", "Calibrador", "Placa", "Outros"];

=======
  // Load on mount and when tab becomes visible
  React.useEffect(() => {
    loadProjects();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadProjects();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Handle project completion
  const handleProjectComplete = (projectId: string) => {
    const project = activeProjects.find((p) => p.id === projectId);
    if (project) {
      const updatedProject = { ...project, status: "Concluído" as const };
      const newActive = activeProjects.filter((p) => p.id !== projectId);
      const newCompleted = [...completedProjects, updatedProject];
      saveProjects(newActive, newCompleted);
    }
  };

  // Create or update a project
  const handleNewProject = (data: Omit<Project, "id">) => {
    const newProject: Project = {
      id: Math.random().toString(36).slice(2, 9),
      ...data,
    };
    if (newProject.status === "Concluído") {
      saveProjects(activeProjects, [...completedProjects, newProject]);
    } else {
      saveProjects([...activeProjects, newProject], completedProjects);
    }
    setEditingProject(null);
  };

  // Edit an existing project
  const handleEditProject = (projectId: string, data: Partial<Project>) => {
    const project = activeProjects.find((p) => p.id === projectId);
    if (project) {
      const updatedProject = { ...project, ...data };
      if (updatedProject.status === "Concluído") {
        const newActive = activeProjects.filter((p) => p.id !== projectId);
        const newCompleted = [...completedProjects, updatedProject];
        saveProjects(newActive, newCompleted);
      } else {
        const newActive = activeProjects.map((p) =>
          p.id === projectId ? updatedProject : p
        );
        saveProjects(newActive, completedProjects);
      }
    }
    setEditingProject(null);
  };

  // Sidebar categories
  const categories = ["Todos", "PC", "Calibrador", "Placa", "Outros"];

  // Compute category counts dynamically with case-insensitive comparison
  const getCategoryCount = (type: string) => {
    const typeLower = type.toLowerCase();
    return typeLower === "todos"
      ? activeProjects.length + completedProjects.length
      : activeProjects.filter((p) => p.type.toLowerCase() === typeLower).length +
          completedProjects.filter((p) => p.type.toLowerCase() === typeLower).length;
  };

  if (isLoading) {
    return <div className="p-8 text-center">Carregando projetos...</div>;
  }

>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Projetos</h1>
          <p className="text-gray-500">Gerencie seus projetos técnicos</p>
        </div>
        {canCreateProjects && (
          <Button
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => setEditingProject("new")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Projeto
          </Button>
        )}
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 space-y-1">
<<<<<<< HEAD
          {categories.map((type) => {
            // 2) If it's "Todos", show total count; otherwise, filter by type
            const count =
              type === "Todos"
                ? activeProjects.length + completedProjects.length
                : activeProjects.filter((p) => p.type === type).length +
                  completedProjects.filter((p) => p.type === type).length;

            return (
              <div
                key={type}
                className="
                  flex items-center justify-between
                  py-2 px-4
                  rounded-lg
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                  cursor-pointer
                  transition-colors
                "
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{type}</span>
                </div>
                <span className="text-sm text-gray-500">{count}</span>
              </div>
            );
          })}
=======
          {categories.map((type) => (
            <div
              key={type}
              className="
                flex items-center justify-between
                py-2 px-4
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
                cursor-pointer
                transition-colors
              "
            >
              <span className="text-sm font-medium">{type}</span>
              <span className="text-sm text-gray-500">{getCategoryCount(type)}</span>
            </div>
          ))}
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
        </div>

        {/* Main content */}
        <div className="flex-1">
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
                    className="
                      p-6
                      bg-white dark:bg-gray-800
                      text-gray-900 dark:text-gray-100
                      rounded-lg border hover:shadow-lg transition-all
                    "
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <div
                            className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium",
                              project.priority === "Alta"
                                ? "bg-red-100 text-red-800"
                                : project.priority === "Média"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            )}
                          >
                            {project.priority}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mb-4">{project.type}</div>
                        <div className="space-y-2">
                          <div className="text-sm">Data Limite: {project.dueDate}</div>
                          <div className="text-sm">Tipo de Serviço: {project.serviceType}</div>
                          <div className="text-sm text-gray-500">{project.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingProject(project.id)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
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
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
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
                      className="
                        p-6
                        bg-white dark:bg-gray-800
                        text-gray-900 dark:text-gray-100
<<<<<<< HEAD
                        rounded-lg border hover:shadow-lg transition-all
=======
                        rounded-lg border transition-all
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
                      "
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                          </div>
                          <div className="text-sm text-gray-500 mb-4">{project.type}</div>
                          <div className="space-y-2">
                            <div className="text-sm">Data Limite: {project.dueDate}</div>
                            <div className="text-sm">Tipo de Serviço: {project.serviceType}</div>
                            <div className="text-sm text-gray-500">{project.description}</div>
                          </div>
                        </div>
<<<<<<< HEAD
                        <div className="flex items-center gap-2">
                          {canEditProjects && (
                            <>
                              <button
                                onClick={() => {
                                  const projectToEdit = activeProjects.find(
                                    (p) => p.id === project.id,
                                  );
                                  if (projectToEdit) {
                                    setEditingProject(project.id);
                                  }
                                }}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
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
                                onClick={() =>
                                  handleProjectComplete(project.id)
                                }
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
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
                            </>
                          )}
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
                        className="
                          p-6
                          bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100
                          rounded-lg border transition-all
                        "
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
=======
                        <div className="flex flex-col items-end gap-2">
                          <Button
                            variant="link"
                            size="sm"
                            onClick={async () => {
                              // Ensure the report is rendered before downloading
                              setReportOpen(project.id); // Open the report dialog to render it
                              await new Promise((resolve) => setTimeout(resolve, 300)); // Wait for rendering
                              setReportOpen(null); // Close immediately to avoid showing the dialog
                              await downloadProjectReport(project); // Trigger the download
                            }}
                            className="text-blue-600 hover:text-blue-800 p-0"
                          >
                            Download Relatório
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
        </div>
      </div>

      <NewProjectDialog
        key={`project-dialog-${editingProject || "new"}`}
        projectId={editingProject}
        project={
          editingProject && editingProject !== "new"
            ? activeProjects.find((p) => p.id === editingProject) || null
            : null
        }
        onSubmit={(data) => {
          if (!editingProject || editingProject === "new") {
            handleNewProject(data);
          } else {
            handleEditProject(editingProject, data);
          }
        }}
      />

      {reportOpen && (
        <ProjectReport
          project={completedProjects.find((p) => p.id === reportOpen)!}
          open={!!reportOpen}
          onOpenChange={(open) => setReportOpen(open ? reportOpen : null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;