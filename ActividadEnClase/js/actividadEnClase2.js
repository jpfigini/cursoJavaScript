let palabra = prompt("ingrese una palabra");
let numero = prompt("ingrese un número");

let longitud=palabra.length;

if (longitud>5) {
    alert("Es una palabra de longitud mayor a 5");
} 


if (palabra=="Holas") {
    alert("La palabra es Holas");
} 

if (numero > 10 && numero <50) {
    alert("El número " + numero + " está entre 10 y 50");
}

