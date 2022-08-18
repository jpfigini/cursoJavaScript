/*
Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, 
según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
*/

let numero = prompt("ingrese numero 1 al 4");

let listaAlumnos = ""

while (numero != "ESC"){
    switch(numero) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("item invalido");
            break;

    }
    numero = prompt("ingrese numero 1 al 4 o ESC para terminar");
}


