CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
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
  id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  title text,
  type text,
  due_date text,
  service_type text,
  description text,
  priority text,
  status text,
  hardware_specs jsonb,
  boards jsonb,
  repair_details jsonb
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

-- Configurar realtime para todas as tabelas
ALTER PUBLICATION supabase_realtime ADD TABLE users, reset_tokens, projects, materials, material_transactions, orders, order_folders, tests;