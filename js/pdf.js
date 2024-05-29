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

async function generatePDF() {
    // Datos inventados para la demostración
    const data = {
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        telefono: "555-1234",
        matricula: "XYZ-123",
        fechaEntrada: "01/07/2024",
        fechaSalida: "15/07/2024",
        cantidadPersonas: 4
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

document.getElementById('btnReservar').addEventListener('click', generatePDF);