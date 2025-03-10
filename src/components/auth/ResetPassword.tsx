import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
} from "@/components/ui/dialog";

import logo from "@/assets/mcm_logo.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const tokenParam = params.get("token");
    const usernameParam = params.get("username");

    if (!tokenParam || !usernameParam) {
      setError("Link de redefinição de senha inválido.");
      return;
    }

    setToken(tokenParam);
    setUsername(usernameParam);

    // Validate token
    const resetTokens = JSON.parse(localStorage.getItem("resetTokens") || "{}");
    const userToken = resetTokens[usernameParam];

    if (!userToken || userToken.token !== tokenParam) {
      setError("Token de redefinição de senha inválido.");
      return;
    }

    // Check if token is expired
    const expiryDate = new Date(userToken.expires);
    if (expiryDate < new Date()) {
      setError(
        "O link de redefinição de senha expirou. Por favor, solicite um novo link.",
      );
      return;
    }

    setIsTokenValid(true);
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password
    if (newPassword.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      // Update user password
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.map((user: any) => {
        if (user.username === username) {
          return {
            ...user,
            password: newPassword,
            passwordChanged: true,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Remove used token
      const resetTokens = JSON.parse(
        localStorage.getItem("resetTokens") || "{}",
      );
      delete resetTokens[username];
      localStorage.setItem("resetTokens", JSON.stringify(resetTokens));

      setSuccess(true);
    } catch (error) {
      console.error("Error resetting password:", error);
      setError(
        "Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.",
      );
    }
  };

  const handleReturnToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-[400px]">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="MCM Systems Logo" className="h-12 w-auto" />
          </div>
          <CardTitle>Redefinir Senha</CardTitle>
        </CardHeader>

        <CardContent>
          {!isTokenValid ? (
            <div className="text-center py-4">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={handleReturnToLogin}>Voltar para o Login</Button>
            </div>
          ) : success ? (
            <div className="text-center py-4">
              <p className="text-green-500 mb-4">
                Senha redefinida com sucesso!
              </p>
              <Button onClick={handleReturnToLogin}>Ir para o Login</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="w-full">
                Redefinir Senha
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
