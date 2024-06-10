import { getUsuarioCorreo , crearReserva } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnReservar').addEventListener('click', async (event) => {
        event.preventDefault();
    
        const dni = document.getElementById('floatingDNI').value;
        const matricula = document.getElementById('floatingMatricula').value;
        const personas = document.getElementById('floatingPersonas').value;
        const fechaEntrada = document.getElementById('fechaEntrada').value;
        const fechaSalida = document.getElementById('fechaSalida').value;
        const alojamiento = document.getElementById('floatingTipoAlojamiento').value;
        const correo = localStorage.getItem("correo");
        
        if (dni && matricula && personas && fechaEntrada && fechaSalida && alojamiento) {
            const resultado = validarReserva(dni, personas, fechaEntrada, fechaSalida);
            if (resultado.valido) {
                const usuario = await getUsuarioCorreo(correo);
                if(usuario){
                    console.log(alojamiento);
                    const reserva = await crearReserva(123, dni, matricula, personas, fechaEntrada, fechaSalida, usuario.id_usuario, alojamiento);
                    if(reserva.Message){
                        generatePDF(usuario.nombre, usuario.correo, usuario.telefono, matricula, fechaEntrada, fechaSalida, personas);
                    }else{
                        alert("Error al crear la reserva");
                    }
                } else{
                    alert("Debes crearte una cuenta para poder hacer una reserva");
                }
            } else {
                console.log("Error: " + resultado.mensaje);
                alert("Error: " + resultado.mensaje);
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }    
    
        function validarReserva(dni, personas, fechaEntrada, fechaSalida) {
            console.log(fechaEntrada);
            let hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
    
            // Comprobar que la fecha de entrada no sea anterior a hoy
            if (fechaEntrada < hoy) {
                return {
                    valido: false,
                    mensaje: "La fecha de entrada no puede ser anterior a hoy."
                };
            }
    
            // Comprobar que la fecha de salida no sea anterior a la fecha de entrada
            if (fechaSalida < fechaEntrada) {
                return {
                    valido: false,
                    mensaje: "La fecha de salida no puede ser anterior a la fecha de entrada."
                };
            }

            // Comprobar que el DNI tiene 9 caracteres
            if(dni.length !== 9){
                return {
                    valido: false,
                    mensaje: "El DNI/NIE tiene que tener 9 caracteres"
                };
            }

            // Comprobar que el DNI tiene 9 caracteres
            if(personas > 6){
                return {
                    valido: false,
                    mensaje: "El limite de personas por reserva es 6"
                };
            }
    
            // Si todo está bien, devolver válido
            return {
                valido: true,
                mensaje: "Los campos son válidos."
            };
        }
    });
});

async function convertImageToBase64(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

async function generatePDF(nombre, email, telefono, matricula, fechaEntrada, fechaSalida, cantidadPersonas) {
    const data = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        matricula: matricula,
        fechaEntrada: fechaEntrada,
        fechaSalida: fechaSalida,
        cantidadPersonas: cantidadPersonas
    };

    const imageBase64 = await convertImageToBase64('../imagenes/logosinfondo.png');

    const docDefinition = {
        content: [
            {
                columns: [
                    {
                        text: 'Tu reserva en EL OASIS',
                        style: 'title'
                    },
                    {
                        image: imageBase64,
                        width: 30, // Tamaño del logo ajustado
                        alignment: 'right'
                    }
                ]
            },
            { text: 'Datos de usuario', style: 'header', margin: [0, 30, 0, 10] },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Nombre', bold: true }, data.nombre],
                        [{ text: 'Correo Electrónico', bold: true}, { text: data.email}],
                        [{ text: 'Teléfono', bold: true }, data.telefono]
                    ]
                },
                layout: 'lightHorizontalLines',
                margin: [0, 0, 0, 20]
            },
            { text: 'Datos de la reserva', style: 'header', margin: [0, 30, 0, 10] },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Matrícula', bold: true }, data.matricula],
                        [{ text: 'Fecha de Entrada', bold: true }, data.fechaEntrada],
                        [{ text: 'Fecha de Salida', bold: true }, data.fechaSalida],
                        [{ text: 'Cantidad de Personas', bold: true }, data.cantidadPersonas]
                    ]
                },
                layout: 'lightHorizontalLines',
                margin: [0, 0, 0, 20]
            },
            { text: 'Datos del camping', style: 'header', margin: [0, 30, 0, 10] },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Dirección', bold: true }, 'Calle Falsa 123, Ciudad, País'],
                        [{ text: 'Correo Electrónico', bold: true }, 'contacto@eloasis.com'],
                        [{ text: 'Teléfono de Contacto', bold: true }, '555-6789'],
                        [{ text: 'Página Web', bold: true }, 'www.eloasis.com']
                    ]
                },
                layout: 'lightHorizontalLines',
                margin: [0, 0, 0, 20]
            }
        ],
        pageMargins: [60, 60, 60, 60], // Márgenes laterales ajustados
        styles: {
            title: {
                fontSize: 30, // Tamaño del título ajustado
                bold: true,
                margin: [0, 0, 0, 20]
            },
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 12,
                bold: true
            }
        }
    };

    pdfMake.createPdf(docDefinition).download('reserva.pdf');
}

