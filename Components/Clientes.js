import Link from "next/link"
import {  useState } from 'react'

const Clientes = ({ clientes }) => {

    return (
        <section className="clientes">
            <ul>
            {
                clientes.map((cliente) => (
                    <li key={cliente.cedula}>
                        <div className="col">
                            <span className="name"><strong>{cliente.name}</strong></span>
                            <span className="email">{cliente.email}</span>
                        </div>
                        <div className="col">
                            <span className="name"><strong>{cliente.cedula}</strong></span>
                            <span className="email">{cliente.telefono}</span>
                        </div>
                        <div className="col estado">
                        {(() => {
                            switch (cliente.estado) {
                            case "A": return <span className='activo'>Activo</span>
                            case "I": return <span className='inactivo'>Inactivo</span>
                            case "P": return <span className='pendiente'>Pendiente</span>
                            case "D": return <span className='desactivado'>Desactivado</span>
                            default:  return <span className='activo'>Activo</span>
                            }
                        })()}
                        </div>
                        <div className="col boton">
                            <Link href={`/editar/${encodeURIComponent(cliente.cedula)}`}>
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