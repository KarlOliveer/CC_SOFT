import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, UserFormData, Permission } from "@/types/auth";

interface NewUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormData | Partial<User>) => void;
  editingUser?: User;
  currentUsername?: string;
}

const SECTIONS = [
  { name: "Projetos", base: "projetos" },
  { name: "Materiais", base: "materiais" },
  { name: "Testes", base: "testes" },
  { name: "Pedidos", base: "pedidos" },
  { name: "Entregas", base: "entregas" },
  { name: "Checklists", base: "checklists" },
  { name: "Usuários", base: "usuarios" },
];

const NewUserDialog = ({
  open,
  onOpenChange,
  onSubmit,
  editingUser,
  currentUsername,
}: NewUserDialogProps) => {
  const [formData, setFormData] = React.useState<UserFormData>({
    username: "",
    role: "Electrónica",
    permissions: [],
  });
  const [usernameError, setUsernameError] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  React.useEffect(() => {
    if (editingUser) {
      setFormData({
        username: editingUser.username,
        role: editingUser.role,
        permissions: editingUser.permissions,
      });
    } else {
      setFormData({
        username: "",
        role: "Electrónica",
        permissions: [],
      });
    }
    setUsernameError("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  }, [editingUser]);

  const validateUsername = (username: string): boolean => {
    const usernamePattern = /^[a-z]+\.[a-z]+$/;
    if (!usernamePattern.test(username)) {
      setUsernameError(
        "O nome de usuário deve estar no formato nome.sobrenome (tudo em minúsculas)",
      );
      return false;
    }
    setUsernameError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Impedir edição do usuário admin.admin
    if (editingUser && editingUser.username === "admin.admin") {
      onOpenChange(false);
      return;
    }

    // Validate fields
    if (!editingUser) {
      const isUsernameValid = validateUsername(formData.username);
      if (!isUsernameValid) {
        return;
      }
    }

    // Validate password if provided for editing user
    if (editingUser && newPassword) {
      if (newPassword.length < 6) {
        setPasswordError("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      if (newPassword !== confirmPassword) {
        setPasswordError("As senhas não coincidem.");
        return;
      }
    }

    if (editingUser) {
      const changes: Partial<User> = {};
      if (formData.role !== editingUser.role) changes.role = formData.role;
      if (
        JSON.stringify(formData.permissions) !==
        JSON.stringify(editingUser.permissions)
      ) {
        changes.permissions = formData.permissions;
      }

      // Add password to changes if provided
      if (newPassword) {
        (changes as any).password = newPassword;
        (changes as any).passwordChanged = true;
      }

      onSubmit(changes);
    } else {
      // Format display name from username
      const nameParts = formData.username.split(".");
      const displayName = nameParts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

      onSubmit({
        ...formData,
        displayName,
        password: "mcmsystems",
        passwordChanged: false,
        emailSet: false,
      } as any);
    }
  };

  const handleSectionPermissionChange = (section: string, checked: boolean) => {
    const viewPerm = `${section}_view` as Permission;
    const editPerm = `${section}_edit` as Permission;
    const createPerm =
      section === "projetos" ? ("projetos_create" as Permission) : undefined;

    let newPermissions = [...formData.permissions];

    if (checked) {
      if (!newPermissions.includes(viewPerm)) {
        newPermissions.push(viewPerm);
      }
    } else {
      newPermissions = newPermissions.filter((p) => !p.startsWith(section));
    }

    setFormData({ ...formData, permissions: newPermissions });
  };

  const handleEditPermissionChange = (section: string, checked: boolean) => {
    const editPerm = `${section}_edit` as Permission;
    const viewPerm = `${section}_view` as Permission;
    const createPerm =
      section === "projetos" ? ("projetos_create" as Permission) : undefined;

    let newPermissions = [...formData.permissions];

    if (checked) {
      if (!newPermissions.includes(viewPerm)) {
        newPermissions.push(viewPerm);
      }
      if (!newPermissions.includes(editPerm)) {
        newPermissions.push(editPerm);
      }
      if (createPerm && !newPermissions.includes(createPerm)) {
        newPermissions.push(createPerm);
      }
    } else {
      if (createPerm) {
        newPermissions = newPermissions.filter((p) => p !== createPerm);
      }
      newPermissions = newPermissions.filter((p) => p !== editPerm);
    }

    setFormData({ ...formData, permissions: newPermissions });
  };

  const handleCreateProjectPermissionChange = (checked: boolean) => {
    const createPerm = "projetos_create" as Permission;
    const viewPerm = "projetos_view" as Permission;

    let newPermissions = [...formData.permissions];

    if (checked) {
      if (!newPermissions.includes(viewPerm)) {
        newPermissions.push(viewPerm);
      }
      if (!newPermissions.includes(createPerm)) {
        newPermissions.push(createPerm);
      }
    } else {
      newPermissions = newPermissions.filter((p) => p !== createPerm);
    }

    setFormData({ ...formData, permissions: newPermissions });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingUser ? "Editar Usuário" : "Criar Novo Usuário"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome de Usuário</label>
            <Input
              placeholder="nome.sobrenome"
              value={formData.username}
              onChange={(e) => {
                const value = e.target.value.toLowerCase();
                setFormData({ ...formData, username: value });
                if (!editingUser && value) {
                  validateUsername(value);
                }
              }}
              disabled={!!editingUser}
            />
            {usernameError && (
              <p className="text-sm text-red-500">{usernameError}</p>
            )}
            {!editingUser && (
              <p className="text-xs text-gray-500 mt-1">
                Formato obrigatório: nome.sobrenome (ex: joao.silva)
              </p>
            )}
            {editingUser && (
              <p className="text-xs text-gray-500 mt-1">
                Nome de exibição:{" "}
                {editingUser.displayName ||
                  formData.username
                    .split(".")
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(" ")}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Cargo</label>
            <Select
              value={formData.role}
              onValueChange={(value: User["role"]) =>
                setFormData({ ...formData, role: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o cargo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Electrónica">Electrónica</SelectItem>
                <SelectItem value="Elétrica">Elétrica</SelectItem>
                <SelectItem value="Mecânica">Mecânica</SelectItem>
                <SelectItem value="Informática">Informática</SelectItem>
                <SelectItem value="Software">Software</SelectItem>
                <SelectItem value="Gestão">Gestão</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {editingUser && (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Nova Senha (opcional)
              </label>
              <Input
                type="password"
                placeholder="Digite a nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirme a nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2"
              />
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Deixe em branco para manter a senha atual
              </p>
            </div>
          )}

          <div className="space-y-4">
            <label className="text-sm font-medium">Permissões</label>
            {SECTIONS.map((section) => (
              <div key={section.base} className="space-y-2 border-b pb-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${section.base}_view`}
                    checked={formData.permissions.includes(
                      `${section.base}_view` as Permission,
                    )}
                    onCheckedChange={(checked) =>
                      handleSectionPermissionChange(
                        section.base,
                        checked as boolean,
                      )
                    }
                  />
                  <label
                    htmlFor={`${section.base}_view`}
                    className="text-sm font-medium"
                  >
                    {section.name}
                  </label>
                </div>

                {formData.permissions.includes(
                  `${section.base}_view` as Permission,
                ) && (
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`${section.base}_edit`}
                        checked={formData.permissions.includes(
                          `${section.base}_edit` as Permission,
                        )}
                        onCheckedChange={(checked) =>
                          handleEditPermissionChange(
                            section.base,
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor={`${section.base}_edit`}
                        className="text-sm"
                      >
                        Editar {section.name}
                      </label>
                    </div>

                    {section.base === "projetos" && (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="projetos_create"
                          checked={formData.permissions.includes(
                            "projetos_create",
                          )}
                          onCheckedChange={(checked) =>
                            handleCreateProjectPermissionChange(
                              checked as boolean,
                            )
                          }
                        />
                        <label htmlFor="projetos_create" className="text-sm">
                          Criar Projetos
                        </label>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full">
            {editingUser ? "Salvar Alterações" : "Criar Usuário"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewUserDialog;
