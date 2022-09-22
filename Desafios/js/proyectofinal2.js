class Presupuesto {
    constructor(numero, cliente, cantidad, repuestos, total) {
        this.numero = numero;
        this.cliente = cliente;
        this.cantidad = cantidad;
        this.repuestos = repuestos;
        this.total = total;
    }
}

let arregloProductos = [];
let presupuestosArray = [];
let presupid = 0;
let total = 0;
let presupJson;
let cliente;
let cantidad = 0;

//Evento para el botón de agregar repuesto
let botonr = document.getElementById("ingresarep");
botonr.addEventListener("click",agregarRepuesto);
botonr.addEventListener("click",(e) => e.preventDefault());

//Evento para el botón guardar Presupuesto
let botonp = document.getElementById("ingresaform");
botonp.addEventListener("click",agregarPresupuesto);
botonp.addEventListener("click",(e) => e.preventDefault());

function agregarRepuesto(){
    let repuestot = document.getElementById("repuesto").value
    let preciot = document.getElementById("precio").value
    arregloProductos.push([repuestot,preciot]);

    hacerTablaRepuesto();
}

//Carga tabla de repuestos de presupuesto con una tabla dinamica
function hacerTablaRepuesto(){
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    cantidad = arregloProductos.length;
    presupid = presupuestosArray.length;
    if (presupid > 0){
        presupid++;
    }
    for (let i = 0; i < arregloProductos.length; i++){
        tabla += `<tr><td>${arregloProductos[i][0]}</td><td>${arregloProductos[i][1]}</td></tr>`;
        total += parseInt(arregloProductos[i][1]);
        cliente = document.getElementById("cliente").value;
        presupTemp = new Presupuesto(presupid, cliente, cantidad, arregloProductos, total);
        presupJson = JSON.stringify(presupTemp);
        localStorage.setItem('presupuesto',presupJson);
        //console.log(presupJson);
    }
    tabla += `<tr><td>TOTAL</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;

}

//No se terminó de implemetar
//Función que guarda el presupuesto en un arreglo de presupuestos, limpia el localStorage.
function agregarPresupuesto(){
cantidad = arregloProductos.length;
presupid = presupuestosArray.length;
if (presupid > 0){
    presupid++;
}

if (cantidad < 1){
    console.log("No hay nada que guardar");
}
else {
    console.log("Guarda presupuesto");
    localStorage.clear();
}

}
//función que carga la tabla de repuestos sin guardar recuperados del localStorage
function cargaTemporal(presup){
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    console.log(presup.cantidad);
    console.log(presup.repuestos[0][0]);
    console.log(presup.repuestos[0][1]);
    console.log(presup.cliente);
    for (let i = 0; i < presup.cantidad; i++){
        tabla += `<tr><td>${presup.repuestos[i][0]}</td><td>${presup.repuestos[i][1]}</td></tr>`;
        total += parseInt(presup.repuestos[i][1]);
    }
    tabla += `<tr><td>TOTAL</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;
    //let clienteTemp = `<input class="form-control" id="cliente" value=${presup.cliente}>`
    //document.getElementById("cliente").innerHTML = clienteTemp;
}

// Si quedó un presupuesto pendiente de guardar lo levanto desde el localStorage
if (localStorage.getItem("presupuesto")){
let presupCache = JSON.parse(localStorage.getItem('presupuesto'));
cargaTemporal(presupCache);
}