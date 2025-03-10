import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Material, MaterialCategory } from "./types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

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
    category: "Componentes",
    location: "",
    unit: "unidade",
    cost: 0,
    barcode: "",
    image: "",
  });
  const [warning, setWarning] = React.useState<string | null>(null);

  // Validate quantities on change
  const handleQuantityChange = (
    field: keyof Omit<Material, "id">,
    value: string,
  ) => {
    const numValue = value === "" ? 0 : Number(value);
    setFormData((prev) => ({ ...prev, [field]: numValue }));
    if (field === "currentQuantity" || field === "maxQuantity") {
      const current =
        field === "currentQuantity" ? numValue : formData.currentQuantity;
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
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
          <TabsTrigger value="inventory">Inventário</TabsTrigger>
          <TabsTrigger value="additional">Informações Adicionais</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4 py-4">
          <div>
            <label className="text-sm font-medium">Nome do Material</label>
            <Input
              placeholder="Ex: Resistência 10kΩ"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Categoria</label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                <SelectItem value="Componentes">Componentes</SelectItem>
                <SelectItem value="Ferramentas">Ferramentas</SelectItem>
                <SelectItem value="Cabos">Cabos</SelectItem>
                <SelectItem value="Placas">Placas</SelectItem>
                <SelectItem value="Sensores">Sensores</SelectItem>
                <SelectItem value="Outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Fornecedor</label>
            <Input
              placeholder="Ex: Eletrônicos SA"
              value={formData.supplier}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, supplier: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">Data de Receção</label>
            <Input
              type="date"
              value={formData.receptionDate}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  receptionDate: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Localização</label>
              <Input
                placeholder="Ex: Prateleira A3"
                value={formData.location}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium">Código de Barras</label>
              <Input
                placeholder="Ex: 7891234567890"
                value={formData.barcode}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, barcode: e.target.value }))
                }
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Quantidade Mínima</label>
              <Input
                type="number"
                value={formData.minQuantity}
                onChange={(e) =>
                  handleQuantityChange("minQuantity", e.target.value)
                }
                placeholder="Digite a quantidade mínima"
                min="0"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Quantidade Máxima</label>
              <Input
                type="number"
                value={formData.maxQuantity}
                onChange={(e) =>
                  handleQuantityChange("maxQuantity", e.target.value)
                }
                placeholder="Digite a quantidade máxima"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Quantidade Atual</label>
            <Input
              type="number"
              value={formData.currentQuantity}
              onChange={(e) =>
                handleQuantityChange("currentQuantity", e.target.value)
              }
              placeholder="Digite a quantidade atual"
              min="0"
            />
            {warning && (
              <p className="text-sm text-yellow-600 mt-1">{warning}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Unidade</label>
            <Select
              value={formData.unit || "unidade"}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, unit: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a unidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unidade">Unidade</SelectItem>
                <SelectItem value="metro">Metro</SelectItem>
                <SelectItem value="kg">Quilograma</SelectItem>
                <SelectItem value="litro">Litro</SelectItem>
                <SelectItem value="caixa">Caixa</SelectItem>
                <SelectItem value="pacote">Pacote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Custo Unitário (€)</label>
            <Input
              type="number"
              step="0.01"
              value={formData.cost || 0}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  cost: parseFloat(e.target.value) || 0,
                }))
              }
              placeholder="0.00"
              min="0"
            />
          </div>
        </TabsContent>

        <TabsContent value="additional" className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Projeto (opcional)</label>
              <Input
                placeholder="Ex: ID ou nome do projeto"
                value={formData.linkedProject}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    linkedProject: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium">Pedido (opcional)</label>
              <Input
                placeholder="Ex: ID ou nome do pedido"
                value={formData.linkedOrder}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    linkedOrder: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Imagem (URL)</label>
            <Input
              placeholder="Ex: https://exemplo.com/imagem.jpg"
              value={formData.image || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">Observações</label>
            <Textarea
              placeholder="Informações adicionais sobre o material"
              className="min-h-[100px]"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        Adicionar Material
      </Button>
    </form>
  );
};

export default MaterialForm;
