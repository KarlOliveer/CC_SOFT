-- Script para forçar a sincronização de dados do localStorage para o Supabase

-- Criar função para sincronizar dados
CREATE OR REPLACE FUNCTION sync_data() RETURNS void AS $$
BEGIN
    -- Garantir que as tabelas existam
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
    
    -- Inserir usuário admin padrão se não existir
    INSERT INTO users (username, password, displayName, role, permissions, passwordChanged, emailSet, email)
    VALUES (
      'admin.admin',
      'admin',
      'Administrador',
      'Gestão',
      ARRAY[
        'projetos_view',
        'projetos_edit',
        'projetos_create',
        'materiais_view',
        'materiais_edit',
        'testes_view',
        'testes_edit',
        'pedidos_view',
        'pedidos_edit',
        'entregas_view',
        'entregas_edit',
        'checklists_view',
        'checklists_edit',
        'usuarios_view',
        'usuarios_edit'
      ],
      true,
      true,
      'admin@mcmsystems.com'
    )
    ON CONFLICT (username) DO NOTHING;
    
    -- Desativar RLS para todas as tabelas
    ALTER TABLE users DISABLE ROW LEVEL SECURITY;
    ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
    ALTER TABLE materials DISABLE ROW LEVEL SECURITY;
    ALTER TABLE material_transactions DISABLE ROW LEVEL SECURITY;
    ALTER TABLE tests DISABLE ROW LEVEL SECURITY;
    ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
    ALTER TABLE order_folders DISABLE ROW LEVEL SECURITY;
    
    -- Adicionar tabelas ao realtime
    PERFORM format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', table_name)
    FROM (
      SELECT 'users' AS table_name UNION ALL
      SELECT 'projects' UNION ALL
      SELECT 'materials' UNION ALL
      SELECT 'material_transactions' UNION ALL
      SELECT 'orders' UNION ALL
      SELECT 'order_folders' UNION ALL
      SELECT 'tests'
    ) AS tables
    WHERE NOT EXISTS (
      SELECT 1 FROM pg_publication_tables 
      WHERE pubname = 'supabase_realtime' AND tablename = table_name
    );
    
    RAISE NOTICE 'Sincronização forçada concluída';
 END;
$$ LANGUAGE plpgsql;

-- Executar a função
SELECT sync_data();