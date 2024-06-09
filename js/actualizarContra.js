import { comprobarUsuarioActualizar, deleteUsuario, actualizarContrasena } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
    const eliminarCuenta = document.getElementById('eliminarCuenta');

    eliminarCuenta.addEventListener('click', (event) => {
        const correo = localStorage.getItem("correo");
        deleteUsuario(correo).then(alert('Cuenta eliminada'));
        localStorage.setItem("correo", "");
        window.location.href = "principal.html";
    });

    btnActualizarContrasena.addEventListener('click', async (event) => {
        event.preventDefault();
        const floatingPassword1 = document.getElementById('floatingPassword1').value;
        const floatingPassword2 = document.getElementById('floatingPassword2').value;
        const floatingPassword3 = document.getElementById('floatingPassword3').value;

        if (floatingPassword1 && floatingPassword2 && floatingPassword3) {
            if (floatingPassword2 === floatingPassword3){
                debugger;
                const email = localStorage.getItem("correo");
                const usuarios = await comprobarUsuarioActualizar(email, floatingPassword1);
                if(usuarios.Message){
                    const actualizada = await actualizarContrasena(email, floatingPassword2);
                    if(actualizada.Message){
                        alert('Contraseña actualizada con éxito');
                    } else{
                        alert('No se ha podido actualizar la contraseña');
                    }
                } else{
                    alert('La contraseña no es correcta');
                }
            } else{
                console.warn('Las contraseñas no coinciden');
            }
            
        } else {
            console.warn('Por favor, rellene todos los campos.');
        }
    });
});