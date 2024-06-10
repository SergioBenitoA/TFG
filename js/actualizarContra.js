import { comprobarUsuarioActualizar, deleteUsuario, actualizarContrasena } from './api.js';

document.addEventListener('DOMContentLoaded', () => {

    // const myModal = document.getElementById('myModal')
    // const myInput = document.getElementById('myInput')

    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
    const eliminarCuenta = document.getElementById('eliminarCuenta');
    const mensaje = document.getElementById('mensaje');

    eliminarCuenta.addEventListener('click', async (event) => {
        event.preventDefault();
        const correo = localStorage.getItem("correo");

        const usuarioEliminado = await deleteUsuario(correo);
        if (usuarioEliminado.Message) {
            // myModal.addEventListener('shown.bs.modal', () => {
            //     myInput.focus()
            // })
            localStorage.setItem("correo", "");
            localStorage.setItem('mensaje', 'Su cuenta se ha eliminado correctamente');
            localStorage.setItem('showToast', 'true');

            window.location.href = "principal.html";
        } else{
            mensaje.textContent = 'No se ha podido eliminar la cuenta';
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        }
        
    });

    btnActualizarContrasena.addEventListener('click', async (event) => {
        event.preventDefault();
        const floatingPassword1 = document.getElementById('floatingPassword1').value;
        const floatingPassword2 = document.getElementById('floatingPassword2').value;
        const floatingPassword3 = document.getElementById('floatingPassword3').value;

        if (floatingPassword1 && floatingPassword2 && floatingPassword3) {
            if (floatingPassword2 === floatingPassword3){
                const email = localStorage.getItem("correo");
                const usuarios = await comprobarUsuarioActualizar(email, floatingPassword1);
                if(usuarios.Message){
                    const actualizada = await actualizarContrasena(email, floatingPassword2);
                    if(actualizada.Message){
                        localStorage.setItem("correo", email);
                        localStorage.setItem('mensaje', 'Contraseña actualizada con éxito');
                        localStorage.setItem('showToast', 'true');

                        window.location.href = 'principal.html';
                    } else{
                        mensaje.textContent = 'No se ha podido actualizar la contraseña';
                        const toastLiveExample = document.getElementById('liveToast');
                        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                        toastBootstrap.show();
                    }
                } else{
                    mensaje.textContent = 'La contraseña no es correcta';
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                }
            } else{
                mensaje.textContent = 'Las contraseñas no coinciden';
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