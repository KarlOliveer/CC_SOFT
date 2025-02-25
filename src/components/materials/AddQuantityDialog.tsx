import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Material } from "./types";

interface AddQuantityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  material: Material | null;
  onAddQuantity: (
    materialId: string,
    quantity: number,
    supplier: string,
    sameSupplier: boolean,
    newPrimarySupplier?: string
  ) => void;
}

const AddQuantityDialog: React.FC<AddQuantityDialogProps> = ({
  open,
  onOpenChange,
  material,
  onAddQuantity,
}) => {
  const [quantity, setQuantity] = React.useState("");
  const [supplier, setSupplier] = React.useState("");
  const [sameSupplier, setSameSupplier] = React.useState(true);
  const [changePrimarySupplier, setChangePrimarySupplier] = React.useState(false);
  const [newPrimarySupplier, setNewPrimarySupplier] = React.useState("");
  const [warning, setWarning] = React.useState<string | null>(null);

  // Validate quantity on change
  const handleQuantityChange = (value: string) => {
    const numValue = value === "" ? "" : Number(value);
    setQuantity(value);
    if (numValue !== "" && material && numValue > 0) {
      const newTotal = material.currentQuantity + numValue;
      if (newTotal > material.maxQuantity) {
        setWarning(`A quantidade atual (${newTotal}) excederá o máximo (${material.maxQuantity}).`);
      } else {
        setWarning(null);
      }
    } else {
      setWarning(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numQuantity = Number(quantity);
    if (material && numQuantity > 0) {
      onAddQuantity(
        material.id,
        numQuantity,
        supplier,
        sameSupplier,
        changePrimarySupplier ? newPrimarySupplier : undefined
      );
      setQuantity("");
      setSupplier("");
      setSameSupplier(true);
      setChangePrimarySupplier(false);
      setNewPrimarySupplier("");
      setWarning(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Quantidade: {material?.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium">Quantidade a Adicionar</label>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              placeholder="Digite a quantidade"
              className="w-full"
              required
            />
            {warning && <p className="text-sm text-yellow-600 mt-1">{warning}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sameSupplier"
              checked={sameSupplier}
              onCheckedChange={(checked) => setSameSupplier(checked as boolean)}
            />
            <Label htmlFor="sameSupplier">Mesmo Fornecedor ({material?.supplier})</Label>
          </div>
          {!sameSupplier && (
            <div>
              <label className="text-sm font-medium">Novo Fornecedor</label>
              <Input
                placeholder="Ex: Novo Fornecedor SA"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                required={!sameSupplier}
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="changePrimarySupplier"
              checked={changePrimarySupplier}
              onCheckedChange={(checked) => setChangePrimarySupplier(checked as boolean)}
            />
            <Label htmlFor="changePrimarySupplier">Alterar Fornecedor Principal</Label>
          </div>
          {changePrimarySupplier && (
            <div>
              <label className="text-sm font-medium">Novo Fornecedor Principal</label>
              <Input
                placeholder="Ex: Fornecedor Principal SA"
                value={newPrimarySupplier}
                onChange={(e) => setNewPrimarySupplier(e.target.value)}
                required={changePrimarySupplier}
              />
            </div>
          )}
          <Button
            type="submit"
            className="w-full mt-4 bg-black text-white"
            disabled={!quantity || Number(quantity) <= 0 || (!sameSupplier && !supplier) || (changePrimarySupplier && !newPrimarySupplier)}
          >
            Adicionar Quantidade
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuantityDialog;