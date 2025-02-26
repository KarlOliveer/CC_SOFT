import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NewRequestForm from "./NewRequestForm";
import { Request, User } from "@/types/types";

interface NewRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (request: Request) => void;
  users: User[];
  currentUser: string;
}

const NewRequestDialog: React.FC<NewRequestDialogProps> = React.memo(({
  open,
  onOpenChange,
  onSubmit,
  users,
  currentUser,
}) => {
  console.log("NewRequestDialog rendering with open:", open, "Users:", users, "CurrentUser:", currentUser);

  const handleFormSubmit = (request: Request) => {
    console.log("Form submitted with request:", request);
    onSubmit(request);
    onOpenChange(false); // Close dialog after submission
  };

  if (!users || users.length === 0) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <p className="text-red-600">No users available to create a request.</p>
          <DialogFooter>
            <Button onClick={() => onOpenChange(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="new-request-description">
        <DialogHeader>
          <DialogTitle>Novo Pedido</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <NewRequestForm
            onSubmit={handleFormSubmit}
            users={users}
            currentUser={currentUser}
          />
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export default NewRequestDialog;