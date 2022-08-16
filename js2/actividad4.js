/*
Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.


*/

let numero = prompt("Ingrese número");

if (numero >= 0 && numero <= 1000) {
    console.log("Presupuesto bajo");
} 
    else if  (numero >= 1001 && numero <= 3000) {
    console.log("Presupuesto Meido");

}
else if  (numero > 3000) {
    console.log("Presupuesto alto"); }
