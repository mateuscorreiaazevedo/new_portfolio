import { createClient } from '@supabase/supabase-js'

const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const baseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!

export const supabase = createClient(baseUrl, baseKey)
