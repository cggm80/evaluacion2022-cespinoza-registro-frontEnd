export default function handler(req, res) {
    res.status(200).json([
    { 
        name: 'Monica Enriquez',
        email: 'menriquez@abc.com',
        codigo: '123.456.789-00',
        celular: '(593) 9356-8569',
        status: 'A'
    },
    { 
        name: 'Gabriel Simbaña',
        email: 'gsimbana@abc.com',
        codigo: '123.456.789-01',
        celular: '(593) 9356-8569',
        status: 'I'
    },
    { 
        name: 'Christian Garcia',
        email: 'cgarcia@abc.com',
        codigo: '123.456.789-02',
        celular: '(593) 9356-8569',
        status: 'P'
    },
    { 
        name: 'Carlos Guzman',
        email: 'cguzman@abc.com',
        codigo: '123.456.789-03',
        celular: '(593) 9356-8569',
        status: 'D'
    },
])
}