
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
  }
  
  export interface Consumption {
    materialId: string;
    quantity: number;
    reason: string;
    date: string;
  }