

// Objetos Constructores


function Personaje(name, lastname, edad, pelicula) {
    this.nombre = name;
    this.apellido = lastname;
    this.edad = edad;
    this.pelicula = pelicula;

    this.saludar = function (){
        console.log("Hola mi nombre es: " + this.nombre);
    }
}

const personaje3 = new Personaje('Tony', 'Stark', '42', 'Avengers');
const personaje4 = new Personaje('Bruce', 'Banner', '38', 'Avengers');


class Personaje {

constructor(name, lastname, edad, pelicula) {
    this.nombre = name;
    this.apellido = lastname;
    this.edad = edad;
    this.pelicula = pelicula;
}

sayHi() {
    console.log("Hola soy: " + this.nombre);
}

sayGoodBye() {
    console.log("Hasta luego!");
}


}

const personaje5 = new Personaje('Peter', 'Parker', 19, 'Spiderman');

personaje5.sayHi();
personaje5.sayGoodBye();