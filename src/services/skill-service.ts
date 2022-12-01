import { supabase } from '../pages/api/supabase'

export namespace SkillService {
  export async function getAll() {
    const { data, error, status } = await supabase.from('skills').select('*')

    switch (status) {
      case 200:
        return data
      case 400:
        throw new Error(error as any)
      default:
        throw new Error('Erro no servidor, por favor aguarde.')
    }
  }
}
