// src/components/ProjectReport.tsx
"use client";

import React, { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipboardList, Cpu, Package, PenTool as Tool } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { Project, HardwareSpecs, Board, Component } from "@/types/types";
import mcmLogo from "@/assets/mcm_logo.png"; // Import the logo

interface ProjectReportProps {
  project: Project;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ProjectReport({ project, open = false, onOpenChange }: ProjectReportProps) {
  const reportRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: string) => {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const renderGeneralInfo = () => (
    <div id={`report-section-geral-${project.id}`} className="space-y-8">
      <div className="text-center space-y-4 pb-8 border-b">
        <img src={mcmLogo} alt="MCM Logo" className="h-16 w-auto mx-auto" /> {/* Add logo */}
        <h1 className="text-2xl font-bold">Relatório Técnico</h1>
        <p className="text-muted-foreground">MCM Systems - Soluções em Tecnologia</p>
        <p className="text-sm">Documento gerado em {formatDate(new Date().toISOString())}</p>
      </div>
      {/* Rest of the general info remains unchanged */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-muted-foreground">Título do Projeto</h3>
          <p className="text-lg font-medium">{project.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Prazo de Entrega</h3>
            <p>{formatDate(project.dueDate)}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-muted-foreground">Categoria</h3>
          <p className="capitalize">{project.type}</p>
        </div>
        {project.description && (
          <div className="space-y-2">
            <h3 className="font-semibold text-base">Observações</h3>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-base leading-relaxed text-foreground whitespace-pre-wrap break-words">
                {project.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderHardwareInfo = () => {
    if (!project.hardwareSpecs) return null;

    return (
      <div id={`report-section-hardware-${project.id}`} className="space-y-8 px-6">
        <div className="text-center pb-6 border-b">
          <img src={mcmLogo} alt="MCM Logo" className="h-16 w-auto mx-auto" /> {/* Add logo */}
          <h2 className="text-xl font-bold">Especificações Técnicas de Hardware</h2>
          <p className="text-sm text-muted-foreground mt-1">Relatório de Montagem</p>
        </div>
        {/* Rest of the hardware info remains unchanged */}
        <div className="space-y-8">
          {(project.hardwareSpecs.processor ||
            project.hardwareSpecs.motherboard ||
            project.hardwareSpecs.ram ||
            project.hardwareSpecs.storage) && (
            <div>
              <h3 className="text-base font-semibold mb-4">Componentes Básicos</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                {project.hardwareSpecs.processor && (
                  <div>
                    <h4 className="font-medium mb-2">Processador</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modelo: {project.hardwareSpecs.processor}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.motherboard && (
                  <div>
                    <h4 className="font-medium mb-2">Placa Mãe</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modelo: {project.hardwareSpecs.motherboard}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.ram && (
                  <div>
                    <h4 className="font-medium mb-2">Memória RAM</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modelo: {project.hardwareSpecs.ram.model}
                      <br />
                      Quantidade: {project.hardwareSpecs.ram.quantity || "1 unidade(s)"}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.storage && (
                  <div>
                    <h4 className="font-medium mb-2">Armazenamento</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modelo: {project.hardwareSpecs.storage.model}
                      <br />
                      Quantidade: {project.hardwareSpecs.storage.quantity || "1 unidade(s)"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {(project.hardwareSpecs.network?.networkCard ||
            project.hardwareSpecs.network?.switch ||
            project.hardwareSpecs.wifiAdapter) && (
            <div>
              <h3 className="text-base font-semibold mb-4">Componentes de Rede</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                {project.hardwareSpecs.network?.networkCard && (
                  <div>
                    <h4 className="font-medium mb-2">Placa de Rede</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Portas: {project.hardwareSpecs.network.networkCard.ports}
                      <br />
                      Quantidade: {project.hardwareSpecs.network.networkCard.quantity || "1"}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.wifiAdapter && (
                  <div>
                    <h4 className="font-medium mb-2">Adaptador Wi-Fi</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instalado
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.network?.switch && (
                  <div>
                    <h4 className="font-medium mb-2">Switch de Rede</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instalado
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {project.hardwareSpecs.calibrator && (
            <div>
              <h3 className="text-base font-semibold mb-4">Componentes do Calibrador</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                {project.hardwareSpecs.calibrator.mioBoard.included && (
                  <div>
                    <h4 className="font-medium mb-2">Placa MIO</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.hardwareSpecs.calibrator.mioBoard.hasConditioning
                        ? "Com cabo e condicionamento"
                        : ""}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.calibrator.camera.included && (
                  <div>
                    <h4 className="font-medium mb-2">Câmera</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Tipo: {project.hardwareSpecs.calibrator.camera.type}
                      <br />
                      Quantidade: {project.hardwareSpecs.calibrator.camera.quantity || "4"}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.calibrator.camera.lens && (
                  <div>
                    <h4 className="font-medium mb-2">Tipo de Lente</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.hardwareSpecs.calibrator.camera.lens.type}
                      <br />
                      Quantidade: {project.hardwareSpecs.calibrator.camera.lens.quantity || "4"}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.calibrator.camera.cable && (
                  <div>
                    <h4 className="font-medium mb-2">Tipo de Cabo</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.hardwareSpecs.calibrator.camera.cable.type}
                      <br />
                      Quantidade: {project.hardwareSpecs.calibrator.camera.cable.quantity || "4"}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.shentekBoard.included && (
                  <div>
                    <h4 className="font-medium mb-2">Placa Shentek</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.hardwareSpecs.shentekBoard.ports} portas
                      {project.hardwareSpecs.shentekBoard.hasConditioning
                        ? ", Com cabo e condicionamento"
                        : ""}
                    </p>
                  </div>
                )}
                {project.hardwareSpecs.securityPen.included && (
                  <div>
                    <h4 className="font-medium mb-2">Pen de Segurança</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Código: {project.hardwareSpecs.securityPen.code}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {project.hardwareSpecs?.additionalComponents &&
            project.hardwareSpecs.additionalComponents.length > 0 && (
              <div>
                <h3 className="text-base font-semibold mb-4">Componentes Adicionais</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {project.hardwareSpecs.additionalComponents.map((component, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2">{component.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Quantidade: {component.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  };

  const renderBoardsInfo = () => {
    if (!project.boards || project.boards.length === 0) return null;

    return (
      <div id={`report-section-placas-${project.id}`} className="space-y-8">
        <div className="text-center space-y-4 pb-8 border-b">
          <img src={mcmLogo} alt="MCM Logo" className="h-16 w-auto mx-auto" /> {/* Add logo */}
          <h2 className="text-2xl font-bold">Especificações das Placas</h2>
          <p className="text-muted-foreground">Detalhamento das placas utilizadas no projeto</p>
        </div>
        {/* Rest of the boards info remains unchanged */}
        <div className="space-y-6">
          {project.boards.map((board, index) => (
            <div key={index} className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-lg font-semibold mb-4">{board.type}</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Quantidade</h4>
                    <p>{board.quantity || "1 unidade(s)"}</p>
                  </div>
                  {board.codes && board.codes.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Códigos</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {board.codes.map((code, idx) => (
                          <li key={idx} className="text-sm">
                            {code || "Não especificado"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRepairInfo = () => {
    if (!project.repairDetails) return null;

    return (
      <div id={`report-section-reparacao-${project.id}`} className="space-y-8">
        <div className="text-center space-y-4 pb-8 border-b">
          <img src={mcmLogo} alt="MCM Logo" className="h-16 w-auto mx-auto" /> {/* Add logo */}
          <h2 className="text-2xl font-bold">Detalhes da Reparação</h2>
          <p className="text-muted-foreground">
            Informações sobre o serviço de reparação realizado
          </p>
        </div>
        {/* Rest of the repair info remains unchanged */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Descrição do Problema</h3>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-base leading-relaxed whitespace-pre-wrap break-words">
                {project.repairDetails.description}
              </p>
            </div>
          </div>
          {project.repairDetails.replacedComponents.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Peças Substituídas</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.repairDetails.replacedComponents.map((component, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-medium">{component.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Quantidade: {component.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div ref={reportRef} id={`project-report-${project.id}`} className="hidden">
      <Tabs defaultValue="geral" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="geral" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            Geral
          </TabsTrigger>
          {project.hardwareSpecs && (
            <TabsTrigger value="hardware" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Hardware
            </TabsTrigger>
          )}
          {project.boards && project.boards.length > 0 && (
            <TabsTrigger value="placas" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Placas
            </TabsTrigger>
          )}
          {project.repairDetails && (
            <TabsTrigger value="reparacao" className="flex items-center gap-2">
              <Tool className="h-4 w-4" />
              Reparação
            </TabsTrigger>
          )}
        </TabsList>
        <ScrollArea className="h-[calc(90vh-180px)]">
          <div className="p-6">
            <TabsContent value="geral">{renderGeneralInfo()}</TabsContent>
            <TabsContent value="hardware">{renderHardwareInfo()}</TabsContent>
            <TabsContent value="placas">{renderBoardsInfo()}</TabsContent>
            <TabsContent value="reparacao">{renderRepairInfo()}</TabsContent>
          </div>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default ProjectReport;