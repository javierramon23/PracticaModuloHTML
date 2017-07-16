// Se asignan los distintos elementos del DOM a variables.
var form = document.getElementsByTagName("form")[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var inputEmail = document.getElementById("email");
var inputTelefono = document.getElementById("telefono");
var inputMensaje = document.getElementById("mensaje");

var inputComoMeConoces = {
    modoUno: document.getElementById("conocido_1"),
    modoDos: document.getElementById("conocido_2"),
    modoTres: document.getElementById("conocido_3"),
    otroModo: document.getElementById("conocido_4")
};

var submitButton = document.getElementById("enviar");

/*
    Función que controla el numero de palabras que se escriben en el textarea.
 */
function maxWords (texto) {
    // Definimos tres expresiones regulares que eliminan los espacios blancos "inutiles".
    // y se aplican al texto.
    texto = texto.replace(/[ ]+/g," ");
    texto = texto.replace(/^ /,"");
    texto = texto.replace(/ $/,"");
    // Se "divide" el texto en palabras. 
    var numPalabras = texto.split(" ");
    // Si no superan el numero establecido.
    if(numPalabras.length <= 150) {
        // El contenido es valido.
        return true;
    }else{
        // Si no, no es valido.
        return false;
    }
}

/*
    Se añade un evento al boton del formulario para controlar los datos introducidos.
 */
form.addEventListener("submit", function (event){
    if(inputNombre.checkValidity() === false){
        alert("Nombre no puede estar vacio");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if(inputApellidos.checkValidity() === false){
        alert("Apellidos no puede estar vacio");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

    if(inputEmail.checkValidity() === false){
        alert("La forma del email no es correcta");
        inputEmail.focus();
        event.preventDefault();
        return false;
    }
    
    if(inputTelefono.checkValidity() === false){
        alert("El numero de telefono no es correcto");
        inputTelefono.focus();
        event.preventDefault();
        return false;
    }

    if(inputMensaje.checkValidity() === false){
        alert("El mensaje no se puede enviar vacio");
        inputMensaje.focus();
        event.preventDefault();
        return false;
    }

    if(maxWords(inputMensaje.value) === false){
        alert("El mensaje es demasiado largo");
        inputMensaje.focus();
        event.preventDefault();
        return false;
    }

    submitButton.setAttribute("disabled","true");
    event.preventDefault();

    setTimeout(function() {
        form.reset();
        submitButton.removeAttribute("disabled");
        alert("Formulario Enviado Correctamente");
    }, 1000);
});

/*
    Se definen una serie de eventos para mostrar u ocultar el un cuadro de texto en funcion
    del "radio button" seleccionado.
 */
inputComoMeConoces.otroModo.addEventListener("click", function(event) {
        document.getElementsByClassName("hiden-row")[0].style.visibility = "visible";
});

inputComoMeConoces.modoUno.addEventListener("click", function(event) {
        document.getElementsByClassName("hiden-row")[0].style.visibility = "hidden";
});

inputComoMeConoces.modoDos.addEventListener("click", function(event) {
        document.getElementsByClassName("hiden-row")[0].style.visibility = "hidden";
});

inputComoMeConoces.modoTres.addEventListener("click", function(event) {
        document.getElementsByClassName("hiden-row")[0].style.visibility = "hidden";
});