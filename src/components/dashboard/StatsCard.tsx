import React from "react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

const StatsCard = ({ icon, title, value }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800 flex flex-col items-center justify-center text-center">
      <div className="text-blue-500 mb-2">{icon}</div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-gray-500 dark:text-gray-400">{title}</div>
    </Card>
  );
};

export default StatsCard;
