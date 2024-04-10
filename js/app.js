const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');

//Funcion para agregar tareas

function agregarTarea (tarea) {
    const elemento = `
                       <li id="elemento">                                      
                       <i class="far fa-circle co" data="realizado" id="0"></i>
                       <p class="text"> ${tarea} </p>
                       <i class="fas fa-trash de" data="eliminado" id="0"></i>
                       </li>
                      `
                      //Primero agregamos una etiqueta lista con el id elemento para llamar a la clase css
                      //Luego agregamos el icono de check con la data realizado para poder llamarlos mas adelante
                      //Se agrega el parrafo con la clase text llamando al css y se imprime el argumento de la funcion
                      //Finalmente se agrega el icono de delete con la data eliminado para poder llamarlos mas adelante   
    lista.insertAdjacentHTML("beforeend", elemento);
    
    //Agrega la const elemento justo antes de que termine lista para que si se agregan
    //mas tareas pueda mostrarlas en secuencia de creacion
                    }