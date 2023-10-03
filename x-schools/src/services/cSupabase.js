import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xirnqqdfhcloeltujahb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpcm5xcWRmaGNsb2VsdHVqYWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDk2NTEsImV4cCI6MjAxMTgyNTY1MX0.dDfjvaxMtjYeMy0WtGw6kGeC0R-YGRG78pFaTFIGI2I'
const cSupabase = createClient(supabaseUrl, supabaseKey)

export default cSupabase