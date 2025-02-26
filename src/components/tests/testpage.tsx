"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Plus, X, Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import mcmLogo from "@/assets/mcm_logo.png";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import type { Test } from "@/types/types";

interface TestsPageProps {
  initialTests?: Test[];
}

const TestsPage: React.FC<TestsPageProps> = ({ initialTests = [] }) => {
  // State for all tests
  const [tests, setTests] = useState<Test[]>(initialTests);

  // === 1) Persist in localStorage ===
  // Load from localStorage once (on mount)
  useEffect(() => {
    const storedTests = localStorage.getItem("tests");
    if (storedTests) {
      setTests(JSON.parse(storedTests));
    }
  }, []);

  // Save to localStorage whenever `tests` changes
  useEffect(() => {
    localStorage.setItem("tests", JSON.stringify(tests));
  }, [tests]);

  // === 2) Dialog to create a new Test ===
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [tempTitle, setTempTitle] = useState("");
  const [tempType, setTempType] = useState("");
  const [tempObservations, setTempObservations] = useState("");

  // === 3) Dialog to add a named field to an existing test ===
  const [fieldDialogOpen, setFieldDialogOpen] = useState(false);
  const [fieldTestIndex, setFieldTestIndex] = useState<number | null>(null);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");

  // === CREATE TEST DIALOG LOGIC ===
  const openCreateDialog = () => {
    setTempTitle("");
    setTempType("");
    setTempObservations("");
    setCreateDialogOpen(true);
  };

  const closeCreateDialog = () => {
    setCreateDialogOpen(false);
  };

  const saveNewTest = () => {
    const newTest: Test = {
      // Now we store a "title" that the user picks
      title: tempTitle,
      type: tempType,
      observations: tempObservations,
      isSuccessful: false,
      additionalFields: {},
    };
    setTests((prev) => [...prev, newTest]);
    setCreateDialogOpen(false);
  };

  // === ADD FIELD DIALOG LOGIC ===
  const openFieldDialog = (testIndex: number) => {
    setFieldTestIndex(testIndex);
    setNewFieldName("");
    setNewFieldValue("");
    setFieldDialogOpen(true);
  };

  const closeFieldDialog = () => {
    setFieldDialogOpen(false);
  };

  const saveFieldToTest = () => {
    if (fieldTestIndex === null) return;
    if (!newFieldName.trim()) {
      alert("O campo precisa de um nome.");
      return;
    }

    setTests((prev) =>
      prev.map((test, i) => {
        if (i === fieldTestIndex) {
          return {
            ...test,
            additionalFields: {
              ...test.additionalFields,
              [newFieldName.trim()]: newFieldValue,
            },
          };
        }
        return test;
      })
    );
    setFieldDialogOpen(false);
  };

  // === CARD ACTIONS ===
  // Remove a test card
  const removeTest = (index: number) => {
    setTests((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle success/failure
  const toggleSuccess = (index: number, checked: boolean) => {
    setTests((prev) =>
      prev.map((test, i) =>
        i === index ? { ...test, isSuccessful: checked } : test
      )
    );
  };

  // Remove a named field
  const removeField = (testIndex: number, fieldKey: string) => {
    setTests((prev) =>
      prev.map((test, i) => {
        if (i === testIndex) {
          const { [fieldKey]: _, ...rest } = test.additionalFields;
          return { ...test, additionalFields: rest };
        }
        return test;
      })
    );
  };

  // === PDF REPORT LOGIC ===
  const generateSingleTestReport = (index: number) => {
    const test = tests[index];
    if (!test) return;

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      pdf.setFont("Helvetica");

      const margin = 15;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let yPosition = margin;

      // Helper to wrap text
      const addTextWithWrap = (
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        fontSize: number = 12,
        lineHeight: number = 5
      ) => {
        pdf.setFontSize(fontSize);
        const lines = pdf.splitTextToSize(text, maxWidth);
        pdf.text(lines, x, y);
        return lines.length * lineHeight;
      };

      // Title
      pdf.setFontSize(16);
      pdf.text("Relatório de Teste", pageWidth / 2, yPosition, {
        align: "center",
      });
      yPosition += 10;

      pdf.setFontSize(12);
      pdf.text("MCM Systems - Controle de Qualidade", pageWidth / 2, yPosition, {
        align: "center",
      });
      yPosition += 10;

      pdf.setFontSize(10);
      pdf.text(
        `Documento gerado em ${new Date().toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        })}`,
        pageWidth / 2,
        yPosition,
        { align: "center" }
      );
      yPosition += 20;

      // Show test title
      pdf.setFontSize(12);
      pdf.text(
        `Título do Teste: ${test.title || "Sem título"}`,
        margin,
        yPosition
      );
      yPosition += 8;

      pdf.text(`Tipo de Teste: ${test.type || "Não especificado"}`, margin, yPosition);
      yPosition += 8;

      pdf.text(
        `Status: ${test.isSuccessful ? "Sucesso" : "Falha"}`,
        margin,
        yPosition
      );
      yPosition += 8;

      pdf.text("Observações:", margin, yPosition);
      yPosition += 6;
      yPosition += addTextWithWrap(
        test.observations || "Nenhuma observação",
        margin + 5,
        yPosition,
        pageWidth - 2 * margin - 5
      );
      yPosition += 6;

      // Additional fields
      const keys = Object.keys(test.additionalFields || {});
      if (keys.length > 0) {
        pdf.text("Campos Adicionais:", margin, yPosition);
        yPosition += 6;
        keys.forEach((key) => {
          const val = test.additionalFields[key];
          yPosition += addTextWithWrap(
            `${key}: ${val || "Não especificado"}`,
            margin + 5,
            yPosition,
            pageWidth - 2 * margin - 5
          );
          yPosition += 2;
        });
      }

      // Footer
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(128);
        pdf.text(
          `MCM Systems - Relatório de Teste - Página ${i} de ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: "center" }
        );
      }

      const blob = pdf.output("blob");
      saveAs(blob, `relatorio-teste-${index + 1}.pdf`);
    } catch (error) {
      console.error("Error generating test report:", error);
      alert(`Falha ao gerar o relatório. Erro: ${(error as Error).message}`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 pb-8 border-b">
        <img src={mcmLogo} alt="MCM Logo" className="h-16 w-auto mx-auto" />
        <h1 className="text-2xl font-bold">Relatório de Testes</h1>
        <p className="text-muted-foreground">MCM Systems - Controle de Qualidade</p>
      </div>

      <div className="flex justify-between items-center my-6">
        <h2 className="text-xl font-semibold">Testes</h2>
        <Button onClick={openCreateDialog} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Novo Teste
        </Button>
      </div>

      {/* Main list of test cards */}
      <ScrollArea className="h-[calc(80vh-200px)]">
        <div className="space-y-6">
          {tests.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Nenhum teste adicionado ainda.
            </p>
          ) : (
            tests.map((test, index) => (
              <div key={index} className="p-6 rounded-lg bg-muted/50 space-y-4">
                <div className="flex justify-between items-center">
                  {/* Display the test's custom title */}
                  <h3 className="text-lg font-semibold">
                    {test.title || `Teste ${index + 1}`}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={() => removeTest(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Tipo de Teste</Label>
                    <p className="text-sm">{test.type || "Não especificado"}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`success-${index}`}
                      checked={test.isSuccessful}
                      onCheckedChange={(checked) => toggleSuccess(index, !!checked)}
                    />
                    <Label htmlFor={`success-${index}`} className="text-sm font-medium">
                      Sucesso
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Observações</Label>
                  <p className="text-sm">{test.observations || "Nenhuma"}</p>
                </div>

                {/* Additional fields list */}
                {test.additionalFields && Object.keys(test.additionalFields).length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Campos Adicionais</h4>
                    {Object.entries(test.additionalFields).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2">
                        <p className="text-sm">
                          <strong>{key}:</strong> {val || "Não especificado"}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeField(index, key)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add new named field */}
                <Button variant="outline" size="sm" onClick={() => openFieldDialog(index)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Campo
                </Button>

                {/* Download if successful */}
                {test.isSuccessful && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => generateSingleTestReport(index)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Relatório
                  </Button>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* === DIALOG: Create a new Test === */}
      {createDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Novo Teste</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Título do Teste</Label>
                <Input
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  placeholder="Ex: Teste da Funcionalidade X"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Tipo de Teste</Label>
                <Input
                  value={tempType}
                  onChange={(e) => setTempType(e.target.value)}
                  placeholder="Ex: Funcional, Estresse, etc."
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Observações</Label>
                <Input
                  value={tempObservations}
                  onChange={(e) => setTempObservations(e.target.value)}
                  placeholder="Notas sobre o teste"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="secondary" onClick={closeCreateDialog}>
                Cancelar
              </Button>
              <Button variant="default" onClick={saveNewTest}>
                Salvar Teste
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* === DIALOG: Add named field to an existing Test === */}
      {fieldDialogOpen && fieldTestIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Novo Campo</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Nome do Campo</Label>
                <Input
                  value={newFieldName}
                  onChange={(e) => setNewFieldName(e.target.value)}
                  placeholder="Ex: Temperatura, Duração..."
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Valor</Label>
                <Input
                  value={newFieldValue}
                  onChange={(e) => setNewFieldValue(e.target.value)}
                  placeholder="Ex: 45°C, 2h..."
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="secondary" onClick={closeFieldDialog}>
                Cancelar
              </Button>
              <Button variant="default" onClick={saveFieldToTest}>
                Salvar Campo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestsPage;
