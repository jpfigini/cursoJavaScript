/*

DESAFÍO COMPLEMENTARIO N° 2:
DESAFÍO COMPLEMENTARIO EXPIRA EL MARTES 06/09/2022 23:59HS
Desafío: Incorporar Arrays

*/

//declaro variables goblales
let numPresup = 0;
let nomCliente = "";
let cantRep = 0;
let repuestos = "";
let total = 0;
let continua = "";
let presupuesto = [];
let repuestosArray = [];

//Declaro una función para iniciar un nuevo presupuesto
function iniciaPresupuesto (){
//Se piden los datos del presupuesto
presupuesto.push("Presupuesto N°" + prompt("Ingrese número de presupuesto:"));
presupuesto.push("Nombre del Cliente: " + prompt("Ingrese nombre del Cliente:"));
cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));
}

//Declaro una función para imprimir un presupuesto
function imprimePresupuesto (numPresup,nomCliente,repuestos,total){
var imprimePresup = presupuesto[0] + "\n" + presupuesto[1] + "\n" + "Repuestos:";

for(let index=0; index < repuestosArray.length; index+2){
imprimePresup = repuestosArray[index] + repuestosArray[index+1]   + "\n" ;
}
imprimePresup = imprimePresup + "Total: $" + total;
alert(imprimePresup);
}

//Declaro un función para la carga de los productos del presupuesto
function cargaPresupuesto (){
//Declaro un bucle mediante la sentencia "for" para cargar los repuestos y su correspondiente precio
for(let index=0; index < cantRep; index++){
repuestosArray.push(prompt("Ingrese repuesto N°" + (index+1)));
let precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
repuestosArray.push(precio);
total = total + precio;
    }
}

do {

//Llamado para iniciar presupuesto
iniciaPresupuesto();

//Llamado para cargar presupuesto
cargaPresupuesto();

//LLamado a la función especifica para mostrar por pantalla los datos del presupuesto en forma ordenada.
imprimePresupuesto(numPresup,nomCliente,repuestos,total);

presupuesto = [];
repuestosArray = [];
total = 0;

} while ("No" != (continua = prompt("Desea cargar otro presupuesto: Si/No:")))