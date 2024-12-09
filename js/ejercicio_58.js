function zodiaco (minuscula){
    if( minuscula == "enero"){
        alert("aries");
    }
    if( minuscula == "febrero"){
        alert("tauro");
    }
    if( minuscula == "marzo"){
        alert("gemeni");
    }
    if( minuscula == "abril"){
        alert("cancer");
    }
    if( minuscula == "mayo"){
        alert("leo");
    }
    if( minuscula == "junio"){
        alert("virgo");
    }
    if( minuscula == "julio"){
        alert("libra");
    }
    if( minuscula == "agosto"){
        alert("escorpio");
    }
    if( minuscula == "septiembre"){
        alert("sagitario");
    }
    if( minuscula == "octubre"){
        alert("capricornio");
    }
    if( minuscula == "noviembre"){
        alert("acuario");
    }
    if( minuscula == "diciembre"){
        alert("picis");
    }
}
let mes = prompt("ingrese el mes : ")
let minuscula = mes.toLowerCase();
console.log(zodiaco (minuscula));
