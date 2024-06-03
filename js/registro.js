import { getUsuarios, crearUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnRegistrar = document.getElementById('btnRegistrar');

    btnRegistrar.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingEmail').value;
        const nameInput = document.getElementById('floatingName').value;
        const phoneInput = document.getElementById('floatingPhone').value;
        const passwordInput = document.getElementById('floatingPassword').value;
        const mensajeError = document.getElementById('mensajeError');

        if (emailInput && nameInput && phoneInput && passwordInput) {
            try {
                const usuarios = await getUsuarios();
                console.log(usuarios);

                const usuarioExistente = usuarios.find(usuario => usuario.correo === emailInput);

                if (usuarioExistente) {
                    mensajeError.textContent = "El correo ya está registrado. Por favor, use otro correo.";
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                } else {
                    const resultado = await crearUsuario(nameInput, emailInput, phoneInput, passwordInput);

                    if(Object.entries(resultado).length === 0){
                        mensajeError.textContent = "Error al crear usuario";
                        const toastLiveExample = document.getElementById('liveToast');
                        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                        toastBootstrap.show();
                    } else{
                        localStorage.setItem("correo", emailInput);
                        localStorage.setItem('showToast', 'true');
                        
                        window.location.href = 'principal.html';
                    }
                }
            } catch (error) {
                mensajeError.textContent = "Error al crear usuario";
                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                toastBootstrap.show();
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});