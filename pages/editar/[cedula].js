import {  useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../Components/Layout'
import TituloClientes from '../../Components/TituloClientes'
import TextoBoton from '../../Components/TextoBoton'
import EditarCliente from '../../Components/EditarCliente'
import Swal from "sweetalert2"

const Editar = () => {
  const router = useRouter()
  const { cedula } = router.query

  const [cliente, setCliente] = useState({});

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('clientes'));
        if (items) {
            items.map(x => {
                if(x.cedula == cedula) {
                    setCliente(x)
                }
            })
        } 
        
    }, [cedula]);

  return (
    <>
      <Layout>
        <TituloClientes />
        <TextoBoton texto={`Actualiza la información del usuario: ${cliente.name}`} boton={false} />
        <EditarCliente cliente={cliente} />
      </Layout>
    </>
  );
}

export default Editar