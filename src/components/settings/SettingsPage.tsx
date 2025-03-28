import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  // Estado para as configurações
  const [notificationSettings, setNotificationSettings] = useState({
    lowStockAlerts: false,
    emailNotifications: false,
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    darkMode: false,
    compactMode: false,
    useSystemTheme: false,
  });

  const [systemSettings, setSystemSettings] = useState({
    autoBackup: false,
  });

  // Carregar configurações do localStorage ao iniciar
  useEffect(() => {
    // Carregar configurações de notificação
    const savedNotificationSettings = localStorage.getItem("notificationSettings");
    if (savedNotificationSettings) {
      setNotificationSettings(JSON.parse(savedNotificationSettings));
    }

    // Carregar configurações de aparência
    const savedAppearanceSettings = localStorage.getItem("appearanceSettings");
    if (savedAppearanceSettings) {
      setAppearanceSettings(JSON.parse(savedAppearanceSettings));
    } else {
      // Se não existir configuração salva, verificar o tema atual
      const darkModePreference = localStorage.getItem("darkMode");
      if (darkModePreference === "true") {
        setAppearanceSettings(prev => ({ ...prev, darkMode: true }));
      } else if (darkModePreference === "system") {
        setAppearanceSettings(prev => ({ 
          ...prev, 
          useSystemTheme: true,
          darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches
        }));
      }
    }

    // Carregar configurações do sistema
    const savedSystemSettings = localStorage.getItem("systemSettings");
    if (savedSystemSettings) {
      setSystemSettings(JSON.parse(savedSystemSettings));
    }
  }, []);

  // Atualizar configurações de notificação
  const handleNotificationChange = (key: keyof typeof notificationSettings) => {
    const newSettings = {
      ...notificationSettings,
      [key]: !notificationSettings[key],
    };
    setNotificationSettings(newSettings);
    localStorage.setItem("notificationSettings", JSON.stringify(newSettings));
  };

  // Atualizar configurações de aparência
  const handleAppearanceChange = (key: keyof typeof appearanceSettings) => {
    let newSettings = { ...appearanceSettings };
    
    if (key === "darkMode") {
      newSettings.darkMode = !appearanceSettings.darkMode;
      newSettings.useSystemTheme = false;
      
      // Atualizar o tema no documento
      if (newSettings.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    } 
    else if (key === "useSystemTheme") {
      newSettings.useSystemTheme = !appearanceSettings.useSystemTheme;
      
      if (newSettings.useSystemTheme) {
        // Verificar preferência do sistema
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        newSettings.darkMode = prefersDark;
        
        if (prefersDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        
        localStorage.setItem("darkMode", "system");
        
        // Adicionar listener para mudanças na preferência do sistema
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
          if (newSettings.useSystemTheme) {
            if (e.matches) {
              document.documentElement.classList.add("dark");
              setAppearanceSettings(prev => ({ ...prev, darkMode: true }));
            } else {
              document.documentElement.classList.remove("dark");
              setAppearanceSettings(prev => ({ ...prev, darkMode: false }));
            }
          }
        });
      } else {
        // Se desativar o tema do sistema, usar o tema escuro atual
        localStorage.setItem("darkMode", newSettings.darkMode.toString());
      }
    } 
    else if (key === "compactMode") {
      newSettings.compactMode = !appearanceSettings.compactMode;
      
      if (newSettings.compactMode) {
        document.documentElement.classList.add("compact");
      } else {
        document.documentElement.classList.remove("compact");
      }
    }
    
    setAppearanceSettings(newSettings);
    localStorage.setItem("appearanceSettings", JSON.stringify(newSettings));
  };

  // Atualizar configurações do sistema
  const handleSystemChange = (key: keyof typeof systemSettings) => {
    const newSettings = {
      ...systemSettings,
      [key]: !systemSettings[key],
    };
    setSystemSettings(newSettings);
    localStorage.setItem("systemSettings", JSON.stringify(newSettings));
  };

  // Limpar cache
  const handleClearCache = () => {
    // Limpar apenas os dados de cache, não as configurações
    localStorage.removeItem("projectsCache");
    localStorage.removeItem("materialsCache");
    localStorage.removeItem("testsCache");
    localStorage.removeItem("ordersCache");
    
    alert("Cache limpo com sucesso!");
  };

  // Exportar relatórios
  const handleExportReports = () => {
    alert("Funcionalidade de exportação de relatórios será implementada em breve.");
  };

  // Exportar histórico
  const handleExportHistory = () => {
    alert("Funcionalidade de exportação de histórico será implementada em breve.");
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notificações */}
        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie suas preferências de notificação
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="low-stock-alerts" className="flex flex-col space-y-1">
                <span>Alertas de Estoque Baixo</span>
              </Label>
              <Switch
                id="low-stock-alerts"
                checked={notificationSettings.lowStockAlerts}
                onCheckedChange={() => handleNotificationChange("lowStockAlerts")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                <span>Notificações por Email</span>
              </Label>
              <Switch
                id="email-notifications"
                checked={notificationSettings.emailNotifications}
                onCheckedChange={() => handleNotificationChange("emailNotifications")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Exportação de Dados */}
        <Card>
          <CardHeader>
            <CardTitle>Exportação de Dados</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Exporte seus dados do sistema
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleExportReports}
            >
              Exportar Relatórios
            </Button>
            
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleExportHistory}
            >
              Exportar Histórico
            </Button>
          </CardContent>
        </Card>

        {/* Aparência */}
        <Card>
          <CardHeader>
            <CardTitle>Aparência</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Personalize a aparência do sistema
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                <span>Modo Escuro</span>
              </Label>
              <Switch
                id="dark-mode"
                checked={appearanceSettings.darkMode}
                onCheckedChange={() => handleAppearanceChange("darkMode")}
                disabled={appearanceSettings.useSystemTheme}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="system-theme" className="flex flex-col space-y-1">
                <span>Usar Tema do Sistema</span>
              </Label>
              <Switch
                id="system-theme"
                checked={appearanceSettings.useSystemTheme}
                onCheckedChange={() => handleAppearanceChange("useSystemTheme")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="compact-mode" className="flex flex-col space-y-1">
                <span>Modo Compacto</span>
              </Label>
              <Switch
                id="compact-mode"
                checked={appearanceSettings.compactMode}
                onCheckedChange={() => handleAppearanceChange("compactMode")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Sistema */}
        <Card>
          <CardHeader>
            <CardTitle>Sistema</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Configurações do sistema
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-backup" className="flex flex-col space-y-1">
                <span>Backup Automático</span>
              </Label>
              <Switch
                id="auto-backup"
                checked={systemSettings.autoBackup}
                onCheckedChange={() => handleSystemChange("autoBackup")}
              />
            </div>
            
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleClearCache}
            >
              Limpar Cache
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;