export interface User {
  username: string;
  role:
    | "Electrónica"
    | "Elétrica"
    | "Mecânica"
    | "Informática"
    | "Software"
    | "Gestão";
  permissions: Permission[];
}

export type Permission =
  | "projetos_view"
  | "projetos_create"
  | "projetos_edit"
  | "materiais_view"
  | "materiais_edit"
  | "testes_view"
  | "testes_edit"
  | "pedidos_view"
  | "pedidos_edit"
  | "entregas_view"
  | "entregas_edit"
  | "checklists_view"
  | "checklists_edit"
  | "usuarios_view"
  | "usuarios_edit";

export interface UserFormData {
  username: string;
  password: string;
  role: User["role"];
  permissions: Permission[];
}
