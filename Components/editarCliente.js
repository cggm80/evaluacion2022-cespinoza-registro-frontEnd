import Link from "next/link"
import { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { useRouter } from 'next/router'

const EditarCliente = ({cliente}) => {

    useEffect(() => {
        setName(cliente.name)
        setEmail(cliente.email)
        setCedula(cliente.codigo)
        setTelefono(cliente.celular)
    },[]);

    const router = useRouter()
    const [items, setItems] = useState([]);
    const [name, setName] = useState(cliente.name)
    const [email, setEmail] = useState('')
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [estado, setEstado] = useState('');  

    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('clientes'));
        if (items) {
         setItems(items);
        }
    }, []); 

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && !cedula && telefono && email) {
            setCedula('');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingrese una cédula!'
            })
        } else if (!name && cedula && telefono && email) {
            setName('');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingrese un nombre!'
            })
        } else if (name && cedula && !telefono && email) {
            setTelefono('');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingrese un teléfono!'
            })
        } else if (!name && !cedula && !telefono && email ) {
            setEmail('');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingrese un email!'
            })
        } else if (!email.includes('@')) {
            setEmail('');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingrese un email válido!'
            })
        } else {
            const actualizarCliente = items.map(x => {
                if (x.codigo === cedula) {
                    return {
                        ...x,
                        name: name,
                        email: email,
                        celular: telefono,
                        status: estado
                    }
                }
                return x;
            })
            localStorage.setItem("clientes", JSON.stringify(actualizarCliente));
            router.push('/')
        } 
    }    

    return (
        <section className="crearCliente">
            <form className="form" onSubmit={onSubmit}>
                <div className="input">
                    <input type="text" placeholder="Nombre" value={cliente.name ?? ''} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="E-mail" value={cliente.email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Cédula" value={cliente.codigo} onChange={(e) => setCedula(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Teléfono" value={cliente.celular} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="input">
                    <select value={cliente.status} defaultValue={'DEFAULT'} onChange={(e) => setEstado(e.target.value)}>
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