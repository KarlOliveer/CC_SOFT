import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check admin credentials
    if (
      formData.username === "admin.admin" &&
      formData.password === "admingenerico"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", formData.username);
      navigate("/");
      return;
    }

    // Check other users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.username === formData.username);

    if (user && user.password === formData.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", user.username);
      navigate("/");
    } else {
      toast({
        title: "Erro ao fazer login",
        description: "Usuário ou senha inválidos",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-[350px]">
        <CardHeader>
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
    </div>
  );
}
