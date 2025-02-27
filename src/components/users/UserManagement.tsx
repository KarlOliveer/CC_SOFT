<<<<<<< HEAD
"use client"; // Ensure this is a client component since it uses hooks

=======
>>>>>>> 49493c5 (Primeiro commit)
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { User, Permission } from "@/types/auth";
import NewUserDialog from "./NewUserDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const UserManagement = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<string | null>(null);
  const [userToDelete, setUserToDelete] = React.useState<string | null>(null);
  const currentUsername = localStorage.getItem("user");

  const handleCreateUser = (userData: User) => {
<<<<<<< HEAD
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
=======
    setUsers([...users, userData]);
    // In a real app, you would make an API call here
    localStorage.setItem("users", JSON.stringify([...users, userData]));
>>>>>>> 49493c5 (Primeiro commit)
  };

  const handleEditUser = (username: string, updatedData: Partial<User>) => {
    const updatedUsers = users.map((user) =>
<<<<<<< HEAD
      user.username === username ? { ...user, ...updatedData } : user
=======
      user.username === username ? { ...user, ...updatedData } : user,
>>>>>>> 49493c5 (Primeiro commit)
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (username: string) => {
    if (username === currentUsername) {
      return; // Não permite excluir o próprio usuário
    }
    setUserToDelete(username);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      const updatedUsers = users.filter(
<<<<<<< HEAD
<<<<<<< HEAD
        (user) => user.username !== userToDelete,
=======
        (user) => user.username !== userToDelete
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
=======
        (user) => user.username !== userToDelete,
>>>>>>> 49493c5 (Primeiro commit)
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUserToDelete(null);
    }
  };

  React.useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
<<<<<<< HEAD
      try {
        setUsers(JSON.parse(storedUsers));
      } catch (error) {
        console.error("Error parsing stored users:", error);
      }
=======
      setUsers(JSON.parse(storedUsers));
>>>>>>> 49493c5 (Primeiro commit)
    }
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
<<<<<<< HEAD
          <p className="text-gray-500 dark:text-gray-400">
            Gerencie usuários e suas permissões
          </p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700"
=======
          <p className="text-gray-500">Gerencie usuários e suas permissões</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800"
>>>>>>> 49493c5 (Primeiro commit)
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      <div className="space-y-4">
        {users
          .filter((user) => user.username !== "admin.admin")
          .map((user) => (
            <div
              key={user.username}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 49493c5 (Primeiro commit)
              className="p-6 bg-white rounded-lg border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{user.username}</h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {user.role}
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium mb-1">Permissões:</h4>
<<<<<<< HEAD
=======
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {user.username}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {user.role}
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Permissões:
                    </h4>
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
=======
>>>>>>> 49493c5 (Primeiro commit)
                    <div className="flex flex-wrap gap-2">
                      {user.permissions.map((permission) => (
                        <span
                          key={permission}
<<<<<<< HEAD
<<<<<<< HEAD
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs"
=======
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
=======
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs"
>>>>>>> 49493c5 (Primeiro commit)
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingUser(user.username)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteUser(user.username)}
                    disabled={user.username === currentUsername}
                    title={
                      user.username === currentUsername
                        ? "Você não pode excluir seu próprio usuário"
                        : ""
                    }
                  >
                    Excluir
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <AlertDialog
        open={!!userToDelete}
        onOpenChange={() => setUserToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este usuário? Esta ação não pode
              ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <NewUserDialog
        open={isDialogOpen || !!editingUser}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setEditingUser(null);
        }}
        onSubmit={(userData) => {
          if (editingUser) {
            handleEditUser(editingUser, userData);
          } else {
            handleCreateUser(userData as User);
          }
          setIsDialogOpen(false);
          setEditingUser(null);
        }}
        editingUser={
          editingUser
            ? users.find((u) => u.username === editingUser)
            : undefined
        }
      />
    </div>
  );
};

<<<<<<< HEAD
export default UserManagement;
=======
export default UserManagement;
>>>>>>> 49493c5 (Primeiro commit)
