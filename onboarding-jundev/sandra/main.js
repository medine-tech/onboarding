
let inputTarea = document.getElementById("tarea");
let btn = document.getElementById("agregar");
let listado = document.getElementById("listado");
let cantidad = document.getElementById("cantidad");
let proyecto= document.getElementById("parrafotarea")

var total = 0;

btn.onclick = function() {

    if (inputTarea.value == "") {
        alert("ingresa una tarea valida");
        return;
    }
    
    let elemento = inputTarea.value;
    
    let li = document.createElement("li");
    
    li.textContent = elemento;
    
    listado.appendChild(li);
    
    total++;
    cantidad.innerHTML = total;


    
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);



    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    
    inputTarea.value = "";

}