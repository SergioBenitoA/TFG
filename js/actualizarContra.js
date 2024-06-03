import { comprobarUsuario, actualizarContrasena } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');

    btnActualizarContrasena.addEventListener('click', async (event) => {
        
        const floatingPassword1 = document.getElementById('floatingPassword1').value;
        const floatingPassword2 = document.getElementById('floatingPassword2').value;
        const floatingPassword3 = document.getElementById('floatingPassword3').value;
        debugger;
        if (floatingPassword1 && floatingPassword2 && floatingPassword3) {
            if (floatingPassword2 === floatingPassword3){
                try {
                    const email = localStorage.getItem("correo");
                    const usuarios = await comprobarUsuario(email, floatingPassword1);
                    if(usuarios.message){
                        const actualizada = await actualizarContrasena(email, floatingPassword2);
                        if(actualizada.message === 'true'){
                            alert('Contraseña actualizada con éxito');
                        } else{
                            alert('NO FURRULA');
                        }

                        // PONER QUE SE A ACTUALIZADO CORRECTAMENTE
                        // localStorage.setItem('showToast', 'true');
                            
                        // window.location.href = 'principal.html';
                    } else{
                        alert('NO FURRULA x2');

                        // PONER QUE LA CONTRA NO ES CORRECTA
                        // mensajeError.textContent = "El correo o la contraseña son incorrectos";
                        // const toastLiveExample = document.getElementById('liveToast');
                        // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                        // toastBootstrap.show();
                    }
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

function inputIsEmpty(string) {
    return string === '';
}