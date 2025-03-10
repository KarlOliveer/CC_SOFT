"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Plus,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Package,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
} from "lucide-react";
import MaterialForm from "./MaterialForm";
import MaterialList from "./MaterialList";
import ConsumptionDialog from "./ConsumptionDialog";
import AddQuantityDialog from "./AddQuantityDialog";
import { Material, Consumption, MaterialTransaction } from "./types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";

const MaterialsPage = () => {
  const [materials, setMaterials] = React.useState<Material[]>([]);
  const [transactions, setTransactions] = React.useState<MaterialTransaction[]>(
    [],
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isConsumeDialogOpen, setIsConsumeDialogOpen] = React.useState(false);
  const [isAddQuantityDialogOpen, setIsAddQuantityDialogOpen] =
    React.useState(false);
  const [selectedMaterial, setSelectedMaterial] =
    React.useState<Material | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("inventory");
  const [categoryFilter, setCategoryFilter] = React.useState<string | null>(
    null,
  );
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);
  const [isTransactionHistoryOpen, setIsTransactionHistoryOpen] =
    React.useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<MaterialTransaction | null>(null);
  const [dateRange, setDateRange] = React.useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });
  const [isImportExportOpen, setIsImportExportOpen] = React.useState(false);
  const [exportFormat, setExportFormat] = React.useState("csv");
  const [importData, setImportData] = React.useState("");
  const [isReportOpen, setIsReportOpen] = React.useState(false);
  const username = localStorage.getItem("user");

  // Load materials and transactions from localStorage
  const loadData = () => {
    try {
      const storedMaterials = localStorage.getItem("materials");
      const storedTransactions = localStorage.getItem("materialTransactions");

      if (storedMaterials) {
        const parsedMaterials = JSON.parse(storedMaterials);
        setMaterials(parsedMaterials);
      }

      if (storedTransactions) {
        const parsedTransactions = JSON.parse(storedTransactions);
        setTransactions(parsedTransactions);
      } else {
        // Initialize transactions if none exist
        setTransactions([]);
        localStorage.setItem("materialTransactions", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save materials to localStorage
  const saveMaterials = (updatedMaterials: Material[]) => {
    try {
      // Update lastUpdated timestamp
      const materialsWithTimestamp = updatedMaterials.map((mat) => ({
        ...mat,
        lastUpdated: new Date().toISOString(),
      }));

      localStorage.setItem("materials", JSON.stringify(materialsWithTimestamp));
      setMaterials(materialsWithTimestamp);
    } catch (error) {
      console.error("Error saving materials:", error);
    }
  };

  // Save transactions to localStorage
  const saveTransactions = (updatedTransactions: MaterialTransaction[]) => {
    try {
      localStorage.setItem(
        "materialTransactions",
        JSON.stringify(updatedTransactions),
      );
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error saving transactions:", error);
    }
  };

  // Load on mount and when tab becomes visible
  React.useEffect(() => {
    loadData();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadData();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Listen for order events
  React.useEffect(() => {
    const handleOrderCreated = (event: CustomEvent) => {
      const { order } = event.detail;
      if (order && order.materials && order.materials.length > 0) {
        // Process each material in the order
        order.materials.forEach(
          (orderMaterial: { name: string; quantity: string }) => {
            // Find the material in inventory
            const material = materials.find(
              (m) => m.name.toLowerCase() === orderMaterial.name.toLowerCase(),
            );
            if (material) {
              // Create consumption transaction
              const quantity = parseInt(orderMaterial.quantity);
              if (!isNaN(quantity) && quantity > 0) {
                handleConsumeMaterial(
                  material.id,
                  quantity,
                  `Pedido: ${order.id}`,
                  order.id,
                  order.userId,
                );
              }
            }
          },
        );
      }
    };

    // Create a custom event listener
    window.addEventListener(
      "orderCreated",
      handleOrderCreated as EventListener,
    );

    return () => {
      window.removeEventListener(
        "orderCreated",
        handleOrderCreated as EventListener,
      );
    };
  }, [materials]);

  // Filter materials
  const filteredMaterials = React.useMemo(() => {
    return materials.filter((mat) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        mat.name.toLowerCase().includes(lowerSearch) ||
        mat.supplier.toLowerCase().includes(lowerSearch) ||
        (mat.category && mat.category.toLowerCase().includes(lowerSearch)) ||
        (mat.location && mat.location.toLowerCase().includes(lowerSearch));

      const matchesCategory =
        !categoryFilter || mat.category === categoryFilter;

      const matchesStatus =
        !statusFilter ||
        (statusFilter === "low"
          ? mat.currentQuantity <= mat.minQuantity
          : statusFilter === "normal"
            ? mat.currentQuantity > mat.minQuantity &&
              mat.currentQuantity < mat.maxQuantity
            : statusFilter === "high"
              ? mat.currentQuantity >= mat.maxQuantity
              : true);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [materials, searchTerm, categoryFilter, statusFilter]);

  // Get unique categories
  const categories = React.useMemo(() => {
    const uniqueCategories = new Set<string>();
    materials.forEach((mat) => {
      if (mat.category) uniqueCategories.add(mat.category);
    });
    return Array.from(uniqueCategories);
  }, [materials]);

  // Filter transactions
  const filteredTransactions = React.useMemo(() => {
    return transactions
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const startDate = dateRange.start ? new Date(dateRange.start) : null;
        const endDate = dateRange.end ? new Date(dateRange.end) : null;

        const matchesDateRange =
          (!startDate || transactionDate >= startDate) &&
          (!endDate || transactionDate <= endDate);

        return matchesDateRange;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [transactions, dateRange]);

  // Handle material consumption
  const handleConsumeMaterial = (
    materialId: string,
    quantity: number,
    reason: string,
    orderId?: string,
    userId?: string,
  ) => {
    // Update material quantity
    const updatedMaterials = materials.map((mat) => {
      if (mat.id === materialId) {
        return {
          ...mat,
          currentQuantity: Math.max(0, mat.currentQuantity - quantity),
        };
      }
      return mat;
    });
    saveMaterials(updatedMaterials);

    // Record transaction
    const material = materials.find((m) => m.id === materialId);
    if (material) {
      const newTransaction: MaterialTransaction = {
        id: Math.random().toString(36).slice(2, 9),
        materialId,
        materialName: material.name,
        type: "consumption",
        quantity,
        date: new Date().toISOString(),
        reason,
        userId: userId || username || undefined,
        orderId,
      };

      const updatedTransactions = [...transactions, newTransaction];
      saveTransactions(updatedTransactions);
    }

    setIsConsumeDialogOpen(false);
    setSelectedMaterial(null);
  };

  // Handle adding quantity
  const handleAddQuantity = (
    materialId: string,
    quantity: number,
    supplier: string,
    sameSupplier: boolean,
    newPrimarySupplier?: string,
  ) => {
    // Update material
    const updatedMaterials = materials.map((mat) => {
      if (mat.id === materialId) {
        const updatedSuppliers = sameSupplier
          ? mat.suppliers || [mat.supplier]
          : [...(mat.suppliers || [mat.supplier]), supplier];
        return {
          ...mat,
          currentQuantity: mat.currentQuantity + quantity,
          supplier: newPrimarySupplier || mat.supplier,
          suppliers: updatedSuppliers,
        };
      }
      return mat;
    });
    saveMaterials(updatedMaterials);

    // Record transaction
    const material = materials.find((m) => m.id === materialId);
    if (material) {
      const newTransaction: MaterialTransaction = {
        id: Math.random().toString(36).slice(2, 9),
        materialId,
        materialName: material.name,
        type: "addition",
        quantity,
        date: new Date().toISOString(),
        supplier: sameSupplier ? material.supplier : supplier,
        userId: username || undefined,
      };

      const updatedTransactions = [...transactions, newTransaction];
      saveTransactions(updatedTransactions);
    }

    setIsAddQuantityDialogOpen(false);
    setSelectedMaterial(null);
  };

  // Export inventory data
  const handleExport = () => {
    try {
      let content = "";
      let filename = "";

      if (exportFormat === "csv") {
        // Create CSV content
        const headers = [
          "ID",
          "Nome",
          "Fornecedor",
          "Categoria",
          "Localização",
          "Quantidade Mínima",
          "Quantidade Máxima",
          "Quantidade Atual",
          "Unidade",
          "Custo",
          "Data de Recepção",
        ];
        content = headers.join(",") + "\n";

        materials.forEach((mat) => {
          const row = [
            mat.id,
            `"${mat.name}"`,
            `"${mat.supplier}"`,
            `"${mat.category || ""}"`,
            `"${mat.location || ""}"`,
            mat.minQuantity,
            mat.maxQuantity,
            mat.currentQuantity,
            `"${mat.unit || ""}"`,
            mat.cost || "",
            mat.receptionDate,
          ];
          content += row.join(",") + "\n";
        });

        filename = `inventario_${new Date().toISOString().split("T")[0]}.csv`;
      } else if (exportFormat === "json") {
        // Create JSON content
        content = JSON.stringify(materials, null, 2);
        filename = `inventario_${new Date().toISOString().split("T")[0]}.json`;
      }

      // Create download link
      const blob = new Blob([content], {
        type:
          exportFormat === "csv"
            ? "text/csv;charset=utf-8"
            : "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsImportExportOpen(false);
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  // Import inventory data
  const handleImport = () => {
    try {
      if (!importData) return;

      let newMaterials: Material[] = [];

      if (importData.trim().startsWith("[")) {
        // Parse as JSON
        newMaterials = JSON.parse(importData);
      } else {
        // Parse as CSV
        const lines = importData.split("\n");
        const headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {
          if (!lines[i].trim()) continue;

          const values = lines[i].split(",");
          const material: any = {};

          headers.forEach((header, index) => {
            let value = values[index];
            if (value) {
              // Remove quotes if present
              if (value.startsWith('"') && value.endsWith('"')) {
                value = value.substring(1, value.length - 1);
              }

              // Convert numeric values
              if (
                [
                  "minQuantity",
                  "maxQuantity",
                  "currentQuantity",
                  "cost",
                ].includes(header)
              ) {
                material[header] = parseFloat(value);
              } else {
                material[header] = value;
              }
            }
          });

          // Ensure required fields
          if (material.name && !material.id) {
            material.id = Math.random().toString(36).slice(2, 9);
          }

          if (material.name) {
            newMaterials.push(material as Material);
          }
        }
      }

      // Merge with existing materials or replace
      saveMaterials([...materials, ...newMaterials]);
      setIsImportExportOpen(false);
      setImportData("");
    } catch (error) {
      console.error("Error importing data:", error);
    }
  };

  // Generate inventory statistics
  const inventoryStats = React.useMemo(() => {
    const totalItems = materials.length;
    const totalValue = materials.reduce(
      (sum, mat) => sum + (mat.cost || 0) * mat.currentQuantity,
      0,
    );
    const lowStockItems = materials.filter(
      (mat) => mat.currentQuantity <= mat.minQuantity,
    ).length;
    const outOfStockItems = materials.filter(
      (mat) => mat.currentQuantity === 0,
    ).length;

    return {
      totalItems,
      totalValue,
      lowStockItems,
      outOfStockItems,
    };
  }, [materials]);

  // Generate chart data
  const chartData = React.useMemo(() => {
    // Category distribution
    const categoryData: Record<string, number> = {};
    materials.forEach((mat) => {
      const category = mat.category || "Sem categoria";
      categoryData[category] = (categoryData[category] || 0) + 1;
    });

    const categoryChartData = Object.entries(categoryData).map(
      ([label, value]) => ({ label, value }),
    );

    // Stock status
    const stockStatusData = [
      {
        label: "Baixo estoque",
        value: materials.filter((mat) => mat.currentQuantity <= mat.minQuantity)
          .length,
        color: "#ef4444",
      },
      {
        label: "Estoque normal",
        value: materials.filter(
          (mat) =>
            mat.currentQuantity > mat.minQuantity &&
            mat.currentQuantity < mat.maxQuantity,
        ).length,
        color: "#3b82f6",
      },
      {
        label: "Estoque alto",
        value: materials.filter((mat) => mat.currentQuantity >= mat.maxQuantity)
          .length,
        color: "#22c55e",
      },
    ];

    // Transaction history (last 7 days)
    const last7Days = new Array(7)
      .fill(0)
      .map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split("T")[0];
      })
      .reverse();

    const transactionsByDay: Record<
      string,
      { additions: number; consumptions: number }
    > = {};

    last7Days.forEach((day) => {
      transactionsByDay[day] = { additions: 0, consumptions: 0 };
    });

    transactions.forEach((transaction) => {
      const day = transaction.date.split("T")[0];
      if (last7Days.includes(day)) {
        if (transaction.type === "addition") {
          transactionsByDay[day].additions += transaction.quantity;
        } else {
          transactionsByDay[day].consumptions += transaction.quantity;
        }
      }
    });

    const transactionChartData = {
      labels: last7Days.map((day) => {
        const date = new Date(day);
        return `${date.getDate()}/${date.getMonth() + 1}`;
      }),
      additions: last7Days.map((day) => transactionsByDay[day].additions),
      consumptions: last7Days.map((day) => transactionsByDay[day].consumptions),
    };

    // Top materials by value
    const topMaterialsByValue = [...materials]
      .sort(
        (a, b) =>
          (b.cost || 0) * b.currentQuantity - (a.cost || 0) * a.currentQuantity,
      )
      .slice(0, 5)
      .map((mat) => ({
        label: mat.name,
        value: (mat.cost || 0) * mat.currentQuantity,
      }));

    return {
      categoryChartData,
      stockStatusData,
      transactionChartData,
      topMaterialsByValue,
    };
  }, [materials, transactions]);

  if (isLoading) {
    return <div className="p-8 text-center">Carregando materiais...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Gestão de Materiais</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sistema integrado de controle de estoque
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsImportExportOpen(true)}>
            <Upload className="h-4 w-4 mr-2" />
            Importar/Exportar
          </Button>
          <Button variant="outline" onClick={() => setIsReportOpen(true)}>
            <BarChart3 className="h-4 w-4 mr-2" />
            Relatórios
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setIsAddDialogOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Material
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="inventory" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Inventário
          </TabsTrigger>
          <TabsTrigger value="transactions" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Movimentações
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Análise
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Alertas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total de Itens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {inventoryStats.totalItems}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Valor Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  €{inventoryStats.totalValue.toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Baixo Estoque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {inventoryStats.lowStockItems}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Sem Estoque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {inventoryStats.outOfStockItems}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Pesquisar por nome, fornecedor, categoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <div className="flex gap-2">
                  <Select
                    value={categoryFilter || "all"}
                    onValueChange={(value) =>
                      setCategoryFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar por categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="all">Todos os status</SelectItem>
                      <SelectItem value="low">Baixo estoque</SelectItem>
                      <SelectItem value="normal">Estoque normal</SelectItem>
                      <SelectItem value="high">Estoque alto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="max-h-[500px] overflow-y-auto">
                <MaterialList
                  materials={filteredMaterials}
                  onConsume={(material) => {
                    setSelectedMaterial(material);
                    setIsConsumeDialogOpen(true);
                  }}
                  onAddQuantity={(material) => {
                    setSelectedMaterial(material);
                    setIsAddQuantityDialogOpen(true);
                  }}
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">
                Distribuição por Categoria
              </h3>
              <PieChart data={chartData.categoryChartData} height={250} />

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Status de Estoque</h3>
              <PieChart data={chartData.stockStatusData} height={250} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Histórico de Movimentações
              </h2>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <label className="text-sm">De:</label>
                  <Input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, start: e.target.value })
                    }
                    className="w-40"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-sm">Até:</label>
                  <Input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, end: e.target.value })
                    }
                    className="w-40"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Material
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Quantidade
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Usuário
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Detalhes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="p-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        Nenhuma transação encontrada
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="p-3 whitespace-nowrap">
                          {new Date(transaction.date).toLocaleString()}
                        </td>
                        <td className="p-3">{transaction.materialName}</td>
                        <td className="p-3">
                          {transaction.type === "addition" ? (
                            <Badge className="bg-green-100 text-green-800">
                              Entrada
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-800">
                              Saída
                            </Badge>
                          )}
                        </td>
                        <td className="p-3">
                          {transaction.type === "addition" ? (
                            <span className="text-green-600">
                              +{transaction.quantity}
                            </span>
                          ) : (
                            <span className="text-red-600">
                              -{transaction.quantity}
                            </span>
                          )}
                        </td>
                        <td className="p-3">
                          {transaction.userId
                            ? transaction.userId.includes(".")
                              ? transaction.userId
                                  .split(".")
                                  .map(
                                    (part) =>
                                      part.charAt(0).toUpperCase() +
                                      part.slice(1),
                                  )
                                  .join(" ")
                              : transaction.userId
                            : "Sistema"}
                        </td>
                        <td className="p-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedTransaction(transaction);
                              setIsTransactionHistoryOpen(true);
                            }}
                          >
                            Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Movimentações nos Últimos 7 Dias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <BarChart
                    data={[
                      ...chartData.transactionChartData.labels.map(
                        (label, i) => ({
                          label,
                          value: chartData.transactionChartData.additions[i],
                          color: "#22c55e",
                        }),
                      ),
                      ...chartData.transactionChartData.labels.map(
                        (label, i) => ({
                          label: `${label} (Saída)`,
                          value: chartData.transactionChartData.consumptions[i],
                          color: "#ef4444",
                        }),
                      ),
                    ]}
                    height={300}
                    title="Entradas (verde) vs Saídas (vermelho)"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top 5 Materiais por Valor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <BarChart data={chartData.topMaterialsByValue} height={300} />
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tendências de Estoque</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold">Materiais em Alta</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Materiais com maior entrada nos últimos 30 dias
                    </p>
                    <ul className="space-y-2">
                      {Object.entries(
                        transactions
                          .filter(
                            (t) =>
                              t.type === "addition" &&
                              new Date(t.date) >
                                new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                          )
                          .reduce((acc: Record<string, number>, t) => {
                            acc[t.materialId] =
                              (acc[t.materialId] || 0) + t.quantity;
                            return acc;
                          }, {}),
                      )
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 5)
                        .map(([materialId, quantity]) => {
                          const material = materials.find(
                            (m) => m.id === materialId,
                          );
                          return material ? (
                            <li
                              key={materialId}
                              className="flex justify-between items-center"
                            >
                              <span className="text-sm">{material.name}</span>
                              <Badge className="bg-green-100 text-green-800">
                                +{quantity}
                              </Badge>
                            </li>
                          ) : null;
                        })}
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold">Materiais em Baixa</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Materiais com maior saída nos últimos 30 dias
                    </p>
                    <ul className="space-y-2">
                      {Object.entries(
                        transactions
                          .filter(
                            (t) =>
                              t.type === "consumption" &&
                              new Date(t.date) >
                                new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                          )
                          .reduce((acc: Record<string, number>, t) => {
                            acc[t.materialId] =
                              (acc[t.materialId] || 0) + t.quantity;
                            return acc;
                          }, {}),
                      )
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 5)
                        .map(([materialId, quantity]) => {
                          const material = materials.find(
                            (m) => m.id === materialId,
                          );
                          return material ? (
                            <li
                              key={materialId}
                              className="flex justify-between items-center"
                            >
                              <span className="text-sm">{material.name}</span>
                              <Badge className="bg-red-100 text-red-800">
                                -{quantity}
                              </Badge>
                            </li>
                          ) : null;
                        })}
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold">Materiais Estáveis</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Materiais com estoque estável (sem movimentação)
                    </p>
                    <ul className="space-y-2">
                      {materials
                        .filter(
                          (m) =>
                            !transactions.some(
                              (t) =>
                                t.materialId === m.id &&
                                new Date(t.date) >
                                  new Date(
                                    Date.now() - 30 * 24 * 60 * 60 * 1000,
                                  ),
                            ),
                        )
                        .slice(0, 5)
                        .map((material) => (
                          <li
                            key={material.id}
                            className="flex justify-between items-center"
                          >
                            <span className="text-sm">{material.name}</span>
                            <Badge className="bg-blue-100 text-blue-800">
                              {material.currentQuantity}
                            </Badge>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="mt-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Alertas de Estoque</h2>

            <div className="space-y-6">
              {/* Low Stock Alerts */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Materiais com Estoque Baixo
                </h3>

                {materials.filter(
                  (m) =>
                    m.currentQuantity <= m.minQuantity && m.currentQuantity > 0,
                ).length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">
                    Não há materiais com estoque baixo.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {materials
                      .filter(
                        (m) =>
                          m.currentQuantity <= m.minQuantity &&
                          m.currentQuantity > 0,
                      )
                      .map((material) => (
                        <Card key={material.id}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">
                              {material.name}
                            </CardTitle>
                            <CardDescription>
                              {material.category || "Sem categoria"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Estoque atual:
                                </p>
                                <p className="text-lg font-semibold text-yellow-600">
                                  {material.currentQuantity}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Estoque mínimo:
                                </p>
                                <p className="text-lg font-semibold">
                                  {material.minQuantity}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => {
                                setSelectedMaterial(material);
                                setIsAddQuantityDialogOpen(true);
                              }}
                            >
                              Adicionar Estoque
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                )}
              </div>

              {/* Out of Stock Alerts */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Materiais Sem Estoque
                </h3>

                {materials.filter((m) => m.currentQuantity === 0).length ===
                0 ? (
                  <p className="text-gray-500 dark:text-gray-400">
                    Não há materiais sem estoque.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {materials
                      .filter((m) => m.currentQuantity === 0)
                      .map((material) => (
                        <Card key={material.id}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">
                              {material.name}
                            </CardTitle>
                            <CardDescription>
                              {material.category || "Sem categoria"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Estoque atual:
                                </p>
                                <p className="text-lg font-semibold text-red-600">
                                  0
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Estoque mínimo:
                                </p>
                                <p className="text-lg font-semibold">
                                  {material.minQuantity}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => {
                                setSelectedMaterial(material);
                                setIsAddQuantityDialogOpen(true);
                              }}
                            >
                              Adicionar Estoque
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialogs */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Material</DialogTitle>
          </DialogHeader>
          <MaterialForm
            onSubmit={(newMaterial) => {
              saveMaterials([...materials, newMaterial]);
              setIsAddDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      <ConsumptionDialog
        open={isConsumeDialogOpen}
        onOpenChange={setIsConsumeDialogOpen}
        material={selectedMaterial}
        onConsume={(materialId, quantity, reason) =>
          handleConsumeMaterial(materialId, quantity, reason)
        }
      />

      <AddQuantityDialog
        open={isAddQuantityDialogOpen}
        onOpenChange={setIsAddQuantityDialogOpen}
        material={selectedMaterial}
        onAddQuantity={handleAddQuantity}
      />

      {/* Transaction Details Dialog */}
      <Dialog
        open={isTransactionHistoryOpen}
        onOpenChange={setIsTransactionHistoryOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes da Transação</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Material
                  </h4>
                  <p>{selectedTransaction.materialName}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Data</h4>
                  <p>{new Date(selectedTransaction.date).toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Tipo</h4>
                  <p>
                    {selectedTransaction.type === "addition" ? (
                      <Badge className="bg-green-100 text-green-800">
                        Entrada
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Saída</Badge>
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Quantidade
                  </h4>
                  <p
                    className={
                      selectedTransaction.type === "addition"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {selectedTransaction.type === "addition" ? "+" : "-"}
                    {selectedTransaction.quantity}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Usuário</h4>
                  <p>
                    {selectedTransaction.userId
                      ? selectedTransaction.userId.includes(".")
                        ? selectedTransaction.userId
                            .split(".")
                            .map(
                              (part) =>
                                part.charAt(0).toUpperCase() + part.slice(1),
                            )
                            .join(" ")
                        : selectedTransaction.userId
                      : "Sistema"}
                  </p>
                </div>
                {selectedTransaction.supplier && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Fornecedor
                    </h4>
                    <p>{selectedTransaction.supplier}</p>
                  </div>
                )}
              </div>

              {selectedTransaction.reason && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Motivo</h4>
                  <p>{selectedTransaction.reason}</p>
                </div>
              )}

              {selectedTransaction.orderId && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Pedido Relacionado
                  </h4>
                  <p>{selectedTransaction.orderId}</p>
                </div>
              )}

              {selectedTransaction.projectId && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Projeto Relacionado
                  </h4>
                  <p>{selectedTransaction.projectId}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Import/Export Dialog */}
      <Dialog open={isImportExportOpen} onOpenChange={setIsImportExportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Importar/Exportar Inventário</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="export" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="export">Exportar</TabsTrigger>
              <TabsTrigger value="import">Importar</TabsTrigger>
            </TabsList>

            <TabsContent value="export" className="space-y-4 py-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Formato de Exportação</h3>
                <Select value={exportFormat} onValueChange={setExportFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleExport} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Exportar Inventário
              </Button>
            </TabsContent>

            <TabsContent value="import" className="space-y-4 py-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">
                  Dados para Importação (CSV ou JSON)
                </h3>
                <p className="text-xs text-gray-500">
                  Cole os dados no formato CSV ou JSON. Para CSV, a primeira
                  linha deve conter os cabeçalhos.
                </p>
                <Textarea
                  placeholder="Cole os dados aqui..."
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>

              <Button onClick={handleImport} className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Importar Dados
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Reports Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Relatório de Inventário</DialogTitle>
            <DialogDescription>
              Resumo completo do estado atual do inventário
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 py-4">
            {/* Summary Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Resumo do Inventário
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">
                      {inventoryStats.totalItems}
                    </div>
                    <p className="text-sm text-gray-500">Total de Itens</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">
                      €{inventoryStats.totalValue.toFixed(2)}
                    </div>
                    <p className="text-sm text-gray-500">Valor Total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-yellow-600">
                      {inventoryStats.lowStockItems}
                    </div>
                    <p className="text-sm text-gray-500">Baixo Estoque</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">
                      {inventoryStats.outOfStockItems}
                    </div>
                    <p className="text-sm text-gray-500">Sem Estoque</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Charts Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Análise de Dados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Distribuição por Categoria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={chartData.categoryChartData} height={200} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Status de Estoque
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={chartData.stockStatusData} height={200} />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Critical Items Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Itens Críticos</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Materiais Sem Estoque</h3>
                {materials.filter((m) => m.currentQuantity === 0).length ===
                0 ? (
                  <p className="text-gray-500">Não há materiais sem estoque.</p>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nome
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Categoria
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fornecedor
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estoque Mínimo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {materials
                        .filter((m) => m.currentQuantity === 0)
                        .map((material) => (
                          <tr key={material.id}>
                            <td className="p-2">{material.name}</td>
                            <td className="p-2">
                              {material.category || "N/A"}
                            </td>
                            <td className="p-2">{material.supplier}</td>
                            <td className="p-2">{material.minQuantity}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}

                <h3 className="text-lg font-medium mt-6">
                  Materiais com Estoque Baixo
                </h3>
                {materials.filter(
                  (m) =>
                    m.currentQuantity <= m.minQuantity && m.currentQuantity > 0,
                ).length === 0 ? (
                  <p className="text-gray-500">
                    Não há materiais com estoque baixo.
                  </p>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nome
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Categoria
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estoque Atual
                        </th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estoque Mínimo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {materials
                        .filter(
                          (m) =>
                            m.currentQuantity <= m.minQuantity &&
                            m.currentQuantity > 0,
                        )
                        .map((material) => (
                          <tr key={material.id}>
                            <td className="p-2">{material.name}</td>
                            <td className="p-2">
                              {material.category || "N/A"}
                            </td>
                            <td className="p-2 text-yellow-600">
                              {material.currentQuantity}
                            </td>
                            <td className="p-2">{material.minQuantity}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Transações Recentes
              </h2>
              {transactions.length === 0 ? (
                <p className="text-gray-500">Não há transações registradas.</p>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Material
                      </th>
                      <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantidade
                      </th>
                      <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuário
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transactions
                      .sort(
                        (a, b) =>
                          new Date(b.date).getTime() -
                          new Date(a.date).getTime(),
                      )
                      .slice(0, 10)
                      .map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="p-2">
                            {new Date(transaction.date).toLocaleDateString()}
                          </td>
                          <td className="p-2">{transaction.materialName}</td>
                          <td className="p-2">
                            {transaction.type === "addition" ? (
                              <Badge className="bg-green-100 text-green-800">
                                Entrada
                              </Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800">
                                Saída
                              </Badge>
                            )}
                          </td>
                          <td className="p-2">
                            {transaction.type === "addition" ? (
                              <span className="text-green-600">
                                +{transaction.quantity}
                              </span>
                            ) : (
                              <span className="text-red-600">
                                -{transaction.quantity}
                              </span>
                            )}
                          </td>
                          <td className="p-2">
                            {transaction.userId
                              ? transaction.userId.includes(".")
                                ? transaction.userId
                                    .split(".")
                                    .map(
                                      (part) =>
                                        part.charAt(0).toUpperCase() +
                                        part.slice(1),
                                    )
                                    .join(" ")
                                : transaction.userId
                              : "Sistema"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={() => {
                // Generate and download PDF report
                alert("Relatório em PDF seria gerado e baixado aqui.");
                setIsReportOpen(false);
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Baixar Relatório
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaterialsPage;
