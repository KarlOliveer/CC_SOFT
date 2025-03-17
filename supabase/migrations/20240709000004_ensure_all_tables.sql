-- Verificar e criar todas as tabelas necessárias

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

-- Desativar RLS para todas as tabelas
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE reset_tokens DISABLE ROW LEVEL SECURITY;
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE materials DISABLE ROW LEVEL SECURITY;
ALTER TABLE material_transactions DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE order_folders DISABLE ROW LEVEL SECURITY;
ALTER TABLE tests DISABLE ROW LEVEL SECURITY;

-- Adicionar tabelas ao realtime
DO $$
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
END$$;