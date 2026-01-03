import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <h1 className="title">Bienvenido</h1>
            <p className="subtitle">Inicia sesión para gestionar tus tareas</p>

            <form className="card" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--card-border)' }}
                    />
                </div>

                <div>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--card-border)' }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button formAction={login} className="btn btn-primary" style={{ flex: 1 }}>
                        Entrar
                    </button>
                    <button formAction={signup} className="btn" style={{ flex: 1, background: 'var(--background)', border: '1px solid var(--card-border)' }}>
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}
