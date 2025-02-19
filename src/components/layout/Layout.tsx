import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader
          onThemeToggle={handleThemeToggle}
          isDarkMode={isDarkMode}
        />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
