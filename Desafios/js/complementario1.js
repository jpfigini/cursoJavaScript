/*
CONSIGNA
La CONSIGNA PARA ESTE DESAFÍO es enviar un ejercicio en el cual utilicen un ciclo de iteración que funcione correctamente. 
No tiene que ser nada complejo. Por ciclo de iteración entendemos FOR, WHILE y DO-WHILE. El if y el switch los pueden incluir, 
pero teniendo en cuenta que son condicionales, no basta con incluir eso solo si no hay ningún ciclo de iteración.

DESARROLLO
Carga de listado de materiales para presupuesto de reparación de un vehículo. El usuario debe ingresar el número de presupuesto,
nombre del cliente y la cantidad, descripción y costo de los repuestos a utilizar.
"/n" 
*/

let numPresup = "Presupuesto N°:" + prompt("Ingrese número de presupuesto:");
let nomCliente = "Nombre del Cliente:" + prompt("Ingrese nombre del Cliente:");
let cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));

let repuestos = "";
let total = 0;

for(let index=0; index < cantRep; index++){
repuestos = repuestos + prompt("Ingrese repuesto N°" + (index+1));
let precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
repuestos = repuestos + " $" + precio + "\n";
total = total + precio;
}

console.log(repuestos + "\n" + "Total: $" + total);
