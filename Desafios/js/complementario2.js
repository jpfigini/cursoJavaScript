/*
Desafio Complementario 2 - Figini Juan Pablo
DESAFÍO COMPLEMENTARIO N° 2:
DESAFÍO COMPLEMENTARIO EXPIRA EL MARTES 06/09/2022 23:59HS
Desafío: Incorporar Arrays

*/

let continua = "";


class Repuesto {
    constructor (descripcion,precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Presupuesto {
    constructor (numero, cliente, cantidad, repuestos,total){
        this.numero = numero;
        this.cliente = cliente;
        this.cantidad = cantidad;
        this.repuestos = repuestos;
        this.total = total;
        this.descuento = false;
    }

    aplicarDescuento () {
        this.descuento = true;
    }

    imprimePresupuesto(){
        var imprimePresup = "Presupuesto N°" + this.numero + "\n" + "Cliente: " + this.cliente + "\n" + "Repuestos: \n";
        var cant = this.cantidad;
        for(let index=0; index < this.cantidad; index++){
                imprimePresup = imprimePresup + this.repuestos[index].descripcion + " _____ " + this.repuestos[index].precio   + "\n" ;
            }
        if (this.descuento == false){
            imprimePresup = imprimePresup + "Total: $" + this.total;}
        else{
            imprimePresup = imprimePresup + "Total: $" + this.total + "\n Total con descuento: $" + this.total * 0.9;
        }
            
        alert(imprimePresup);
    }

    imprimePresupuestoEncabezado(){
        var imprimePresup = "Presupuesto N°" + this.numero + " - " + "Cliente: " + this.cliente + " - " + "Total: $" + this.total + "\n";
        return imprimePresup;
    }

    agregaRepuesto(repuesto,total){
        this.repuestos = repuesto;
        this.total = total;
    }

}

let opcion;
let presupuestosArray = [];

do {
    //opcion  = prompt("Ingrese la opción deseada: \n 1 - Nuevo Presupuesto \n 2 - Hacer descuento \n 3 - Agregar repuesto \n 4 - Imprimir Presupuesto \n 0 - Salir")
    opcion  = prompt("Ingrese la opción deseada: \n 1 - Nuevo Presupuesto \n 2 - Hacer descuento \n 4 - Imprimir Presupuesto \n 0 - Salir")
        switch (opcion) {
            case "1": 
                let repuestosArray = [];
                var total = 0;            
                
                var cliente = prompt("Ingrese nombre del Cliente:");
                var cantRep = Number(prompt("Ingrese la cantidad de repuestos:"));
                
                for(let index=0; index < cantRep; index++){
                    var descrip = prompt("Ingrese repuesto N°" + (index+1));
                    var precio = Number(prompt("Ingrese precio del repuesto N°" + (index+1)+" $:"));
                    repuestosArray.push(new Repuesto(descrip,precio));
                    total = total + precio;        
                }
                var numero = 1 + presupuestosArray.length;
                
                presupuestosArray.push(new Presupuesto(numero,cliente,cantRep,repuestosArray,total));
                break;
            case "2":
                var cantPresup = presupuestosArray.length;
                var encabezados = "";
                for(let index=0; index < cantPresup; index++){
                    encabezados = encabezados + presupuestosArray[index].imprimePresupuestoEncabezado();  
                }

                var numero = (prompt("Ingrese número de presupuesto a aplicar descuento: \n" + encabezados) - 1);
                
                presupuestosArray[numero].aplicarDescuento();
                presupuestosArray[numero].imprimePresupuesto();

                break;
                //Se comenta al no estar finalizado
            case "3": 
                let arreglonew = [];
                var cantPresup = presupuestosArray.length;
                var encabezados = "";
                for(let index=0; index < cantPresup; index++){
                    encabezados = encabezados + presupuestosArray[index].imprimePresupuestoEncabezado();  
                }

                var numero = (prompt("Ingrese número de presupuesto a agregar repuesto: \n" + encabezados) -1);
                
                var descrip = prompt("Ingrese nuevo repuesto:");
                var precio = Number(prompt("Ingrese precio del nuevo repuesto $:"));
                var total = presupuestosArray[numero].total + precio;
                arreglonew.push(new Repuesto(descrip,precio));     
                var arregloold = presupuestosArray[numero].repuestos
                arregloold = arregloold.concat(arreglonew);
                
                presupuestosArray[numero].agregaRepuesto(arregloold,total);
                presupuestosArray[numero].imprimePresupuesto();

                break;
            case "4":
                var cantPresup = presupuestosArray.length;
                console.log(cantPresup);
                var encabezados = "";
                for(let index=0; index < cantPresup; index++){
                    console.log(index);
                    console.log(cantPresup);
                    encabezados = encabezados + presupuestosArray[index].imprimePresupuestoEncabezado();  
                    console.log(encabezados);
                }

                var numero = (prompt("Ingrese número de presupuesto a imprimir: \n" + encabezados) - 1);
                presupuestosArray[numero].imprimePresupuesto();

                break;    
            case "0":
                alert("Sesión finalizada");
                break;
                default:1
                alert("Opción Incorrecta");
                break;
        }
} while ("No" != (continua = prompt("Desea continuar operando?: Si/No:")));