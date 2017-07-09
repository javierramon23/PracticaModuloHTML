// Se define un array vacio que almacenara las tareas.
var task = [];

// Función que permite crear filas a partir de las tareas almacenadas.
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
        "<td><button id='delete-task' class='submit-button'>Borrar</button></td></tr>"
    }
    
    // Se añaden las filas generadas a la tabla.
    table.innerHTML = table.innerHTML + rows;
}

// Función que realiza peticion AJAX a servidor para insertar una tarea.
var createTask = function (name){
    console.log("entro");
    var XHR = new XMLHttpRequest();

    XHR.open("POST", "http://localhost:8000/api/task", true);
    XHR.setRequestHeader("Content-Type","application/json");
   
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4){
            task.push(JSON.parse(XHR.responseText));
            drawTasks();
        } else if (XHR.readyState === 4){
            console.log("Sorry!, página no encontrada, 404");
        }
    }

    XHR.send(JSON.stringify({"name":name}));
}

var getTasks = function (name){
   
    var XHR = new XMLHttpRequest();

    XHR.open("GET", "http://localhost:8000/api/task", true);
    XHR.setRequestHeader("Content-Type","application/json");
   
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4){
            task = (JSON.parse(XHR.responseText));
            drawTasks();
        } else if (XHR.readyState === 4){
            console.log("Sorry!, página no encontrada, 404");
        }
    }

    XHR.send();
}

// Creamos un evento sobre el boton del gestor de tareas.
document.getElementById("new-task").addEventListener("click", function(event){
    event.preventDefault();
    createTask(document.getElementById("task").value);
});

// 
getTasks();

