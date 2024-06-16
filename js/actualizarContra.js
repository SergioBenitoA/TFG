import { comprobarUsuarioActualizar, deleteUsuario, actualizarContrasena } from './api.js';

document.addEventListener('DOMContentLoaded', () => {

    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
    const eliminarCuenta = document.getElementById('eliminarCuenta');
    const mensaje = document.getElementById('mensaje');

    eliminarCuenta.addEventListener('click', async (event) => {
        event.preventDefault();
        const correo = localStorage.getItem("correo");

        const usuarioEliminado = await deleteUsuario(correo);
        if (usuarioEliminado.Message) {
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

    const idioma = localStorage.getItem("lenguaje");

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
                        switch (idioma) {
                            case 'EN':
                                localStorage.setItem('mensaje', 'Password successfully updated');
                                break;
                            case 'ES':
                                localStorage.setItem('mensaje', 'Contraseña actualizada con éxito');
                                break;
                        
                            default:
                                break;
                        }
                        localStorage.setItem('showToast', 'true');

                        window.location.href = 'principal.html';
                    } else{
                        switch (idioma) {
                            case 'EN':
                                mensaje.textContent = 'The password could not be updated';
                                break;
                            case 'ES':
                                mensaje.textContent = 'No se ha podido actualizar la contraseña';
                                break;
                        
                            default:
                                break;
                        }
                        const toastLiveExample = document.getElementById('liveToast');
                        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                        toastBootstrap.show();
                    }
                } else{
                    switch (idioma) {
                        case 'EN':
                            mensaje.textContent = 'The password is incorrect';
                            break;
                        case 'ES':
                            mensaje.textContent = 'La contraseña no es correcta';
                            break;
                    
                        default:
                            break;
                    }
                    const toastLiveExample = document.getElementById('liveToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                    toastBootstrap.show();
                }
            } else{
                switch (idioma) {
                    case 'EN':
                        mensaje.textContent = 'The passwords do not match';
                        break;
                    case 'ES':
                        mensaje.textContent = 'Las contraseñas no coinciden';
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
                    mensaje.textContent = 'Por favor, rellene todos los campos';
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