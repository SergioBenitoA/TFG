export const crearUsuario = async (nombre, correo, telefono, contrasena) => {
    const data = 
    {
        "nombre": nombre, 
        "correo": correo, 
        "telefono": telefono, 
        "contrasena_nc" : contrasena
    }
    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/userssergio',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const crearReserva = async (codigo, dni, matricula, personas, fechaEntrada, fechaSalida, idusuario) => {

    const data = 
    { 
        "codigo": codigo, 
        "dni": dni, 
        "matricula": matricula, 
        "npersonas": personas, 
        "fechaentrada": fechaEntrada, 
        "fechasalida": fechaSalida, 
        "idusuario": idusuario
    }

    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/reservas',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const getUsuarios = async () => {
    const sendata = await fetch('https://apimap-h4m5.onrender.com/user/userssergio')
    const response = await sendata.json()
    return response
}

export const getReservas = async () => {
    const sendata = await fetch('https://apimap-h4m5.onrender.com/user/reservas')
    const response = await sendata.json()
    return response
}

export const deleteUsuario = async (id) => {
    
    const sendata = await fetch(
        `https://apimap-h4m5.onrender.com/user/usuariossergio/${id}`,
        {
            method: 'DELETE'
        }
    )

    const response = await sendata.json()

    return response
}

export const deleteReserva = async (id) => {

    const sendata = await fetch(
        `https://apimap-h4m5.onrender.com/user/reserva/${id}`,
        {
            method: 'DELETE'
        }
    )

    const response = await sendata.json()

    return response
}

const n = ''
export default n