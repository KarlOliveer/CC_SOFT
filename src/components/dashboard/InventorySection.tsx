import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Package } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  lastUpdated: string;
}

interface InventorySectionProps {
  items?: InventoryItem[];
  onItemClick?: (id: string) => void;
}

const InventorySection = ({
  items = [
    {
      id: "1",
      name: "Component A",
      quantity: 15,
      threshold: 20,
      lastUpdated: "2024-03-20",
    },
    {
      id: "2",
      name: "Component B",
      quantity: 8,
      threshold: 10,
      lastUpdated: "2024-03-19",
    },
    {
      id: "3",
      name: "Component C",
      quantity: 25,
      threshold: 15,
      lastUpdated: "2024-03-18",
    },
  ],
  onItemClick = () => {},
}: InventorySectionProps) => {
  const getLowStockItems = () =>
    items.filter((item) => item.quantity < item.threshold);
  const getStockLevel = (quantity: number, threshold: number) =>
    (quantity / threshold) * 100;

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-gray-500" />
            <CardTitle>Inventory Management</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <CardDescription>
          Track inventory levels and stock alerts
        </CardDescription>
      </CardHeader>
      <CardContent>
        {getLowStockItems().length > 0 && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className="text-sm text-red-600 dark:text-red-400">
              {getLowStockItems().length} items below threshold
            </span>
          </div>
        )}

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => {
                const stockLevel = getStockLevel(item.quantity, item.threshold);
                return (
                  <TableRow key={item.id} onClick={() => onItemClick(item.id)}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <Progress value={stockLevel} className="h-2" />
                        <div className="text-xs text-gray-500">
                          {item.quantity} / {item.threshold} units
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {item.lastUpdated}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.quantity < item.threshold
                            ? "destructive"
                            : "default"
                        }
                      >
                        {item.quantity < item.threshold
                          ? "Low Stock"
                          : "In Stock"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventorySection;
