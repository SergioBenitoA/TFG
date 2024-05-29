import { crearUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnRegistrar = document.getElementById('btnRegistrar');

    btnRegistrar.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingEmail').value;
        const nameInput = document.getElementById('floatingName').value;
        const phoneInput = document.getElementById('floatingPhone').value;
        const passwordInput = document.getElementById('floatingPassword').value;

        if (emailInput && nameInput && phoneInput && passwordInput) {
            try {
                const response = await crearUsuario(nameInput, emailInput, phoneInput, passwordInput);
                console.log(response);
                // Aquí puedes añadir lógica adicional, como redireccionar o mostrar un mensaje al usuario
            } catch (error) {
                console.error('Error al crear usuario:', error);
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });

    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    btnRegistrar.addEventListener('click', function() {
        modal.show();
    });

    var closeButton = document.querySelector('.close[data-dismiss="modal"]');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.hide();
        });
    }
});