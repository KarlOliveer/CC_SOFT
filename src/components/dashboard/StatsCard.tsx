import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

const StatsCard = ({ icon, title, value }: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 bg-white dark:bg-gray-800 flex flex-col items-center justify-center text-center">
        <div className="text-blue-500 mb-2">{icon}</div>
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-gray-500 dark:text-gray-400">{title}</div>
      </Card>
    </motion.div>
  );
};

export default StatsCard;
