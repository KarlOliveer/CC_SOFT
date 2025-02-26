import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Request, User } from "@/types/types";

interface NewRequestFormProps {
  onSubmit: (request: Request) => void;
  users: User[];
  currentUser: string;
}

const NewRequestForm: React.FC<NewRequestFormProps> = React.memo(({
  onSubmit,
  users,
  currentUser,
}) => {
  const [newRequest, setNewRequest] = React.useState<Omit<Request, "id" | "createdAt">>({
    type: "Order",
    requester: currentUser,
    recipient: "",
    description: "",
    status: "Pending",
  });
  const [formError, setFormError] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequest.recipient || !newRequest.description) {
      setFormError("Destinatário e descrição são obrigatórios.");
      return;
    }
    setFormError(null);
    const request: Request = {
      id: Math.random().toString(36).slice(2, 9),
      ...newRequest,
      createdAt: new Date().toISOString(),
    };
    onSubmit(request);
    setNewRequest({
      type: "Order",
      requester: currentUser,
      recipient: "",
      description: "",
      status: "Pending",
    });
  };

  const handleTypeChange = React.useCallback((value: string) => {
    setNewRequest((prev) => ({ ...prev, type: value as "Order" | "Test" }));
  }, []);

  const handleRecipientChange = React.useCallback((value: string) => {
    setNewRequest((prev) => ({ ...prev, recipient: value }));
  }, []);

  const handleDescriptionChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRequest((prev) => ({ ...prev, description: e.target.value }));
  }, []);

  if (!users || users.length === 0) {
    return <p className="text-red-600">No users available to create a request.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formError && <p className="text-red-600 text-sm">{formError}</p>}
      <div>
        <label className="text-sm font-medium">Tipo</label>
        <Select
          value={newRequest.type}
          onValueChange={handleTypeChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Order">Order</SelectItem>
            <SelectItem value="Test">Test</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium">Destinatário</label>
        <Select
          value={newRequest.recipient}
          onValueChange={handleRecipientChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o usuário" />
          </SelectTrigger>
          <SelectContent>
            {users.map((user) => (
              <SelectItem key={user.username} value={user.username}>
                {user.username}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium">Descrição</label>
        <Input
          value={newRequest.description}
          onChange={handleDescriptionChange}
          placeholder="Descreva o pedido"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="submit">Criar</Button>
      </div>
    </form>
  );
});

export default NewRequestForm;