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

/*
 */
function maxWords (texto) {

    texto = texto.replace(/[ ]+/g," ");
    texto = texto.replace(/^ /,"");
    texto = texto.replace(/ $/,"");

    var numPalabras = texto.split(" ");

    if(numPalabras.length <= 150) {
        return true;
    }else{
        return false;
    }
}

/*
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

    if(maxWords(inputMensaje.value) === false){
        alert("El mensaje es demasiado largo");
        inputMensaje.focus();
        event.preventDefault();
        return false;
    }

    event.preventDefault();
});

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


