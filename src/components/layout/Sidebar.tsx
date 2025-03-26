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
  User,
} from "lucide-react";
import UserProfileDialog from "@/components/profile/UserProfileDialog";

// Importa a imagem que está em src/assets/mcm_logo.png
import logo from "@/assets/mcm_logo.png";
import light_logo from "@/assets/mcm_logo_light.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Projetos", icon: FileText, href: "/projetos" },
  { label: "Materiais", icon: Package, href: "/materiais" },
  { label: "Testes", icon: TestTube, href: "/testes" },
  { label: "Pedidos", icon: MessageSquare, href: "/pedidos" },
  { label: "Usuários", icon: Users, href: "/usuarios" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");
  const isAdmin = username === "admin.admin";
  const [profileDialogOpen, setProfileDialogOpen] = React.useState(false);
  const [displayName, setDisplayName] = React.useState("");

  React.useEffect(() => {
    if (username) {
      // Se for o admin.admin, sempre exibir como "Administrador"
      if (username === "admin.admin") {
        setDisplayName("Administrador");
      } else {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u: any) => u.username === username);
        if (user && user.displayName) {
          setDisplayName(user.displayName);
        } else if (username) {
          // Format username as display name
          const formattedName = username
            .split(".")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");
          setDisplayName(formattedName);
        }
      }
    }
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 relative">
        {/* Logo para modo claro */}
        <img
          src={logo}
          alt="MCM Systems (light mode)"
          className="dark:hidden h-10 w-auto"
        />
        {/* Logo para modo escuro */}
        <img
          src={light_logo}
          alt="MCM Systems (dark mode)"
          className="hidden dark:block h-10 w-auto"
        />
      </div>

      {/* Título */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold">MCM Systems</h2>
      </div>

      {/* Navegação */}
      <nav className="flex-1">
        {navItems
          .filter((item) => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const currentUser = users.find((u: any) => u.username === username);

            // Map routes to required permissions
            const routePermissions: Record<string, string[]> = {
              "/projetos": ["projetos_view"],
              "/materiais": ["materiais_view"],
              "/testes": ["testes_view"],
              "/pedidos": ["pedidos_view"],
              "/entregas": ["entregas_view"],
              "/checklists": ["checklists_view"],
              "/usuarios": [
                "usuarios_view",
                "usuarios_edit",
                "usuarios_create",
              ],
            };

            // If user is admin, show all items
            if (isAdmin) return true;

            const requiredPermissions = routePermissions[item.href];
            if (requiredPermissions) {
              return requiredPermissions.some((permission) =>
                currentUser?.permissions?.includes(permission),
              );
            }

            return true;
          })
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

      {/* Secção de utilizador */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 p-2"
              onClick={() => setProfileDialogOpen(true)}
            >
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  {(() => {
                    const users = JSON.parse(
                      localStorage.getItem("users") || "[]",
                    );
                    const user = users.find(
                      (u: any) => u.username === username,
                    );
                    if (user?.profileImage) {
                      return (
                        <img
                          src={user.profileImage}
                          alt={displayName}
                          className="h-full w-full object-cover"
                        />
                      );
                    } else {
                      return (
                        <div className="flex h-full w-full items-center justify-center bg-blue-500 text-xs text-white">
                          {displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                      );
                    }
                  })()}
                </div>
                <span className="text-sm font-medium">{displayName}</span>
              </div>
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>

      {/* User Profile Dialog */}
      <UserProfileDialog
        open={profileDialogOpen}
        onOpenChange={setProfileDialogOpen}
      />
    </div>
  );
};

export default Sidebar;
