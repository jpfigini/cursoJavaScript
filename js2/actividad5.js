/*
Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
*/


let producto1 = prompt("ingrese producto1");
let producto2 = prompt("ingrese producto2");
let producto3 = prompt("ingrese producto3");
let producto4 = prompt("ingrese producto4");

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    let heladera = "1) " + producto1 + " " +
    "2) " + producto2 + " " +
    "3) " + producto3 + " " +
    "4) " + producto4;
    console.log(heladera);
}
else {
    console.log("Error: Es necesario cargar todos los productos");
}