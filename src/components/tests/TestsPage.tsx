"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { testService } from "@/lib/supabase-client";
import { supabase } from "@/lib/supabase-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";
import {
  Plus,
  FileText,
  TestTube,
  Trash2,
  Edit,
  Download,
  Upload,
  CheckCircle,
  Clock,
  FileUp,
  File,
  Image,
  Paperclip,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface TestStep {
  id: string;
  description: string;
  expectedResult: string;
  imageUrl?: string;
}

interface TestFile {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

interface Test {
  id: string;
  title: string;
  description: string;
  category: string;
  equipment: string;
  steps: TestStep[];
  files: TestFile[];
  createdAt: string;
  updatedAt: string;
}

const CATEGORIES = [
  "Calibrador",
  "Placa RIO",
  "Placa Master",
  "Amplificador",
  "Vibrador",
  "Microsorter",
  "Placa de volta",
  "Localizador",
  "Conversor VV",
  "Conversor IV",
  "Driver de LEDs",
  "Placa LEDs WT",
  "Placa LEDs IR",
  "Outros",
];

const EQUIPMENT = [
  "Multímetro",
  "Osciloscópio",
  "Fonte de Alimentação",
  "Gerador de Sinais",
  "Analisador Lógico",
  "Câmera Térmica",
  "Estação de Solda",
  "PC com Software Específico",
  "Calibrador de Referência",
  "Outros",
];

// Test Step Component
const TestStepItem = ({
  step,
  index,
  onEdit,
  onDelete,
  isEditing,
}: {
  step: TestStep;
  index: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isEditing: boolean;
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <CardTitle className="text-lg">
              {step.description.substring(0, 60)}
              {step.description.length > 60 ? "..." : ""}
            </CardTitle>
          </div>
          <Button variant="ghost" size="sm">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-1">Descrição:</h4>
              <p className="text-sm">{step.description}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">
                Resultado Esperado:
              </h4>
              <p className="text-sm">{step.expectedResult}</p>
            </div>
            {step.imageUrl && (
              <div>
                <h4 className="text-sm font-semibold mb-1">
                  Imagem de Referência:
                </h4>
                <img
                  src={step.imageUrl}
                  alt="Imagem de referência"
                  className="max-w-full h-auto max-h-60 rounded-md border"
                />
              </div>
            )}
            {isEditing && (
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(step.id)}
                >
                  <Edit className="h-4 w-4 mr-1" /> Editar
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(step.id)}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Excluir
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

// File Item Component
const FileItem = ({
  file,
  onDelete,
  isEditing,
}: {
  file: TestFile;
  onDelete: (id: string) => void;
  isEditing: boolean;
}) => {
  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <Image className="h-5 w-5" />;
    if (type.includes("pdf")) return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded-md mb-2 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        {getFileIcon(file.type)}
        <div>
          <p className="text-sm font-medium">{file.name}</p>
          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href={file.url} download target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
          </a>
        </Button>
        {isEditing && (
          <Button variant="ghost" size="sm" onClick={() => onDelete(file.id)}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        )}
      </div>
    </div>
  );
};

// Test Detail Component
const TestDetail = ({
  test,
  onEdit,
  onDelete,
  onBack,
}: {
  test: Test;
  onEdit: () => void;
  onDelete: () => void;
  onBack: () => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onEdit}>
            <Edit className="h-4 w-4 mr-2" /> Editar
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            <Trash2 className="h-4 w-4 mr-2" /> Excluir
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{test.title}</CardTitle>
              <CardDescription>
                Categoria: {test.category} | Equipamento: {test.equipment}
              </CardDescription>
            </div>
            <div className="text-sm text-gray-500">
              Atualizado em: {new Date(test.updatedAt).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Descrição</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {test.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Passos do Teste</h3>
            <div className="space-y-4">
              {test.steps.map((step, index) => (
                <TestStepItem
                  key={step.id}
                  step={step}
                  index={index}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  isEditing={false}
                />
              ))}
            </div>
          </div>

          {test.files.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Arquivos</h3>
              <div className="space-y-2">
                {test.files.map((file) => (
                  <FileItem
                    key={file.id}
                    file={file}
                    onDelete={() => {}}
                    isEditing={false}
                  />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// New Test Step Dialog
const NewTestStepDialog = ({
  open,
  onOpenChange,
  onSubmit,
  initialStep = null,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (step: Omit<TestStep, "id">) => void;
  initialStep?: TestStep | null;
}) => {
  const [description, setDescription] = React.useState(
    initialStep?.description || "",
  );
  const [expectedResult, setExpectedResult] = React.useState(
    initialStep?.expectedResult || "",
  );
  const [imageUrl, setImageUrl] = React.useState(initialStep?.imageUrl || "");

  React.useEffect(() => {
    if (open && initialStep) {
      setDescription(initialStep.description);
      setExpectedResult(initialStep.expectedResult);
      setImageUrl(initialStep.imageUrl || "");
    } else if (open && !initialStep) {
      setDescription("");
      setExpectedResult("");
      setImageUrl("");
    }
  }, [open, initialStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      description,
      expectedResult,
      imageUrl: imageUrl || undefined,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialStep ? "Editar Passo" : "Adicionar Novo Passo"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição do Passo</label>
            <Textarea
              placeholder="Descreva o que deve ser feito neste passo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Resultado Esperado</label>
            <Textarea
              placeholder="Descreva o resultado esperado após executar este passo"
              value={expectedResult}
              onChange={(e) => setExpectedResult(e.target.value)}
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              URL da Imagem (opcional)
            </label>
            <Input
              placeholder="https://exemplo.com/imagem.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            {imageUrl && (
              <div className="mt-2">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="max-h-40 rounded-md border"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/400x300?text=Imagem+Inválida";
                  }}
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">
              {initialStep ? "Salvar Alterações" : "Adicionar Passo"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// New Test Dialog
const NewTestDialog = ({
  open,
  onOpenChange,
  onSubmit,
  initialTest = null,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (test: Omit<Test, "id" | "createdAt" | "updatedAt">) => void;
  initialTest?: Test | null;
}) => {
  const [title, setTitle] = React.useState(initialTest?.title || "");
  const [description, setDescription] = React.useState(
    initialTest?.description || "",
  );
  const [category, setCategory] = React.useState(
    initialTest?.category || CATEGORIES[0],
  );
  const [equipment, setEquipment] = React.useState(
    initialTest?.equipment || EQUIPMENT[0],
  );
  const [steps, setSteps] = React.useState<TestStep[]>(
    initialTest?.steps || [],
  );
  const [files, setFiles] = React.useState<TestFile[]>(
    initialTest?.files || [],
  );

  const [isStepDialogOpen, setIsStepDialogOpen] = React.useState(false);
  const [editingStep, setEditingStep] = React.useState<TestStep | null>(null);

  React.useEffect(() => {
    if (open && initialTest) {
      setTitle(initialTest.title);
      setDescription(initialTest.description);
      setCategory(initialTest.category);
      setEquipment(initialTest.equipment);
      setSteps(initialTest.steps);
      setFiles(initialTest.files);
    } else if (open && !initialTest) {
      setTitle("");
      setDescription("");
      setCategory(CATEGORIES[0]);
      setEquipment(EQUIPMENT[0]);
      setSteps([]);
      setFiles([]);
    }
  }, [open, initialTest]);

  const handleAddStep = (stepData: Omit<TestStep, "id">) => {
    const newStep = {
      id: Math.random().toString(36).slice(2, 9),
      ...stepData,
    };
    setSteps([...steps, newStep]);
  };

  const handleEditStep = (stepData: Omit<TestStep, "id">) => {
    if (!editingStep) return;
    const updatedSteps = steps.map((step) =>
      step.id === editingStep.id ? { ...step, ...stepData } : step,
    );
    setSteps(updatedSteps);
    setEditingStep(null);
  };

  const handleDeleteStep = (stepId: string) => {
    setSteps(steps.filter((step) => step.id !== stepId));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const newFiles: TestFile[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      // In a real app, you would upload the file to a server and get a URL back
      // For this demo, we'll create a fake URL
      const fakeUrl = URL.createObjectURL(file);

      newFiles.push({
        id: Math.random().toString(36).slice(2, 9),
        name: file.name,
        type: file.type,
        url: fakeUrl,
        size: file.size,
      });
    }

    setFiles([...files, ...newFiles]);
    e.target.value = ""; // Reset input
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles(files.filter((file) => file.id !== fileId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      category,
      equipment,
      steps,
      files,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialTest ? "Editar Teste" : "Criar Novo Teste"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="steps">Passos ({steps.length})</TabsTrigger>
            <TabsTrigger value="files">Arquivos ({files.length})</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="info" className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Título do Teste</label>
                <Input
                  placeholder="Ex: Teste de Calibração do Sensor XYZ"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Descrição</label>
                <Textarea
                  placeholder="Descreva o objetivo e contexto deste teste"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoria</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Equipamento Necessário
                  </label>
                  <Select value={equipment} onValueChange={setEquipment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o equipamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {EQUIPMENT.map((equip) => (
                        <SelectItem key={equip} value={equip}>
                          {equip}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="steps" className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Passos do Teste</h3>
                <Button
                  type="button"
                  onClick={() => {
                    setEditingStep(null);
                    setIsStepDialogOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> Adicionar Passo
                </Button>
              </div>

              {steps.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Nenhum passo adicionado. Clique em "Adicionar Passo" para
                  começar.
                </div>
              ) : (
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <TestStepItem
                      key={step.id}
                      step={step}
                      index={index}
                      onEdit={(id) => {
                        const step = steps.find((s) => s.id === id);
                        if (step) {
                          setEditingStep(step);
                          setIsStepDialogOpen(true);
                        }
                      }}
                      onDelete={handleDeleteStep}
                      isEditing={true}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="files" className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Arquivos</h3>
                <div>
                  <Input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" variant="outline" asChild>
                      <span>
                        <Upload className="h-4 w-4 mr-2" /> Carregar Arquivos
                      </span>
                    </Button>
                  </label>
                </div>
              </div>

              {files.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Nenhum arquivo adicionado. Clique em "Carregar Arquivos" para
                  adicionar.
                </div>
              ) : (
                <div className="space-y-2">
                  {files.map((file) => (
                    <FileItem
                      key={file.id}
                      file={file}
                      onDelete={handleDeleteFile}
                      isEditing={true}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <DialogFooter className="mt-6">
              <Button type="submit">
                {initialTest ? "Salvar Alterações" : "Criar Teste"}
              </Button>
            </DialogFooter>
          </form>
        </Tabs>
      </DialogContent>

      <NewTestStepDialog
        open={isStepDialogOpen}
        onOpenChange={setIsStepDialogOpen}
        onSubmit={editingStep ? handleEditStep : handleAddStep}
        initialStep={editingStep}
      />
    </Dialog>
  );
};

// Test Card Component
const TestCard = ({ test, onClick }: { test: Test; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="line-clamp-1">{test.title}</CardTitle>
          <CardDescription>
            {test.category} | {test.steps.length} passos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 line-clamp-3">
            {test.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <TestTube className="h-3 w-3" />
            <span>{test.equipment}</span>
          </div>
          <div className="text-xs text-gray-500">
            {new Date(test.updatedAt).toLocaleDateString()}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Main Tests Page Component
const TestsPage = () => {
  const [tests, setTests] = React.useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = React.useState<Test | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [testToDelete, setTestToDelete] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState<string | null>(
    null,
  );

  // Load tests from Supabase
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Carregar dados do Supabase
        try {
          const testsData = await testService.getTests();
          if (testsData && testsData.length > 0) {
            setTests(testsData);
          } else {
            // Se não houver testes no Supabase, adicionar exemplos
            const sampleTests = [
              {
                id: "1",
                title: "Teste de Calibração do Sensor de Temperatura",
                description:
                  "Este teste verifica se o sensor de temperatura está calibrado corretamente e responde a mudanças de temperatura dentro das especificações.",
                category: "Calibrador",
                equipment: "Multímetro",
                steps: [
                  {
                    id: "s1",
                    description:
                      "Conecte o multímetro aos terminais do sensor de temperatura.",
                    expectedResult:
                      "O multímetro deve mostrar uma leitura estável.",
                    imageUrl:
                      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
                  },
                  {
                    id: "s2",
                    description:
                      "Aplique uma fonte de calor controlada (ex: 50°C) ao sensor.",
                    expectedResult:
                      "A leitura do multímetro deve mudar proporcionalmente à temperatura aplicada.",
                  },
                  {
                    id: "s3",
                    description:
                      "Verifique se a saída do sensor corresponde à tabela de calibração fornecida pelo fabricante.",
                    expectedResult:
                      "A saída deve estar dentro de ±2% do valor esperado para cada temperatura testada.",
                  },
                ],
                files: [
                  {
                    id: "f1",
                    name: "Tabela_Calibracao.pdf",
                    type: "application/pdf",
                    url: "#",
                    size: 245000,
                  },
                ],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
              {
                id: "2",
                title: "Teste de Funcionamento da Placa RIO",
                description:
                  "Este teste verifica todas as entradas e saídas da placa RIO para garantir que estão funcionando corretamente.",
                category: "Placa RIO",
                equipment: "Osciloscópio",
                steps: [
                  {
                    id: "s1",
                    description:
                      "Conecte a alimentação à placa RIO e verifique se os LEDs de status acendem.",
                    expectedResult:
                      "Todos os LEDs de status devem acender na sequência correta.",
                  },
                  {
                    id: "s2",
                    description:
                      "Conecte o osciloscópio à saída digital 1 e aplique um sinal de teste.",
                    expectedResult:
                      "O sinal deve ser transmitido sem distorção e com a amplitude correta.",
                  },
                ],
                files: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            ];

            // Salvar exemplos no Supabase
            for (const test of sampleTests) {
              await testService.createTest(test);
            }

            setTests(sampleTests);
          }
        } catch (dbError) {
          console.error("Erro ao carregar testes do Supabase:", dbError);

          // Fallback para localStorage
          const storedTests = localStorage.getItem("tests");
          if (storedTests) {
            setTests(JSON.parse(storedTests));
          } else {
            // Add some sample tests if none exist
            const sampleTests = [
              {
                id: "1",
                title: "Teste de Calibração do Sensor de Temperatura",
                description:
                  "Este teste verifica se o sensor de temperatura está calibrado corretamente e responde a mudanças de temperatura dentro das especificações.",
                category: "Calibrador",
                equipment: "Multímetro",
                steps: [
                  {
                    id: "s1",
                    description:
                      "Conecte o multímetro aos terminais do sensor de temperatura.",
                    expectedResult:
                      "O multímetro deve mostrar uma leitura estável.",
                    imageUrl:
                      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
                  },
                  {
                    id: "s2",
                    description:
                      "Aplique uma fonte de calor controlada (ex: 50°C) ao sensor.",
                    expectedResult:
                      "A leitura do multímetro deve mudar proporcionalmente à temperatura aplicada.",
                  },
                  {
                    id: "s3",
                    description:
                      "Verifique se a saída do sensor corresponde à tabela de calibração fornecida pelo fabricante.",
                    expectedResult:
                      "A saída deve estar dentro de ±2% do valor esperado para cada temperatura testada.",
                  },
                ],
                files: [
                  {
                    id: "f1",
                    name: "Tabela_Calibracao.pdf",
                    type: "application/pdf",
                    url: "#",
                    size: 245000,
                  },
                ],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
              {
                id: "2",
                title: "Teste de Funcionamento da Placa RIO",
                description:
                  "Este teste verifica todas as entradas e saídas da placa RIO para garantir que estão funcionando corretamente.",
                category: "Placa RIO",
                equipment: "Osciloscópio",
                steps: [
                  {
                    id: "s1",
                    description:
                      "Conecte a alimentação à placa RIO e verifique se os LEDs de status acendem.",
                    expectedResult:
                      "Todos os LEDs de status devem acender na sequência correta.",
                  },
                  {
                    id: "s2",
                    description:
                      "Conecte o osciloscópio à saída digital 1 e aplique um sinal de teste.",
                    expectedResult:
                      "O sinal deve ser transmitido sem distorção e com a amplitude correta.",
                  },
                ],
                files: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            ];
            setTests(sampleTests);
            localStorage.setItem("tests", JSON.stringify(sampleTests));
          }
        }
      } catch (error) {
        console.error("Erro ao carregar testes:", error);
      }
    };

    fetchData();

    // Configurar atualização periódica
    const refreshInterval = setInterval(fetchData, 10000); // Atualizar a cada 10 segundos

    // Atualizar quando a página ficar visível
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchData();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(refreshInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Save tests to Supabase and localStorage
  const saveTests = async (updatedTests: Test[]) => {
    setTests(updatedTests);

    try {
      // Salvar no Supabase
      try {
        // Verificar se é uma adição, atualização ou exclusão
        if (updatedTests.length > tests.length) {
          // Novo teste adicionado
          const newTest = updatedTests[updatedTests.length - 1];
          await testService.createTest(newTest);
        } else if (updatedTests.length < tests.length) {
          // Teste excluído - já tratado em handleDeleteTest
        } else {
          // Possível atualização - verificar cada teste
          for (const test of updatedTests) {
            const oldTest = tests.find((t) => t.id === test.id);
            if (oldTest && JSON.stringify(oldTest) !== JSON.stringify(test)) {
              await testService.updateTest(test.id, test);
            }
          }
        }
      } catch (dbError) {
        console.error("Erro ao salvar testes no Supabase:", dbError);
      }

      // Sempre salvar no localStorage como fallback
      localStorage.setItem("tests", JSON.stringify(updatedTests));
    } catch (error) {
      console.error("Erro ao salvar testes:", error);
    }
  };

  // Handle creating a new test
  const handleCreateTest = async (
    testData: Omit<Test, "id" | "createdAt" | "updatedAt">,
  ) => {
    const now = new Date().toISOString();
    const newTest: Test = {
      id: Math.random().toString(36).slice(2, 9),
      ...testData,
      createdAt: now,
      updatedAt: now,
    };

    const updatedTests = [...tests, newTest];
    await saveTests(updatedTests);
  };

  // Handle updating a test
  const handleUpdateTest = async (
    testData: Omit<Test, "id" | "createdAt" | "updatedAt">,
  ) => {
    if (!selectedTest) return;

    const updatedTest: Test = {
      ...selectedTest,
      ...testData,
      updatedAt: new Date().toISOString(),
    };

    const updatedTests = tests.map((test) =>
      test.id === selectedTest.id ? updatedTest : test,
    );

    await saveTests(updatedTests);
    setSelectedTest(updatedTest);
  };

  // Handle deleting a test
  const handleDeleteTest = async (testId: string) => {
    try {
      // Excluir do Supabase
      try {
        await testService.deleteTest(testId);
      } catch (dbError) {
        console.error("Erro ao excluir teste do Supabase:", dbError);
      }

      // Atualizar estado e localStorage
      const updatedTests = tests.filter((test) => test.id !== testId);
      await saveTests(updatedTests);
      setSelectedTest(null);
      setTestToDelete(null);
    } catch (error) {
      console.error("Erro ao excluir teste:", error);
    }
  };

  // Filter tests based on search query and category
  const filteredTests = tests.filter((test) => {
    const matchesSearch =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter
      ? test.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from tests
  const categories = Array.from(new Set(tests.map((test) => test.category)));

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {selectedTest ? (
        <TestDetail
          test={selectedTest}
          onEdit={() => {
            setIsEditMode(true);
            setIsDialogOpen(true);
          }}
          onDelete={() => setTestToDelete(selectedTest.id)}
          onBack={() => setSelectedTest(null)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Testes</h1>
              <p className="text-gray-500">
                Guias passo a passo para testes de equipamentos e placas
              </p>
            </div>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => {
                setIsEditMode(false);
                setIsDialogOpen(true);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Novo Teste
            </Button>
          </div>

          <div className="flex gap-6">
            {/* Categories sidebar */}
            <div className="w-64 space-y-2">
              <div
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${!categoryFilter ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                onClick={() => setCategoryFilter(null)}
              >
                <div className="flex items-center gap-2">
                  <TestTube className="h-4 w-4 text-gray-500" />
                  <span>Todos os Testes</span>
                </div>
                <span className="text-xs text-gray-500">{tests.length}</span>
              </div>

              {categories.map((category) => (
                <div
                  key={category}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${categoryFilter === category ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                  onClick={() => setCategoryFilter(category)}
                >
                  <span>{category}</span>
                  <span className="text-xs text-gray-500">
                    {tests.filter((t) => t.category === category).length}
                  </span>
                </div>
              ))}
            </div>

            {/* Tests grid */}
            <div className="flex-1">
              <div className="mb-6">
                <Input
                  placeholder="Pesquisar testes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />
              </div>

              {filteredTests.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  Nenhum teste encontrado
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTests.map((test) => (
                    <TestCard
                      key={test.id}
                      test={test}
                      onClick={() => setSelectedTest(test)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <NewTestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={isEditMode ? handleUpdateTest : handleCreateTest}
        initialTest={isEditMode ? selectedTest : null}
      />

      <AlertDialog
        open={!!testToDelete}
        onOpenChange={(open) => !open && setTestToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Teste</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este teste? Esta ação não pode ser
              desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => testToDelete && handleDeleteTest(testToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TestsPage;
