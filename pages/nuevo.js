import Layout from '../Components/Layout'
import TituloClientes from '../Components/TituloClientes'
import TextoBoton from '../Components/TextoBoton'
import CrearCliente from '../Components/CrearCliente'

const Nuevo = () => {
  return (
    <>
      <Layout>
        <TituloClientes />
        <TextoBoton texto="Registre la siguiente información para crear un nuevo usuario" boton={false} />
        <CrearCliente />
      </Layout>
    </>
  );
}

export default Nuevo;