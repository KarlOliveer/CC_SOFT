-- Verificar se a tabela projects existe e criar se não existir
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

-- Desativar RLS para a tabela projects
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;

-- Adicionar a tabela projects à publicação realtime se não estiver
DO $$
DECLARE
  already_exists boolean;
BEGIN
  -- Verificar se a tabela já está na publicação
  SELECT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'projects'
  ) INTO already_exists;
  
  -- Adicionar apenas se não existir
  IF NOT already_exists THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE projects;
  END IF;
END$$;