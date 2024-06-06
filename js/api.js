export const crearUsuario = async (nombre, correo, telefono, contrasena) => {
    const data = 
    {
        "nombre": nombre, 
        "correo": correo, 
        "telefono": telefono, 
        "contrasena_nc" : contrasena
    }
    const sendata = await fetch(
        'http://localhost:3000/user/userssergio',
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
        'http://localhost:3000/user/reservas',
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
    const sendata = await fetch('http://localhost:3000/user/userssergio')
    const response = await sendata.json()
    return response
}

export const getReservas = async () => {
    const sendata = await fetch('http://localhost:3000/user/reservas')
    const response = await sendata.json()
    return response
}

export const comprobarUsuario = async (correo, contrasena) => {
    const data = 
    {
        "email": correo, 
        "password" : contrasena
    }
    const sendata = await fetch(
        'http://localhost:3000/user/loginsergio',
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

// Actualizar contraseña
export const actualizarContrasena = async (email, newPassword) => {
    const data = {
        "email": email,
        "newPassword": newPassword
    };
    const sendata = await fetch(
        'http://localhost:3000/user/actualizarContrasena',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );

    const response = await sendata.json();
    return response;
};

export const deleteUsuario = async (correo) => {
    
    const sendata = await fetch(
        `http://localhost:3000/user/usuariossergio/${correo}`,
        {
            method: 'DELETE'
        }
    )

    const response = await sendata.text()

    return response
}

export const deleteReserva = async (id) => {

    const sendata = await fetch(
        `http://localhost:3000/user/reserva/${id}`,
        {
            method: 'DELETE'
        }
    )

    const response = await sendata.json()

    return response
}

const n = ''
export default n