
/*let descuento = false

if (descuento == false){
    imprimePresup = imprimePresup + "Total: $" + total;}
else{
    imprimePresup = imprimePresup + "Total: $" + total + "Total con descuento: $" + total * 0,9;
}*/



    var imprimePresup = "Presupuesto N°" + this.numero + "\n" + "Cliente: " + this.cliente + "\n" + "Repuestos: \n";
    //    var cant = this.cantidad;
      //  console.log(cant);
        for(let index=0; index < 1; index++){
            imprimePresup = imprimePresup + this.repuestos[index].descripcion + " _____ " + this.repuestos[index].precio   + "\n" ;
        }

    if (this.descuento == false){
        imprimePresup = imprimePresup + "Total: $" + this.total;}
    else{
        imprimePresup = imprimePresup + "Total: $" + this.total + "Total con descuento: $" + this.total * 0,9;
    }
        
    return imprimePresup;
}