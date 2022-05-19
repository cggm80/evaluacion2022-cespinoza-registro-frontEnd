import {  useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import TituloClientes from '../Components/TituloClientes'
import TextoBoton from '../Components/TextoBoton'
import Clientes from '../Components/Clientes'

const Index = () => {

  const [clientes, setClientes] = useState([]);
  //CARGA DE DATOS DESDE UNA API
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