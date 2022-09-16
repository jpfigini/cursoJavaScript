
class Repuestos {

    constructor (id,producto,precio)
    {
        this.id=id;
        this.producto=producto;
        this.precio=parseFloat(precio);
    }
 
    impuesto () 
    {
        return this.precio=this.precio * 1.21;
    }

}


let repuestos = [
    {
      id: 1,
      nombre: "Caliper",
      precio: 4500,
    },
    {
      id: 2,
      nombre: "Cubierta",
      precio: 10000
    },
    {
      id: 3,
      nombre: "Espejo",
      precio: 5000,
    },
    {
      id: 4,
      nombre: "Optica",
      precio: 23000
    },
    {
      id: 5,
      nombre: "Carburador",
      precio: 18500
    },
  
  ];
  
  const contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
  
  repuestos.forEach((repuesto) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
      
      <div class="card-body">
      <ul>
        <li><h5 class="card-title">${repuesto.nombre}</h5>
        <p class="card-text">${repuesto.precio}</p>
      </li>
      </ul>  
      </div>
        `;
    card.innerHTML = html;
    contenedor.appendChild(card);
  });

  let formprod=document.querySelector("#listaprod")
  
  let botonp = document.getElementById("ingresaprod");
  botonp.addEventListener("click", cargarprod);
  botonp.addEventListener("click",(e) => e.preventDefault())
  
  // capturar elementos
  function cargarprod() {
    let opcionprod = document.getElementById("prod").value;
    let opcionprecio = document.getElementById("precio").value;
    

    let ingresaproductos = new Repuestos(parseInt(Math.random() * 100),opcionprod,opcionprecio);
    
    
    console.log(ingresaproductos);
    mostrarProducto(ingresaproductos);
    impuestoProducto(ingresaproductos);

  
  }
  function mostrarProducto(producto) {
    let fechaCompra=new Date();
    let formprod = document.getElementById("cantidadProductos");
    formprod.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${fechaCompra.toLocaleDateString()} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} </h4>`;
  
    nuevoContenido.className = "info-prod";
    formprod.appendChild(nuevoContenido);
  }

  function impuestoProducto(producto) {
    let fechaCompra=new Date();
    let formimpuesto = document.getElementById("listaConImpProductos");
    formprod.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Fecha de Compra: ${fechaCompra.toLocaleDateString()} Nº:  ${producto.id} Producto: ${producto.producto} 
    Precio: ${producto.precio} Precio con Impuesto: ${Math.round(producto.impuesto())}</h4>`;
  
    nuevoContenido.className = "info-impuesto";
    formimpuesto.appendChild(nuevoContenido);
  }


  class Cuotas {
  
      constructor (id,plan,cuota)
      {
          this.id=id;
          this.plan=plan;
          this.cuota=cuota;
          
      }
  }
  
  
  let formplancuotas=document.querySelector("#planesdecuotas")
  
  let boton = document.getElementById("ingresarcuota");
  boton.addEventListener("click", cargarCuota);
  boton.addEventListener("click",(e) => e.preventDefault())
  
  // capturar elementos
  function cargarCuota() {
    let opcionCuota = document.getElementById("cuotas").value;
    let cuota;
  
    switch (opcionCuota) {
      case "1":
          
           parseInt(cuota=3)
           break;
      case "2":
          
          parseInt(cuota=6)
          break;
      case "3":
        
          parseInt(cuota=12)
          break;
      default:
          alert("Ud. no ha seleccionado plan de cuotas");
          parseInt(cuota=1);
          break;
      }
    let ingresacuotas = new Cuotas(parseInt(Math.random() * 100),opcionCuota,cuota);
    console.log(ingresacuotas);
    mostrarPlandecuotas(ingresacuotas);
  
  }
  
  
  function mostrarPlandecuotas(cuotas) {
   
    let formcuota = document.getElementById("plan");
    formcuota.innerHTML = "";
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h4> Plan de cuotas: ${cuotas.plan} Cantidad de cuotas:  ${cuotas.cuota} </h4>`;
  
    nuevoContenido.className = "info-cuota";
    formcuota.appendChild(nuevoContenido);
  }
  
  

  
 
  
  

  
  
  
 
 