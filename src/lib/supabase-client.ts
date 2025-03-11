import { createClient } from "@supabase/supabase-js";
import { Material, MaterialTransaction } from "@/components/materials/types";
import { User, Permission } from "@/types/auth";

// Inicializa o cliente Supabase com as credenciais fornecidas
export const supabase = createClient(
  "https://xgiijopdokhrfobqwdoz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnaWlqb3Bkb2tocmZvYnF3ZG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2OTUyMzUsImV4cCI6MjA1NzI3MTIzNX0.bUb91ik7Yb3QNBj3c2u-XA32vPlTYw8QDIu7n7bzXBs",
);

// Serviço para gerenciar usuários
export const userService = {
  // Obter todos os usuários
  getUsers: async (): Promise<User[]> => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar ou atualizar um usuário
  upsertUser: async (user: User): Promise<void> => {
    const { error } = await supabase
      .from("users")
      .upsert(user, { onConflict: "username" });
    if (error) throw error;
  },

  // Atualizar um usuário existente
  updateUser: async (
    username: string,
    userData: Partial<User>,
  ): Promise<void> => {
    const { error } = await supabase
      .from("users")
      .update(userData)
      .eq("username", username);
    if (error) throw error;
  },

  // Excluir um usuário
  deleteUser: async (username: string): Promise<void> => {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("username", username);
    if (error) throw error;
  },
};

// Serviço para gerenciar materiais
export const materialService = {
  // Obter todos os materiais
  getMaterials: async (): Promise<Material[]> => {
    const { data, error } = await supabase.from("materials").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar um novo material
  createMaterial: async (material: Material): Promise<void> => {
    const { error } = await supabase.from("materials").insert(material);
    if (error) throw error;
  },

  // Atualizar um material existente
  updateMaterial: async (id: string, material: Material): Promise<void> => {
    const { error } = await supabase
      .from("materials")
      .update(material)
      .eq("id", id);
    if (error) throw error;
  },

  // Excluir um material
  deleteMaterial: async (id: string): Promise<void> => {
    const { error } = await supabase.from("materials").delete().eq("id", id);
    if (error) throw error;
  },

  // Obter todas as transações de materiais
  getMaterialTransactions: async (): Promise<MaterialTransaction[]> => {
    const { data, error } = await supabase
      .from("material_transactions")
      .select("*");
    if (error) throw error;
    return data || [];
  },

  // Adicionar uma nova transação de material
  addMaterialTransaction: async (
    transaction: MaterialTransaction,
  ): Promise<void> => {
    const { error } = await supabase
      .from("material_transactions")
      .insert(transaction);
    if (error) throw error;
  },
};

// Serviço para gerenciar projetos
export const projectService = {
  // Obter todos os projetos
  getProjects: async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar um novo projeto
  createProject: async (project: any) => {
    const { error } = await supabase.from("projects").insert(project);
    if (error) throw error;
  },

  // Atualizar um projeto existente
  updateProject: async (id: string, project: any) => {
    const { error } = await supabase
      .from("projects")
      .update(project)
      .eq("id", id);
    if (error) throw error;
  },

  // Excluir um projeto
  deleteProject: async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) throw error;
  },
};

// Serviço para gerenciar pedidos
export const orderService = {
  // Obter todos os pedidos
  getOrders: async () => {
    const { data, error } = await supabase.from("orders").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar um novo pedido
  createOrder: async (order: any) => {
    const { error } = await supabase.from("orders").insert(order);
    if (error) throw error;
  },

  // Atualizar um pedido existente
  updateOrder: async (id: string, order: any) => {
    const { error } = await supabase.from("orders").update(order).eq("id", id);
    if (error) throw error;
  },

  // Excluir um pedido
  deleteOrder: async (id: string) => {
    const { error } = await supabase.from("orders").delete().eq("id", id);
    if (error) throw error;
  },

  // Obter todas as pastas de pedidos
  getOrderFolders: async () => {
    const { data, error } = await supabase.from("order_folders").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar uma nova pasta de pedidos
  createOrderFolder: async (folder: any) => {
    const { error } = await supabase.from("order_folders").insert(folder);
    if (error) throw error;
  },

  // Excluir uma pasta de pedidos
  deleteOrderFolder: async (id: string) => {
    const { error } = await supabase
      .from("order_folders")
      .delete()
      .eq("id", id);
    if (error) throw error;
  },
};

// Serviço para gerenciar testes
export const testService = {
  // Obter todos os testes
  getTests: async () => {
    const { data, error } = await supabase.from("tests").select("*");
    if (error) throw error;
    return data || [];
  },

  // Criar um novo teste
  createTest: async (test: any) => {
    const { error } = await supabase.from("tests").insert(test);
    if (error) throw error;
  },

  // Atualizar um teste existente
  updateTest: async (id: string, test: any) => {
    const { error } = await supabase.from("tests").update(test).eq("id", id);
    if (error) throw error;
  },

  // Excluir um teste
  deleteTest: async (id: string) => {
    const { error } = await supabase.from("tests").delete().eq("id", id);
    if (error) throw error;
  },
};

// Função para inicializar o banco de dados com dados padrão
export const initializeDatabase = async () => {
  try {
    // Verificar se as tabelas existem
    const { error: tablesError } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true });

    if (tablesError) {
      console.error(
        "Erro ao verificar tabelas, elas podem não existir:",
        tablesError,
      );
      console.log("Execute o script SQL para criar as tabelas no Supabase");

      // Criar tabelas automaticamente
      await createTables();

      // Tentar novamente após criar as tabelas
      const { error: retryError } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true });

      if (retryError) {
        console.error("Ainda há erro após criar tabelas:", retryError);
        // Tentar executar o script SQL diretamente
        try {
          await supabase.rpc("exec", {
            command: `
              CREATE TABLE IF NOT EXISTS users (
                username TEXT PRIMARY KEY,
                password TEXT,
                displayName TEXT,
                email TEXT,
                profileImage TEXT,
                role TEXT,
                permissions TEXT[],
                passwordChanged BOOLEAN,
                emailSet BOOLEAN
              );
              ALTER TABLE users DISABLE ROW LEVEL SECURITY;
            `,
          });
          console.log("Tabela de usuários criada manualmente");
        } catch (directError) {
          console.error("Erro ao criar tabela diretamente:", directError);
        }
      }

      return;
    }

    // Sempre criar ou atualizar o admin padrão
    const { error: adminError } = await supabase.from("users").upsert(
      {
        username: "admin.admin",
        password: "admin",
        displayName: "Administrador",
        role: "Gestão",
        permissions: [
          "projetos_view",
          "projetos_edit",
          "projetos_create",
          "materiais_view",
          "materiais_edit",
          "testes_view",
          "testes_edit",
          "pedidos_view",
          "pedidos_edit",
          "entregas_view",
          "entregas_edit",
          "checklists_view",
          "checklists_edit",
          "usuarios_view",
          "usuarios_edit",
        ],
        passwordChanged: true,
        emailSet: true,
        email: "admin@mcmsystems.com",
      },
      { onConflict: "username" },
    );

    if (adminError) {
      console.error("Erro ao criar usuário admin:", adminError);
    } else {
      console.log("Usuário admin criado/atualizado com sucesso");
    }

    // Verificar dados existentes e sincronizar com localStorage
    await syncLocalStorageWithSupabase();

    // Configurar sincronização automática
    setupAutoSync();

    console.log("Banco de dados inicializado com sucesso");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  }
};

// Função para criar tabelas no Supabase
async function createTables() {
  try {
    // SQL para criar todas as tabelas necessárias
    const sql = `
      -- Tabela de usuários
      CREATE TABLE IF NOT EXISTS users (
        username TEXT PRIMARY KEY,
        password TEXT,
        displayName TEXT,
        email TEXT,
        profileImage TEXT,
        role TEXT,
        permissions TEXT[],
        passwordChanged BOOLEAN,
        emailSet BOOLEAN
      );

      -- Tabela de tokens de reset de senha
      CREATE TABLE IF NOT EXISTS reset_tokens (
        username TEXT PRIMARY KEY,
        token TEXT,
        expires TIMESTAMP
      );

      -- Tabela de projetos
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        title TEXT,
        type TEXT,
        dueDate TEXT,
        serviceType TEXT,
        description TEXT,
        priority TEXT,
        status TEXT,
        hardwareSpecs JSONB,
        boards JSONB,
        repairDetails JSONB
      );

      -- Tabela de materiais
      CREATE TABLE IF NOT EXISTS materials (
        id TEXT PRIMARY KEY,
        name TEXT,
        supplier TEXT,
        suppliers TEXT[],
        receptionDate TEXT,
        minQuantity INTEGER,
        maxQuantity INTEGER,
        currentQuantity INTEGER,
        linkedProject TEXT,
        linkedOrder TEXT,
        category TEXT,
        location TEXT,
        unit TEXT,
        cost FLOAT,
        barcode TEXT,
        lastUpdated TIMESTAMP,
        image TEXT
      );

      -- Tabela de transações de materiais
      CREATE TABLE IF NOT EXISTS material_transactions (
        id TEXT PRIMARY KEY,
        materialId TEXT,
        materialName TEXT,
        type TEXT,
        quantity INTEGER,
        date TIMESTAMP,
        reason TEXT,
        userId TEXT,
        supplier TEXT,
        projectId TEXT,
        orderId TEXT
      );

      -- Tabela de pedidos
      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        userId TEXT,
        description TEXT,
        materials JSONB,
        status TEXT,
        date TIMESTAMP,
        folderId TEXT
      );

      -- Tabela de pastas de pedidos
      CREATE TABLE IF NOT EXISTS order_folders (
        id TEXT PRIMARY KEY,
        name TEXT,
        color TEXT
      );

      -- Tabela de testes
      CREATE TABLE IF NOT EXISTS tests (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        category TEXT,
        equipment TEXT,
        steps JSONB,
        files JSONB,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP
      );
      
      -- Configurar realtime para cada tabela individualmente
      DO $
      DECLARE
        table_name text;
        already_exists boolean;
      BEGIN
        FOR table_name IN 
          SELECT 'users' UNION ALL
          SELECT 'reset_tokens' UNION ALL
          SELECT 'projects' UNION ALL
          SELECT 'materials' UNION ALL
          SELECT 'material_transactions' UNION ALL
          SELECT 'orders' UNION ALL
          SELECT 'order_folders' UNION ALL
          SELECT 'tests'
        LOOP
          -- Verificar se a tabela já está na publicação
          SELECT EXISTS (
            SELECT 1 FROM pg_publication_tables 
            WHERE pubname = 'supabase_realtime' AND tablename = table_name
          ) INTO already_exists;
          
          -- Adicionar apenas se não existir
          IF NOT already_exists THEN
            EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', table_name);
          END IF;
        END LOOP;
      END$;
    `;

    // Executar o SQL
    const { error } = await supabase.rpc("exec", { command: sql });

    if (error) {
      console.error("Erro ao criar tabelas:", error);
      return false;
    }

    // Configurar políticas de segurança (RLS) para permitir acesso total
    await setupRLS();

    console.log("Tabelas criadas com sucesso");
    return true;
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
    return false;
  }
}

// Função para configurar políticas de segurança (RLS)
async function setupRLS() {
  try {
    // Desativar RLS para todas as tabelas para simplificar
    const tables = [
      "users",
      "reset_tokens",
      "projects",
      "materials",
      "material_transactions",
      "orders",
      "order_folders",
      "tests",
    ];

    for (const table of tables) {
      // Desativar RLS para a tabela
      await supabase.rpc("exec", {
        command: `ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`,
      });
    }

    console.log("Políticas de segurança configuradas");
    return true;
  } catch (error) {
    console.error("Erro ao configurar políticas de segurança:", error);
    return false;
  }
}

// Configurar sincronização automática
function setupAutoSync() {
  // Sincronizar a cada 5 segundos
  const syncInterval = setInterval(async () => {
    try {
      await syncLocalStorageWithSupabase();
      console.log("Sincronização automática concluída");
    } catch (error) {
      console.error("Erro na sincronização automática:", error);
    }
  }, 5000); // 5 segundos

  // Sincronizar quando a página ficar visível novamente
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncLocalStorageWithSupabase().catch(console.error);
    }
  });

  // Sincronizar antes de fechar a página
  window.addEventListener("beforeunload", () => {
    syncLocalStorageWithSupabase().catch(console.error);
  });

  return syncInterval;
}

// Função para sincronizar projetos ativos e concluídos
async function syncProjects() {
  try {
    // Sincronizar projetos ativos
    const localActiveProjects = JSON.parse(
      localStorage.getItem("activeProjects") || "[]",
    );
    // Sincronizar projetos concluídos
    const localCompletedProjects = JSON.parse(
      localStorage.getItem("completedProjects") || "[]",
    );

    // Obter todos os projetos do Supabase
    const { data: dbProjects, error: projectsError } = await supabase
      .from("projects")
      .select("*");

    if (projectsError) {
      console.error("Erro ao buscar projetos do Supabase:", projectsError);
      return;
    }

    if (dbProjects && dbProjects.length > 0) {
      // Separar projetos ativos e concluídos do banco
      const dbActiveProjects = dbProjects.filter(
        (p) => p.status !== "Concluído",
      );
      const dbCompletedProjects = dbProjects.filter(
        (p) => p.status === "Concluído",
      );

      // Mesclar projetos ativos
      const mergedActiveProjects = [...dbActiveProjects];
      for (const localProject of localActiveProjects) {
        const existsInDb = mergedActiveProjects.some(
          (dbProject) => dbProject.id === localProject.id,
        );
        if (!existsInDb) {
          mergedActiveProjects.push(localProject);
          // Enviar para o banco
          const { error: upsertError } = await supabase
            .from("projects")
            .upsert(localProject, { onConflict: "id" });
          if (upsertError) {
            console.error(
              "Erro ao inserir projeto ativo no Supabase:",
              upsertError,
            );
          }
        }
      }

      // Mesclar projetos concluídos
      const mergedCompletedProjects = [...dbCompletedProjects];
      for (const localProject of localCompletedProjects) {
        const existsInDb = mergedCompletedProjects.some(
          (dbProject) => dbProject.id === localProject.id,
        );
        if (!existsInDb) {
          mergedCompletedProjects.push(localProject);
          // Enviar para o banco
          const { error: upsertError } = await supabase
            .from("projects")
            .upsert(localProject, { onConflict: "id" });
          if (upsertError) {
            console.error(
              "Erro ao inserir projeto concluído no Supabase:",
              upsertError,
            );
          }
        }
      }

      // Atualizar localStorage
      localStorage.setItem(
        "activeProjects",
        JSON.stringify(mergedActiveProjects),
      );
      localStorage.setItem(
        "completedProjects",
        JSON.stringify(mergedCompletedProjects),
      );
    } else {
      // Se não há projetos no banco, enviar os locais
      for (const project of [
        ...localActiveProjects,
        ...localCompletedProjects,
      ]) {
        const { error: upsertError } = await supabase
          .from("projects")
          .upsert(project, { onConflict: "id" });
        if (upsertError) {
          console.error("Erro ao inserir projeto no Supabase:", upsertError);
        }
      }
    }
  } catch (error) {
    console.error("Erro ao sincronizar projetos:", error);
  }
}

// Função para sincronizar localStorage com Supabase
export async function syncLocalStorageWithSupabase() {
  console.log("Iniciando sincronização com Supabase...");
  try {
    // Sincronizar usuários
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const { data: dbUsers, error: usersError } = await supabase
      .from("users")
      .select("*");

    if (usersError) {
      console.error("Erro ao buscar usuários do Supabase:", usersError);
    } else {
      // Mesclar dados do banco com localStorage
      if (dbUsers && dbUsers.length > 0) {
        // Manter versões mais recentes de cada usuário
        const mergedUsers = [...dbUsers];

        // Adicionar usuários locais que não existem no banco
        for (const localUser of localUsers) {
          const existsInDb = mergedUsers.some(
            (dbUser) => dbUser.username === localUser.username,
          );
          if (!existsInDb) {
            mergedUsers.push(localUser);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("users")
              .upsert(localUser, { onConflict: "username" });

            if (upsertError) {
              console.error(
                "Erro ao inserir usuário no Supabase:",
                upsertError,
              );
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem("users", JSON.stringify(mergedUsers));
      } else if (localUsers.length > 0) {
        // Se temos usuários no localStorage mas não no banco, enviar para o banco
        for (const user of localUsers) {
          const { error: upsertError } = await supabase
            .from("users")
            .upsert(user, { onConflict: "username" });
          if (upsertError) {
            console.error("Erro ao inserir usuário no Supabase:", upsertError);
          }
        }
      }
    }

    // Sincronizar projetos ativos e concluídos
    await syncProjects();

    // Sincronizar materiais
    const localMaterials = JSON.parse(
      localStorage.getItem("materials") || "[]",
    );
    const { data: dbMaterials, error: materialsError } = await supabase
      .from("materials")
      .select("*");

    if (materialsError) {
      console.error("Erro ao buscar materiais do Supabase:", materialsError);
    } else {
      // Mesclar materiais
      if (dbMaterials && dbMaterials.length > 0) {
        const mergedMaterials = [...dbMaterials];

        // Adicionar materiais locais que não existem no banco
        for (const localMaterial of localMaterials) {
          const existsInDb = mergedMaterials.some(
            (dbMaterial) => dbMaterial.id === localMaterial.id,
          );
          if (!existsInDb) {
            mergedMaterials.push(localMaterial);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("materials")
              .upsert(localMaterial, { onConflict: "id" });

            if (upsertError) {
              console.error(
                "Erro ao inserir material no Supabase:",
                upsertError,
              );
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem("materials", JSON.stringify(mergedMaterials));
      } else if (localMaterials.length > 0) {
        for (const material of localMaterials) {
          const { error: upsertError } = await supabase
            .from("materials")
            .upsert(material, { onConflict: "id" });
          if (upsertError) {
            console.error("Erro ao inserir material no Supabase:", upsertError);
          }
        }
      }
    }

    // Sincronizar transações de materiais
    const localTransactions = JSON.parse(
      localStorage.getItem("materialTransactions") || "[]",
    );
    const { data: dbTransactions, error: transactionsError } = await supabase
      .from("material_transactions")
      .select("*");

    if (transactionsError) {
      console.error(
        "Erro ao buscar transações do Supabase:",
        transactionsError,
      );
    } else {
      // Mesclar transações
      if (dbTransactions && dbTransactions.length > 0) {
        const mergedTransactions = [...dbTransactions];

        // Adicionar transações locais que não existem no banco
        for (const localTransaction of localTransactions) {
          const existsInDb = mergedTransactions.some(
            (dbTransaction) => dbTransaction.id === localTransaction.id,
          );
          if (!existsInDb) {
            mergedTransactions.push(localTransaction);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("material_transactions")
              .upsert(localTransaction, { onConflict: "id" });

            if (upsertError) {
              console.error(
                "Erro ao inserir transação no Supabase:",
                upsertError,
              );
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem(
          "materialTransactions",
          JSON.stringify(mergedTransactions),
        );
      } else if (localTransactions.length > 0) {
        for (const transaction of localTransactions) {
          const { error: upsertError } = await supabase
            .from("material_transactions")
            .upsert(transaction, { onConflict: "id" });

          if (upsertError) {
            console.error(
              "Erro ao inserir transação no Supabase:",
              upsertError,
            );
          }
        }
      }
    }

    // Sincronizar pedidos
    const localOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const { data: dbOrders, error: ordersError } = await supabase
      .from("orders")
      .select("*");

    if (ordersError) {
      console.error("Erro ao buscar pedidos do Supabase:", ordersError);
    } else {
      // Mesclar pedidos
      if (dbOrders && dbOrders.length > 0) {
        const mergedOrders = [...dbOrders];

        // Adicionar pedidos locais que não existem no banco
        for (const localOrder of localOrders) {
          const existsInDb = mergedOrders.some(
            (dbOrder) => dbOrder.id === localOrder.id,
          );
          if (!existsInDb) {
            mergedOrders.push(localOrder);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("orders")
              .upsert(localOrder, { onConflict: "id" });

            if (upsertError) {
              console.error("Erro ao inserir pedido no Supabase:", upsertError);
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem("orders", JSON.stringify(mergedOrders));
      } else if (localOrders.length > 0) {
        for (const order of localOrders) {
          const { error: upsertError } = await supabase
            .from("orders")
            .upsert(order, { onConflict: "id" });
          if (upsertError) {
            console.error("Erro ao inserir pedido no Supabase:", upsertError);
          }
        }
      }
    }

    // Sincronizar pastas de pedidos
    const localFolders = JSON.parse(
      localStorage.getItem("orderFolders") || "[]",
    );
    const { data: dbFolders, error: foldersError } = await supabase
      .from("order_folders")
      .select("*");

    if (foldersError) {
      console.error(
        "Erro ao buscar pastas de pedidos do Supabase:",
        foldersError,
      );
    } else {
      // Mesclar pastas
      if (dbFolders && dbFolders.length > 0) {
        const mergedFolders = [...dbFolders];

        // Adicionar pastas locais que não existem no banco
        for (const localFolder of localFolders) {
          const existsInDb = mergedFolders.some(
            (dbFolder) => dbFolder.id === localFolder.id,
          );
          if (!existsInDb) {
            mergedFolders.push(localFolder);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("order_folders")
              .upsert(localFolder, { onConflict: "id" });

            if (upsertError) {
              console.error("Erro ao inserir pasta no Supabase:", upsertError);
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem("orderFolders", JSON.stringify(mergedFolders));
      } else if (localFolders.length > 0) {
        for (const folder of localFolders) {
          const { error: upsertError } = await supabase
            .from("order_folders")
            .upsert(folder, { onConflict: "id" });

          if (upsertError) {
            console.error("Erro ao inserir pasta no Supabase:", upsertError);
          }
        }
      }
    }

    // Sincronizar testes
    const localTests = JSON.parse(localStorage.getItem("tests") || "[]");
    const { data: dbTests, error: testsError } = await supabase
      .from("tests")
      .select("*");

    if (testsError) {
      console.error("Erro ao buscar testes do Supabase:", testsError);
    } else {
      // Mesclar testes
      if (dbTests && dbTests.length > 0) {
        const mergedTests = [...dbTests];

        // Adicionar testes locais que não existem no banco
        for (const localTest of localTests) {
          const existsInDb = mergedTests.some(
            (dbTest) => dbTest.id === localTest.id,
          );
          if (!existsInDb) {
            mergedTests.push(localTest);
            // Enviar para o banco
            const { error: upsertError } = await supabase
              .from("tests")
              .upsert(localTest, { onConflict: "id" });
            if (upsertError) {
              console.error("Erro ao inserir teste no Supabase:", upsertError);
            }
          }
        }

        // Atualizar localStorage com dados mesclados
        localStorage.setItem("tests", JSON.stringify(mergedTests));
      } else if (localTests.length > 0) {
        for (const test of localTests) {
          const { error: upsertError } = await supabase
            .from("tests")
            .upsert(test, { onConflict: "id" });
          if (upsertError) {
            console.error("Erro ao inserir teste no Supabase:", upsertError);
          }
        }
      }
    }

    console.log("Sincronização entre localStorage e Supabase concluída");

    // Verificar se os dados foram realmente salvos
    try {
      const { count: userCount } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true });

      const { count: projectCount } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      const { count: materialCount } = await supabase
        .from("materials")
        .select("*", { count: "exact", head: true });

      console.log(
        `Verificação de dados: Usuários: ${userCount}, Projetos: ${projectCount}, Materiais: ${materialCount}`,
      );
    } catch (verifyError) {
      console.error("Erro ao verificar dados salvos:", verifyError);
    }
  } catch (error) {
    console.error("Erro ao sincronizar localStorage com Supabase:", error);
  }
}
