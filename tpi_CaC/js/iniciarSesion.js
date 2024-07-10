document.getElementById('miFormul').addEventListener('submit', function(event) {
    event.preventDefault();
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

var exReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
if (!exReg.test(formulario.email.value)){
    document.getElementById('errorEmail').innerText= "Debe ingresar un Email válido";
    formulario.email.focus();
    return false;
}

if ( formulario.password.value.length == 0 ) {
    document.getElementById('errorPassword').innerText= "Debe ingresar la contraseña";
    formulario.nombre.focus();
    return false;
}

}