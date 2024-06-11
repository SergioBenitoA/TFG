import { comprobarUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const idioma = localStorage.getItem("lenguaje");

    btnIniciarSesion.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingInput').value;
        const passwordInput = document.getElementById('floatingPassword').value;
        const mensaje = document.getElementById('mensaje');

        if (emailInput && passwordInput) {
            const usuarios = await comprobarUsuario(emailInput, passwordInput);
            if(usuarios.Message){
                localStorage.setItem("correo", emailInput);
                switch (idioma) {
                    case 'EN':
                        localStorage.setItem('mensaje', 'Welcome to EL OASIS!');
                        break;
                    case 'ES':
                        localStorage.setItem('mensaje', '¡Bienvenido a EL OASIS!');
                        break;
                
                    default:
                        break;
                }
                localStorage.setItem('showToast', 'true');
                
                window.location.href = 'principal.html';
            } else{
                switch (idioma) {
                    case 'EN':
                        mensaje.textContent = 'The email or password is incorrect';
                        break;
                    case 'ES':
                        mensaje.textContent = 'El correo o la contraseña incorrectos';
                        break;
                
                    default:
                        break;
                }
                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                toastBootstrap.show();
            }
        } else {
            switch (idioma) {
                case 'EN':
                    mensaje.textContent = 'Please fill in all the fields';
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
    });
});