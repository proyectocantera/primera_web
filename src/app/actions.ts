'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function addTodo(formData: FormData) {
    const supabase = await createClient()

    const title = formData.get('title') as string

    if (!title || title.trim().length === 0) {
        return
    }

    await supabase.from('todos').insert({
        title,
        is_complete: false,
    })

    revalidatePath('/')
}

export async function deleteTodo(id: number) {
    const supabase = await createClient()
    await supabase.from('todos').delete().match({ id })
    revalidatePath('/')
}

export async function toggleTodoStatus(id: number, isComplete: boolean) {
    const supabase = await createClient()
    await supabase.from('todos').update({ is_complete: !isComplete }).match({ id })
    revalidatePath('/')
}
