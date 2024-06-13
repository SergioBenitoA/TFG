import { getUsuarioCorreo , crearReserva , getReservasUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const idioma = localStorage.getItem("lenguaje");
    document.getElementById('btnReservar').addEventListener('click', async (event) => {
        event.preventDefault();
    
        const dni = document.getElementById('floatingDNI').value;
        const matricula = document.getElementById('floatingMatricula').value;
        const personas = document.getElementById('floatingPersonas').value;
        const fechaEntrada = document.getElementById('fechaEntrada').value;
        const fechaSalida = document.getElementById('fechaSalida').value;
        const alojamiento = document.getElementById('floatingTipoAlojamiento').value;
        const correo = localStorage.getItem("correo");
        const mensaje = document.getElementById('mensaje');
        
        if (dni && matricula && personas && fechaEntrada && fechaSalida && alojamiento) {
            const resultado = validarReserva(dni, personas, fechaEntrada, fechaSalida);
            if (resultado.valido) {
                if(correo !== ""){
                    const usuario = await getUsuarioCorreo(correo);
                    if(usuario){
                        // CODIGO PARA COMPROBAR SI EN LA FECHA QUE QUIERE RESERVAR YA TIENE UNA RESERVA
                        const reservas = await getReservasUsuario(usuario.id_usuario);

                        // Función para comprobar si las fechas se solapan
                        function fechasSolapadas(fechaEntradaExistente, fechaSalidaExistente, fechaEntradaNueva, fechaSalidaNueva) {
                            return !(fechaSalidaNueva < fechaEntradaExistente || fechaEntradaNueva > fechaSalidaExistente);
                        }

                        // Comprobar si alguna de las reservas se solapa con la nueva
                        let solapada = false;
                        for (let reserva of reservas) {
                            const { fecha_entrada, fecha_salida } = reserva;
                            if (fechasSolapadas(new Date(fecha_entrada), new Date(fecha_salida), new Date(fechaEntrada), new Date(fechaSalida))) {
                                solapada = true;
                                break;
                            }
                        }

                        if (solapada) {
                            switch (idioma) {
                                case 'EN':
                                    mensaje.textContent = 'You already have a reservation in that date range.';
                                    break;
                                case 'ES':
                                    mensaje.textContent = 'Ya tiene una reserva en ese intervalo de fechas.';
                                    break;
                            
                                default:
                                    break;
                            }
                            const toastLiveExample = document.getElementById('liveToast');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show();
                        } else {
                            // Crear la nueva reserva si no hay solapamiento
                            const reserva = await crearReserva(123, dni, matricula, personas, fechaEntrada, fechaSalida, usuario.id_usuario, alojamiento);
                            if(reserva.Message){
                                generatePDF(usuario.nombre, usuario.correo, usuario.telefono, dni, matricula, fechaEntrada, fechaSalida, personas, alojamiento);
                            } else {
                                switch (idioma) {
                                    case 'EN':
                                        mensaje.textContent = 'Error creating booking';
                                        break;
                                    case 'ES':
                                        mensaje.textContent = 'Error al crear la reserva';
                                        break;
                                    default:
                                        break;
                                }
                                const toastLiveExample = document.getElementById('liveToast');
                                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                                toastBootstrap.show();
                            }
                        }                    
                    } else{
                        switch (idioma) {
                            case 'EN':
                                mensaje.textContent = 'You must create an account in order to make a reservation';
                                break;
                            case 'ES':
                                mensaje.textContent = 'Debes crearte una cuenta para poder hacer una reserva';
                                break;
                            default:
                                break;
                        }
                        const toastLiveExample = document.getElementById('liveToast');
                        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                        toastBootstrap.show();
                    }
                } else{
                    mensaje.textContent = 'Debe iniciar sesión para poder hacer una reserva';
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                }
            } else {
                mensaje.textContent = resultado.mensaje;
                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                toastBootstrap.show();
            }
        } else {
            switch (idioma) {
                case 'EN':
                    mensaje.textContent = 'Please fill in all fields.';
                    break;
                case 'ES':
                    mensaje.textContent = 'Por favor, rellene todos los campos.';
                    break;
                default:
                    break;
            }
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        }    
    
        function validarReserva(dni, personas, fechaEntrada, fechaSalida) {
            let hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            let fechaEntradaDate = new Date(fechaEntrada);
            let fechaSalidaDate = new Date(fechaSalida);
            
            // Comprobar que la fecha de entrada no sea anterior a hoy
            if (fechaEntradaDate < hoy) {
                console.log('entro');
                return {
                    valido: false,
                    mensaje: "La fecha de entrada no puede ser anterior a hoy."
                };
            }
            
            // Comprobar que la fecha de salida no sea anterior a la fecha de entrada
            if (fechaSalidaDate <= fechaEntradaDate) {
                return {
                    valido: false,
                    mensaje: "La fecha de salida minimo tiene que ser un día despues que fecha de entrada."
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

async function generatePDF(nombre, email, telefono, dni, matricula, fechaEntrada, fechaSalida, cantidadPersonas, tipoAlojamiento) {
    const data = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        dni: dni,
        matricula: matricula,
        fechaEntrada: fechaEntrada,
        fechaSalida: fechaSalida,
        cantidadPersonas: cantidadPersonas,
        tipoAlojamiento: tipoAlojamiento
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
                        [{ text: 'Teléfono', bold: true }, data.telefono],
                        [{ text: 'DNI', bold: true }, data.dni]
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
                        [{ text: 'Cantidad de Personas', bold: true }, data.cantidadPersonas],
                        [{ text: 'Tipo de Alojamiento', bold: true }, data.tipoAlojamiento]
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
                        [{ text: 'Dirección', bold: true }, 'C/ Ribera de Castilla'],
                        [{ text: 'Correo Electrónico', bold: true }, 'sergy2210@gmail.com'],
                        [{ text: 'Teléfono de Contacto', bold: true }, '656691600'],
                        [{ text: 'Página Web', bold: true }, 'www.eloasis.com'],
                        [{ text: 'Horario de recepción', bold: true }, 'Lunes a Domingo 10:00 - 22:00']
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

