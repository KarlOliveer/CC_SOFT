export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      material_transactions: {
        Row: {
          date: string | null
          id: string
          material_id: string
          material_name: string | null
          order_id: string | null
          project_id: string | null
          quantity: number | null
          reason: string | null
          supplier: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          date?: string | null
          id?: string
          material_id: string
          material_name?: string | null
          order_id?: string | null
          project_id?: string | null
          quantity?: number | null
          reason?: string | null
          supplier?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          date?: string | null
          id?: string
          material_id?: string
          material_name?: string | null
          order_id?: string | null
          project_id?: string | null
          quantity?: number | null
          reason?: string | null
          supplier?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_material_id"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_id"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user_id"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      materials: {
        Row: {
          barcode: string | null
          category: string | null
          cost: number | null
          current_quantity: number | null
          id: string
          image: string | null
          last_updated: string | null
          linked_order: string | null
          linked_project: string | null
          location: string | null
          max_quantity: number | null
          min_quantity: number | null
          name: string
          reception_date: string | null
          supplier: string | null
          suppliers: string[] | null
          unit: string | null
        }
        Insert: {
          barcode?: string | null
          category?: string | null
          cost?: number | null
          current_quantity?: number | null
          id?: string
          image?: string | null
          last_updated?: string | null
          linked_order?: string | null
          linked_project?: string | null
          location?: string | null
          max_quantity?: number | null
          min_quantity?: number | null
          name: string
          reception_date?: string | null
          supplier?: string | null
          suppliers?: string[] | null
          unit?: string | null
        }
        Update: {
          barcode?: string | null
          category?: string | null
          cost?: number | null
          current_quantity?: number | null
          id?: string
          image?: string | null
          last_updated?: string | null
          linked_order?: string | null
          linked_project?: string | null
          location?: string | null
          max_quantity?: number | null
          min_quantity?: number | null
          name?: string
          reception_date?: string | null
          supplier?: string | null
          suppliers?: string[] | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_linked_project"
            columns: ["linked_project"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      order_folders: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          date: string | null
          description: string | null
          folder_id: string | null
          id: string
          materials: Json | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          date?: string | null
          description?: string | null
          folder_id?: string | null
          id?: string
          materials?: Json | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          date?: string | null
          description?: string | null
          folder_id?: string | null
          id?: string
          materials?: Json | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_folder_id"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "order_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user_id"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          boards: Json | null
          created_at: string | null
          description: string | null
          due_date: string | null
          hardware_specs: Json | null
          id: string
          priority: string | null
          repair_details: Json | null
          service_type: string | null
          status: string | null
          title: string
          type: string | null
        }
        Insert: {
          boards?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          hardware_specs?: Json | null
          id?: string
          priority?: string | null
          repair_details?: Json | null
          service_type?: string | null
          status?: string | null
          title: string
          type?: string | null
        }
        Update: {
          boards?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          hardware_specs?: Json | null
          id?: string
          priority?: string | null
          repair_details?: Json | null
          service_type?: string | null
          status?: string | null
          title?: string
          type?: string | null
        }
        Relationships: []
      }
      reset_tokens: {
        Row: {
          created_at: string | null
          expires: string
          id: string
          token: string
          username: string
        }
        Insert: {
          created_at?: string | null
          expires: string
          id?: string
          token: string
          username: string
        }
        Update: {
          created_at?: string | null
          expires?: string
          id?: string
          token?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_username"
            columns: ["username"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["username"]
          },
        ]
      }
      tests: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          equipment: string | null
          files: Json | null
          id: string
          steps: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          equipment?: string | null
          files?: Json | null
          id?: string
          steps?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          equipment?: string | null
          files?: Json | null
          id?: string
          steps?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          display_name: string | null
          email: string | null
          email_set: boolean | null
          id: string
          password: string
          password_changed: boolean | null
          permissions: string[] | null
          profile_image: string | null
          role: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          email_set?: boolean | null
          id?: string
          password: string
          password_changed?: boolean | null
          permissions?: string[] | null
          profile_image?: string | null
          role?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          email_set?: boolean | null
          id?: string
          password?: string
          password_changed?: boolean | null
          permissions?: string[] | null
          profile_image?: string | null
          role?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
