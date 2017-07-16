// Se define un array vacio que almacenara las tareas.
var task = [];
// Se asignan variables a los distintos elementos.
var form = document.getElementsByTagName("form")[1];
var taskName = document.getElementById("taskName");
var addTask = document.getElementById("addTask");

/*
    Función que permite crear filas a partir de las tareas almacenadas.
 */
var drawTasks =  function (){
    // Se "vacia" el contenido de la tabla insertando HTML vacio.
    document.getElementById("tasks-table").innerHTML = " ";
    // Se FACTORIZA la tabla para trabajar coon ella mas comodamente.
    var table = document.getElementById("tasks-table");
    // Se define e inicializa una fila vacia que guardará el HTML creado dinamicamnete. 
    var rows =" ";

    // Para cada tarea del array se crea una fila de la tabla.
    for(var i = 0; i < task.length; i++) {
        rows += "<tr style='text-align:center'><td>" + task[i].id + "</td><td>" + task[i].name + "</td>" +
        "<td><button id='delete-task' class='submit-button' disabled>Borrar</button></td></tr>"
    }
    
    // Se añaden las filas generadas a la tabla.
    table.innerHTML = table.innerHTML + rows;
}

/*
    Función que realiza peticion AJAX a servidor para insertar una tarea.
 */
var createTask = function (name){
    // Se crea un elemento XMLHttpRequest.
    var XHR = new XMLHttpRequest();
    // Se define el tipo de operacion.
    XHR.open("POST", "http://localhost:8000/api/task", true);
    // Se incluye la cabecera necesaria para el envio de datos JSON.
    XHR.setRequestHeader("Content-Type","application/json");
    // Se define la funcion que controla los estados del elemento XMLHttpRequest.
    XHR.onreadystatechange = function () {
        // Cuando se produzca el estado que interesa.
        if (XHR.readyState === 4){
            // Se incluye la respuesta del servidor en el array.
            task.push(JSON.parse(XHR.responseText));
            // Se "dibujan" las tareas.
            drawTasks();
        } else if (XHR.readyState === 4){
            console.log("Sorry!, página no encontrada, 404");
        }
    }
    // Se envia la tarea al servidor.
    XHR.send(JSON.stringify({"name":name}));
}

/*
    Función que realiza peticion AJAX a servidor de las tareas almacenadas. 
*/
var getTasks = function (name){
    // Se crea un elemento XMLHttpRequest.
    var XHR = new XMLHttpRequest();
    // Se define el tipo de operacion.
    XHR.open("GET", "http://localhost:8000/api/task", true);
    // Se incluye la cabecera necesaria para el envio de datos JSON.
    XHR.setRequestHeader("Content-Type","application/json");
    // Se define la funcion que controla los estados del elemento XMLHttpRequest.
    XHR.onreadystatechange = function () {
        // Cuando se produzca el estado que interesa.
        if (XHR.readyState === 4){
            // Se iguala la respuesta del servidor al array.
            task = (JSON.parse(XHR.responseText));
            // Se "dibujan" las tareas.
            drawTasks();
        } else if (XHR.readyState === 4){
            console.log("Sorry!, página no encontrada, 404");
        }
    }
    // Se envia la tarea al servidor.
    XHR.send();
}

/*
    Se añade un evento al boton de la web para crear una nueva tarea.
*/
addTask.addEventListener("click", function (event) {
    // Se comprueba que el campo no esta vacio.
    if(taskName.checkValidity() === false){
        // Se elimina el comportamiento por defecto del click sobre el boton.
        event.preventDefault();
        // Se muestra un aviso al usuario si campo de texto esta vacio.
        alert("El nombre de la tarea no puede estar vacio.");
        // Se cancela la ejecucion del evento.
        return false;
    }
    // Se crea y almacena la tarea.
    createTask(taskName.value);
    // Se borra el campo de texto.
    form.reset();
    // Se elimina el comportamiento por defecto del evento "click".
    event.preventDefault();
});

// Se "cargan" las tareas pendientes cuando se carga la página.
getTasks();

