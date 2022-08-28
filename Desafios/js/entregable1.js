/*
DESAFÍO ENTREGABLE N° 1
Compuesto por…
Crear un algoritmo con un condicional.
Crear un algoritmo utilizando un ciclo.
Armar un simulador interactivo, la estructura final de tu proyecto integrador.

*/

//declaro variables goblales
let numPresup = 0;
let nomCliente = "";
let cantRep = 0;
let repuestos = "";
let total = 0;

//Defino una función para iniciar un nuevo presupuesto
function iniciaPresupuesto (){
//Se piden los datos del presupuesto
numPresup = "Presupuesto N°" + prompt("Ingrese número de presupuesto:");
nomCliente = "Nombre del Cliente: " + prompt("Ingrese nombre del Cliente:");
cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));
}

//Defino una función para imprimir un presupuesto
function imprimePresupuesto (numPresup,nomCliente,repuestos,total){
    alert(numPresup + "\n" + nomCliente + "\n" + "Repuestos:" + "\n" + repuestos + "\n" + "Total: $" + total);
}

//Llamado para iniciar presupuesto
iniciaPresupuesto();

//Declaro un bucle mediante la sentencia "for" para cargar los repuestos y su correspondiente precio
for(let index=0; index < cantRep; index++){
repuestos = repuestos + prompt("Ingrese repuesto N°" + (index+1));
let precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
repuestos = repuestos + " $" + precio + "\n";
total = total + precio;
}

//LLamado a la función especifica para mostrar por pantalla los datos del presupuesto en forma ordenada.
imprimePresupuesto(numPresup,nomCliente,repuestos,total);
