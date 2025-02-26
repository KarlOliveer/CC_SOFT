import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
<<<<<<< HEAD
import { Material } from "@/types/types";
=======
import { Material } from "./types";
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00

interface ConsumptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  material: Material | null;
  onConsume: (materialId: string, quantity: number, reason: string) => void;
}

const ConsumptionDialog: React.FC<ConsumptionDialogProps> = ({
  open,
  onOpenChange,
  material,
  onConsume,
}) => {
  const [quantity, setQuantity] = React.useState("");
  const [reason, setReason] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numQuantity = Number(quantity);
    if (material && numQuantity > 0) {
      onConsume(material.id, numQuantity, reason);
      setQuantity("");
      setReason("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Consumir Material: {material?.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium">Quantidade a Consumir</label>
            <Input
              type="number"
              min="1"
              max={material?.currentQuantity || 0}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Digite a quantidade"
              required
            />
            <p className="text-sm text-gray-500">
              Disponível: {material?.currentQuantity || 0}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium">Motivo</label>
            <Input
              placeholder="Ex: Projeto X, Necessidade de Produção"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-4 bg-black text-white"
            disabled={!quantity || Number(quantity) <= 0 || !reason}
          >
            Confirmar Consumo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsumptionDialog;