"use client";

import { addTodo, deleteTodo, toggleTodoStatus } from '@/app/actions';

interface Todo {
    id: number;
    title: string;
    is_complete: boolean;
}

export function TodoItem({ todo }: { todo: Todo }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: '1px solid var(--card-border)',
            opacity: todo.is_complete ? 0.6 : 1,
            textDecoration: todo.is_complete ? 'line-through' : 'none',
            transition: 'opacity 0.2s'
        }}>
            <div
                onClick={() => toggleTodoStatus(todo.id, todo.is_complete)}
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    marginRight: '1rem',
                    background: todo.is_complete ? 'var(--primary)' : 'transparent',
                    cursor: 'pointer',
                    flexShrink: 0
                }} />
            <span style={{ flex: 1 }}>{todo.title}</span>
            <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    opacity: 0.5,
                    padding: '0.5rem'
                }}>
                Eliminar
            </button>
        </div>
    );
}

export function TodoList({ todos }: { todos: Todo[] }) {
    return (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {todos.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No hay tareas pendientes. ¡Añade una!
                </div>
            ) : (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            )}

            <div style={{ padding: '1rem', background: '#f9fafb', borderTop: '1px solid var(--card-border)' }}>
                <form action={addTodo} style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Añadir nueva tarea..."
                        style={{
                            flex: 1,
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid var(--card-border)',
                            outline: 'none'
                        }}
                    />
                    <button className="btn btn-primary" type="submit">
                        Añadir
                    </button>
                </form>
            </div>
        </div>
    );
}
