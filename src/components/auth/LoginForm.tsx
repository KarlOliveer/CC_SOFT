import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import logo from "@/assets/mcm_logo.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State for dialogs
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [changePasswordDialogOpen, setChangePasswordDialogOpen] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  // State for forgot password
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotUsername, setForgotUsername] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  // State for setting email on first login
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check admin credentials
    if (formData.username === "admin.admin" && formData.password === "admin") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", formData.username);
      navigate("/");
      return;
    }

    // Check other users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.username === formData.username);

    // If user not found
    if (!user) {
      setErrorMessage(
        `O usuário "${formData.username}" não existe no sistema.`,
      );
      setErrorDialogOpen(true);
      return;
    }

    // If user found but password is incorrect
    if (user.password !== formData.password) {
      setErrorMessage("A senha digitada está incorreta.");
      setErrorDialogOpen(true);
      return;
    }

    // If user found and password matches
    if (user.passwordChanged === false) {
      // First login, prompt to change password
      setCurrentUser(user);
      setChangePasswordDialogOpen(true);
      return;
    }

    // If email not set, prompt to set email
    if (user.emailSet === false) {
      setCurrentUser(user);
      setEmailDialogOpen(true);
      return;
    }

    // Normal login
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", user.username);
    navigate("/");
  };

  const handleChangePassword = () => {
    // Validate new password
    if (newPassword.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
      return;
    }

    // Update user password in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: any) => {
      if (u.username === currentUser.username) {
        return { ...u, password: newPassword, passwordChanged: true };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // If email is not set, show email dialog next
    if (currentUser.emailSet === false) {
      setChangePasswordDialogOpen(false);
      setEmailDialogOpen(true);
    } else {
      // Otherwise complete login
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", currentUser.username);
      setChangePasswordDialogOpen(false);
      navigate("/");
    }
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

  const handleSetEmail = () => {
    // Validate email
    if (!validateEmail(newEmail)) {
      return;
    }

    // Update user email in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: any) => {
      if (u.username === currentUser.username) {
        return { ...u, email: newEmail, emailSet: true };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", currentUser.username);

    setEmailDialogOpen(false);
    navigate("/");
  };

  const handleForgotPassword = async () => {
    if (!forgotUsername) {
      setForgotPasswordError("Por favor, digite seu nome de usuário.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.username === forgotUsername);

    if (!user) {
      setForgotPasswordError(
        `O usuário "${forgotUsername}" não existe no sistema.`,
      );
      return;
    }

    if (!user.email) {
      setForgotPasswordError(`Este usuário não possui um e-mail cadastrado.`);
      return;
    }

    try {
      // In a real app with a backend, this would generate a token and send an email
      // For this demo, we'll simulate sending an email
      const resetToken = Math.random().toString(36).substring(2, 15);
      const resetLink = `${window.location.origin}/reset-password?token=${resetToken}&username=${forgotUsername}`;

      // Store the token in localStorage (in a real app, this would be stored in a database)
      const resetTokens = JSON.parse(
        localStorage.getItem("resetTokens") || "{}",
      );
      resetTokens[forgotUsername] = {
        token: resetToken,
        expires: new Date(Date.now() + 3600000).toISOString(), // 1 hour expiration
      };
      localStorage.setItem("resetTokens", JSON.stringify(resetTokens));

      // Import is inside the function to avoid circular dependencies
      const { sendPasswordResetEmail } = await import("@/lib/email");
      await sendPasswordResetEmail(user.email, forgotUsername, resetLink);

      setResetEmailSent(true);
      setForgotPasswordError("");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setForgotPasswordError(
        "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.",
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="MCM Systems Logo" className="h-12 w-auto" />
          </div>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="nome.sobrenome"
                value={formData.username}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    username: e.target.value.toLowerCase(),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            className="text-sm text-blue-600"
            onClick={() => setForgotPasswordOpen(true)}
          >
            Esqueci minha senha
          </Button>
        </CardFooter>
      </Card>

      {/* Error Dialog */}
      <Dialog open={errorDialogOpen} onOpenChange={setErrorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Erro ao fazer login</DialogTitle>
          </DialogHeader>
          <p>{errorMessage}</p>
          <DialogFooter>
            <Button
              variant="secondary"
              onClick={() => setErrorDialogOpen(false)}
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog
        open={changePasswordDialogOpen}
        onOpenChange={setChangePasswordDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alterar Senha</DialogTitle>
            <DialogDescription>
              Este é seu primeiro acesso. Por favor, defina uma nova senha.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nova Senha</label>
              <Input
                type="password"
                placeholder="Digite sua nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirmar Senha</label>
              <Input
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleChangePassword}>Salvar Nova Senha</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Set Email Dialog */}
      <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configurar E-mail</DialogTitle>
            <DialogDescription>
              Por favor, forneça seu endereço de e-mail para recuperação de
              senha.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            {emailError && <p className="text-sm text-red-500">{emailError}</p>}
          </div>
          <DialogFooter>
            <Button onClick={handleSetEmail}>Salvar E-mail</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Forgot Password Dialog */}
      <Dialog
        open={forgotPasswordOpen}
        onOpenChange={(open) => {
          setForgotPasswordOpen(open);
          if (!open) {
            setForgotUsername("");
            setResetEmailSent(false);
            setForgotPasswordError("");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recuperação de Senha</DialogTitle>
          </DialogHeader>

          {!resetEmailSent ? (
            <div className="space-y-4 py-4">
              <p className="text-sm text-gray-500">
                Digite seu nome de usuário para receber um e-mail de recuperação
                de senha.
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome de Usuário</label>
                <Input
                  placeholder="nome.sobrenome"
                  value={forgotUsername}
                  onChange={(e) =>
                    setForgotUsername(e.target.value.toLowerCase())
                  }
                />
              </div>
              {forgotPasswordError && (
                <p className="text-sm text-red-500">{forgotPasswordError}</p>
              )}
              <DialogFooter>
                <Button onClick={handleForgotPassword}>
                  Enviar E-mail de Recuperação
                </Button>
              </DialogFooter>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <p className="text-sm text-green-600">
                Um e-mail de recuperação foi enviado para o endereço associado a
                esta conta.
              </p>
              <p className="text-sm text-gray-500">
                Por favor, verifique sua caixa de entrada e siga as instruções
                para redefinir sua senha.
              </p>
              <DialogFooter>
                <Button onClick={() => setForgotPasswordOpen(false)}>
                  Fechar
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
