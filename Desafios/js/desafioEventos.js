let arregloProductos = [];

let botonr = document.getElementById("ingresarep");
botonr.addEventListener("click",agregarRepuesto);
botonr.addEventListener("click",(e) => e.preventDefault());

function agregarRepuesto(){
    let repuestot = document.getElementById("repuesto").value
    let preciot = document.getElementById("precio").value
    console.log("repuesto");
    arregloProductos.push([repuestot,preciot]);

    hacerTablaRepuesto();
}


function hacerTablaRepuesto(){
    let total = 0;
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    for (let i = 0; i < arregloProductos.length; i++){
        tabla += `<tr><td>${arregloProductos[i][0]}</td><td>${arregloProductos[i][1]}</td></tr>`;
        total += parseInt(arregloProductos[i][1]);
    }
    tabla += `<tr><td>TOTAL</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;
}


