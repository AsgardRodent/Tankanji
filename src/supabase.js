import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xiiiazijespxexbwasra.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpaWlhemlqZXNweGV4Yndhc3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MDkxNzEsImV4cCI6MjA0NzI4NTE3MX0.jr2EJDBsfb7oYkA1_rZkzfDNtffrsjGBdm9QRX0xMIM')

export default supabase;