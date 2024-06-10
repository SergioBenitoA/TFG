import { comprobarUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');


    btnIniciarSesion.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingInput').value;
        const passwordInput = document.getElementById('floatingPassword').value;
        const mensaje = document.getElementById('mensaje');

        if (emailInput && passwordInput) {
            const usuarios = await comprobarUsuario(emailInput, passwordInput);
            if(usuarios.Message){
                localStorage.setItem("correo", emailInput);
                localStorage.setItem('mensaje', '¡Bienvenido a EL OASIS!');
                localStorage.setItem('showToast', 'true');
                    
                window.location.href = 'principal.html';
            } else{
                mensaje.textContent = 'El correo o la contraseña incorrectos';
                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                toastBootstrap.show();
            }
        } else {
            mensaje.textContent = 'Por favor, rellene todos los campos.';
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        }
    });
});