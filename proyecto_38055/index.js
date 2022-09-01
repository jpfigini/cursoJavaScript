// const actualYear = 2022;
// const difference = (actualYear-birthYear)
// const condition = difference >= 21;

/**
 * Necesitamos saber si la persona puede ingresar a la disco
 * para eso debe ser mayor de 21 años.
 * @param condition
 */

// if (condition) {
    //     alert('Felicitaciones, como tienes ' + difference + ' años entraste a la disco!');
    // } else if (difference > 14) {
        //     alert('No te desanimes, ya que como tienes ' + difference + ' años puedes venir a mantinee');
        // } else {
            //     alert('Uy! como tienes ' + difference + ' años no puedes entrar');
            // }
            
            
            
                    for (let i = 0; i <= 10; i++) {
                
                        if (isNaN(inputValue)) {
                            console.log('No ingresaste un numero, no puedo continuar');
                            break;
                        }
                    
                        console.log('La vida es bella n° ' + i);
                    }
// let inputValue = Number(prompt('Adivine el número del 1 al 17, tienes 3 intentos'));
// let counter = 0;

// while(inputValue !== 7 && counter < 2) {
//     console.log('Mala suerte, intenta de nuevo.');
//     inputValue = Number(prompt('Adivine el número del 1 al 17'));
//     counter++;
// }

// if (counter < 2) {
//     console.log('Felicitaciones, adivinaste!');
// } else {
//     console.log('Te quedaste sin intentos');
// }

let inputValue;

do {
    console.log('1. Consultar Saldo \n 2. Retirar Diner \n 0. Salir');
    inputValue = prompt('Elige una operación: ');
    switch (inputValue) {
        case '0': 
            console.log('Gracias por su visita');
        break;
        case '1': 
            console.log('Su saldo es 0.00 😔');
        break;
        case '2': 
            console.log('Pero te dije que no tenes saldo!');
        break;
        default: 
            console.log('Elige una opción válida');
        break;
    }
    
} while (inputValue !== '0');

// while (false) {
//     console.log('Me ejecute una sola vez');
// }



































// const nombre = "Pablo"; // string
// const edad = Number(prompt('Para saber si debes mudarte de la casa de tus padres ingresa tu edad')); // number 
// const saldo = 0.00; // number
// const verdadero = true; // booleana
// const falso = false; // booleana

// const conAzucar = true;

// let animal = prompt('Ingresa la especie de tu mascota').toLowerCase();

// const hadTicket = false;

// if ((edad > 17 &&  hadTicket) || (edad > 17 ||  hadTicket)) {
//     console.log("Puedes ingresar");
// } else {
//     console.log("Necesitas ser mayor o tener entrada para ingresar");
// }



// if (animal == 'loro') {
//     alert('Tu mascota es un Loro 🦜');
// } else if (animal == 'perro') {
//     alert('Tu mascota es un Perro 🐕');
// } else if (animal == 'gato') {
//     alert('Tu mascota es un Gato 🐈');
// } else if (animal == 'gato') {
//     alert('Tu mascota es un Gato 🐈');
// }  else {
//     alert('No conozco la especie de tu mascota');
// }

// console.log("Fuera del bloque condicional");