
//Validacion de formulario de la pagina de registro

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(this);
    if (validar(this)) {
this.Submit();
    }
});

function limpiarError() {
var errores = document.getElementsByClassName('error');
for (let i=0; i<errores.length; i++) {
    errores[i].innerHTML = '';
}
};

function validar(formulario) {
limpiarError();

    if ( formulario.nombre.value.length == 0 ) {
    document.getElementById('errorNombre').innerText = "Completar Campo";
    formulario.nombre.focus();
    return false;
}
if ( formulario.apellido.value.length == 0 ) {
    document.getElementById('errorApellido').innerText = "Completar Campo";
    formulario.apellido.focus();
    return false;
}

var exReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
if (!exReg.test(formulario.email.value)){
    document.getElementById('errorEmail').innerText = "Completar Campo";
    formulario.email.focus();
    return false;
}

if(formulario.password.value.trim().length  == 0){
    document.getElementById('errorPassword').innerText = "Completar Campo";
    formulario.contraseña.focus();
    return false;
}
if(formulario.password2.value.length != formulario.password.value.length){
    document.getElementById('errorPassword').innerText = "Las contraseñas son distintas";
    formulario.contraseña2.focus();
    return false;
}
if(formulario.pais.value == '' ){
    document.getElementById('errorPais').innerText = "Seleccione un pais";
    formulario.pais.focus();
    return false
}
if(!formulario.terminos.checked){
    document.getElementById('errorTerminos').innerText = "Debe aceptar terminos y condiciones";
    formulario.terminos.focus();
    return false
}

alert ("Se generó registro correctamente");
return true;
}

