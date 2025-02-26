export interface User {
    username: string;
    password: string;
    role: string;
    permissions: string[];
  }
  
  // Board type (from BoardsForm)
  export type BoardType =
    | "RIO"
    | "Master"
    | "Amplificador"
    | "Vibrador"
    | "Microsorter"
    | "Placa de volta"
    | "Localizador"
    | "Conversor VV"
    | "Conversor IV"
    | "Driver de LEDs"
    | "Placa LEDs WT"
    | "Placa LEDs IR";
  
  export interface Board {
    type: BoardType;
    quantity: string;
    codes: string[];
  }
  
  // HardwareSpecs type (from HardwareSpecsForm, updated and expanded)
  export interface HardwareSpecs {
    processor: string;
    ram: {
      model: string;
      quantity: string;
    };
    network: {
      networkCard: {
        ports: string;
        quantity: string;
      };
      switch: boolean;
    };
    calibrator: {
      mioBoard: {
        included: boolean;
        hasConditioning: boolean;
      };
      camera: {
        included: boolean;
        type: string;
        quantity: string;
        lens: {
          type: string;
          quantity: string;
        };
        cable: {
          type: string;
          quantity: string;
        };
      };
    };
    motherboard: string;
    storage: {
      model: string;
      quantity: string;
    };
    wifiAdapter: boolean;
    shentekBoard: {
      included: boolean;
      ports: string;
      hasConditioning: boolean;
    };
    securityPen: {
      included: boolean;
      code: string;
    };
    additionalComponents: Array<{
      name: string;
      quantity: string;
    }>;
  }
  
  // Component type (from ReplacedComponentsForm)
  export interface Component {
    name: string;
    quantity: string;
  }
  
  // Project type (from ProjectsPage, updated for report fields and forms)
  export interface Project {
    id: string;
    title: string;
    type: string; // e.g., "Calibradores", "PC", "Placa", "Outros"
    dueDate: string;
    serviceType: string; // e.g., "montagem", "reparacao"
    description: string;
    priority: "Alta" | "Média" | "Baixa";
    status: "Pendente" | "Em Andamento" | "Concluído";
    hardwareSpecs?: HardwareSpecs; // Hardware specifications from HardwareSpecsForm
    boards?: Board[]; // Boards from BoardsForm (array of Board objects)
    repairDetails?: {
      description: string;
      replacedComponents: Component[]; // Replaced components from ReplacedComponentsForm
    };
  }
  
  // Request type (from RequestsPage, unchanged)
  export interface Request {
    id: string;
    type: "Order" | "Test";
    requester: string; // Username of the requester
    recipient: string; // Username of the recipient
    description: string;
    linkedProjectId?: string; // Optional project link
    status: "Pending" | "Approved" | "Rejected";
    createdAt: string; // ISO date string
  }
  
  // Material type (from MaterialsPage, unchanged)
  export interface Material {
    id: string;
    name: string;
    supplier: string; // Primary supplier
    suppliers?: string[]; // Optional list of additional suppliers
    receptionDate: string;
    minQuantity: number;
    maxQuantity: number;
    currentQuantity: number;
    linkedProject?: string; // Optional project ID or name
    linkedOrder?: string; // Optional order ID or name
  }
  
  // Consumption type (from MaterialsPage, unchanged)
  export interface Consumption {
    materialId: string;
    quantity: number;
    reason: string;
    date: string; // ISO date string
  }

  export interface Test {
    id?: string; // Optional for unique identification
    type: string; // e.g., "Functionality", "Stress Test"
    observations: string;
    isSuccessful: boolean;
    additionalFields?: { [key: string]: string }; // For dynamic inputs
  }