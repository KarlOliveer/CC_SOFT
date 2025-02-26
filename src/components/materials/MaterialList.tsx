import React from "react";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import { Material } from "@/types/types";
=======
import { Material } from "./types";
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00

interface MaterialListProps {
  materials: Material[];
  onConsume: (material: Material) => void;
  onAddQuantity: (material: Material) => void;
}

const MaterialList: React.FC<MaterialListProps> = ({ materials, onConsume, onAddQuantity }) => {
  const isBelowRangeThreshold = (material: Material) => {
    const range = material.maxQuantity - material.minQuantity;
    if (range <= 0) return false;
    const threshold = material.minQuantity + 0.1 * range;
    return material.currentQuantity < threshold;
  };

  return (
    <div className="grid gap-4">
      {materials.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          Nenhum material encontrado
        </div>
      ) : (
        materials.map((mat) => (
          <div
            key={mat.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{mat.name}</h2>
                <p className="text-sm text-gray-500">Fornecedor Principal: {mat.supplier}</p>
                {mat.suppliers && mat.suppliers.length > 1 && (
                  <p className="text-sm text-gray-500">
                    Outros Fornecedores: {mat.suppliers.filter((s) => s !== mat.supplier).join(", ")}
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Recebido em: {mat.receptionDate || "N/A"}
                </p>
                <div className="mt-2 flex gap-4">
                  <p className="text-sm"><strong>Mín:</strong> {mat.minQuantity}</p>
                  <p className="text-sm"><strong>Máx:</strong> {mat.maxQuantity}</p>
                  <p className="text-sm">
                    <strong>Atual:</strong>{" "}
                    <span
                      className={cn(
                        "font-medium",
                        isBelowRangeThreshold(mat)
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-800 dark:text-gray-100"
                      )}
                    >
                      {mat.currentQuantity}
                    </span>
                  </p>
                </div>
                {(mat.linkedProject || mat.linkedOrder) && (
                  <p className="mt-2 text-sm text-gray-500">
                    {mat.linkedProject
                      ? `Vinculado ao Projeto: ${mat.linkedProject}`
                      : `Vinculado ao Pedido: ${mat.linkedOrder}`}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {isBelowRangeThreshold(mat) && (
                  <span className="text-red-600 text-sm font-semibold">
                    Abaixo de 10%!
                  </span>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddQuantity(mat)}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onConsume(mat)}
                  disabled={mat.currentQuantity === 0}
                >
                  <MinusCircle className="h-4 w-4 mr-2" />
                  Consumir
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MaterialList;