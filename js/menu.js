// Se "almacenan" los elementos del menu principal en una variable para trabajar con ellos.
var mainMenuItems = document.getElementsByClassName("main-menu-item");
console.log(mainMenuItems);
// Se crea un bucle que va a recorrer cada uno de los elementos del menu principal.
for (var i = 0; i < mainMenuItems.length; i++) {
    // Para cada uno de esos elementos se añade un evento que se ejecutara al hacer click sobre ellos.
    mainMenuItems[i].addEventListener("click", function (event) {
        // Se "coge" la ruta COMPLETA de la sección y se "corta" para separar 
        var sectionToGo = this.getElementsByTagName("a")[0].href.split("#");
        // Se cancela el comportamiento por defecto del evento
        event.preventDefault();
        //
        var toGo = sectionToGo[sectionToGo.length - 1];
        getElementByIdAndScroll(toGo);
    });
}

function getElementByIdAndScroll(id) {
    console.log("getElementByIdAndScroll");
    var element;
    if (element === "") {
        element = document.getElementsByClassName("header")[0];
    }else{
        element = document.getElementById(id);
    }
console.log(element);
    scrollToElement(element);
}

function scrollToElement(element) {
    console.log("ScrollToElement");
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    console.log(jump)
    document.documentElement.scrollTop +=  jump;
    document.body.scrollTop +=  jump;
    window.pageYOffset += jump;
    console.log(document.documentElement.scrollTop);
    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);
        setTimeout(function() {
            scrollToElement(element);
        }, 40);
    } else {
        element.lastJump = null;
    }
}