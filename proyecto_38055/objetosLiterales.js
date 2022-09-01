// const nombre = 'Sandro'; //entrada del input nombre
// // const apellido = 'De America'; //entrada del input nombre
// // const edad = '-'; //entrada del input nombre
// // const pelicula = 'Un millon'; //entrada del input nombre


// Objetos literales

const personaje = {
    nombre: "Pepe",
    apellido: "Grillo",
    edad: 42,
    pelicula: "Dumbo"
};

const personaje2 = {
    nombre: "Pepe",
    apellido: "Grillo",
    edad: 42,
    pelicula: "Dumbo"
};


console.log(personaje.nombre);

// personaje.nombre = 'Juan';
personaje.ocupacion = 'Actor';

// console.log(personaje);


let nombre = "leche";
let precio = 30;
let vendido = false;

const producto = {
    nombre,
    precio,
    vendido,
    conIva: function() {
        return this.precio * 1.21;
    }
}

console.log(producto.conIva());
