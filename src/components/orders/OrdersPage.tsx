"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  FolderPlus,
  CheckCircle,
  Folder,
  X,
  Edit,
  MoreHorizontal,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import NewOrderDialog from "./NewOrderDialog";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";

// User Order Group Component
const UserOrderGroup = ({
  userId,
  userOrders,
  getFolderById,
  handleCompleteOrder,
  setOrderToMove,
  setIsMovingOrder,
  setOrderToDelete,
  getFolderColorClass,
}: {
  userId: string;
  userOrders: Order[];
  getFolderById: (id: string) => Folder | undefined;
  handleCompleteOrder: (id: string) => void;
  setOrderToMove: (id: string | null) => void;
  setIsMovingOrder: (isMoving: boolean) => void;
  setOrderToDelete: (id: string | null) => void;
  getFolderColorClass: (color: string) => string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Format user ID for display
  const displayName = userId.includes(".")
    ? userId
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : userId;

  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold border-b pb-2">
          Pedidos de {displayName} ({userOrders.length})
        </h3>
        <Button variant="ghost" size="sm">
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {userOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              folder={
                order.folderId ? getFolderById(order.folderId) : undefined
              }
              onComplete={handleCompleteOrder}
              onMove={(id) => {
                setOrderToMove(id);
                setIsMovingOrder(true);
              }}
              onDelete={setOrderToDelete}
              getFolderColorClass={getFolderColorClass}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Order Card Component
const OrderCard = ({
  order,
  folder,
  onComplete,
  onMove,
  onDelete,
  getFolderColorClass,
}: {
  order: Order;
  folder?: Folder;
  onComplete: (id: string) => void;
  onMove: (id: string) => void;
  onDelete: (id: string) => void;
  getFolderColorClass: (color: string) => string;
}) => {
  // Format user ID for display
  const displayName = order.userId.includes(".")
    ? order.userId
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : order.userId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all h-full flex flex-col"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-base font-semibold">{displayName}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === "Concluído" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
            >
              {order.status}
            </span>
            {folder && (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium border ${getFolderColorClass(folder.color || "blue")}`}
              >
                {folder.name}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {order.description}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {order.status !== "Concluído" && (
              <DropdownMenuItem onClick={() => onComplete(order.id)}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Marcar como Concluído
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => onMove(order.id)}>
              <Folder className="h-4 w-4 mr-2" />
              Mover para Pasta
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(order.id)}
              className="text-red-600"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Excluir Pedido
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {order.materials.length > 0 && (
        <div className="mt-auto pt-2">
          <h4 className="text-xs font-medium mb-1">Materiais:</h4>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {order.materials.slice(0, 2).map((material, index) => (
              <li key={index} className="truncate">
                {material.name} - {material.quantity}
              </li>
            ))}
            {order.materials.length > 2 && (
              <li className="text-xs text-gray-500">
                +{order.materials.length - 2} mais
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-2 text-right">
        {new Date(order.date).toLocaleDateString()}
      </div>
    </motion.div>
  );
};
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Order {
  id: string;
  userId: string;
  description: string;
  materials: Array<{ name: string; quantity: string }>;
  status: string;
  date: string;
  folderId?: string;
}

interface Folder {
  id: string;
  name: string;
  color: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [folders, setFolders] = React.useState<Folder[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isFolderDialogOpen, setIsFolderDialogOpen] = React.useState(false);
  const [newFolderName, setNewFolderName] = React.useState("");
  const [newFolderColor, setNewFolderColor] = React.useState("blue");
  const [activeFolder, setActiveFolder] = React.useState<string | null>(null);
  const [isMovingOrder, setIsMovingOrder] = React.useState(false);
  const [orderToMove, setOrderToMove] = React.useState<string | null>(null);
  const [orderToDelete, setOrderToDelete] = React.useState<string | null>(null);
  const [folderToDelete, setFolderToDelete] = React.useState<string | null>(
    null,
  );
  const [deleteOrdersWithFolder, setDeleteOrdersWithFolder] =
    React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);

  // Load orders and folders from localStorage
  React.useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    const storedFolders = localStorage.getItem("orderFolders");

    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }

    if (storedFolders) {
      setFolders(JSON.parse(storedFolders));
    }
  }, []);

  // Save orders to localStorage
  const saveOrders = (updatedOrders: Order[]) => {
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Save folders to localStorage
  const saveFolders = (updatedFolders: Folder[]) => {
    setFolders(updatedFolders);
    localStorage.setItem("orderFolders", JSON.stringify(updatedFolders));
  };

  // Handle creating a new order
  const handleNewOrder = (orderData: Omit<Order, "id">) => {
    const newOrder = {
      id: Math.random().toString(36).slice(2, 9),
      ...orderData,
      // Use the folder selected in the dialog, or the active folder if none was selected
      folderId:
        orderData.folderId === "none"
          ? null
          : orderData.folderId || activeFolder,
    };

    const updatedOrders = [...orders, newOrder];
    saveOrders(updatedOrders);
  };

  // Handle creating a new folder
  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;

    const newFolder: Folder = {
      id: Math.random().toString(36).slice(2, 9),
      name: newFolderName,
      color: newFolderColor,
    };

    const updatedFolders = [...folders, newFolder];
    saveFolders(updatedFolders);
    setNewFolderName("");
    setIsFolderDialogOpen(false);
  };

  // Handle marking an order as complete
  const handleCompleteOrder = (orderId: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Concluído" } : order,
    );
    saveOrders(updatedOrders);
  };

  // Handle moving an order to a folder
  const handleMoveOrder = (orderId: string, folderId: string | null) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, folderId } : order,
    );
    saveOrders(updatedOrders);
    setIsMovingOrder(false);
    setOrderToMove(null);
  };

  // Handle deleting an order
  const handleDeleteOrder = (orderId: string) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    saveOrders(updatedOrders);
    setOrderToDelete(null);
  };

  // Handle deleting a folder
  const handleDeleteFolder = (folderId: string, deleteOrders: boolean) => {
    // Remove folder
    const updatedFolders = folders.filter((folder) => folder.id !== folderId);
    saveFolders(updatedFolders);

    let updatedOrders;
    if (deleteOrders) {
      // Delete all orders in this folder
      updatedOrders = orders.filter((order) => order.folderId !== folderId);
    } else {
      // Move all orders from this folder to "no folder"
      updatedOrders = orders.map((order) =>
        order.folderId === folderId ? { ...order, folderId: null } : order,
      );
    }
    saveOrders(updatedOrders);

    // If we're currently viewing the folder being deleted, go back to all orders
    if (activeFolder === folderId) {
      setActiveFolder(null);
    }

    setFolderToDelete(null);
    setDeleteOrdersWithFolder(false);
  };

  // Group orders by user and create folders if needed
  const createUserFolders = () => {
    // Get unique users with multiple orders
    const userCounts = orders.reduce(
      (acc, order) => {
        acc[order.userId] = (acc[order.userId] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const usersWithMultipleOrders = Object.keys(userCounts).filter(
      (userId) => userCounts[userId] > 1,
    );

    // Create folders for users with multiple orders if they don't exist
    const newFolders: Folder[] = [];

    usersWithMultipleOrders.forEach((userId) => {
      // Check if user folder already exists
      const existingFolder = folders.find(
        (folder) => folder.name === `Pedidos de ${userId}`,
      );

      if (!existingFolder) {
        // Create new folder for this user
        const newFolder: Folder = {
          id: Math.random().toString(36).slice(2, 9),
          name: `Pedidos de ${userId}`,
          color: "blue", // Default color
        };
        newFolders.push(newFolder);

        // Move all orders from this user to the new folder
        orders.forEach((order) => {
          if (order.userId === userId) {
            order.folderId = newFolder.id;
          }
        });
      }
    });

    if (newFolders.length > 0) {
      // Save new folders and updated orders
      saveFolders([...folders, ...newFolders]);
      saveOrders([...orders]); // Orders were modified in-place
    }
  };

  // Filter orders based on active folder and status filter
  const filteredOrders = orders.filter((order) => {
    // Filter by folder
    const folderMatch =
      activeFolder === null ? true : order.folderId === activeFolder;

    // Filter by status
    const statusMatch =
      statusFilter === null ? true : order.status === statusFilter;

    return folderMatch && statusMatch;
  });

  // Group orders by user within the current folder view
  const getGroupedOrders = () => {
    // If no orders, return empty object
    if (filteredOrders.length === 0) return {};

    // Group orders by user
    const groupedByUser = filteredOrders.reduce(
      (acc, order) => {
        if (!acc[order.userId]) {
          acc[order.userId] = [];
        }
        acc[order.userId].push(order);
        return acc;
      },
      {} as Record<string, Order[]>,
    );

    // Only create groups for users with multiple orders
    const result: Record<string, Order[]> = {};

    Object.entries(groupedByUser).forEach(([userId, userOrders]) => {
      if (userOrders.length > 1) {
        // This user has multiple orders, create a group
        result[userId] = userOrders;
      } else {
        // Single order, add to "ungrouped"
        if (!result["ungrouped"]) {
          result["ungrouped"] = [];
        }
        result["ungrouped"].push(userOrders[0]);
      }
    });

    return result;
  };

  const groupedOrders = getGroupedOrders();

  // Get folder by ID
  const getFolderById = (folderId: string) => {
    return folders.find((folder) => folder.id === folderId);
  };

  // Get folder color class
  const getFolderColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      red: "bg-red-100 text-red-800 border-red-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pedidos</h1>
          <p className="text-gray-500">Gerencie os pedidos de materiais</p>
        </div>
        <div className="flex gap-2">
          <Select
            value={statusFilter || "all"}
            onValueChange={(value) =>
              setStatusFilter(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="Pendente">Pendentes</SelectItem>
              <SelectItem value="Concluído">Concluídos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => setIsFolderDialogOpen(true)}>
            <FolderPlus className="h-4 w-4 mr-2" />
            Nova Pasta
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Pedido
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Folders sidebar */}
        <div className="w-64 space-y-2">
          <div
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${activeFolder === null ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            onClick={() => setActiveFolder(null)}
          >
            <div className="flex items-center gap-2">
              <Folder className="h-4 w-4 text-gray-500" />
              <span>Todos os Pedidos</span>
            </div>
          </div>

          {folders.map((folder) => (
            <div
              key={folder.id}
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${activeFolder === folder.id ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
              onClick={() => setActiveFolder(folder.id)}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${getFolderColorClass(folder.color)}`}
                />
                <span>{folder.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500">
                  {
                    orders.filter((order) => order.folderId === folder.id)
                      .length
                  }
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFolderToDelete(folder.id);
                  }}
                >
                  <Trash2 className="h-3 w-3 text-gray-500 hover:text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Orders list */}
        <div className="flex-1">
          {Object.keys(groupedOrders).length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              Nenhum pedido encontrado
            </div>
          ) : (
            <div className="space-y-8">
              {/* Render ungrouped orders in a grid */}
              {groupedOrders["ungrouped"] &&
                groupedOrders["ungrouped"].length > 0 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                      {groupedOrders["ungrouped"].map((order) => (
                        <OrderCard
                          key={order.id}
                          order={order}
                          folder={
                            order.folderId
                              ? getFolderById(order.folderId)
                              : undefined
                          }
                          onComplete={handleCompleteOrder}
                          onMove={(id) => {
                            setOrderToMove(id);
                            setIsMovingOrder(true);
                          }}
                          onDelete={setOrderToDelete}
                          getFolderColorClass={getFolderColorClass}
                        />
                      ))}
                    </div>
                  </div>
                )}

              {/* Render user groups as collapsible sections */}
              {Object.entries(groupedOrders)
                .filter(([userId]) => userId !== "ungrouped")
                .map(([userId, userOrders]) => (
                  <UserOrderGroup
                    key={userId}
                    userId={userId}
                    userOrders={userOrders}
                    getFolderById={getFolderById}
                    handleCompleteOrder={handleCompleteOrder}
                    setOrderToMove={setOrderToMove}
                    setIsMovingOrder={setIsMovingOrder}
                    setOrderToDelete={setOrderToDelete}
                    getFolderColorClass={getFolderColorClass}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      {/* New Order Dialog */}
      <NewOrderDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleNewOrder}
        folders={folders}
      />

      {/* New Folder Dialog */}
      <Dialog open={isFolderDialogOpen} onOpenChange={setIsFolderDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Pasta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome da Pasta</label>
              <Input
                placeholder="Ex: Urgentes, Em Andamento, etc."
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Cor</label>
              <Select value={newFolderColor} onValueChange={setNewFolderColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma cor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Azul</SelectItem>
                  <SelectItem value="green">Verde</SelectItem>
                  <SelectItem value="red">Vermelho</SelectItem>
                  <SelectItem value="yellow">Amarelo</SelectItem>
                  <SelectItem value="purple">Roxo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsFolderDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={handleCreateFolder}>Criar Pasta</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Move Order Dialog */}
      <Dialog open={isMovingOrder} onOpenChange={setIsMovingOrder}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mover Pedido para Pasta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div
              className="p-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => handleMoveOrder(orderToMove || "", null)}
            >
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-gray-500" />
                <span>Sem pasta</span>
              </div>
            </div>
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="p-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => handleMoveOrder(orderToMove || "", folder.id)}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-3 w-3 rounded-full ${getFolderColorClass(folder.color)}`}
                  />
                  <span>{folder.name}</span>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Order Confirmation */}
      <AlertDialog
        open={!!orderToDelete}
        onOpenChange={(open) => !open && setOrderToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Pedido</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este pedido? Esta ação não pode ser
              desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => orderToDelete && handleDeleteOrder(orderToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Folder Confirmation */}
      <AlertDialog
        open={!!folderToDelete}
        onOpenChange={(open) => {
          if (!open) {
            setFolderToDelete(null);
            setDeleteOrdersWithFolder(false);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Pasta</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta pasta?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center space-x-2 py-4">
            <Checkbox
              id="delete-orders"
              checked={deleteOrdersWithFolder}
              onCheckedChange={(checked) =>
                setDeleteOrdersWithFolder(!!checked)
              }
            />
            <label
              htmlFor="delete-orders"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Excluir também todos os pedidos dentro desta pasta
            </label>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                folderToDelete &&
                handleDeleteFolder(folderToDelete, deleteOrdersWithFolder)
              }
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrdersPage;
