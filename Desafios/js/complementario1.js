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
let cantRep = prompt("Ingrese la cantidad de repuestos:");

let repuestos = ""

for(let index=0; index < cantRep; index++){
let repuestos = repuestos + prompt("Ingrese repuesto " + (index+1)+":");
repuestos = repuestos + " $" + prompt("Ingrese precio del repuesto" + (index+1)+" $:") + "/n";
}

