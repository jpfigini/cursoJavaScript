/*
Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.
*/

let letra = prompt("Ingrese letra y o Y");

let minuscula = "y";

if (letra === minuscula) {
    console.log("Correcto");
} 
    else 
{ 
    console.log("Error");
}

