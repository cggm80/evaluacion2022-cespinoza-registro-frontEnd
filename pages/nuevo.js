import Layout from '../Components/layout'
import TituloClientes from '../Components/tituloClientes'
import TextoBoton from '../Components/textoBoton'
import CrearCliente from '../Components/crearCliente'

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