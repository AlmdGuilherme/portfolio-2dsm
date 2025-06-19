const {createClient} = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY


if (!supabaseUrl || !supabaseKey) {
  console.error('Erro ao carregar as variáveis de ambiente!');
}

const supabase = createClient(supabaseUrl, supabaseKey)
module.exports = supabase