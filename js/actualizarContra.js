import { deleteUsuario, actualizarContrasena } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
    const eliminarCuenta = document.getElementById('eliminarCuenta');

    eliminarCuenta.addEventListener('click', (event) => {
        const correo = localStorage.getItem("correo");
        deleteUsuario(correo).then(alert('Cuenta eliminada'));
        localStorage.setItem("correo", "");
    });

    btnActualizarContrasena.addEventListener('click', (event) => {
        
        const floatingPassword2 = document.getElementById('floatingPassword2').value;
        const floatingPassword3 = document.getElementById('floatingPassword3').value;

        if (floatingPassword2 && floatingPassword3) {
            if (floatingPassword2 === floatingPassword3){
                try {
                    const email = localStorage.getItem("correo");
                    actualizarContrasena(email, floatingPassword2)
                        .then(alert('Contraseña actualizada con éxito'));                    
                } catch (error) {
                    console.error('Error al iniciar sesión:', error);
                    alert('Error al iniciar sesión. Intente nuevamente más tarde.');
                }
            } else{
                console.warn('Las contraseñas no coinciden');
            }
            
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});