export default async function ErrorPage(props: {
    searchParams: Promise<{ message: string }>
}) {
    const searchParams = await props.searchParams;
    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1 className="title">Algo salió mal</h1>
            <p className="subtitle">
                {searchParams.message || "Hubo un error al intentar iniciar sesión."}
            </p>
            <a href="/login" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Volver a intentar
            </a>
        </div>
    )
}
