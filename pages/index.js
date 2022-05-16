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
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setClientes(items);
    }
  }, []);


  useEffect(() => {
    const carga_clientes = JSON.parse(window.localStorage.getItem('clientes'));
    setClientes(carga_clientes);
  }, []);

  

  return (
    <>
      <Layout>
        <TituloClientes />
        <TextoBoton texto="Escoja un cliente para visualizar los detalles" boton={true} />

        {
          clientes.length > 0 ?
            (<Clientes clientes={clientes} />) :
            ('Usuarios no encontrados!')
        }
        <p className="count">{clientes.length > 0 ? clientes.length + ' usuarios' : '0 usuarios'}</p>
      </Layout>
    </>
  );
}

export default Index;