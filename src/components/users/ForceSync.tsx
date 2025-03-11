import React from "react";
import { Button } from "@/components/ui/button";
import { syncLocalStorageWithSupabase } from "@/lib/supabase-client";
import { RefreshCw } from "lucide-react";

const ForceSync = () => {
  const [isSyncing, setIsSyncing] = React.useState(false);
  const [lastSync, setLastSync] = React.useState<Date | null>(null);

  const handleSync = async () => {
    try {
      setIsSyncing(true);
      await syncLocalStorageWithSupabase();
      setLastSync(new Date());
    } catch (error) {
      console.error("Erro ao forçar sincronização:", error);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Sincronização de Dados</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sincronize manualmente os dados com o servidor
          </p>
          {lastSync && (
            <p className="text-xs text-gray-400 mt-1">
              Última sincronização: {lastSync.toLocaleString()}
            </p>
          )}
        </div>
        <Button
          onClick={handleSync}
          disabled={isSyncing}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 ${isSyncing ? "animate-spin" : ""}`}
          />
          {isSyncing ? "Sincronizando..." : "Sincronizar Agora"}
        </Button>
      </div>
    </div>
  );
};

export default ForceSync;
