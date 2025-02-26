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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";

interface Material {
  name: string;
  quantity: string;
}

interface NewOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: any) => void;
}

const NewOrderDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: NewOrderDialogProps) => {
  const [selectedUser, setSelectedUser] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [materials, setMaterials] = React.useState<Material[]>([]);

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const handleAddMaterial = () => {
    setMaterials([...materials, { name: "", quantity: "1" }]);
  };

  const handleRemoveMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const handleMaterialChange = (
    index: number,
    field: keyof Material,
    value: string,
  ) => {
    const newMaterials = materials.map((material, i) => {
      if (i === index) {
        return { ...material, [field]: value };
      }
      return material;
    });
    setMaterials(newMaterials);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      userId: selectedUser,
      description,
      materials,
      status: "Pendente",
      date: new Date().toISOString(),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Pedido</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Usuário</label>
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o usuário" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user: any) => (
                  <SelectItem key={user.username} value={user.username}>
                    {user.username} ({user.role})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição do Pedido</label>
            <Textarea
              placeholder="Descreva o que foi solicitado"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Materiais</label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddMaterial}
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Material
              </Button>
            </div>

            {materials.map((material, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Nome do material"
                    value={material.name}
                    onChange={(e) =>
                      handleMaterialChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Quantidade"
                    value={material.quantity}
                    onChange={(e) =>
                      handleMaterialChange(index, "quantity", e.target.value)
                    }
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveMaterial(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full">
            Criar Pedido
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewOrderDialog;
