import { supabase } from '../pages/api/supabase'
import { ProjectProps } from '../types/projects'

type Props = {
  data: ProjectProps[]
  error: any
  status: number
}

export namespace ProjectService {
  export async function getAll() {
    const { data: projects, error, status }: Props = await supabase.from('projects').select('*')

    projects.forEach(async (project: ProjectProps) => {
      if (project.namedImage) {
        const { data: image } = supabase.storage.from('projects').getPublicUrl(project.namedImage.toLowerCase())
        await supabase.from('projects').update({ image: image.publicUrl }).eq('id', project.id)
      }
    })

    switch (status) {
      case 200:
        return projects
        return
      case 400:
        throw new Error(error)
      default:
        throw new Error('Erro no servidor, por favor aguarde.')
    }
  }
}
