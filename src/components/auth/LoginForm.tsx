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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import logo from "@/assets/mcm_logo.png";
import light_logo from "@/assets/mcm_logo_light.png";

// Interface para o histórico de login
interface LoginHistoryItem {
  username: string;
  displayName: string;
  timestamp: number;
  profileImage?: string;
}

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
  
  // State for login history
  const [loginHistory, setLoginHistory] = useState<LoginHistoryItem[]>([]);
  
  // State for remember password
  const [rememberPassword, setRememberPassword] = useState(false);

  // Carregar histórico de login e credenciais salvas ao iniciar o componente
  useEffect(() => {
    const storedHistory = localStorage.getItem("loginHistory");
    if (storedHistory) {
      setLoginHistory(JSON.parse(storedHistory));
    }
    
    // Verificar se existem credenciais salvas para o último usuário logado
    const savedCredentialsMap = localStorage.getItem("savedCredentialsMap");
    if (savedCredentialsMap) {
      // Apenas definimos o estado de lembrar senha como true se houver credenciais salvas
      setRememberPassword(true);
      // Não preenchemos automaticamente os campos, isso será feito apenas ao clicar no usuário
    }
  }, []);

  // Função para adicionar um usuário ao histórico de login
  const addToLoginHistory = (username: string) => {
    // Sempre obter a lista mais atualizada de usuários
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.username === username);
    
    let displayName = username;
    if (username === "admin.admin") {
      displayName = "Administrador";
    } else if (user && user.displayName) {
      displayName = user.displayName;
    } else {
      // Format username as display name
      displayName = username
        .split(".")
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
    }
    
    const newHistoryItem: LoginHistoryItem = {
      username,
      displayName,
      timestamp: Date.now(),
      profileImage: user?.profileImage || "", // Garantir que a imagem de perfil seja incluída
    };
    
    // Obter histórico atual
    const currentHistory = JSON.parse(localStorage.getItem("loginHistory") || "[]");
    
    // Remover entrada duplicada se existir
    const filteredHistory = currentHistory.filter(
      (item: LoginHistoryItem) => item.username !== username
    );
    
    // Adicionar novo item no início
    const newHistory = [newHistoryItem, ...filteredHistory].slice(0, 3);
    
    // Salvar no localStorage
    localStorage.setItem("loginHistory", JSON.stringify(newHistory));
    setLoginHistory(newHistory);
  };

  // Função para selecionar um usuário do histórico
  const selectUserFromHistory = (username: string) => {
    setFormData({
      ...formData,
      username,
    });
  };

  // Função para preencher a senha ao clicar na foto do usuário
  const fillPasswordFromHistory = (username: string) => {
    // Verificar se existem credenciais salvas para este usuário específico
    const savedCredentialsMap = localStorage.getItem("savedCredentialsMap");
    if (savedCredentialsMap) {
      const credentialsMap = JSON.parse(savedCredentialsMap);
      if (credentialsMap[username]) {
        setFormData({
          username,
          password: credentialsMap[username]
        });
        return;
      }
    }
    
    // Se não houver credenciais salvas para este usuário, apenas preenche o nome de usuário
    setFormData({
      ...formData,
      username,
    });
  };

  // Função para remover um usuário do histórico
  const removeFromLoginHistory = (e: React.MouseEvent, username: string) => {
    e.stopPropagation(); // Impedir que o clique propague para o item do histórico
    
    // Obter histórico atual
    const currentHistory = JSON.parse(localStorage.getItem("loginHistory") || "[]");
    
    // Filtrar o usuário a ser removido
    const filteredHistory = currentHistory.filter(
      (item: LoginHistoryItem) => item.username !== username
    );
    
    // Salvar no localStorage
    localStorage.setItem("loginHistory", JSON.stringify(filteredHistory));
    setLoginHistory(filteredHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Salvar credenciais se a opção estiver marcada
    if (rememberPassword) {
      // Obter o mapa atual de credenciais ou criar um novo
      const savedCredentialsMap = JSON.parse(localStorage.getItem("savedCredentialsMap") || "{}");
      
      // Salvar a senha para este usuário específico
      savedCredentialsMap[formData.username] = formData.password;
      
      // Atualizar o localStorage
      localStorage.setItem("savedCredentialsMap", JSON.stringify(savedCredentialsMap));
    } else {
      // Se não quiser lembrar a senha, remover apenas a senha deste usuário específico
      const savedCredentialsMap = JSON.parse(localStorage.getItem("savedCredentialsMap") || "{}");
      if (savedCredentialsMap[formData.username]) {
        delete savedCredentialsMap[formData.username];
        localStorage.setItem("savedCredentialsMap", JSON.stringify(savedCredentialsMap));
      }
    }

    // Check admin credentials
    if (formData.username === "admin.admin" && formData.password === "admin") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", formData.username);
      
      // Garantir que a imagem de perfil seja preservada
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const adminUser = users.find((u: any) => u.username === "admin.admin");
      if (!adminUser) {
        // Se o admin não existir na lista de usuários, adicione-o
        users.push({
          username: "admin.admin",
          displayName: "Administrador",
          role: "Gestão",
          permissions: [],
          profileImage: "",
          password: "admin"
        });
        localStorage.setItem("users", JSON.stringify(users));
      } else if (adminUser && !adminUser.profileImage) {
        // Se o admin existir mas não tiver imagem de perfil, mantenha os dados existentes
        // mas não sobrescreva a imagem
      }
      
      addToLoginHistory(formData.username);
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
    addToLoginHistory(user.username);
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
      addToLoginHistory(currentUser.username);
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
    addToLoginHistory(currentUser.username);

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

      try {
        // Import is inside the function to avoid circular dependencies
        const { sendPasswordResetEmail } = await import("@/lib/email");
        console.log("Tentando enviar e-mail para:", user.email);
        const emailSent = await sendPasswordResetEmail(
          user.email,
          forgotUsername,
          resetLink,
        );

        if (!emailSent) {
          setForgotPasswordError(
            "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.",
          );
          return;
        }

        setResetEmailSent(true);
        setForgotPasswordError("");
      } catch (error) {
        console.error("Erro detalhado ao enviar e-mail:", error);
        setForgotPasswordError(
          "Erro ao conectar com o serviço de e-mail. Por favor, tente novamente.",
        );
        return;
      }
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setForgotPasswordError(
        "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.",
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Seção esquerda - Histórico de login */}
        <div className="w-1/3 bg-blue-600 dark:bg-blue-800 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-8">
              <img src={light_logo} alt="Crysor Tech Logo" className="h-20 w-auto" />
            </div>
            {loginHistory.length > 0 && (
              <div className="space-y-4">
                <p className="text-blue-100 text-sm mb-4">Logins recentes:</p>
                {loginHistory.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors relative group"
                  >
                    <div 
                      className="flex items-center space-x-3 flex-grow"
                      onClick={() => fillPasswordFromHistory(item.username)}
                    >
                      <Avatar className="h-10 w-10 border-2 border-white">
                        {item.profileImage ? (
                          <AvatarImage src={item.profileImage} alt={item.displayName} />
                        ) : (
                          <AvatarFallback className="bg-blue-400 text-white">
                            {item.displayName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">{item.displayName}</p>
                        <p className="text-blue-200 text-xs">{item.username}</p>
                      </div>
                    </div>
                    <button 
                      className="absolute right-2 top-2 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-800 transition-colors opacity-0 group-hover:opacity-100"
                      onClick={(e) => removeFromLoginHistory(e, item.username)}
                      title="Remover do histórico"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-auto">
            <p className="text-blue-100 text-sm font-semibold">© {new Date().getFullYear()} Crysor Tech</p>
          </div>
        </div>
        
        {/* Seção direita - Formulário de login */}
        <div className="w-2/3 p-8">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              {/* Título 'Login' removido conforme solicitado */}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome de usuário</label>
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
                <label className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberPassword} 
                  onCheckedChange={(checked) => setRememberPassword(checked === true)}
                />
                <label 
                  htmlFor="remember" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Lembrar senha
                </label>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Entrar
              </Button>
              
              <div className="flex flex-col items-center mt-4">
                <Button
                  variant="link"
                  className="text-sm text-blue-600"
                  onClick={() => setForgotPasswordOpen(true)}
                >
                  Esqueci minha senha
                </Button>
                <p className="text-sm text-gray-500 mt-2 italic">Automação inteligente para resultados superiores</p>
              </div>
            </form>
          </div>
        </div>
      </div>

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
