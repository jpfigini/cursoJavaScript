class Cliente {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

// esta es una funcion que chequea si el usuario es mayor de edad
// pregunta por prompt la edad, la guarda en el localStorage
function esMayorDeEdad() {
  let edad = localStorage.getItem("edad");
  if (edad == null) {
    edad = prompt("ingrese su edad");
  }
  localStorage.setItem("edad", edad);
  if (edad < 18) {
    alert("eres menor de edad, vuelve cuando tengas 18");
    return false;
  } else {
    alert(
      "Bienvenido!!, ingrese datos en el formulario y en breve tomaremos su pedido"
    );
    return true;
  }
}

//capturo el boton y le agrego el escuchador del evento onClick y la funcion que debe disparar
let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarCliente);

// capturar elementos
function cargarCliente() {
  let nombre = document.getElementById("name").value;
  let telefono = document.getElementById("phone").value;
  let direccion = document.getElementById("adress").value;
  let cliente1 = new Cliente(nombre, telefono, direccion);
  console.log(cliente1);
  mostrarCliente(cliente1);
}
//eliminar elementos
function mostrarCliente(cliente) {
  let formulario = document.getElementById("customer");
  formulario.innerHTML = "";
  //agregar elementos
  let nuevoContenido = document.createElement("div");
  nuevoContenido.innerHTML = `Gracias  ${cliente.nombre} ! sus datos fueron registrados y en breve
  recibira su pedido en ${cliente.direccion}`;

  nuevoContenido.className = "info-cliente";
  document.body.appendChild(nuevoContenido);
}

if (!esMayorDeEdad()) {
  let formulario = document.getElementById("customer");
  formulario.parentNode.removeChild(formulario);
}
