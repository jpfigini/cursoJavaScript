/**
 *El tp consta de un formulario que le permite al ciudadano realizar una denuncia, actualmente permito la carga de una denuncia y de las partes vinculadas a la misma, puede haber más de una parte/persona vinculada 
 es por ello que utilizo un arreglo para guardar las partes/personas.
 */



let partesArray = [];
let denuncia; 

//Clase de partes
class Parte {
    constructor (documento,nombre,apellido,vinculo,contacto){
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.vinculo = vinculo;
        this.contacto = contacto;
    };
};

//Clase de denuncias que cuenta con un arreglo de partes y un método que permite vincular las partes cargadas a la denuncia
class Denuncia {
    constructor (fecha, provincia, localidad,situacion){
        this.fecha = fecha;
        this.provincia = provincia;
        this.localidad = localidad;
        this.situacion = situacion;
        this.partes = [];
    };

    agregaPartes(partesArray){
        this.partes = partesArray;
    };
}

let opcion = "9";
let seguir = "1";
let agregaPartes = "0";
let personaBuscar;
alert("A continuación usted cargará una denuncia");
do {
    if (opcion == "9"){ // Por defecto ingresa a cargar una denuncia
        var fecha     = prompt("Ingrese la fecha del hecho:");
        var provincia = prompt("Ingrese la provincia donde sucedió:");
        var localidad = prompt("Ingrese la localidad donde sucedió:");
        var situacion = prompt("Describa la lo ocurrido:");
        denuncia = new Denuncia(fecha, provincia, localidad, situacion);
        console.log(denuncia);
        agregaPartes = prompt("Desea ingresar Partes vinculadas a la denuncia?: \n\n1 - Si \n2 - No");
        if (agregaPartes == "1"){
            do {
                var documento = prompt("Ingrese el número de documento:");
                var nombre    = prompt("Ingrese el nombre:");
                var apellido  = prompt("Ingrese el apellido:");
                var vinculo   = prompt("Ingrese el vínculo de la persona, ejemplo Testigo, Delincuente, Denunciante, Etc:");
                var contacto  = prompt("Ingrese el contacto (Teléfono, Correo Electrónico):");
                partesArray.push(new Parte(documento, nombre, apellido, vinculo, contacto));
            } while ("0" != (seguir = prompt("¿Qué desea hacer?: \n\n1 - Agregar otra parte \n0 - Salir")));
            denuncia.agregaPartes(partesArray);
        }
    }else if (opcion == "1"){ //Opción 1 Imprime solamente las partes vinculadas a la denuncia
        console.log("Las partes cargadas son :\n");
        denuncia.partes.forEach((partes, index) => console.log("Persona "+ (index + 1) + "= Documento:" + partes.documento + " - Nombre completo: " + partes.nombre + " " + partes.apellido + " - Vínculo: " + partes.vinculo + " - Contacto: " + partes.contacto));
    }else if (opcion == "2"){ //Opción 2 Imprime la denuncia completa
        console.log("Información de la Denuncia:\n\n");
        
        console.log("Fecha: " + denuncia.fecha + "\nProvincia: " + denuncia.provincia + "\nLocalidad: " + denuncia.localidad + "\nDescripción de lo ocurrido: " + denuncia.situacion);
        console.log("\n\nLas partes vinculadas a la denuncia son :\n");
        
        //Genero el html de la denuncia
        let denunciaFecha = document.getElementById('fecha');
        let denunciaProvincia = document.getElementById('provincia');
        let denunciaLocalidad = document.getElementById('localidad');
        let denunciaSituacion= document.getElementById('situacion');
        denunciaFecha.innerText = "Fecha: " + denuncia.fecha;
        denunciaProvincia.innerText = "Provincia: " + denuncia.provincia;
        denunciaLocalidad.innerText = "Localidad: " + denuncia.localidad;
        denunciaSituacion.innerText = "Descripción de lo ocurrido: " + denuncia.situacion;
        
        denuncia.partes.forEach((partes, index) => console.log("Persona "+ (index + 1) + "= Documento:" + partes.documento + " - Nombre completo: " + partes.nombre + " " + partes.apellido + " - Vínculo: " + partes.vinculo + " - Contacto: " + partes.contacto));

        //genero el html de las partes
        const listaPartes = document.getElementById('listaPartes');

        for (par of denuncia.partes){
            console.log ('Imprimo documento Adentro del for' + par.documento);
            const item = document.createElement('li');
            item.innerHTML = '<h4>Documento: ' + par.documento + ' - Nombre completo: ' + par.nombre + ' ' + par.apellido + ' - Vínculo: ' + par.vinculo + ' - Contacto: ' + par.contacto + '</h4>'; 
            listaPartes.append(item);
        } 

    }else if (opcion == "3"){ //Opción 3 Permite buscar una parte involucrada por Documento
        personaBuscar = prompt("Por favor, ingrese el número de documento que desea buscar?");
        //Busco si existe una parte vinculada con el documento que ingresó la persona
        const resultado = denuncia.partes.findIndex(partes => partes.documento === personaBuscar);

        //Informo si se encontró o no la persona buscada
        if (resultado != -1 ){
            console.log("Hay una persona con el documento " + personaBuscar + " cargada como persona vinculada en la denuncia");
        }else if (resultado == -1){
            console.log("La persona con el documento " + personaBuscar + " no está cargada como persona vinculada en la denuncia");
        };
    };   
} while ("0" != (opcion = prompt("Desea continuar: \n1 - Listar partes (Por consola) \n2 - Imprimir denuncia completa (Por consola) \n3 - Buscar una parte involucrada por Documento \n0 - Salir e imprimir en el html")));
