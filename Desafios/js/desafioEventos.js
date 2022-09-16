let arregloProductos = [];

function agregarProducto(){
    let repuesto = document.getElementById("repuesto").value
    let precio = document.getElementById("precio").value
    
    arregloProductos.push([repuesto,precio]);

    hacerTabla();
}


function hacerTabla(){
    let total = 0;
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    for (let i = 0; i < arregloProductos.length; i++){
        tabla += `<tr><td>${arregloProductos[i][0]}</td><td>${arregloProductos[i][1]}</td></tr>`;
        total += parseInt(arregloProductos[i][1]);
    }
    tabla += `<tr><td>---</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;
}

