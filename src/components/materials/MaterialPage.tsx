"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import MaterialForm from "./MaterialForm";
import MaterialList from "./MaterialList";
import ConsumptionDialog from "./ConsumptionDialog";
import AddQuantityDialog from "./AddQuantityDialog";
import { Material, Consumption } from "./types";

const MaterialsPage = () => {
  const [materials, setMaterials] = React.useState<Material[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isConsumeDialogOpen, setIsConsumeDialogOpen] = React.useState(false);
  const [isAddQuantityDialogOpen, setIsAddQuantityDialogOpen] = React.useState(false);
  const [selectedMaterial, setSelectedMaterial] = React.useState<Material | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load materials from localStorage
  const loadMaterials = () => {
    try {
      const stored = localStorage.getItem("materials");
      if (stored) {
        const parsedMaterials = JSON.parse(stored);
        setMaterials(parsedMaterials);
      }
    } catch (error) {
      console.error("Error loading materials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save materials to localStorage
  const saveMaterials = (updatedMaterials: Material[]) => {
    try {
      localStorage.setItem("materials", JSON.stringify(updatedMaterials));
      setMaterials(updatedMaterials);
    } catch (error) {
      console.error("Error saving materials:", error);
    }
  };

  // Load on mount and when tab becomes visible
  React.useEffect(() => {
    loadMaterials();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadMaterials();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Filter materials
  const filteredMaterials = React.useMemo(() => {
    return materials.filter((mat) => {
      const lowerSearch = searchTerm.toLowerCase();
      return (
        mat.name.toLowerCase().includes(lowerSearch) ||
        mat.supplier.toLowerCase().includes(lowerSearch)
      );
    });
  }, [materials, searchTerm]);

  // Handle material consumption
  const handleConsumeMaterial = (materialId: string, quantity: number, reason: string) => {
    const updatedMaterials = materials.map((mat) =>
      mat.id === materialId
        ? { ...mat, currentQuantity: Math.max(0, mat.currentQuantity - quantity) }
        : mat
    );
    saveMaterials(updatedMaterials);
    setIsConsumeDialogOpen(false);
    setSelectedMaterial(null);
  };

  // Handle adding quantity
  const handleAddQuantity = (
    materialId: string,
    quantity: number,
    supplier: string,
    sameSupplier: boolean,
    newPrimarySupplier?: string
  ) => {
    const updatedMaterials = materials.map((mat) => {
      if (mat.id === materialId) {
        const updatedSuppliers = sameSupplier
          ? mat.suppliers || [mat.supplier]
          : [...(mat.suppliers || [mat.supplier]), supplier];
        return {
          ...mat,
          currentQuantity: mat.currentQuantity + quantity,
          supplier: newPrimarySupplier || mat.supplier,
          suppliers: updatedSuppliers,
        };
      }
      return mat;
    });
    saveMaterials(updatedMaterials);
    setIsAddQuantityDialogOpen(false);
    setSelectedMaterial(null);
  };

  if (isLoading) {
    return <div className="p-8 text-center">Carregando materiais...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Materiais</h1>
          <p className="text-gray-500">Gerencie seu estoque de materiais</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Material
        </Button>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Pesquisar por nome ou fornecedor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        <MaterialList
          materials={filteredMaterials}
          onConsume={(material) => {
            setSelectedMaterial(material);
            setIsConsumeDialogOpen(true);
          }}
          onAddQuantity={(material) => {
            setSelectedMaterial(material);
            setIsAddQuantityDialogOpen(true);
          }}
        />
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Material</DialogTitle>
          </DialogHeader>
          <MaterialForm
            onSubmit={(newMaterial) => {
              saveMaterials([...materials, newMaterial]);
              setIsAddDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      <ConsumptionDialog
        open={isConsumeDialogOpen}
        onOpenChange={setIsConsumeDialogOpen}
        material={selectedMaterial}
        onConsume={handleConsumeMaterial}
      />

      <AddQuantityDialog
        open={isAddQuantityDialogOpen}
        onOpenChange={setIsAddQuantityDialogOpen}
        material={selectedMaterial}
        onAddQuantity={handleAddQuantity}
      />
    </div>
  );
};

export default MaterialsPage;