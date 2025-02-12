// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){

    //si no esta vacia la caja de texto  entonces ingresa un amigo al vector
    if ((document.getElementById('amigo').value)!= "" ){

        var nombreAmigo = document.getElementById('amigo').value;

        amigos.push(nombreAmigo);
        
        actualizarListaAmigos();
        
        borrarCaja();


    }else{

        //si esta vacia la caja manda un mensaje de error

        alert('Ingrese un nombre valido');

    }
    return;
};


// esta funcion muestra los elementos de la lista en la pantalla, debajo de la caja de texto
function actualizarListaAmigos(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";    

    for (var i=0 ;i <= (amigos.length-1);i++ ){

        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
        
    }
    return;
}


// se sortea cual de todos los nombres ingresados sera el amigo secreto
function sortearAmigo (){

    // si largo del vector es 0 entonces no hay datos ingresados, manda mensaje pidiendo ingesar un nombre para el sorteo
    if (amigos.length === 0 ){

        alert('Ingrese un nombre para el sorteo');

    } else {
        // generar un numero aleatorio para encontar el ganador
        let ganador =  (Math.floor(Math.random()*(amigos.length)+1))-1;

        
        console.log(ganador);
        console.log(amigos.length);

        asignarTextoElemento('#listaAmigos','');

        asignarTextoElemento('#resultado','El ganador del sorteo es '+ amigos[ganador]);
        
    };
    return;
};



//asigna texto a un objeto html
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 
}

//inicializa caja de texto con id = amigo
function borrarCaja(){
    document.querySelector('#amigo').value = '';
    return;
};