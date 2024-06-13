export const crearUsuario = async (nombre, correo, telefono, contrasena) => {
    const data = 
    {
        "nombre": nombre, 
        "correo": correo, 
        "telefono": telefono, 
        "contrasena_nc" : contrasena
    }
    const sendata = await fetch(
        'https://apitfg-production-5e77.up.railway.app/user/userssergio',
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

export const crearReserva = async (codigo, dni, matricula, personas, fechaEntrada, fechaSalida, idusuario, alojamiento) => {

    const data = 
    { 
        "codigo": codigo, 
        "dni": dni, 
        "matricula": matricula, 
        "npersonas": personas, 
        "fechaentrada": fechaEntrada, 
        "fechasalida": fechaSalida, 
        "idusuario": idusuario,
        "alojamiento": alojamiento
    }

    const sendata = await fetch(
        'https://apitfg-production-5e77.up.railway.app/user/reservas',
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
    const sendata = await fetch('https://apitfg-production-5e77.up.railway.app/user/userssergio')
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
        'https://apitfg-production-5e77.up.railway.app/user/loginsergio',
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

export async function comprobarUsuarioActualizar (correo, contrasena){
    const data = 
    {
        "email": correo, 
        "password" : contrasena
    }
    const sendata = await fetch(
        'https://apitfg-production-5e77.up.railway.app/user/loginsergio',
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


export async function getUsuarioCorreo(email) {
    const url = `https://apitfg-production-5e77.up.railway.app/user/obtenerusuario/${email}`;
    
    try {
        // Realizar la solicitud Fetch
        const response = await fetch(url);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Retornar los datos del usuario
        return data;
        
    } catch (error) {
        // Manejar errores
        console.error('Hubo un problema con la solicitud Fetch:', error);
        throw error;
    }
}

export async function getReservasUsuario(idusuario) {
    const url = `https://apitfg-production-5e77.up.railway.app/user/obtenerreservas/${idusuario}`;
    
    try {
        // Realizar la solicitud Fetch
        const response = await fetch(url);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Retornar los datos del usuario
        return data;
        
    } catch (error) {
        // Manejar errores
        console.error('Hubo un problema con la solicitud Fetch:', error);
        throw error;
    }
}

// Actualizar contraseña
export const actualizarContrasena = async (email, newPassword) => {
    const data = {
        "email": email,
        "newPassword": newPassword
    };
    const sendata = await fetch(
        'https://apitfg-production-5e77.up.railway.app/user/actualizarContrasena',
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
    const response = await fetch(`https://apitfg-production-5e77.up.railway.app/user/usuariossergio/${correo}`, {
        method: 'DELETE'
    })

    const data = await response.json()
    return data
}


export const deleteReserva = async (id) => {

    const sendata = await fetch(
        `https://apitfg-production-5e77.up.railway.app/user/reserva/${id}`,
        {
            method: 'DELETE'
        }
    )

    const response = await sendata.json()

    return response
}

const n = ''
export default n