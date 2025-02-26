"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Check, X } from "lucide-react";
import NewRequestDialog from "./NewRequestDialog";
import { Request, User } from "@/types/types";

// Initial fallback data for users
const INITIAL_USERS: User[] = [{ username: "user1" }, { username: "user2" }];

const RequestsPage: React.FC = () => {
  const [requests, setRequests] = React.useState<Request[]>([]);
  const [users, setUsers] = React.useState<User[]>(INITIAL_USERS);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null); // Add error state for debugging

  // Get or set current user in localStorage
  const currentUser = React.useMemo(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      const defaultUser = "Usuário desconhecido";
      localStorage.setItem("user", defaultUser);
      return defaultUser;
    }
    return storedUser;
  }, []);

  // Load data from localStorage on mount
  React.useEffect(() => {
    setIsLoading(true);
    try {
      const storedRequests = JSON.parse(localStorage.getItem("requests") || "[]");
      const storedUsers = JSON.parse(localStorage.getItem("users") || JSON.stringify(INITIAL_USERS));

      // Validate data
      if (!Array.isArray(storedRequests)) throw new Error("Invalid requests format");
      if (!Array.isArray(storedUsers) || !storedUsers.every((u: any) => u.username)) {
        throw new Error("Invalid users format");
      }

      setRequests(storedRequests);
      setUsers(storedUsers);
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      setError("Failed to load data. Using default values.");
      setRequests([]);
      setUsers(INITIAL_USERS);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save requests to localStorage when they change
  React.useEffect(() => {
    try {
      localStorage.setItem("requests", JSON.stringify(requests));
    } catch (error) {
      console.error("Error saving requests to localStorage:", error);
      setError("Failed to save requests.");
    }
  }, [requests]);

  const handleCreateRequest = (request: Request) => {
    setRequests((prev) => [...prev, request]);
  };

  const handleStatusChange = (requestId: string, status: "Approved" | "Rejected") => {
    setRequests((prev) =>
      prev.map((req) => (req.id === requestId ? { ...req, status } : req))
    );
  };

  const myRequests = requests.filter((req) => req.requester === currentUser);
  const requestsForMe = requests.filter((req) => req.recipient === currentUser);

  if (isLoading) {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600">
        {error}
        <Button onClick={() => window.location.reload()} className="mt-4">
          Recarregar
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pedidos</h1>
          <p className="text-gray-500 dark:text-gray-400">Gerir pedidos</p>
        </div>
        <Button
          className="bg-black text-white hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700"
          onClick={() => setIsDialogOpen(true)}
          disabled={isLoading}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Pedido
        </Button>
      </div>

      <Tabs defaultValue="my-requests" className="w-full">
        <TabsList>
          <TabsTrigger value="my-requests">Pedidos Enviados</TabsTrigger>
          <TabsTrigger value="requests-for-me">Pedidos Recebidos</TabsTrigger>
        </TabsList>

        <TabsContent value="my-requests" className="mt-4">
          <div className="space-y-4">
            {myRequests.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Nenhum pedido encontrado.</p>
            ) : (
              myRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{req.type} Request</h3>
                      <p className="text-sm text-gray-500">Para: {req.recipient}</p>
                      <p className="text-sm text-gray-500">{req.description}</p>
                      <p className="text-sm text-gray-500">Status: {req.status}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="requests-for-me" className="mt-4">
          <div className="space-y-4">
            {requestsForMe.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Nenhum pedido encontrado.</p>
            ) : (
              requestsForMe.map((req) => (
                <div
                  key={req.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{req.type} Request</h3>
                      <p className="text-sm text-gray-500">De: {req.requester}</p>
                      <p className="text-sm text-gray-500">{req.description}</p>
                      <p className="text-sm text-gray-500">Status: {req.status}</p>
                    </div>
                    {req.status === "Pending" && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStatusChange(req.id, "Approved")}
                          disabled={isLoading}
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Aprovar
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleStatusChange(req.id, "Rejected")}
                          disabled={isLoading}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Rejeitar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>

      <NewRequestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleCreateRequest}
        users={users}
        currentUser={currentUser}
      />
    </div>
  );
};

export default RequestsPage;