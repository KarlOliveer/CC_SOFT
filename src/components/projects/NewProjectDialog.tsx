
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import ReplacedComponentsForm from "./ReplacedComponentsForm";
import BoardsForm from "./BoardsForm";

interface NewProjectDialogProps {
  onSubmit?: (data: any) => void;
  projectId?: string | null;
  project?: any;
}

const defaultFormState = {
  projectType: "",
  serviceType: "",
  hasBoards: false,
  hardwareSpecs: null as HardwareSpecs | null,
  boards: [],
  replacedComponents: [],
  formData: {
    title: "",
    dueDate: "",
    priority: "",
    status: "Pendente",
    description: "",
  },
};

const NewProjectDialog = ({
  onSubmit = () => {},
  projectId = null,
  project = null,
}: NewProjectDialogProps) => {
  const isEditing = Boolean(project);
  const [open, setOpen] = React.useState(projectId === "new" || isEditing);

  React.useEffect(() => {
    setOpen(projectId === "new" || Boolean(project));
  }, [projectId, project]);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen && !isEditing) {
      // Reset form only when closing a new project dialog
      setProjectType(defaultFormState.projectType);
      setServiceType(defaultFormState.serviceType);
      setHasBoards(defaultFormState.hasBoards);
      setHardwareSpecs(defaultFormState.hardwareSpecs);
      setBoards(defaultFormState.boards);
      setReplacedComponents(defaultFormState.replacedComponents);
      setFormData(defaultFormState.formData);
    }
  };

  const [projectType, setProjectType] = React.useState(
    defaultFormState.projectType,
  );
  const [serviceType, setServiceType] = React.useState(
    defaultFormState.serviceType,
  );
  const [hasBoards, setHasBoards] = React.useState(defaultFormState.hasBoards);
  const [hardwareSpecs, setHardwareSpecs] = React.useState(
    defaultFormState.hardwareSpecs,
  );
  const [boards, setBoards] = React.useState(defaultFormState.boards);
  const [replacedComponents, setReplacedComponents] = React.useState(
    defaultFormState.replacedComponents,
  );
  const [formData, setFormData] = React.useState(defaultFormState.formData);

  // Reset form when dialog opens/closes
  React.useEffect(() => {
    if (!open) {
      if (!isEditing) {
        setProjectType(defaultFormState.projectType);
        setServiceType(defaultFormState.serviceType);
        setHasBoards(defaultFormState.hasBoards);
        setHardwareSpecs(defaultFormState.hardwareSpecs);
        setBoards(defaultFormState.boards);
        setReplacedComponents(defaultFormState.replacedComponents);
        setFormData(defaultFormState.formData);
      }
    } else if (project) {
      setProjectType(project.type || "");
      setServiceType(project.serviceType || "");
      setHasBoards(project.boards?.length > 0 || false);
      setHardwareSpecs(project.hardwareSpecs || null);
      setBoards(project.boards || []);
      setReplacedComponents(project.repairDetails?.replacedComponents || []);
      setFormData({
        title: project.title || "",
        dueDate: project.dueDate || "",
        priority: project.priority || "",
        status: project.status || "Pendente",
        description: project.description || "",
      });
    }
  }, [open, project, isEditing]);

  const showHardwareTab = projectType === "pc" || projectType === "calibrador";
  const showPlacaTab =
    projectType === "placa" || (projectType === "calibrador" && hasBoards);
  const showRepairTab = serviceType === "reparacao";

  const handleSubmit = () => {
    const projectData = {
      ...formData,
      type: projectType,
      serviceType,
      hardwareSpecs,
      boards: showPlacaTab ? boards : [],
      repairDetails: showRepairTab
        ? {
            description: formData.description,
            replacedComponents,
          }
        : null,
    };
    onSubmit(projectData);
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
                  <h4 className="text-sm font-medium mb-2">
                    Título do Projeto
                  </h4>
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
                    onChange={(e) =>
                      handleInputChange("dueDate", e.target.value)
                    }
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Tipo</h4>
                  <Select onValueChange={setProjectType} value={projectType}>
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

                {projectType === "calibrador" && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasBoards"
                      checked={hasBoards}
                      onCheckedChange={(checked) =>
                        setHasBoards(checked as boolean)
                      }
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
                  <Select onValueChange={setServiceType} value={serviceType}>
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
                    onValueChange={(value) =>
                      handleInputChange("priority", value)
                    }
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
                    onValueChange={(value) =>
                      handleInputChange("status", value)
                    }
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
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </div>
              </div>
            </TabsContent>

            {showHardwareTab && (
              <TabsContent value="hardware">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <HardwareSpecsForm
                    projectType={projectType}
                    onChange={setHardwareSpecs}
                    initialSpecs={project?.hardwareSpecs}
                  />
                </div>
              </TabsContent>
            )}

            {showPlacaTab && (
              <TabsContent value="placa">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <BoardsForm
                    onChange={setBoards}
                    initialBoards={project?.boards}
                  />
                </div>
              </TabsContent>
            )}

            {showRepairTab && (
              <TabsContent value="reparacao">
                <div className="mt-4 h-[400px] overflow-y-auto pr-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Descrição da Reparação
                      </h4>
                      <Textarea
                        placeholder="Descreva os detalhes da reparação"
                        className="min-h-[100px]"
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Componentes Trocados
                      </h4>
                      <ReplacedComponentsForm
                        onChange={setReplacedComponents}
                        initialComponents={
                          project?.repairDetails?.replacedComponents
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
