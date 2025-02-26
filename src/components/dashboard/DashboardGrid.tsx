import React from "react";
import { motion } from "framer-motion";
import PendingSection from "./PendingSection";
import StatsCard from "./StatsCard";
import { Package, FileText, TestTube, MessageSquare } from "lucide-react";

interface DashboardGridProps {
  onProjectClick?: (id: string) => void;
  onInventoryClick?: (id: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const DashboardGrid = ({
  onProjectClick = () => {},
  onInventoryClick = () => {},
}: DashboardGridProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Bem-vindo ao seu painel de gerenciamento técnico
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <StatsCard
            icon={<FileText className="h-6 w-6" />}
            title="Projetos Ativos"
            value={12}
          />
          <StatsCard
            icon={<Package className="h-6 w-6" />}
            title="Itens com Baixo Estoque"
            value={3}
          />
          <StatsCard
            icon={<TestTube className="h-6 w-6" />}
            title="Testes Pendentes"
            value={5}
          />
          <StatsCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="Pedidos em Aberto"
            value={8}
          />
        </motion.div>

        {/* Pending Sections */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <PendingSection
            title="Projetos Pendentes"
            icon={<FileText className="h-5 w-5 text-gray-500" />}
            items={[
              {
                id: "1",
                title: "Calibrador A",
                date: "30/04/2024",
                status: "Pendente",
              },
              {
                id: "2",
                title: "Reparo PC-001",
                date: "15/05/2024",
                status: "Pendente",
              },
              {
                id: "3",
                title: "Manutenção Placa B",
                date: "22/05/2024",
                status: "Pendente",
              },
            ]}
          />
          <PendingSection
            title="Pedidos Pendentes"
            icon={<MessageSquare className="h-5 w-5 text-gray-500" />}
            items={[
              {
                id: "1",
                title: "Pedido #123",
                date: "28/04/2024",
                status: "Pendente",
              },
              {
                id: "2",
                title: "Pedido #124",
                date: "29/04/2024",
                status: "Pendente",
              },
              {
                id: "3",
                title: "Pedido #125",
                date: "30/04/2024",
                status: "Pendente",
              },
            ]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardGrid;
