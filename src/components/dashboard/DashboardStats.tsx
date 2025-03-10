import React from "react";
import { useEffect, useState } from "react";

interface DashboardStats {
  activeProjects: number;
  lowStockItems: number;
  pendingTests: number;
  openOrders: number;
}

export const useDashboardStats = (): DashboardStats => {
  const [stats, setStats] = useState<DashboardStats>({
    activeProjects: 0,
    lowStockItems: 0,
    pendingTests: 0,
    openOrders: 0,
  });

  useEffect(() => {
    // Load data from localStorage
    const loadStats = () => {
      try {
        // Count active projects
        const activeProjects = JSON.parse(
          localStorage.getItem("activeProjects") || "[]",
        );
        const completedProjects = JSON.parse(
          localStorage.getItem("completedProjects") || "[]",
        );
        const projectsCount = activeProjects.length;

        // Count low stock items
        const materials = JSON.parse(localStorage.getItem("materials") || "[]");
        const lowStockCount = materials.filter((material: any) => {
          const range = material.maxQuantity - material.minQuantity;
          if (range <= 0) return false;
          const threshold = material.minQuantity + 0.1 * range;
          return material.currentQuantity < threshold;
        }).length;

        // Count pending tests
        const tests = JSON.parse(localStorage.getItem("tests") || "[]");
        // For now, we'll just count all tests as there's no status field
        const pendingTestsCount = tests.length;

        // Count open orders
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        const openOrdersCount = orders.filter(
          (order: any) => order.status !== "Concluído",
        ).length;

        setStats({
          activeProjects: projectsCount,
          lowStockItems: lowStockCount,
          pendingTests: pendingTestsCount,
          openOrders: openOrdersCount,
        });
      } catch (error) {
        console.error("Error loading dashboard stats:", error);
      }
    };

    // Load stats initially
    loadStats();

    // Set up event listener for storage changes
    const handleStorageChange = () => {
      loadStats();
    };

    // Also refresh when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadStats();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return stats;
};
