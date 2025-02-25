import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
<<<<<<< HEAD
=======

import logo from "@/assets/mcm_logo.png";
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)

import logo from "@/assets/mcm_logo.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State for the error dialog
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

<<<<<<< HEAD
  useEffect(() => {
    // Ensure admin user exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (!users.some((u: any) => u.username === "admin.admin")) {
      users.push({
        username: "admin.admin",
        password: "admingenerico",
        role: "Gestão",
        permissions: [
          "projetos_view",
          "projetos_create",
          "projetos_edit",
          "materiais_view",
          "materiais_edit",
          "testes_view",
          "testes_edit",
          "pedidos_view",
          "pedidos_edit",
          "entregas_view",
          "entregas_edit",
          "checklists_view",
          "checklists_edit",
          "usuarios_view",
          "usuarios_edit",
        ],
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

=======
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
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
<<<<<<< HEAD
      setErrorMessage(
        `O usuário "${formData.username}" não existe no sistema.`,
      );
=======
      setErrorMessage(`O usuário "${formData.username}" não existe no sistema.`);
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
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
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", user.username);
    navigate("/");
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
                  setFormData({ ...formData, username: e.target.value })
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
      </Card>

      {/* Error Dialog */}
      <Dialog open={errorDialogOpen} onOpenChange={setErrorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Erro ao fazer login</DialogTitle>
          </DialogHeader>
          <p>{errorMessage}</p>
          <DialogFooter>
<<<<<<< HEAD
            <Button
              variant="secondary"
              onClick={() => setErrorDialogOpen(false)}
            >
=======
            <Button variant="secondary" onClick={() => setErrorDialogOpen(false)}>
>>>>>>> 22764d5 (Atualização do projeto - ajustes e novos arquivos)
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
