/*
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”
*/

let nombre = prompt("Ingrese su nombre:");

let culpable = "Bart";

if (nombre == culpable) {
    console.log("Fui yo");
} 
    else 
{ 
    console.log("Yo no fui");
}

