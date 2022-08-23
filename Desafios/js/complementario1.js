/*
CONSIGNA
La CONSIGNA PARA ESTE DESAFÍO es enviar un ejercicio en el cual utilicen un ciclo de iteración que funcione correctamente. 
No tiene que ser nada complejo. Por ciclo de iteración entendemos FOR, WHILE y DO-WHILE. El if y el switch los pueden incluir, 
pero teniendo en cuenta que son condicionales, no basta con incluir eso solo si no hay ningún ciclo de iteración.

DESARROLLO
Carga de listado de materiales para presupuesto de reparación de un vehículo. El usuario debe ingresar el número de presupuesto,
nombre del cliente y la cantidad, descripción y costo de los repuestos a utilizar.
*/

//Se piden los datos del presupuesto
let numPresup = "Presupuesto N°" + prompt("Ingrese número de presupuesto:");
let nomCliente = "Nombre del Cliente: " + prompt("Ingrese nombre del Cliente:");
let cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));

//declaro variables para cantidad y listado de repuestos
let repuestos = "";
let total = 0;

//Declaro un bucle mediante la sentencia "for" para cargar los repuestos y su correspondiente precio
for(let index=0; index < cantRep; index++){
repuestos = repuestos + prompt("Ingrese repuesto N°" + (index+1));
let precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
repuestos = repuestos + " $" + precio + "\n";
total = total + precio;
}

//Muestro por pantalla los datos del presupuesto en forma ordenada.
alert(numPresup + "\n" + nomCliente + "\n" + "Repuestos:" + "\n" + repuestos + "\n" + "Total: $" + total);
