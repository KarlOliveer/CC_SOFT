-- Verificar quais tabelas já estão na publicação realtime
DO $$
DECLARE
  table_name text;
  already_exists boolean;
BEGIN
  FOR table_name IN 
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