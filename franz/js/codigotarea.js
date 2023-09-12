let numeroTareas = 0
function iniciarGestor(){
    let sectionIngresarTareas = document.getElementById('ingreso-tareas')
    sectionIngresarTareas.style.display ='none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display ='none'

    let botonGestionarActividades = document.getElementById('boton-gestionar')
    botonGestionarActividades.addEventListener('click', gestionarNuevasTareas)

    let botonGuardar = document.getElementById('boton-guardar')
    botonGuardar.addEventListener('click', validarTarea)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarGestor)
}

function gestionarNuevasTareas(){
    let sectionIngresarTareas = document.getElementById('ingreso-tareas')
    sectionIngresarTareas.style.display ='block'
    let botonGestionarActividades = document.getElementById('boton-gestionar')
    botonGestionarActividades.style.display ='none'

}

function validarTarea(){
    let tarea = document.getElementById('tarea')
    let prioridad = document.getElementById('prioridad')
    let descripcion = document.getElementById('descripcion')
    let dias = document.getElementById('dias')
    if (tarea.value == "" || prioridad.value == "" || descripcion.value == "" || dias.value == ""){
        alert('todos los datos son necesarios')
    } else{
        crearTarea()
    }

}

function crearTarea(){

    let sectionAlmacenamiento =document.getElementById('almacenamiento')
    let tarea = document.getElementById('tarea')
    let prioridad = document.getElementById('prioridad')
    let descripcion = document.getElementById('descripcion')
    let dias = document.getElementById('dias')
    let parrafo = document.createElement('p')
    numeroTareas++
    parrafo.innerHTML = 'Nro: '+numeroTareas+'->> Tarea: '+tarea.value+', Prioridad: '+prioridad.value+', Descripcion: '+descripcion.value+', Duracion Estimada: '+dias.value+' dias'
    sectionAlmacenamiento.appendChild(parrafo)
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display ='block'
    limpiarCajaTexto()
    
}
function limpiarCajaTexto(){
    document.getElementById('tarea').value = ""
    document.getElementById('prioridad').value = ""
    document.getElementById('descripcion').value = ""
    document.getElementById('dias').value = ""
    document.getElementById('tarea').focus()
    
    
}
function reiniciarGestor(){
    limpiarCajaTexto()
    location.reload()
}

window.addEventListener('load', iniciarGestor)