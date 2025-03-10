import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/auth";

interface UserProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UserProfileDialog = ({ open, onOpenChange }: UserProfileDialogProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (open) {
      loadUserData();
    } else {
      resetForm();
    }
  }, [open]);

  const loadUserData = () => {
    const username = localStorage.getItem("user");
    if (!username) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: User) => u.username === username);

    if (user) {
      setCurrentUser(user);
      setDisplayName(user.displayName || formatDisplayName(user.username));
      setEmail(user.email || "");
      setProfileImage(user.profileImage || "");
    }
  };

  const formatDisplayName = (username: string) => {
    return username
      .split(".")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setProfileImage("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setEmailError("");
    setSuccessMessage("");
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Por favor, insira um endereço de e-mail válido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSaveProfile = () => {
    if (!currentUser) return;

    // Validate email if changed
    if (email !== currentUser.email && !validateEmail(email)) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: User) => {
      if (u.username === currentUser.username) {
        return {
          ...u,
          displayName,
          email,
          profileImage,
          emailSet: true,
        };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setSuccessMessage("Perfil atualizado com sucesso!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleChangePassword = () => {
    if (!currentUser) return;

    // Validate current password
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: User) => u.username === currentUser.username);

    if (user.password !== currentPassword) {
      setPasswordError("Senha atual incorreta");
      return;
    }

    // Validate new password
    if (newPassword.length < 6) {
      setPasswordError("A nova senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }

    // Update password
    const updatedUsers = users.map((u: User) => {
      if (u.username === currentUser.username) {
        return {
          ...u,
          password: newPassword,
        };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setSuccessMessage("Senha alterada com sucesso!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Meu Perfil</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4 py-4">
            <div className="flex flex-col items-center mb-6">
              <Avatar className="h-24 w-24 mb-4">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt={displayName} />
                ) : null}
                <AvatarFallback className="text-lg">
                  {getInitials(displayName || currentUser?.username || "")}
                </AvatarFallback>
              </Avatar>

              <div className="w-full">
                <label className="text-sm font-medium">Imagem de Perfil</label>
                <div className="mt-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          if (event.target?.result) {
                            setProfileImage(event.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Nome de Exibição</label>
                <Input
                  placeholder="Seu nome de exibição"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">E-mail</label>
                <Input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
                {emailError && (
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
                )}
              </div>

              <Button onClick={handleSaveProfile} className="w-full">
                Salvar Alterações
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-4 py-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Senha Atual</label>
                <Input
                  type="password"
                  placeholder="Digite sua senha atual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Nova Senha</label>
                <Input
                  type="password"
                  placeholder="Digite a nova senha"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Confirmar Nova Senha
                </label>
                <Input
                  type="password"
                  placeholder="Confirme a nova senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1"
                />
                {passwordError && (
                  <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                )}
              </div>

              <Button onClick={handleChangePassword} className="w-full">
                Alterar Senha
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
            {successMessage}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileDialog;
