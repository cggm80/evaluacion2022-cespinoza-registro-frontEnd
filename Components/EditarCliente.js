import Link from "next/link"
import { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { useRouter } from 'next/router'
import { useForm } from "../Hooks/useForm"

const EditarCliente = ({cliente}) => {

    const { inputValues, handleInputChange, updateForm } = useForm({
        name: '',
        email: '',
        cedula: '',
        telefono: '',
        estado: '',
    })

    useEffect(() => {
        updateForm(cliente)
    },[cliente]);

    const router = useRouter()
    const [items, setItems] = useState([]);  

    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('clientes'));
        if (items) {
         setItems(items);
        }
    }, []); 

    const onSubmitUpdate = (e) => {
        e.preventDefault();
        //console.log(inputValues)
        const actualizarCliente = items.map(x => {
            //console.log(cliente.cedula)
            if (x.cedula === cliente.cedula) {
                return { 
                    ...x, 
                    name: inputValues.name,
                    email: inputValues.email,
                    telefono: inputValues.telefono,
                    estado: inputValues.estado 
                }
            }
            return x;
        })
        localStorage.setItem("clientes", JSON.stringify(actualizarCliente));
        Swal.fire({
            icon: 'success',
            title: 'Ok...',
            text: 'Cliente actualizado correctamente!'
        })
        router.push('/')
    }    

    return (
        <section className="crearCliente">
            <form className="form" onSubmit={onSubmitUpdate}>
                <div className="input">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        value={inputValues.name} 
                        onChange={handleInputChange} 
                        required />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="E-mail" 
                        value={inputValues.email} 
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="cedula"
                        placeholder="Cédula" 
                        value={inputValues.cedula} 
                        onChange={handleInputChange}
                        required readOnly disabled />
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="telefono"
                        placeholder="Teléfono" 
                        value={inputValues.telefono} 
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="input">
                    <select name="estado" value={inputValues.estado ?? ''}  onChange={handleInputChange} required>
                        <option value="0">Seleccionar</option>
                        <option value="A">Activo</option>
                        <option value="I">Inactivo</option>
                        <option value="P">Pendiente</option>
                        <option value="D">Desactivado</option>
                    </select>
                </div>
                <div className="botones">
                    <input type="submit" className="crear" value="Actualizar" />
                    <Link href="/" className="regresar">
                        <a>Regresar</a>
                    </Link>
                </div>
            </form>
        </section>
    );
}

export default EditarCliente;