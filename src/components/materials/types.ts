export interface Material {
  id: string;
  name: string;
  supplier: string; // Primary supplier
  suppliers?: string[]; // Optional list of additional suppliers
  receptionDate: string;
  minQuantity: number;
  maxQuantity: number;
  currentQuantity: number;
  linkedProject?: string;
  linkedOrder?: string;
  category?: string;
  location?: string;
  unit?: string;
  cost?: number;
  barcode?: string;
  lastUpdated?: string;
  image?: string;
}

export interface Consumption {
  materialId: string;
  quantity: number;
  reason: string;
  date: string;
  userId?: string;
  projectId?: string;
  orderId?: string;
}

export interface MaterialTransaction {
  id: string;
  materialId: string;
  materialName: string;
  type: "addition" | "consumption";
  quantity: number;
  date: string;
  reason?: string;
  userId?: string;
  supplier?: string;
  projectId?: string;
  orderId?: string;
}

export type MaterialCategory =
  | "Eletrônicos"
  | "Componentes"
  | "Ferramentas"
  | "Cabos"
  | "Placas"
  | "Sensores"
  | "Outros";
