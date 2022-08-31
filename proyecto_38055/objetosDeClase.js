// Objetos de Clase

class Producto {

    constructor(nombre, precio, vendido) {
        this.nombre = nombre;
        this.stock = 0;
        this.precio = precio;
        this.vendido = vendido;
    }

    precioConIva() {
        return this.precio * 1.21;
    }

    estaVendido() {
        return this.vendido;
    }

    vender() {
        this.vendido = true;
    }

    registrarIngreso(cantidad) {
        this.stock = cantidad;
    }
}

const arroz = new Producto('Arroz', 20, false);
arroz.registrarIngreso(20);
console.log(arroz.stock);
const leche = new Producto('Arroz', 20, false);

console.log(arroz.vendido);

console.log("Bueno lo quiero comprar, cuanto con sale IVA?: $", arroz.precioConIva());

arroz.vender();

console.log(arroz.vendido);


console.log(arroz.estaVendido());

