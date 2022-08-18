/*
Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.
*/
let cadena = "";
for (let index = 0; index < 10; index++){
cadena = cadena + " " + prompt("Ingrese el nombre " + (index+1));
}

console.log(cadena);