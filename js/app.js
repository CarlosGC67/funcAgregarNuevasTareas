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

    botonEnter.addEventListener('click', () => {
        const tarea = input.value
        if (tarea) {
            agregarTarea(tarea)
        }
        input.value =''
    })
    //Explicacion de la funcion:
    //primero agregamos un addevent listener ala constante del botonEnter para que cuando se haga click se ejecute una funcion arrow
    //luego agregamos la constante tarea con el valor que tenga el input guardandolo en ella
    //si hay algo en la constante tarea 
    //se ejecuta la funcion agregarTarea con el argumento de la constante tarea
    //al finalizar la tarea se limpia el input para que se pueda agregar mas tareas

    document.addEventListener('keyup', function(event){
        if(event.key == 'Enter'){
            const tarea = input.value
            if(tarea){
                agregarTarea(tarea)
            }
            input.value= ''
        }
    })

    //Explicacion de la funcion:
    //Primero agregamos un addevent listener al documento para cuando se levante un tecla se ejecuente un evento
    //Si la tecla es Enter se ejecuta lo siguiente
    //se crea la constante tarea con lo que tenga el valor de input
    //si tiene algo la constante tarea entonces se ejecuta
    //La funcion agregar tarea con el argumento tarea
    //Al final se borra el valor de input para que se pueda agregar mas tareas