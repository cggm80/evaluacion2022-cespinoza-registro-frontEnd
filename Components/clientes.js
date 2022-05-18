import Link from "next/link"
import {  useState } from 'react'

const Clientes = ({ clientes }) => {

    const [estado, setEstado] = useState('');

    return (
        <section className="clientes">
            <ul>
            {
                clientes.map((cliente) => (
                    <li key={cliente.codigo}>
                        <div className="col">
                            <span className="name"><strong>{cliente.name}</strong></span>
                            <span className="email">{cliente.email}</span>
                        </div>
                        <div className="col">
                            <span className="name"><strong>{cliente.codigo}</strong></span>
                            <span className="email">{cliente.celular}</span>
                        </div>
                        <div className="col estado">
                        {(() => {
                            switch (cliente.status) {
                            case "A": return <span className='activo'>Activo</span>
                            case "I": return <span className='inactivo'>Inactivo</span>
                            case "P": return <span className='pendiente'>Pendiente</span>
                            case "D": return <span className='desactivado'>Desactivado</span>
                            default:  return <span className='activo'>Activo</span>
                            }
                        })()}
                        </div>
                        <div className="col boton">
                            <Link href={`/editar/${encodeURIComponent(cliente.codigo)}`}>
                             <a>Editar</a>
                            </Link>
                        </div>
                    </li>
                ))
            }
            </ul>
        </section>
    );
}

export default Clientes;
