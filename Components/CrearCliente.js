import Link from "next/link"
import { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { useRouter } from 'next/router'
import { useForm } from "../Hooks/useForm"

const CrearCliente = () => {

    const router = useRouter()
    const [items, setItems] = useState([]);
    /*const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [estado, setEstado] = useState('A');*/

    const { inputValues, handleInputChange } = useForm({
        name: '',
        email: '',
        cedula: '',
        telefono: '',
        estado: '',
    })

    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('clientes'));
        if (items) {
         setItems(items);
        }
    }, []);   

    const onSubmitCreate = (e) => {
        e.preventDefault();
        //console.log(inputValues)
        localStorage.setItem("clientes", JSON.stringify([...items, inputValues]));
        Swal.fire({
            icon: 'success',
            title: 'Ok...',
            text: 'Cliente creado correctamente!'
        })
        router.push('/')
              
    }    

    return (
        <section className="crearCliente">
            <form className="form" onSubmit={onSubmitCreate}>
                <div className="input">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        value={inputValues.name ?? ''} 
                        onChange={handleInputChange} 
                        required />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="E-mail" 
                        value={inputValues.email ?? ''} 
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="cedula"
                        placeholder="Cédula" 
                        value={inputValues.cedula ?? ''} 
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="telefono"
                        placeholder="Teléfono" 
                        value={inputValues.telefono ?? ''} 
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="input">
                    <select name="estado" onChange={handleInputChange} required>
                        <option value="0">Seleccionar</option>
                        <option value="A">Activo</option>
                        <option value="I">Inactivo</option>
                        <option value="P">Pendiente</option>
                        <option value="D">Desactivado</option>
                    </select>
                </div>
                <div className="botones">
                    <input type="submit" className="crear" value="Crear" />
                    <Link href="/" className="regresar">
                        <a>Regresar</a>
                    </Link>
                </div>
            </form>
        </section>
    );
}

export default CrearCliente;