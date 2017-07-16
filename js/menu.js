// Se "almacenan" los elementos del menu principal en una variable para trabajar con ellos.
var mainMenuItems = document.getElementsByClassName("main-menu-item");

// Se crea un bucle que va a recorrer cada uno de los elementos del menu principal.
for (var i = 0; i < mainMenuItems.length; i++) {
    // Para cada uno de esos elementos se añade un evento que se ejecutara al hacer click sobre ellos.
    mainMenuItems[i].addEventListener("click", function (event) {
        // Se "coge" la ruta COMPLETA de la sección y se "corta" para separar 
        var sectionToGo = this.getElementsByTagName("a")[0].href.split("#");
        // Se cancela el comportamiento por defecto del evento
        event.preventDefault();
        // Se "guarda" la sección a la que se debe ir según el enlace.
        var toGo = sectionToGo[sectionToGo.length - 1];
        // Se llama a la funcion que establece el elemento HTML al que hay que "ir".
        getElementByIdAndScroll(toGo);
    });
}

/**
 *  Funcion que permite establer el elemento al que se debe hacer scroll.
 */
function getElementByIdAndScroll(id) {
    // Se define una variable AUX.
    var element;
    // Si la seccion a la que se quiere ir es la portada.
    if (id === "") {
        element = document.getElementsByClassName("header")[0];
    // Si es cualquier otra.
    }else{
        // Se "guarda" que elemento que marca el inicio de la seccion.
        element = document.getElementById(id);
    }
    // Se llama a la función que finalmente hace el scroll.
    scrollToElement(element);
}

/**
 *  Funcion que hace el scroll hasta la seccion pulsada.
 */
function scrollToElement(element) {
    // Se calcula el salto.
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);

    // Para que el SmoothScroll funcione en Firefox.
    document.documentElement.scrollTop +=  jump;
    // Para que el SmoothScroll funcione en Chrome y Safari.
    document.body.scrollTop +=  jump;
    // Para que el SmoothScroll funcione en IE11.
    window.pageYOffset += jump;

    // Si no es el ultimo "salto" necesario o es mayor que el que se necesita.
    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        // Se actualiza el valor del utlimo "salto".
        element.lastJump = Math.abs(jump);
        // Y se vuelve a llamar a la funcion.
        setTimeout(function() {
            // Para dar otro "salto".
            scrollToElement(element);
        }, 40);
    // Si no.
    } else {
        // Se "reinicia" el "salto".
        element.lastJump = null;
    }
}