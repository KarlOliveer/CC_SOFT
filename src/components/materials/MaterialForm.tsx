import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
import { Material } from "@/types/types";
=======
import { Material } from "./types";
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00

interface MaterialFormProps {
  onSubmit: (material: Material) => void;
}

const MaterialForm: React.FC<MaterialFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<Omit<Material, "id">>({
    name: "",
    supplier: "",
    receptionDate: "",
    minQuantity: 0,
    maxQuantity: 0,
    currentQuantity: 0,
    linkedProject: "",
    linkedOrder: "",
  });
  const [warning, setWarning] = React.useState<string | null>(null);

  // Validate quantities on change
  const handleQuantityChange = (field: keyof Omit<Material, "id">, value: string) => {
    const numValue = value === "" ? 0 : Number(value);
    setFormData((prev) => ({ ...prev, [field]: numValue }));
    if (field === "currentQuantity" || field === "maxQuantity") {
      const current = field === "currentQuantity" ? numValue : formData.currentQuantity;
      const max = field === "maxQuantity" ? numValue : formData.maxQuantity;
      if (current > max && max > 0) {
        setWarning(`A quantidade atual (${current}) excede o máximo (${max}).`);
      } else {
        setWarning(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMaterial: Material = {
      id: Math.random().toString(36).slice(2, 9),
      ...formData,
      minQuantity: Number(formData.minQuantity),
      maxQuantity: Number(formData.maxQuantity),
      currentQuantity: Number(formData.currentQuantity),
    };
    onSubmit(newMaterial);
    setFormData({
      name: "",
      supplier: "",
      receptionDate: "",
      minQuantity: 0,
      maxQuantity: 0,
      currentQuantity: 0,
      linkedProject: "",
      linkedOrder: "",
    });
    setWarning(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label className="text-sm font-medium">Nome do Material</label>
        <Input
          placeholder="Ex: Resistência 10kΩ"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Fornecedor</label>
        <Input
          placeholder="Ex: Eletrônicos SA"
          value={formData.supplier}
          onChange={(e) => setFormData((prev) => ({ ...prev, supplier: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Data de Receção</label>
        <Input
          type="date"
          value={formData.receptionDate}
          onChange={(e) => setFormData((prev) => ({ ...prev, receptionDate: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Quantidade Mínima</label>
        <Input
          type="number"
          value={formData.minQuantity}
          onChange={(e) => handleQuantityChange("minQuantity", e.target.value)}
          placeholder="Digite a quantidade mínima"
          min="0"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Quantidade Máxima</label>
        <Input
          type="number"
          value={formData.maxQuantity}
          onChange={(e) => handleQuantityChange("maxQuantity", e.target.value)}
          placeholder="Digite a quantidade máxima"
          min="0"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Quantidade Atual</label>
        <Input
          type="number"
          value={formData.currentQuantity}
          onChange={(e) => handleQuantityChange("currentQuantity", e.target.value)}
          placeholder="Digite a quantidade atual"
          min="0"
        />
        {warning && <p className="text-sm text-yellow-600 mt-1">{warning}</p>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Projeto (opcional)</label>
          <Input
            placeholder="Ex: ID ou nome do projeto"
            value={formData.linkedProject}
            onChange={(e) => setFormData((prev) => ({ ...prev, linkedProject: e.target.value }))}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Pedido (opcional)</label>
          <Input
            placeholder="Ex: ID ou nome do pedido"
            value={formData.linkedOrder}
            onChange={(e) => setFormData((prev) => ({ ...prev, linkedOrder: e.target.value }))}
          />
        </div>
      </div>
      <Button type="submit" className="w-full mt-4 bg-black text-white">
        Adicionar Material
      </Button>
    </form>
  );
};

export default MaterialForm;