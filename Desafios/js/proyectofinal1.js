/*
PRIMERA ENTREGA
Proyecto FInal 1 - Figini Juan Pablo
Estructura HMTL: Solo se pide el JS linkeado en el HTML. Nada más.
Funciones para segmentar bloques de código según la función que cumplan.
Object class. Instancia de objetos con esa clase.
Incorporar un array
Utilizar al menos 2 (DOS) FUNCIONES DE ORDEN SUPERIOR sobre ese array: find(), filter(), sort(), reduce, map, some, etc.
Interactuar con el usuario por medio de PROMPTS y ALERTS

*/

let continua = "";
let a = 0;

class Repuesto {
    constructor(descripcion, precio) {
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Presupuesto {
    constructor(numero, cliente, cantidad, repuestos, total) {
        this.numero = numero;
        this.cliente = cliente;
        this.cantidad = cantidad;
        this.repuestos = repuestos;
        this.total = total;
        this.descuento = false;
    }

    aplicarDescuento() {
        this.descuento = true;
    }

    imprimePresupuesto() {
        var imprimePresup = "Presupuesto N°" + this.numero + "\n" + "Cliente: " + this.cliente + "\n" + "Repuestos: \n";
        var cant = this.cantidad;
        for (let index = 0; index < this.cantidad; index++) {
            imprimePresup = imprimePresup + this.repuestos[index].descripcion + " _____ " + this.repuestos[index].precio + "\n";
        }
        if (this.descuento == false) {
            imprimePresup = imprimePresup + "Total: $" + this.total;
        }
        else {
            imprimePresup = imprimePresup + "Total: $" + this.total + "\n Total con descuento: $" + this.total * 0.9;
        }

        alert(imprimePresup);
    }

    imprimePresupuestoEncabezado() {
        var imprimePresup = "Presupuesto N°" + this.numero + " - " + "Cliente: " + this.cliente + " - " + "Total: $" + this.total + "\n";
        return imprimePresup;
    }

    agregaRepuesto(repuesto, total) {
        this.repuestos = repuesto;
        this.total = total;
    }


}

function sumatotales(tot,fn){
    for(item of tot){
       fn(item);
    }
}

function acumular(num){
    a += num;
}

let opcion;
let presupuestosArray = [];
let totales = [];

do {
    //opcion  = prompt("Ingrese la opción deseada: \n 1 - Nuevo Presupuesto \n 2 - Hacer descuento \n 3 - Agregar repuesto \n 4 - Imprimir Presupuesto \n 0 - Salir")
    opcion = prompt("Ingrese la opción deseada: \n 1 - Nuevo Presupuesto \n 2 - Hacer descuento \n 3 - Imprimir Suma Total de Presupuestos \n 4 - Imprimir Presupuesto \n 5 - Buscar presupuestos por cliente \n 0 - Salir")
    switch (opcion) {
        case "1":
            let repuestosArray = [];
            var total = 0;

            var cliente = prompt("Ingrese nombre del Cliente:");
            var cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));

            for (let index = 0; index < cantRep; index++) {
                var descrip = prompt("Ingrese repuesto N°" + (index + 1));
                var precio = Number(prompt("Ingrese precio del repuesto N°" + (index + 1) + " $:"));
                repuestosArray.push(new Repuesto(descrip, precio));
                total = total + precio;
                totales.push(precio); 
            }
            var numero = 1 + presupuestosArray.length;

            presupuestosArray.push(new Presupuesto(numero, cliente, cantRep, repuestosArray, total));
            break;
        case "2":
            var cantPresup = presupuestosArray.length;
            var encabezados = "";
            for (let index = 0; index < cantPresup; index++) {
                encabezados = encabezados + presupuestosArray[index].imprimePresupuestoEncabezado();
            }

            var numero = (prompt("Ingrese número de presupuesto a aplicar descuento: \n" + encabezados) - 1);

            presupuestosArray[numero].aplicarDescuento();
            presupuestosArray[numero].imprimePresupuesto();

            break;
        //Se comenta al no estar finalizado
        case "3":
            sumatotales(totales,acumular);
            alert("La suma total es: $" + a);

            break;
        case "4":
            var cantPresup = presupuestosArray.length;
            console.log(cantPresup);
            var encabezados = "";
            for (let index = 0; index < cantPresup; index++) {
                console.log(index);
                console.log(cantPresup);
                encabezados = encabezados + presupuestosArray[index].imprimePresupuestoEncabezado();
                console.log(encabezados);
            }

            var numero = (prompt("Ingrese número de presupuesto a imprimir: \n" + encabezados) - 1);
            presupuestosArray[numero].imprimePresupuesto();

            break;
        case "5":
            cliente = {};
            cliente = prompt("Ingrese nombre del Cliente que quiere buscar:");
            resultado = presupuestosArray.find((presupuesto) => presupuesto.cliente === cliente); 
            if (resultado) {
                resultado.imprimePresupuesto();
            }
            else {
                alert('No se encontró el presupuesto deseado');
            }
            break;
        case "0":
            alert("Sesión finalizada");
            break;
        default: 1
            alert("Opción Incorrecta");
            break;
    }
} while ("No" != (opcion = prompt("Desea continuar operando?: Si/No:")));