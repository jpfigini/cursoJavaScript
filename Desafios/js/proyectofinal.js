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
const lista = document.querySelector("#option")

//Evento para el botón de agregar repuesto
let botonr = document.getElementById("ingresarep");
botonr.addEventListener("click",agregarRepuesto);
botonr.addEventListener("click",(e) => e.preventDefault());

//Evento para el botón guardar Presupuesto
let botonp = document.getElementById("ingresaform");
botonp.addEventListener("click",agregarPresupuesto);
botonp.addEventListener("click",(e) => e.preventDefault());

//Evento para el botón limpiar Presupuesto
let botonl = document.getElementById("limpiaform");
botonl.addEventListener("click",limpiaPresupuesto);
botonl.addEventListener("click",(e) => e.preventDefault());

function agregarRepuesto(){
    let repuestot = document.getElementById("option").value
    let preciot = document.getElementById("precio").value
    if (preciot == ''){
      Swal.fire({
        title: 'Error!',
        text: 'El precio no puede ser vacio!',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
     }
     else {
    arregloProductos.push([repuestot,preciot]);
    hacerTablaRepuesto();
     }
}

//función que limpia el form y localstorage
function limpiaPresupuesto(){
    console.log("limpia");
    localStorage.clear();
    arregloProductos = [];
    total = 0;
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    document.getElementById("repuestos").innerHTML = tabla;
}

//Carga tabla de repuestos de presupuesto con una tabla dinamica
function hacerTablaRepuesto(){
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    cantidad = arregloProductos.length;
    presupid = presupuestosArray.length;
    total = 0;
    //Operador lógico AND, operador ++
    presupid > 0 && presupid++; 
    for (let i = 0; i < arregloProductos.length; i++){
        tabla += `<tr><td>${arregloProductos[i][0]}</td><td>${arregloProductos[i][1]}</td></tr>`;
        total += parseInt(arregloProductos[i][1]);
        cliente = document.getElementById("cliente").value;
        presupTemp = new Presupuesto(presupid, cliente, cantidad, arregloProductos, total);
        presupJson = JSON.stringify(presupTemp);
        localStorage.setItem('temporal',presupJson);
        //console.log(presupJson);
    }
    tabla += `<tr><td>TOTAL</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;
    Toastify({
      text: "Repuesto agregado!",
      duration: 2000,
      position: "left",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      }).showToast();
}


//Función que guarda el presupuesto en un arreglo de presupuestos, limpia el localStorage.
function agregarPresupuesto(){
cantidad = arregloProductos.length;
presupid = presupuestosArray.length;
let tabla2 = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";

//Operador lógico AND, operador ++
presupid > 0 && presupid++;
//Operador Ternario
cantidad < 1 ? console.log("No hay nada que guardar") : localStorage.clear();
}

//función que carga la tabla de repuestos sin guardar recuperados del localStorage
function cargaTemporal(presup){
    let tabla = "<thead><tr><th>Repuesto</th><th>Precio</th></tr></thead><tbody>";
    total = 0;
    for (let i = 0; i < presup.cantidad; i++){
        tabla += `<tr><td>${presup.repuestos[i][0]}</td><td>${presup.repuestos[i][1]}</td></tr>`;
        total += parseInt(presup.repuestos[i][1]);
        arregloProductos.push([presup.repuestos[i][0],presup.repuestos[i][1]]);
    }
    tabla += `<tr><td>TOTAL</td><td>${total}</td></tr></tbody>`
    document.getElementById("repuestos").innerHTML = tabla;
    //let clienteTemp = `<input class="form-control" id="cliente" value=${presup.cliente}>`
    //document.getElementById("cliente").innerHTML = clienteTemp;
}

//fetch para llenar el combo de repuestos
fetch("./json/fetch.json")
.then ((response)=> response.json())
//.then ((json) => console.log(json));
.then ((data)=>{
    data.forEach((repuesto)=>{
        let combo = document.createElement("option");
        let html=`<option value="A">${repuesto.nombre}</option>`;
        combo.innerHTML = html;
        lista.appendChild(combo)
    })
})

// Si quedó un presupuesto pendiente de guardar lo levanto desde el localStorage
if (localStorage.getItem("temporal")){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Se encontró un presupuesto sin guardar!',
        text: "Desea pre cargar el formulario con la información resguardada?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '- Si -',
        cancelButtonText: '- No -',
        reverseButtons: true
      }).then((result) => {
        /* Dispara alerta y recupera la información del localStorage */
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Relizado!',
            'Los items del presupuesto fueron recuperados.',
            'success'
          )
          let presupCache = JSON.parse(localStorage.getItem('temporal'));
          cargaTemporal(presupCache);
        } else if (
          /* Dispara alerta y borra el localStorage */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Los items del presupuesto fueron descartados.',
            'error'
          )
          localStorage.clear();
        }
      })


}