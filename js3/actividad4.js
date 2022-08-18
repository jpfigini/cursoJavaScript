/*
Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.
*/

let alumno = prompt("ingrese alumno");

let listaAlumnos = ""

while (alumno != "Voldemort"){
listaAlumnos = listaAlumnos + alumno + "\n";
alumno = prompt("ingrese alumno");
}


console.log(listaAlumnos);