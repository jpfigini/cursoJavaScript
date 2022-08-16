/*
Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
*/


let producto1 = prompt("ingrese producto1");
let producto2 = prompt("ingrese producto2");
let producto3 = prompt("ingrese producto3");
let producto4 = prompt("ingrese producto4");

if (producto1 != "") {
    let p1 = true;
}

if (producto2 != "") {
    let p2 = true;
}

if (producto3 != "") {
    let p3 = true;
}

if (producto4 != "") {
    let p4 = true;
}

if (p1 && p2 && p3 && p4) {
    console.log("Productos: " + producto1 + ", " + producto2 + ", " + producto3 + ", " + producto4);
} else {
    console.log("Error: Es necesario cargar todos los productos");
}