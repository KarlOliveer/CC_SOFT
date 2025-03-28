import React, { useEffect } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [useSystemTheme, setUseSystemTheme] = React.useState(false);

  // Carregar preferência de tema ao iniciar
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    
    if (darkModePreference === "system") {
      setUseSystemTheme(true);
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      // Adicionar listener para mudanças na preferência do sistema
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        if (useSystemTheme) {
          setIsDarkMode(e.matches);
          if (e.matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (darkModePreference === "false") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [useSystemTheme]);

  const handleThemeToggle = () => {
    // Se estiver usando tema do sistema, desativar
    if (useSystemTheme) {
      setUseSystemTheme(false);
    }
    
    const newThemeState = !isDarkMode;
    setIsDarkMode(newThemeState);
    
    if (newThemeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("darkMode", newThemeState.toString());
  };
  
  const handleSystemThemeToggle = () => {
    const newSystemThemeState = !useSystemTheme;
    setUseSystemTheme(newSystemThemeState);
    
    if (newSystemThemeState) {
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      localStorage.setItem("darkMode", "system");
    } else {
      // Se desativar o tema do sistema, manter o tema atual
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar 
        onThemeToggle={handleThemeToggle}
        onSystemThemeToggle={handleSystemThemeToggle}
        isDarkMode={isDarkMode}
        useSystemTheme={useSystemTheme}
      />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
