import {  useEffect, useState } from 'react'
import Layout from '../Components/layout'
import TituloClientes from '../Components/tituloClientes'
import TextoBoton from '../Components/textoBoton'
import Clientes from '../Components/clientes'

const Index = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {

    const items = JSON.parse(localStorage.getItem('clientes'));
    if (!items) {
      fetch(`http://localhost:3000/api/users`)
        .then((response) => response.json())
        .then((actualData) => {
          window.localStorage.setItem('clientes', JSON.stringify(actualData));
          const carga_clientes = JSON.parse(window.localStorage.getItem('clientes'));
          cargaUsuarios(carga_clientes)
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setClientes(items);
    }
  }, []);


  const cargaUsuarios = (usurios) => {
    //const carga_clientes = JSON.parse(window.localStorage.getItem('clientes'));
    setClientes(usurios);
  }

  

  return (
    <>
      <Layout>
        <TituloClientes />
        <TextoBoton texto="Escoja un cliente para visualizar los detalles" boton={true} />
        {
          clientes && clientes.length > 0 ?
            <Clientes clientes={clientes} /> :
            <h2>Usuarios no encontrados!</h2>
        }
        <p className="count">{clientes && clientes.length > 0 ? clientes.length + ' usuarios' : '0 usuarios'}</p>
      </Layout>
    </>
  );
}

export default Index;
