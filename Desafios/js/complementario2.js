/*
Desafio Complementario 2 - Figini Juan Pablo
DESAFÍO COMPLEMENTARIO N° 2:
DESAFÍO COMPLEMENTARIO EXPIRA EL MARTES 06/09/2022 23:59HS
Desafío: Incorporar Arrays

*/

//declaro variables goblales

let cantRep = 0;
let total = 0;
let continua = "";
let presupuesto = [];
let repuestosArray = [];
let imprimePresup = "";

class Producto {
    constructor (descripcion,precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Presupuesto {
    constructor (numero, cliente, cantidad, productos){
    this.numero = numero;
    this.cliente = cliente;
    this.cantidad = cantidad;
    this.productos = productos;
    this.total = 0;
    this.descuento = false;

    }

    aplicarDescuento () {
        this.descuento = true;
    }

    imprimePresupuesto(){
        imprimePresup = "Presupuesto N°" + this.numero + "\n" + "Cliente: " + this.cliente + "\n" + "Repuestos:" + "\n";

            for(let index=0; index < this.cantidad.length; index = index+2){
                imprimePresup = imprimePresup + this.productos[index] + "_____" + this.productos[index+1]   + "\n" ;
            }
        imprimePresup = imprimePresup + "Total: $" + total;
        alert(imprimePresup);
    }

}


//Declaro una función para iniciar un nuevo presupuesto
function iniciaPresupuesto (){
//Se piden los datos del presupuesto y se cargan en un array
presupuesto.push("Presupuesto N°" + prompt("Ingrese número de presupuesto:"));
presupuesto.push("Nombre del Cliente: " + prompt("Ingrese nombre del Cliente:"));
cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));
}

//Declaro un función para la carga de los productos del presupuesto
function cargaPresupuesto (){
//Declaro un bucle mediante la sentencia "for" para cargar los repuestos y su correspondiente precio dentro de un array
for(let index=0; index < cantRep; index++){
repuestosArray.push(prompt("Ingrese repuesto N°" + (index+1)));
let precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
repuestosArray.push(precio);
total = total + precio;
    }
}

do {

//Llamado para iniciar presupuesto
iniciaPresupuesto();

//Llamado para cargar presupuesto
cargaPresupuesto();

//LLamado a la función especifica para mostrar por pantalla los datos del presupuesto en forma ordenada.
imprimePresupuesto();

presupuesto = [];
repuestosArray = [];
total = 0;

} while ("No" != (continua = prompt("Desea cargar otro presupuesto: Si/No:")))