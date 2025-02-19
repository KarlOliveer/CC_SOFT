import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import Sidebar from "@/components/layout/Sidebar";

interface HomeProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  onExport?: (format: "pdf" | "csv") => void;
  onProjectClick?: (id: string) => void;
  onInventoryClick?: (id: string) => void;
}

const Home = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onExport = () => {},
  onProjectClick = () => {},
  onInventoryClick = () => {},
}: HomeProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <DashboardGrid
      onProjectClick={onProjectClick}
      onInventoryClick={onInventoryClick}
    />
  );
};

export default Home;
