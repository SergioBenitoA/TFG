import { comprobarUsuario } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');

    btnIniciarSesion.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingInput').value;
        const passwordInput = document.getElementById('floatingPassword').value;

        if (emailInput && passwordInput) {
            try {
                console.log('hola');
                const usuarios = await comprobarUsuario(emailInput, passwordInput);
                if(usuarios.Message){
                    localStorage.setItem("correo", emailInput);
                    localStorage.setItem('showToast', 'true');
                        
                    window.location.href = 'principal.html';
                } else{
                    mensajeError.textContent = "El correo o la contraseña son incorrectos";
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                }
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión. Intente nuevamente más tarde.');
            }
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});