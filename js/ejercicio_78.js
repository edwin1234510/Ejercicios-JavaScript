//Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//    cortas menores de 5 caracteres).

function longitud(palabra){
    if(palabra.length < 5){
        alert("la palabra es corta");
    }
    else{
        alert("la palabra es larga");
    }
}
let palabra = prompt("ingrese la palabra : ");
console.log(longitud(palabra));
