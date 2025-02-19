import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Search,
  Filter,
  Download,
  Sun,
  Moon,
  FileText,
  FileSpreadsheet,
  Package,
  TestTube,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";

interface DashboardHeaderProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  onExport?: (format: "pdf" | "csv") => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const DashboardHeader = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onExport = () => {},
  onThemeToggle = () => {},
  isDarkMode = false,
}: DashboardHeaderProps) => {
  return (
    <div className="w-full h-[72px] px-6 flex items-center justify-between bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search projects, inventory, tests..."
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onFilterChange("all")}>
              All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("projects")}>
              Projects
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("inventory")}>
              Inventory
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("tests")}>
              Tests
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onExport("pdf")}>
              <FileText className="h-4 w-4 mr-2" />
              Export as PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onExport("csv")}>
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={onThemeToggle}>
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default DashboardHeader;
