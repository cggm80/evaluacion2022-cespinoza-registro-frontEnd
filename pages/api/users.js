export default function handler(req, res) {
    res.status(200).json([
    { 
        name: 'Monica Enriquez',
        email: 'menriquez@abc.com',
        cedula: '123.456.789-00',
        telefono: '(593) 9356-8569',
        estado: 'A'
    },
    { 
        name: 'Gabriel Simbaña',
        email: 'gsimbana@abc.com',
        cedula: '123.456.789-01',
        telefono: '(593) 9356-8569',
        estado: 'I'
    },
    { 
        name: 'Christian Garcia',
        email: 'cgarcia@abc.com',
        cedula: '123.456.789-02',
        telefono: '(593) 9356-8569',
        estado: 'P'
    },
    { 
        name: 'Carlos Guzman',
        email: 'cguzman@abc.com',
        cedula: '123.456.789-03',
        telefono: '(593) 9356-8569',
        estado: 'D'
    },
])
}