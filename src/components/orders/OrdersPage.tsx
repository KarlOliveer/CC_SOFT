"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NewOrderDialog from "./NewOrderDialog";
import { motion } from "framer-motion";

interface Order {
  id: string;
  userId: string;
  description: string;
  materials: Array<{ name: string; quantity: string }>;
  status: string;
  date: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleNewOrder = (orderData: Omit<Order, "id">) => {
    const newOrder = {
      id: Math.random().toString(36).slice(2, 9),
      ...orderData,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pedidos</h1>
          <p className="text-gray-500">Gerencie os pedidos de materiais</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Pedido
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    Pedido de {order.userId}
                  </h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {order.description}
                </p>
                {order.materials.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                      Materiais Solicitados:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {order.materials.map((material, index) => (
                        <li key={index}>
                          {material.name} - {material.quantity} unidade(s)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(order.date).toLocaleDateString()}
              </div>
            </div>
          </motion.div>
        ))}

        {orders.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Nenhum pedido encontrado
          </div>
        )}
      </div>

      <NewOrderDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleNewOrder}
      />
    </div>
  );
};

export default OrdersPage;
