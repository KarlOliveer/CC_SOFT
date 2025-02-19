import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Package,
  TestTube,
  MessageSquare,
  Truck,
  ClipboardCheck,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Projetos", icon: FileText, href: "/projetos" },
  { label: "Materiais", icon: Package, href: "/materiais" },
  { label: "Testes", icon: TestTube, href: "/testes" },
  { label: "Pedidos", icon: MessageSquare, href: "/pedidos" },
  { label: "Entregas", icon: Truck, href: "/entregas" },
  { label: "Checklists", icon: ClipboardCheck, href: "/checklists" },
  { label: "Usuários", icon: Users, href: "/usuarios", adminOnly: true },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");
  const isAdmin = username === "admin.admin";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <img src="/mcm-logo.png" alt="MCM Systems" className="h-8" />
      </div>

      {/* Title */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold">Gerenciamento Técnico</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {navItems
          .filter((item) => !item.adminOnly || isAdmin)
          .map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
      </nav>

      {/* User section */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{username}</span>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
