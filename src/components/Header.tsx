
export function Header() {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--card-border)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'var(--primary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    T
                </div>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>TaskManager</span>
            </div>

            <nav>
                {/* Placeholder para futuro Auth */}
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Mentor Edition
                </span>
            </nav>
        </header>
    );
}
