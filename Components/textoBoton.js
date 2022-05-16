import Link from "next/link"

const TextoBoton = ({texto, boton}) => {
    return (
        <section className="encabezado">
            <div className="texto">
                <p>
                    <span>Lista de usuarios</span>
                    {texto}
                </p>
                {
                boton ? 
                <>
                    <Link href="/nuevo">
                        <a>Nuevo cliente</a>
                    </Link>
                </>
                : <></>
                }
            </div>
        </section>
    );
}

export default TextoBoton;