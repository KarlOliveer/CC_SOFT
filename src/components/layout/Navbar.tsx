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
  Search,
  Filter,
  Download,
  Sun,
  Moon,
  Settings,
} from "lucide-react";
import UserProfileDialog from "@/components/profile/UserProfileDialog";
import { Input } from "@/components/ui/input";
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
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// Importa a imagem que está em src/assets/mcm_logo.png
import logo from "@/assets/mcm_logo.png";
import light_logo from "@/assets/mcm_logo_light.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Projetos", icon: FileText, href: "/projetos" },
  { label: "Materiais", icon: Package, href: "/materiais" },
  { label: "Testes", icon: TestTube, href: "/testes" },
  { label: "Pedidos", icon: MessageSquare, href: "/pedidos" },
  { label: "Configurações", icon: Settings, href: "/configuracoes" },
  { label: "Usuários", icon: Users, href: "/usuarios" },
];

interface NavbarProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  onExport?: (format: "pdf" | "csv") => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const Navbar = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onExport = () => {},
  onThemeToggle = () => {},
  isDarkMode = false,
}: NavbarProps) => {
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
    <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          {/* Logo para modo claro */}
          <img
            src={logo}
            alt="MCM Systems (light mode)"
            className="dark:hidden h-8 w-auto"
          />
          {/* Logo para modo escuro */}
          <img
            src={light_logo}
            alt="MCM Systems (dark mode)"
            className="hidden dark:block h-8 w-auto"
          />
        </div>

        {/* Navegação */}
        <nav className="flex-1 mx-4">
          <NavigationMenu className="max-w-full w-full justify-center">
            <NavigationMenuList className="justify-center space-x-1">
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
                    currentUser?.permissions?.includes(permission)
                  );
                }

                return true;
              })
              .map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-700/30"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Actions section */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={onThemeToggle}>
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* User profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                {(() => {
                  const users = JSON.parse(
                    localStorage.getItem("users") || "[]"
                  );
                  const user = users.find(
                    (u: any) => u.username === username
                  );
                  if (user?.profileImage) {
                    return (
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={user.profileImage}
                          alt={displayName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="flex h-6 w-6 items-center justify-center bg-blue-500 text-xs text-white rounded-full">
                        {displayName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                    );
                  }
                })()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setProfileDialogOpen(true)}>
                Configuração
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

export default Navbar;