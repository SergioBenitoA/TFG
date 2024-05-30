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
                console.log(usuarios);

                const usuarioExistente = usuarios.find(usuario => usuario.correo === emailInput);

                if (usuarioExistente) {
                    alert('El correo ya está registrado. Por favor, use otro correo.');
                } else {
                    const resultado = await crearUsuario(nameInput, emailInput, phoneInput, passwordInput);
                    console.log(resultado);
                    
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                    setTimeout(() => {window.location.href = 'principal.html'},2000);
                }
            } catch (error) {
                console.error('Error al crear usuario:', error);
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});