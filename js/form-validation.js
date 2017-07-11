var form = document.getElementsByTagName("form")[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var inputEmail = document.getElementById("email");
var inputTelefono = document.getElementById("telefono");
var inputMensaje = document.getElementById("mensaje");

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
        alert("El numero de telefono no es correcto");
        inputMensaje.focus();
        event.preventDefault();
        return false;
    }

    event.preventDefault();

});

