import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sun, Moon, Laptop } from "lucide-react";
import SavedProfiles from "./SavedProfiles";
import { User } from "../../types/auth";

// Logo da MCM Systems
import logo from "../../assets/mcm_logo.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [savedProfiles, setSavedProfiles] = useState<User[]>([]);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    return savedTheme || 'system';
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

  // Efeito para aplicar o tema
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Carregar perfis salvos do localStorage
  useEffect(() => {
    const savedProfilesData = localStorage.getItem("savedProfiles");
    if (savedProfilesData) {
      try {
        setSavedProfiles(JSON.parse(savedProfilesData));
      } catch (error) {
        console.error("Erro ao carregar perfis salvos:", error);
      }
    }
  }, []);

  // Função para selecionar um perfil salvo
  const handleSelectProfile = (username: string) => {
    // Verificar se existe uma senha salva para este usuário
    const savedPasswords = JSON.parse(localStorage.getItem("savedPasswords") || "{}");
    const savedPassword = savedPasswords[username] || "";
    
    setFormData({
      username,
      password: savedPassword,
    });
    setShowLoginForm(true);
  };

  // Função para adicionar uma nova conta
  const handleAddAccount = () => {
    setFormData({
      username: "",
      password: "",
    });
    setShowLoginForm(true);
  };

  // Função para remover um perfil salvo
  const handleRemoveProfile = (username: string) => {
    const updatedProfiles = savedProfiles.filter(
      (profile) => profile.username !== username
    );
    setSavedProfiles(updatedProfiles);
    localStorage.setItem("savedProfiles", JSON.stringify(updatedProfiles));
  };

  // Função para salvar o perfil do usuário após login bem-sucedido
  const saveUserProfile = (user: any) => {
    // Verificar se o perfil já existe na lista
    const existingProfileIndex = savedProfiles.findIndex(
      (profile) => profile.username === user.username
    );

    // Garantir que o nome de exibição esteja no formato "Nome Sobrenome"
    if (!user.displayName && user.username !== "admin.admin") {
      user.displayName = user.username
        .split(".")
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
    }
    
    // Garantir que admin.admin seja sempre exibido como "Administrador"
    if (user.username === "admin.admin") {
      user.displayName = "Administrador";
      
      // Adicionar imagem padrão para o administrador se não existir
      if (!user.profileImage) {
        // Usar uma imagem padrão para o administrador
        user.profileImage = "https://cdn-icons-png.flaticon.com/512/5556/5556512.png";
      }
    }

    let updatedProfiles = [...savedProfiles];
    
    if (existingProfileIndex >= 0) {
      // Atualizar perfil existente, preservando a imagem de perfil existente se não houver uma nova
      if (!user.profileImage && updatedProfiles[existingProfileIndex].profileImage) {
        user.profileImage = updatedProfiles[existingProfileIndex].profileImage;
      }
      updatedProfiles[existingProfileIndex] = user;
    } else {
      // Adicionar novo perfil (limitando a 3 perfis)
      updatedProfiles = [user, ...updatedProfiles.slice(0, 2)];
    }

    setSavedProfiles(updatedProfiles);
    localStorage.setItem("savedProfiles", JSON.stringify(updatedProfiles));
    
    // Também salvar no localStorage de usuários para garantir persistência
    if (user.username === "admin.admin") {
      const adminUser = {
        username: "admin.admin",
        displayName: "Administrador",
        profileImage: user.profileImage,
        role: "Gestão",
        permissions: []
      };
      
      // Atualizar o usuário admin no localStorage de usuários
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const adminIndex = users.findIndex((u: any) => u.username === "admin.admin");
      
      if (adminIndex >= 0) {
        users[adminIndex] = { ...users[adminIndex], profileImage: user.profileImage };
      } else {
        users.push(adminUser);
      }
      
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check admin credentials
    if (formData.username === "admin.admin" && formData.password === "admin") {
      const adminUser = {
        username: "admin.admin",
        displayName: "Administrador",
        role: "Gestão" as const,
        permissions: [],
      };
      
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", formData.username);
      saveUserProfile(adminUser);
      navigate("/");
      return;
    }

    // Check if the input is an email or username
    const isEmail = formData.username.includes("@");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    let user;
    
    if (isEmail) {
      // Try to find user by email
      user = users.find((u: any) => u.email === formData.username);
    } else {
      // Try to find user by username
      user = users.find((u: any) => u.username === formData.username);
    }

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
    saveUserProfile(user);
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
      
      // Salvar perfil do usuário
      const updatedUser = users.find((u: any) => u.username === currentUser.username);
      if (updatedUser) {
        saveUserProfile(updatedUser);
      }
      
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

    // Salvar perfil do usuário
    const updatedUser = updatedUsers.find((u: any) => u.username === currentUser.username);
    if (updatedUser) {
      saveUserProfile(updatedUser);
    }

    setEmailDialogOpen(false);
    navigate("/");
  };

  // Função para abrir o diálogo de recuperação de senha
  const handleOpenForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário
    setForgotPasswordOpen(true);
    setForgotUsername("");
    setResetEmailSent(false);
    setForgotPasswordError("");
    setErrorDialogOpen(false); // Prevent error dialog from appearing
  };

  // Função para processar a recuperação de senha
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
        const { sendPasswordResetEmail } = await import("../../lib/email");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Lado esquerdo - Logo e perfis */}
        <div className="w-full md:w-1/2 bg-blue-50 dark:bg-gray-700 p-8 flex flex-col items-center md:items-start relative">
          {/* Logo posicionado no canto superior esquerdo */}
          <div className="absolute top-4 left-4">
            <img 
              src={logo} 
              alt="MCM Systems" 
              className="h-16 w-auto" 
            />
          </div>
          
          {/* Seletor de tema no canto superior direito */}
          <div className="absolute top-4 right-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  {theme === 'light' && <Sun className="h-4 w-4" />}
                  {theme === 'dark' && <Moon className="h-4 w-4" />}
                  {theme === 'system' && <Laptop className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Claro</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Escuro</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>Sistema</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Espaço para garantir que os perfis não fiquem atrás do logo */}
          <div className="w-full h-16 mb-4"></div>
          
          {savedProfiles.length > 0 && (
            <div className="w-full">
              <SavedProfiles
                profiles={savedProfiles}
                onSelectProfile={handleSelectProfile}
                onRemoveProfile={handleRemoveProfile}
                onAddAccount={handleAddAccount}
              />
            </div>
          )}
        </div>
        
        {/* Lado direito - Formulário de login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-white">Acesso ao Sistema</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Email ou nome.sobrenome"
                value={formData.username}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    username: e.target.value.toLowerCase(),
                  })
                }
                className="h-12 text-base w-full"
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="h-12 text-base w-full"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember-password"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={(e) => {
                  if (e.target.checked && formData.username) {
                    // Salvar senha no localStorage
                    const savedPasswords = JSON.parse(localStorage.getItem("savedPasswords") || "{}");
                    savedPasswords[formData.username] = formData.password;
                    localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));
                  }
                }}
              />
              <label htmlFor="remember-password" className="text-sm text-gray-600 dark:text-gray-400">
                Lembrar senha
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700"
            >
              Entrar
            </Button>
            
            <div className="flex justify-center">
              <Button
                variant="link"
                className="text-sm text-blue-600"
                onClick={handleOpenForgotPassword}
                type="button"
              >
                Esqueceu a senha?
              </Button>
            </div>
          </form>
          
          <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
            Automação inteligente para resultados superiores.
          </p>
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
