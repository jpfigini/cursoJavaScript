/*
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.

*/

let numero = prompt("Ingrese número del 1 al 4");

//let minuscula = "y";

if (numero == 1) {
    console.log("Elegiste a Homero");
} 
    else if  (numero == 2) {
    console.log("Elegiste a Marge");

}
else if  (numero == 3) {
    console.log("Elegiste a Bart"); }

    else if  (numero == 4) {
        console.log("Elegiste a Lisa"); }

        else console.log("Número inválido");

