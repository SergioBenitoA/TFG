import { getUsuarios, crearUsuario } from './api.js';

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
                const usuarios = await getUsuarios();
                const usuarioExistente = usuarios.find(usuario => usuario.correo === emailInput);

                if (usuarioExistente) {
                    // Muestra mensaje de error si el correo ya existe
                    alert('El correo ya está registrado. Por favor, use otro correo.');
                } else {
                    const response = await crearUsuario(nameInput, emailInput, phoneInput, passwordInput);
                    console.log(response);
                    // Aquí puedes añadir lógica adicional, como redireccionar o mostrar un mensaje al usuario

                    const toastTrigger = btnRegistrar
                    const toastLiveExample = document.getElementById('liveToast')

                    if (toastTrigger) {
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                    toastTrigger.addEventListener('click', () => {
                        toastBootstrap.show()
                    })
                    }
                }
            } catch (error) {
                console.error('Error al crear usuario:', error);
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});
