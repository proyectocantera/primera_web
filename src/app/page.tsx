import { createClient } from "@/lib/supabase/server";
import { TodoList } from "@/components/TodoList";
import { redirect } from "next/navigation";

export default async function Home() {
  try {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      redirect("/login");
    }

    const { data: todos, error } = await supabase.from('todos').select('*').order('created_at', { ascending: false });

    if (error) throw error;

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
  } catch (e: any) {
    if (e?.message === 'NEXT_REDIRECT') throw e; // Let redirects pass through

    return (
      <div style={{ padding: '2rem', color: 'red', border: '1px solid red' }}>
        <h2>Critical Error Debugging</h2>
        <p>This error occurred on the server:</p>
        <pre>{e?.message || JSON.stringify(e)}</pre>
        <p>Stack:</p>
        <pre>{e?.stack}</pre>
        <hr />
        <p>Environment Check:</p>
        <pre>URL defined: {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'YES' : 'NO'}</pre>
        <pre>Key defined: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'YES' : 'NO'}</pre>
      </div>
    )
  }
}
