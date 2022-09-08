const frutas = ["pera","manzana","naranja","frutilla"];


//bdd

function imprimirFrutas(collection){

    for (item of collection){
        console.log(item);
    }

    return "Ya terminamos de listar los elementos";
}


console.log(imprimirFrutas(frutas));

