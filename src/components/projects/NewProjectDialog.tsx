<<<<<<< HEAD
// src/components/NewProjectDialog.tsx
=======

>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HardwareSpecsForm, { HardwareSpecs } from "./HardwareSpecsForm";
import ReplacedComponentsForm, { Component } from "./ReplacedComponentsForm";
import BoardsForm, { Board } from "./BoardsForm";
import type { Project } from "@/types/types"; // Import the updated Project type

interface NewProjectDialogProps {
  onSubmit?: (data: Project) => void; // Update to accept the full Project type
  projectId?: string | null;
  project?: Project | null; // Update to use the Project type
}

const defaultFormState: Omit<Project, "id"> = {
  title: "",
  type: "",
  dueDate: "",
  serviceType: "",
  description: "",
  priority: "Média",
  status: "Pendente",
  hardwareSpecs: null,
  boards: [],
  repairDetails: null,
};

const NewProjectDialog = ({
  onSubmit = () => {},
  projectId = null,
  project = null,
}: NewProjectDialogProps) => {
  const isEditing = Boolean(project);
  const [open, setOpen] = React.useState(projectId === "new" || isEditing);

  // Reset form when dialog opens/closes or when editing
  React.useEffect(() => {
    setOpen(projectId === "new" || Boolean(project));
  }, [projectId, project]);
<<<<<<< HEAD

=======
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen && !isEditing) {
      // Reset form only when closing a new project dialog
      setFormData(defaultFormState);
    }
  };

  const [formData, setFormData] = React.useState<Omit<Project, "id">>(
    project || defaultFormState
  );

  const showHardwareTab = formData.type === "pc" || formData.type === "calibrador";
  const showPlacaTab =
    formData.type === "placa" || (formData.type === "calibrador" && formData.boards?.length > 0);
  const showRepairTab = formData.serviceType === "reparacao";

  const handleSubmit = () => {
    const projectData: Project = {
      id: isEditing ? project!.id : Math.random().toString(36).slice(2, 9), // Generate ID for new projects
      ...formData,
      hardwareSpecs: showHardwareTab ? formData.hardwareSpecs || null : null,
      boards: showPlacaTab ? formData.boards || [] : [],
      repairDetails: showRepairTab
        ? {
            description: formData.description || "",
            replacedComponents: formData.repairDetails?.replacedComponents || [],
          }
        : null,
    };
    onSubmit(projectData);
    setOpen(false);
  };

  const handleInputChange = (field: keyof Omit<Project, "id" | "hardwareSpecs" | "boards" | "repairDetails">, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleHardwareChange = (hardwareSpecs: HardwareSpecs | null) => {
    setFormData((prev) => ({ ...prev, hardwareSpecs }));
  };

  const handleBoardsChange = (boards: Board[]) => {
    setFormData((prev) => ({ ...prev, boards }));
  };

  const handleReplacedComponentsChange = (replacedComponents: Component[]) => {
    setFormData((prev) => ({
      ...prev,
      repairDetails: prev.repairDetails
        ? { ...prev.repairDetails, replacedComponents }
        : { description: prev.description || "", replacedComponents },
    }));
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <Tabs defaultValue="geral" className="w-full">
          <DialogHeader className="space-y-4">
            <DialogTitle>
              {isEditing ? "Editar Projeto" : "Criar Novo Projeto"}
            </DialogTitle>
            <TabsList className="w-full">
              <TabsTrigger value="geral" className="flex-1">
                Geral
              </TabsTrigger>
              {showHardwareTab && (
                <TabsTrigger value="hardware" className="flex-1">
                  Hardware
                </TabsTrigger>
              )}
              {showPlacaTab && (
                <TabsTrigger value="placa" className="flex-1">
                  Placas
                </TabsTrigger>
              )}
              {showRepairTab && (
                <TabsTrigger value="reparacao" className="flex-1">
                  Detalhes da Reparação
                </TabsTrigger>
              )}
            </TabsList>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <TabsContent value="geral">
              <div className="space-y-4 h-[400px] overflow-y-auto pr-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Título do Projeto</h4>
                  <Input
                    placeholder="Ex: Calibrador A"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Data Limite</h4>
                  <Input
                    type="date"
                    placeholder="dd/mm/aaaa"
                    value={formData.dueDate}
                    onChange={(e) => handleInputChange("dueDate", e.target.value)}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Tipo</h4>
                  <Select
                    onValueChange={(value) => handleInputChange("type", value)}
                    value={formData.type}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo do projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pc">PC</SelectItem>
                      <SelectItem value="calibrador">Calibrador</SelectItem>
                      <SelectItem value="placa">Placa</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.type === "calibrador" && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasBoards"
                      checked={formData.boards?.length > 0 || false}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({
                          ...prev,
                          boards: checked ? (prev.boards || []) : [],
                        }));
                      }}
                    />
                    <label
                      htmlFor="hasBoards"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Com placas
                    </label>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-medium mb-2">Tipo de Serviço</h4>
                  <Select
                    onValueChange={(value) => handleInputChange("serviceType", value)}
                    value={formData.serviceType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="montagem">Montagem</SelectItem>
                      <SelectItem value="reparacao">Reparação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Prioridade</h4>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => handleInputChange("priority", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alta">Alta</SelectItem>
                      <SelectItem value="Média">Média</SelectItem>
                      <SelectItem value="Baixa">Baixa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Status</h4>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleInputChange("status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pendente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                      <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                      <SelectItem value="Concluído">Concluído</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Observações</h4>
                  <Textarea
                    placeholder="Digite as observações do projeto"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>
              </div>
            </TabsContent>

            {showHardwareTab && (
              <TabsContent value="hardware">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <HardwareSpecsForm
                    projectType={formData.type}
                    onChange={handleHardwareChange}
                    initialSpecs={formData.hardwareSpecs || undefined}
                  />
                </div>
              </TabsContent>
            )}

            {showPlacaTab && (
              <TabsContent value="placa">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <BoardsForm
                    onChange={handleBoardsChange}
                    initialBoards={formData.boards || []}
                  />
                </div>
              </TabsContent>
            )}

            {showRepairTab && (
              <TabsContent value="reparacao">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Descrição da Reparação</h4>
                      <Textarea
                        placeholder="Descreva os detalhes da reparação"
                        className="min-h-[100px]"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Componentes Trocados</h4>
                      <ReplacedComponentsForm
                        onChange={handleReplacedComponentsChange}
                        initialComponents={
                          formData.repairDetails?.replacedComponents || []
                        }
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            )}
          </div>

          <Button
            className="w-full bg-black text-white hover:bg-gray-800 mt-6"
            onClick={handleSubmit}
          >
            {isEditing ? "Guardar Alterações" : "Criar Projeto"}
          </Button>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectDialog;