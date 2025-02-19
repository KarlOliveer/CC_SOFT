import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { User, Permission } from "@/types/auth";
import NewUserDialog from "./NewUserDialog";

const UserManagement = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<string | null>(null);

  const handleCreateUser = (userData: User) => {
    setUsers([...users, userData]);
    // In a real app, you would make an API call here
    localStorage.setItem("users", JSON.stringify([...users, userData]));
  };

  const handleEditUser = (username: string, updatedData: Partial<User>) => {
    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, ...updatedData } : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (username: string) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  React.useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
          <p className="text-gray-500">Gerencie usuários e suas permissões</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.username}
            className="p-6 bg-white rounded-lg border hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{user.username}</h3>
                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
                <div className="mt-2">
                  <h4 className="text-sm font-medium mb-1">Permissões:</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.permissions.map((permission) => (
                      <span
                        key={permission}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
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
                >
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default UserManagement;
