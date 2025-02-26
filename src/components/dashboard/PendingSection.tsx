import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Package, FileText } from "lucide-react";

interface PendingItem {
  id: string;
  title: string;
  date: string;
  status: string;
}

interface PendingSectionProps {
  title: string;
  icon: React.ReactNode;
  items: PendingItem[];
}

const PendingSection = ({ title, icon, items }: PendingSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {items.map((item) => (
              <div
                key={item.id}
                as={motion.div}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-sm font-medium text-yellow-500">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PendingSection;
