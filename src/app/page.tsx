import { createClient } from "@/lib/supabase/server";
import { TodoList } from "@/components/TodoList";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const { data: todos } = await supabase.from('todos').select('*').order('created_at', { ascending: false });

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="title">Mis Tareas</h1>
          <p className="subtitle">Bienvenido, {user.email}</p>
        </div>
        <form action={async () => {
          'use server';
          const supabase = await createClient();
          await supabase.auth.signOut();
          redirect('/login');
        }}>
          <button className="btn" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Cerrar sesión</button>
        </form>
      </div>

      <TodoList todos={todos || []} />
    </section>
  );
}
