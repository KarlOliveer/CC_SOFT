"use client"; // Garante que o componente é cliente, pois utiliza hooks

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
import { supabase } from "@/lib/supabase"; // Ajuste o caminho conforme necessário

const UserManagement = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<string | null>(null);
  const [userToDelete, setUserToDelete] = React.useState<string | null>(null);
  const currentUsername = localStorage.getItem("user");
  const isAdmin = currentUsername === "admin.admin";

  // Busca os usuários do Supabase ao montar o componente
  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw error;
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar usuários no Supabase:", error);
    }
  };

  // Cria um novo usuário com os valores padrão e insere no Supabase
  const handleCreateUser = async (userData: User) => {
    const newUser = {
      ...userData,
      password: "mcmsystems",
      passwordChanged: false,
      emailSet: false,
    };

    try {
      const { data, error } = await supabase.from("users").insert([newUser]);
      if (error) throw error;
      // Atualiza o estado com o novo usuário retornado do Supabase
      setUsers([...users, ...data]);
    } catch (error) {
      console.error("Erro ao criar usuário no Supabase:", error);
    }
  };

  // Edita um usuário (exceto o admin.admin) e atualiza no Supabase
  const handleEditUser = async (username: string, updatedData: Partial<User>) => {
    if (username === "admin.admin") {
      return;
    }

    try {
      const { error } = await supabase
        .from("users")
        .update(updatedData)
        .eq("username", username);

      if (error) throw error;

      // Atualiza o estado com os dados modificados
      const updatedUsers = users.map((user) =>
        user.username === username ? { ...user, ...updatedData } : user,
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Erro ao atualizar usuário no Supabase:", error);
    }
  };

  // Prepara a exclusão de um usuário (não permite excluir o usuário atual ou o admin.admin)
  const handleDeleteUser = (username: string) => {
    if (username === currentUsername || username === "admin.admin") {
      return;
    }
    setUserToDelete(username);
  };

  // Confirma a exclusão do usuário selecionado e remove do Supabase
  const confirmDelete = async () => {
    if (userToDelete) {
      try {
        const { error } = await supabase
          .from("users")
          .delete()
          .eq("username", userToDelete);
        if (error) throw error;

        const updatedUsers = users.filter((user) => user.username !== userToDelete);
        setUsers(updatedUsers);
        setUserToDelete(null);
      } catch (error) {
        console.error("Erro ao excluir usuário do Supabase:", error);
      }
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Gerencie usuários e suas permissões
          </p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700"
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
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {user.displayName || user.username}
                  </h3>
                  {user.email && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {user.role}
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Permissões:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {user.permissions.map((permission: Permission) => (
                        <span
                          key={permission}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(user.username !== "admin.admin" || isAdmin) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingUser(user.username)}
                    >
                      Editar
                    </Button>
                  )}
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
              Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.
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
          editingUser ? users.find((u) => u.username === editingUser) : undefined
        }
        currentUsername={currentUsername}
      />
    </div>
  );
};

export default UserManagement;
