import { getUsuarios } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');

    btnIniciarSesion.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('floatingInput').value;
        const passwordInput = document.getElementById('floatingPassword').value;

        if (emailInput && passwordInput) {
            try {
                const usuarios = await getUsuarios();
                const encryptedPassword = encryptPassword(passwordInput); // Encriptamos la contraseña

                const usuario = usuarios.find(usuario => usuario.correo === emailInput && usuario.contrasena === encryptedPassword);

                if (usuario) {
                    // Guardar el usuario en localStorage
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    
                    // Redirigir al usuario a la página principal
                    window.location.href = 'principal.html';
                } else {
                    // Mostrar mensaje de error
                    alert('Correo o contraseña incorrectos');
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